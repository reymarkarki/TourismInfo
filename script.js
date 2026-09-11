
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
function spotSlides(spot, seed){
  const images = (spot.images && spot.images.length) ? spot.images : [spot.img].filter(Boolean);
  if (!images.length) return placeholderSVG(spot.category, seed);
  const slides = images.map((src,i) =>
    `<img src="${src}" alt="${spot.name}" class="dm-slide" data-index="${i}" style="display:${i===0?'block':'none'}">`
  ).join('');
  const arrows = images.length > 1 ? `
    <button class="dm-slide-prev" aria-label="Previous photo">&#8249;</button>
    <button class="dm-slide-next" aria-label="Next photo">&#8250;</button>
    <div class="dm-slide-dots">${images.map((_,i)=>`<span class="dm-dot${i===0?' active':''}" data-index="${i}"></span>`).join('')}</div>
  ` : '';
  return `<div class="dm-slider">${slides}${arrows}</div>`;
}

function setupDmSlider(){
  const slider = document.querySelector('#dmMedia .dm-slider');
  if(!slider) return;
  const slides = slider.querySelectorAll('.dm-slide');
  const dots = slider.querySelectorAll('.dm-dot');
  let current = 0;
  function show(i){
    slides.forEach((s,idx)=> s.style.display = idx===i ? 'block' : 'none');
    dots.forEach((d,idx)=> d.classList.toggle('active', idx===i));
    current = i;
  }
  slider.querySelector('.dm-slide-prev')?.addEventListener('click', (e)=>{
    e.stopPropagation();
    show((current - 1 + slides.length) % slides.length);
  });
  slider.querySelector('.dm-slide-next')?.addEventListener('click', (e)=>{
    e.stopPropagation();
    show((current + 1) % slides.length);
  });
  dots.forEach(d=> d.addEventListener('click', (e)=>{
    e.stopPropagation();
    show(parseInt(d.dataset.index));
  }));
}
/* ============================================================
   PLACE DETAILS MODAL
============================================================ */
const detailModal = document.getElementById('detailModal');
function openDetails(spot, seed){
  document.getElementById('dmMedia').innerHTML = spotSlides(spot, seed);
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
setupDmSlider();
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
  const grid = document.getElementById("drtMarqueeGrid");
  const lightbox = document.getElementById("drtMarqueeLightbox");
  const lightboxImg = document.getElementById("drtMarqueeLightboxImg");
  const caption = document.getElementById("drtMarqueeCaption");
  const closeBtn = document.getElementById("drtMarqueeClose");
 
  // Section not on this page — skip safely.
  if (!grid || !lightbox) return;
 
  const COLUMN_COUNT = 4;
  const columns = Array.from({ length: COLUMN_COUNT }, () => []);
 
  // Spread photos evenly across columns, cycling through if there
  // aren't enough photos to fill every column uniquely.
  GALLERY_DATA.forEach((photo, i) => {
    columns[i % COLUMN_COUNT].push(photo);
  });
 
  // Make sure every column has enough items to loop smoothly;
  // repeat the column's own items if it's too short.
  columns.forEach((col) => {
    while (col.length < 4) col.push(...col);
  });
 
  columns.forEach((colPhotos, colIndex) => {
    const col = document.createElement("div");
    col.className = "drt-marquee-col" + (colIndex % 2 === 1 ? " drt-reverse" : "");
 
    const track = document.createElement("div");
    track.className = "drt-marquee-track";
 
    // Duplicate the list once so translateY(-50%) loops seamlessly.
    const doubled = colPhotos.concat(colPhotos);
    doubled.forEach((photo) => {
      const item = document.createElement("div");
      item.className = "drt-marquee-item";
      item.innerHTML = '<img src="' + photo.src + '" alt="' + photo.spot + '" loading="lazy">';
      item.addEventListener("click", () => openMarqueeLightbox(photo));
      track.appendChild(item);
    });
 
    col.appendChild(track);
    grid.appendChild(col);
  });
 
  function openMarqueeLightbox(photo) {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.spot;
    caption.innerHTML =
      '<span style="font-weight:600;display:block;">' + photo.spot + '</span>' +
      '<span style="font-size:0.85rem;opacity:0.75;">Brgy. ' + photo.barangay + '</span>';
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
