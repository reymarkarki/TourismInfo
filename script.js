
function placeholderSVG(category, seed){
  const palette = {
    Falls:['#2E8B6F','#132A20'], Cave:['#7A6142','#1A3527'],
    Mountain:['#4FB4D8','#13233A'], Resort:['#C98A4B','#20402F']
  };
  const [c1,c2] = palette[category] || ['#2E8B6F','#132A20'];
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g${seed}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="400" height="260" fill="url(#g${seed})"/>
    <polygon points="0,190 80,120 160,170 240,90 320,160 400,180 400,260 0,260" fill="${c2}" opacity="0.6"/>
  </svg>`;
}
function spotMedia(spot, seed){
  return spot.img ? `<img src="${spot.img}" alt="${spot.name}" loading="lazy">` : placeholderSVG(spot.category, seed);
}

/* ============================================================
   PLACE DETAILS MODAL
============================================================ */
const detailModal = document.getElementById('detailModal');
function openDetails(spot, seed){
  document.getElementById('dmMedia').innerHTML = spotMedia(spot, seed);
  document.getElementById('dmTag').textContent = `${spot.barangay} · ${spot.category}`;
  document.getElementById('dmTitle').textContent = spot.name;
  document.getElementById('dmDesc').textContent = spot.fullDesc;
  const meta = [
    { k: '📍 Location', v: spot.location },
    { k: '💰 Entrance fee', v: spot.entranceFee },
    { k: ' Tourguide fee', v: spot.tourguide },
    { k: '🚗 Parking fee', v: spot.parkingFee },
    { k: '🕐 Opening hours', v: spot.hours },
    { k: 'Activities', v: spot.activities.join(', ') },
    { k: '🚗 How to get there', v: spot.howToGetThere },
    { k: '📞 Contact', v: spot.contact },
    { k: 'FaceBook', v: spot.facebook },
    { k: 'Distance', v: spot.distanceFromTownCenter }
  ];
  document.getElementById('dmMeta').innerHTML = meta.filter(m=>m.v).map(m=>{
  let value = m.v;
  if (m.k === 'FaceBook') {
    const url = value.startsWith('http') ? value : `https://${value}`;
    value = `<a href="${url}" target="_blank" rel="noopener">Visit Facebook Page →</a>`;
  }
  return `<div><div class="k">${m.k}</div><div class="v">${value}</div></div>`;
}).join('');
  document.getElementById('dmDirections').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(spot.mapQuery)}`;
  detailModal.classList.add('open');
}
document.getElementById('dmClose').addEventListener('click', ()=>detailModal.classList.remove('open'));
detailModal.addEventListener('click', e=>{ if(e.target===detailModal) detailModal.classList.remove('open'); });

/* ============================================================
   HOME — featured spots + quick nav
============================================================ */
const featuredGrid = document.getElementById('featuredGrid');
SPOTS.slice(0,3).forEach((s,i)=>{
  const el = document.createElement('div'); el.className = 'featured-card';
  el.innerHTML = `<div class="fc-media">${spotMedia(s,i+1)}</div>
    <div class="fc-body"><h4>${s.name}</h4><div class="loc">${s.barangay}</div></div>`;
  el.addEventListener('click', ()=>openDetails(s,i+1));
  featuredGrid.appendChild(el);
});

const quickNav = document.getElementById('quickNav');
[
  {label:'All tourist spots', href:'#spots'},
  {label:'Map', href:'#map'},
  {label:'How to get there', href:'#getting-there'},
  {label:'Fees & information', href:'#fees'},
  {label:'Contact', href:'#contact'}
].forEach(q=>{
  const a = document.createElement('a'); a.href = q.href; a.textContent = q.label;
  quickNav.appendChild(a);
});

/* ============================================================
   TOURIST SPOTS — filterable grid
============================================================ */
const categories = ['All', ...new Set(SPOTS.map(s=>s.category))];
const spotFilters = document.getElementById('spotFilters');
categories.forEach((c,i)=>{
  const b = document.createElement('button');
  b.className = 'filter-btn' + (i===0 ? ' active' : '');
  b.textContent = c; b.dataset.cat = c;
  b.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('.spot-card').forEach(card=>{
      card.style.display = (c==='All' || card.dataset.cat===c) ? '' : 'none';
    });
  });
  spotFilters.appendChild(b);
});

const spotGrid = document.getElementById('spotGrid');
SPOTS.forEach((s,i)=>{
  const card = document.createElement('div'); card.className = 'spot-card'; card.dataset.cat = s.category;
  card.innerHTML = `
    <div class="spot-media">${spotMedia(s,i+1)}</div>
    <div class="spot-body">
      <div class="loc">${s.barangay}</div>
      <h3>${s.name}</h3>
      <p>${s.shortDesc}</p>
      <div class="spot-facts">
        <span>💰 ${s.entranceFee}</span>
        <span>🕐 ${s.hours}</span>
      </div>
    </div>`;
  card.addEventListener('click', ()=>openDetails(s,i+1));
  spotGrid.appendChild(card);
});

/* ============================================================
   MAP — click a spot to recenter the embed
============================================================ */
const mapEmbed = document.getElementById('mapEmbed');
const mapList = document.getElementById('mapList');
SPOTS.forEach((s,i)=>{
  const el = document.createElement('div'); el.className = 'map-item';
  el.innerHTML = `<h4>${s.name}</h4><p>${s.barangay} · ${s.distanceFromTownCenter}</p>`;
  el.addEventListener('click', ()=>{
    document.querySelectorAll('.map-item').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    mapEmbed.src = `https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&output=embed`;
  });
  mapList.appendChild(el);
});

/* ============================================================
   HOW TO GET THERE
============================================================ */
const routeSteps = document.getElementById('routeSteps');
ROUTE_STEPS.forEach((s,i)=>{
  const el = document.createElement('div'); el.className = 'route-step';
  el.innerHTML = `<div class="route-num">${i+1}</div><div><h4>${s.t}</h4><p>${s.d}</p></div>`;
  routeSteps.appendChild(el);
});

/* ============================================================
   FEES & INFORMATION
============================================================ */
const infoGrid = document.getElementById('infoGrid');
INFO_CARDS.forEach(c=>{
  const el = document.createElement('div'); el.className = 'info-card';
  el.innerHTML = `<h4>${c.t}</h4><p>${c.d}</p>`;
  infoGrid.appendChild(el);
});

const rulesList = document.getElementById('rulesList');
RULES.forEach(r=>{
  const li = document.createElement('li'); li.textContent = r;
  rulesList.appendChild(li);
});

/* ============================================================
   CONTACT
============================================================ */
const contactGrid = document.getElementById('contactGrid');
CONTACT_CARDS.forEach(c=>{
  const el = document.createElement('div'); el.className = 'contact-card';
  el.innerHTML = `<div class="label">${c.label}</div><div class="value">${c.value}</div>`;
  contactGrid.appendChild(el);
});
/* ============================================================
   SEARCH
============================================================ */
const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const searchResults = document.getElementById('searchResults');

const SEARCHABLE = [
  ...SPOTS.map((s,i)=>({label:s.name, sub:`${s.barangay} · ${s.category}`, action:()=>openDetails(s,i+1)})),
  {label:'How to get there', sub:'Travel guide', action:()=>location.hash='#getting-there'},
  {label:'Fees & information', sub:'Entrance, parking & guide fees', action:()=>location.hash='#fees'},
  {label:'Map', sub:'Find each spot', action:()=>location.hash='#map'},
  {label:'Contact', sub:'Tourism office', action:()=>location.hash='#contact'}
];

function openSearch(){ searchBox.classList.add('open'); searchInput.value=''; searchResults.innerHTML=''; searchInput.focus(); }
function closeSearch(){ searchBox.classList.remove('open'); }
searchToggle.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeSearch(); });

searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = '';
  if(!q) return;
  SEARCHABLE.filter(s=>s.label.toLowerCase().includes(q) || s.sub.toLowerCase().includes(q)).slice(0,8).forEach(s=>{
    const el = document.createElement('div');
    el.textContent = `${s.label} — ${s.sub}`;
    el.addEventListener('click', ()=>{ closeSearch(); s.action(); });
    searchResults.appendChild(el);
  });
});

/* ============================================================
   MOBILE NAV
============================================================ */
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');
hamburger.addEventListener('click', ()=>navlinks.classList.toggle('open'));
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>navlinks.classList.remove('open')));

/* Nav becomes solid on scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{ nav.classList.toggle('scrolled', window.scrollY > 40); });

/* Theme toggle */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  themeToggle.classList.toggle('active');
});
(function () {
  const stage = document.getElementById("drtOrbitStage");
  const ring = document.getElementById("drtOrbitRing");
  const lightbox = document.getElementById("drtOrbitLightbox");
  const lightboxImg = document.getElementById("drtOrbitLightboxImg");
  const caption = document.getElementById("drtOrbitCaption");
  const closeBtn = document.getElementById("drtOrbitClose");
 
  // Section not on this page — skip safely.
  if (!stage || !ring || !lightbox) return;
 
  // Hand-tuned scatter pattern (angle around circle, how far out,
  // card size, and a slight tilt) — cycles if you have more photos.
  const SLOTS = [
    { angle: -15, radiusFactor: 0.60, size: 110, tilt: -8 },
    { angle: 35,  radiusFactor: 0.55, size: 90,  tilt: 10 },
    { angle: 75,  radiusFactor: 0.85, size: 120, tilt: -14 },
    { angle: 110, radiusFactor: 0.75, size: 85,  tilt: 6 },
    { angle: 150, radiusFactor: 0.90, size: 100, tilt: -10 },
    { angle: 190, radiusFactor: 0.62, size: 90,  tilt: 12 },
    { angle: 225, radiusFactor: 0.88, size: 125, tilt: -6 },
    { angle: 255, radiusFactor: 0.68, size: 80,  tilt: 15 },
    { angle: 290, radiusFactor: 0.82, size: 105, tilt: -12 },
    { angle: 320, radiusFactor: 0.58, size: 95,  tilt: 8 }
  ];
 
  const items = GALLERY_DATA.map((photo, i) => {
    const lap = Math.floor(i / SLOTS.length);
    const slot = SLOTS[i % SLOTS.length];
    return {
      photo,
      angle: slot.angle + lap * 18,
      radiusFactor: Math.max(0.45, slot.radiusFactor - lap * 0.08),
      size: slot.size,
      tilt: slot.tilt
    };
  });
 
  // Build DOM
  items.forEach((it, i) => {
    const item = document.createElement("div");
    item.className = "drt-orbit-item";
    item.dataset.angle = it.angle;
    item.dataset.radiusFactor = it.radiusFactor;
 
    const counter = document.createElement("div");
    counter.className = "drt-orbit-counter";
 
    const card = document.createElement("div");
    card.className = "drt-orbit-card";
    card.style.setProperty("--drt-size", it.size + "px");
    card.style.setProperty("--drt-tilt", it.tilt + "deg");
    card.innerHTML = '<img src="' + it.photo.src + '" alt="' + it.photo.spot + '" loading="lazy">';
    card.addEventListener("click", () => openOrbitLightbox(i));
 
    counter.appendChild(card);
    item.appendChild(counter);
    ring.appendChild(item);
  });
 
  function layoutOrbit() {
    const size = stage.offsetWidth;
    const baseRadius = size / 2;
    ring.querySelectorAll(".drt-orbit-item").forEach((item) => {
      const angle = parseFloat(item.dataset.angle);
      const radius = baseRadius * parseFloat(item.dataset.radiusFactor);
      item.style.transform =
        "translate(-50%, -50%) rotate(" + angle + "deg) translate(" + radius + "px) rotate(" + (-angle) + "deg)";
    });
  }
 
  window.addEventListener("resize", layoutOrbit);
  layoutOrbit();
 
  function openOrbitLightbox(index) {
    const it = items[index];
    lightboxImg.src = it.photo.src;
    lightboxImg.alt = it.photo.spot;
    caption.innerHTML =
      '<span style="font-weight:600;display:block;">' + it.photo.spot + '</span>' +
      '<span style="font-size:0.85rem;opacity:0.75;">Brgy. ' + it.photo.barangay + '</span>';
    lightbox.classList.add("drt-open");
  }
 
  closeBtn.addEventListener("click", () => lightbox.classList.remove("drt-open"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("drt-open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("drt-open");
  });
})();
