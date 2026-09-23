/*
  barangay.js
  -----------
  Drives both barangays/index.html (the directory) and every
  barangays/barangay-*.html detail page. Which mode runs is decided by what's
  on the page: a #brgyDirectoryGrid element means "directory", a
  body[data-barangay] attribute means "detail page".

  This file is intentionally self-contained (it does not load the main
  script.js) because script.js assumes home-page-only elements exist.
  The spot-card / modal / nav markup and CSS classes are still the exact
  ones from styles.css, so pages look and behave identically to the rest
  of the site.
*/

/* All asset + data.js paths on these pages are one folder below the site
   root, so every root-relative path (images, icons) needs this prefix. */
const ROOT = '../';

/* ---------- shared spot-card helpers (mirrors script.js, with the
   category palette corrected to match the real category names used in
   data.js: Falls, Resorts, Mountains, Caves, Camps) ---------- */
function placeholderSVG(category, seed) {
  const palette = {
    Falls: ['#2E8B6F', '#132A20'],
    Caves: ['#7A6142', '#1A3527'],
    Mountains: ['#4FB4D8', '#13233A'],
    Resorts: ['#C98A4B', '#20402F'],
    Camps: ['#6F8F4F', '#1A2A17']
  };
  const [c1, c2] = palette[category] || ['#2E8B6F', '#132A20'];
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bg${seed}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="400" height="260" fill="url(#bg${seed})"/>
    <polygon points="0,190 80,120 160,170 240,90 320,160 400,180 400,260 0,260" fill="${c2}" opacity="0.6"/>
  </svg>`;
}

function spotMedia(spot, seed) {
  return spot.img ? `<img src="${ROOT}${spot.img}" alt="${spot.name}" loading="lazy">` : placeholderSVG(spot.category, seed);
}

function spotSlides(spot, seed) {
  const images = spot.images && spot.images.length ? spot.images : [spot.img].filter(Boolean);
  if (!images.length) return placeholderSVG(spot.category, seed);
  const slides = images
    .map((src, i) => `<img src="${ROOT}${src}" alt="${spot.name}" class="dm-slide" data-index="${i}" style="display:${i === 0 ? 'block' : 'none'}">`)
    .join('');
  const arrows =
    images.length > 1
      ? `<button class="dm-slide-prev" aria-label="Previous photo">&#8249;</button>
         <button class="dm-slide-next" aria-label="Next photo">&#8250;</button>
         <div class="dm-slide-dots">${images.map((_, i) => `<span class="dm-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('')}</div>`
      : '';
  return `<div class="dm-slider">${slides}${arrows}</div>`;
}

function setupDmSlider() {
  const slider = document.querySelector('#dmMedia .dm-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.dm-slide');
  const dots = slider.querySelectorAll('.dm-dot');
  let current = 0;
  function show(i) {
    slides.forEach((s, idx) => (s.style.display = idx === i ? 'block' : 'none'));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    current = i;
  }
  slider.querySelector('.dm-slide-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    show((current - 1 + slides.length) % slides.length);
  });
  slider.querySelector('.dm-slide-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    show((current + 1) % slides.length);
  });
  dots.forEach((d) => d.addEventListener('click', (e) => { e.stopPropagation(); show(parseInt(d.dataset.index)); }));
}

const detailModal = document.getElementById('detailModal');

function openDetails(spot, seed) {
  document.getElementById('dmMedia').innerHTML = spotSlides(spot, seed);
  document.getElementById('dmTag').textContent = `${spot.barangay} \u00B7 ${spot.category}`;
  document.getElementById('dmTitle').textContent = spot.name;
  document.getElementById('dmDesc').textContent = spot.fullDesc;
  const meta = [
    { k: 'Location', v: spot.location, icon: `${ROOT}icon/map.png` },
    { k: 'Entrance fee', v: spot.entranceFee, icon: `${ROOT}icon/money.png` },
    { k: 'Tourguide fee', v: spot.tourguide, icon: `${ROOT}icon/photography.png` },
    { k: 'Parking fee', v: spot.parkingFee, icon: `${ROOT}icon/fee.png` },
    { k: 'Opening hours', v: spot.hours, icon: `${ROOT}icon/24-hour-clock.png` },
    { k: 'Activities', v: spot.activities ? spot.activities.join(', ') : '', icon: `${ROOT}icon/team-building.png` },
    { k: 'How to get there', v: spot.howToGetThere, icon: `${ROOT}icon/direction.png` },
    { k: 'Contact', v: spot.contact, icon: `${ROOT}icon/contact-mail.png` },
    { k: 'FaceBook', v: spot.facebook, icon: `${ROOT}icon/facebook.png` },
    { k: 'Distance', v: spot.distanceFromTownCenter, icon: `${ROOT}icon/direction.png` }
  ];
  document.getElementById('dmMeta').innerHTML = meta
    .filter((m) => m.v)
    .map((m) => {
      let value = m.v;
      if (m.k === 'FaceBook') {
        const url = value.startsWith('http') ? value : `https://${value}`;
        value = `<a href="${url}" target="_blank" rel="noopener">Visit Facebook Page \u2192</a>`;
      }
      return `<div><div class="k"><img src="${m.icon}" class="meta-icon" alt="" />${m.k}</div><div class="v">${value}</div></div>`;
    })
    .join('');
  setupDmSlider();
  document.getElementById('dmDirections').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(spot.mapQuery)}`;
  detailModal.classList.add('open');
}

document.getElementById('dmClose')?.addEventListener('click', () => detailModal.classList.remove('open'));
detailModal?.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('open');
});

/* ---------- shared nav / theme / hamburger (mirrors script.js) ---------- */
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');
hamburger?.addEventListener('click', () => navlinks.classList.toggle('open'));
navlinks?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navlinks.classList.remove('open')));
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---------- mini gallery lightbox (reuses the same lightbox markup/CSS
   as the homepage marquee, just without the auto-scrolling marquee) ---------- */
function renderGallery(containerId, photos) {
  const grid = document.getElementById(containerId);
  const lightbox = document.getElementById('drtMarqueeLightbox');
  const lightboxImg = document.getElementById('drtMarqueeLightboxImg');
  const caption = document.getElementById('drtMarqueeCaption');
  if (!grid) return;
  if (!photos.length) {
    grid.closest('section')?.remove();
    return;
  }
  grid.innerHTML = '';
  photos.slice(0, 8).forEach((photo) => {
    const item = document.createElement('div');
    item.className = 'brgy-gallery-item';
    item.innerHTML = `<img src="${ROOT}${photo.src}" alt="${photo.spot}" loading="lazy">`;
    item.addEventListener('click', () => {
      lightboxImg.src = `${ROOT}${photo.src}`;
      lightboxImg.alt = photo.spot;
      caption.innerHTML = `<span style="font-weight:600;display:block;">${photo.spot}</span><span style="font-size:0.85rem;opacity:0.75;">Brgy. ${photo.barangay}</span>`;
      lightbox.classList.add('drt-open');
    });
    grid.appendChild(item);
  });
}
document.getElementById('drtMarqueeClose')?.addEventListener('click', () => document.getElementById('drtMarqueeLightbox').classList.remove('drt-open'));
document.getElementById('drtMarqueeLightbox')?.addEventListener('click', (e) => {
  if (e.target.id === 'drtMarqueeLightbox') e.target.classList.remove('drt-open');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.getElementById('drtMarqueeLightbox')?.classList.remove('drt-open');
});

/* ---------- auto-built "Day Tour" suggestion for barangays that don't
   have curated packages yet (see barangay-data.js for how to add real ones) ---------- */
function buildAutoPackage(brgy, spots) {
  if (!spots.length) return null;
  return {
    name: `${brgy.name} Day Tour`,
    price: '\u20B1XXX per person (confirm with the Tourism Office)',
    duration: 'Full day, roughly 6\u20138 hours',
    groupSize: 'Best for groups of 4\u20136',
    destinations: spots.map((s) => s.name),
    tourGuide: 'Arranged at the barangay tourism desk',
    transportation: 'Not included \u2014 arrange your own transport to the barangay',
    meals: 'Not included',
    accommodation: 'Day tour \u2014 no accommodation included',
    inclusions: ['Entrance fees at each spot (paid individually)', 'Local guide where a spot requires one'],
    exclusions: ['Meals', 'Transportation to/from DRT', 'Personal gear'],
    contact: spots.find((s) => s.contact)?.contact || 'Municipal Tourism Office',
    auto: true
  };
}

function packageCard(pkg) {
  const destinations = pkg.destinations && pkg.destinations.length ? pkg.destinations : ['To be announced'];
  return `<div class="package-card">
    <div class="package-head">
      <h3>${pkg.name}</h3>
      ${pkg.auto ? '<span class="package-badge">Suggested itinerary</span>' : ''}
    </div>
    ${pkg.description ? `<p class="package-desc">${pkg.description}</p>` : ''}
    <div class="package-price">${pkg.price || '\u20B1XXX'}</div>
    <div class="package-meta">
      <span>${pkg.duration || 'Duration: TBA'}</span>
      <span>${pkg.groupSize || 'Group size: TBA'}</span>
    </div>
    <div class="package-cols">
      <div class="package-col">
        <h5>Destinations</h5>
        <ul>${destinations.map((d) => `<li>${d}</li>`).join('')}</ul>
      </div>
      <div class="package-col">
        <h5>Inclusions</h5>
        <ul>${(pkg.inclusions && pkg.inclusions.length ? pkg.inclusions : ['To be announced']).map((d) => `<li>${d}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="package-meta">
      <span>Tour guide: ${pkg.tourGuide || 'Contact Tourism Office'}</span>
      <span>Transport: ${pkg.transportation || 'Contact Tourism Office'}</span>
      <span>Meals: ${pkg.meals || 'Contact Tourism Office'}</span>
    </div>
    <a class="btn btn-outline" href="#brgy-contact">Book via ${pkg.contact || 'Tourism Office'}</a>
  </div>`;
}

function guideCard(guide) {
  const initials = guide.name.split(' ').map((w) => w[0]).slice(0, 2).join('');
  return `<div class="guide-card">
    <div class="guide-top">
      <div class="guide-avatar">${guide.image ? `<img src="${ROOT}${guide.image}" alt="${guide.name}">` : initials}</div>
      <div>
        <div class="guide-name">${guide.name}</div>
        <div class="guide-role">Local Tour Guide</div>
      </div>
    </div>
    ${guide.tourType ? `<div class="guide-desc">${guide.tourType}</div>` : ''}
    ${guide.specialization && guide.specialization.length ? `<div class="guide-tags">${guide.specialization.map((s) => `<span>${s}</span>`).join('')}</div>` : ''}
    ${guide.description ? `<p class="guide-desc">${guide.description}</p>` : ''}
    ${guide.contact ? `<div class="guide-contact">${guide.contact}</div>` : ''}
  </div>`;
}

/* ---------- scoped search (same #searchBox markup/CSS as the homepage,
   filtered to just this page's own content) ---------- */
function wireSearch(searchable) {
  const searchToggle = document.getElementById('searchToggle');
  const searchBox = document.getElementById('searchBox');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');
  const searchResults = document.getElementById('searchResults');
  if (!searchToggle) return;
  function openSearch() {
    searchBox.classList.add('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchInput.focus();
  }
  function closeSearch() {
    searchBox.classList.remove('open');
  }
  searchToggle.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!q) return;
    searchable
      .filter((s) => s.label.toLowerCase().includes(q) || s.sub.toLowerCase().includes(q))
      .slice(0, 8)
      .forEach((s) => {
        const el = document.createElement('div');
        el.textContent = `${s.label}: ${s.sub}`;
        el.addEventListener('click', () => {
          closeSearch();
          s.action();
        });
        searchResults.appendChild(el);
      });
  });
}

/* ================= DIRECTORY MODE (barangays/index.html) ================= */
function renderDirectory() {
  const grid = document.getElementById('brgyDirectoryGrid');
  grid.innerHTML = '';
  BARANGAYS.forEach((brgy, i) => {
    const spots = getSpotsForBarangay(brgy);
    const gallery = getGalleryForBarangay(brgy);
    const heroSpot = spots[0];
    const media = heroSpot ? spotMedia(heroSpot, i + 1) : gallery.length ? `<img src="${ROOT}${gallery[0].src}" alt="${brgy.name}" loading="lazy">` : placeholderSVG('Falls', i + 1);
    const card = document.createElement('a');
    card.className = 'brgy-directory-card';
    card.href = `barangay-${brgy.slug}.html`;
    card.innerHTML = `
      <div class="brgy-directory-media">${media}</div>
      <div class="brgy-directory-body">
        <div class="brgy-directory-count">${spots.length} Tourist Spot${spots.length === 1 ? '' : 's'}</div>
        <h3>${brgy.name}</h3>
        <p>${brgy.blurb}</p>
        <span class="btn btn-outline">Explore Barangay</span>
      </div>`;
    grid.appendChild(card);
  });

  wireSearch(
    BARANGAYS.map((b) => ({
      label: b.name,
      sub: `${getSpotsForBarangay(b).length} tourist spots`,
      action: () => (location.href = `barangay-${b.slug}.html`)
    }))
  );
}

/* ================= DETAIL MODE (barangays/barangay-*.html) ================= */
function renderBarangayPage(slug) {
  const brgy = getBarangayBySlug(slug);
  if (!brgy) return;
  const spots = getSpotsForBarangay(brgy);
  const gallery = getGalleryForBarangay(brgy);

  /* hero image + stat */
  const heroImg = document.getElementById('brgyHeroImg');
  if (heroImg) {
    const rep = spots[0] ? spots[0].img : gallery[0] ? gallery[0].src : null;
    if (rep) heroImg.src = `${ROOT}${rep}`;
    else heroImg.closest('.hero-media').remove();
  }
  const countEl = document.getElementById('brgySpotCount');
  if (countEl) countEl.textContent = `${spots.length} Tourist Spot${spots.length === 1 ? '' : 's'}`;

  /* tourist spots (filters + grid), or an empty state */
  const spotSection = document.getElementById('brgySpotsBody');
  if (spots.length) {
    const categories = ['All', ...new Set(spots.map((s) => s.category))];
    const filtersHTML =
      categories.length > 2
        ? `<div class="spot-filters" id="brgySpotFilters">${categories.map((c, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${c}</button>`).join('')}</div>`
        : '';
    spotSection.innerHTML = `${filtersHTML}<div class="spot-grid" id="brgySpotGrid"></div>`;
    const spotGrid = document.getElementById('brgySpotGrid');
    spots.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'spot-card';
      card.dataset.cat = s.category;
      card.innerHTML = `
        <div class="spot-media">${spotMedia(s, i + 1)}</div>
        <div class="spot-body">
          <div class="loc">${s.barangay}</div>
          <h3>${s.name}</h3>
          <p>${s.shortDesc}</p>
          <div class="spot-facts">
            <span><img src="${ROOT}icon/money.png" class="meta-icon" alt="" />${s.entranceFee}</span>
            <span><img src="${ROOT}icon/24-hour-clock.png" class="meta-icon" alt="" />${s.hours}</span>
          </div>
        </div>`;
      card.addEventListener('click', () => openDetails(s, i + 1));
      spotGrid.appendChild(card);
    });
    document.getElementById('brgySpotFilters')?.querySelectorAll('.filter-btn').forEach((b) => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#brgySpotFilters .filter-btn').forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        spotGrid.querySelectorAll('.spot-card').forEach((card) => {
          card.style.display = b.dataset.cat === 'All' || card.dataset.cat === b.dataset.cat ? '' : 'none';
        });
      });
    });
  } else {
    spotSection.innerHTML = `<div class="empty-state"><strong>No tourist spots listed yet</strong>Tourist spot listings for ${brgy.name} are coming soon. Check the barangay tourism desk in the meantime, or browse spots in neighboring barangays.</div>`;
  }

  /* tour packages */
  const packageGrid = document.getElementById('brgyPackageGrid');
  const packages = [...(brgy.packages || [])];
  if (packages.length === 0) {
    const auto = buildAutoPackage(brgy, spots);
    if (auto) packages.unshift(auto);
  }
  packageGrid.innerHTML = packages.length
    ? packages.map(packageCard).join('')
    : `<div class="empty-state"><strong>No tour packages yet</strong>Tour packages for ${brgy.name} haven\u2019t been published yet. Contact the Municipal Tourism Office for current options.</div>`;

  /* local tour guides */
  const guideGrid = document.getElementById('brgyGuideGrid');
  guideGrid.innerHTML = brgy.guides && brgy.guides.length
    ? brgy.guides.map(guideCard).join('')
    : `<div class="empty-state"><strong>No local tour guide information available yet</strong>Ask at the ${brgy.name} barangay tourism desk to arrange a guide for your visit.</div>`;

  /* barangay contact */
  const contactGrid = document.getElementById('brgyContactGrid');
  const contactCards = [];
  if (brgy.hall && brgy.hall.address) contactCards.push({ label: 'Barangay Hall', value: brgy.hall.address });
  if (brgy.hall && brgy.hall.contact) contactCards.push({ label: 'Contact', value: brgy.hall.contact });
  if (brgy.hall && brgy.hall.email) contactCards.push({ label: 'Email', value: brgy.hall.email });
  if (brgy.hall && brgy.hall.facebook) contactCards.push({ label: 'Facebook', value: `<a href="${brgy.hall.facebook}" target="_blank" rel="noopener">Visit Facebook Page \u2192</a>` });
  const spotContacts = [...new Map(spots.filter((s) => s.contact).map((s) => [s.contact, s])).values()];
  spotContacts.forEach((s) => {
    const isGenericDesk = /tourism desk/i.test(s.contact);
    const label = isGenericDesk ? 'Barangay Tourism Desk' : `${s.name} contact`;
    // Only attach a Facebook link when the contact is spot-specific — a
    // shared "Tourism Desk" line shouldn't borrow one spot's Facebook page.
    const value = !isGenericDesk && s.facebook ? `${s.contact} \u00B7 <a href="${s.facebook.startsWith('http') ? s.facebook : 'https://' + s.facebook}" target="_blank" rel="noopener">Facebook</a>` : s.contact;
    contactCards.push({ label, value });
  });
  contactGrid.innerHTML = contactCards.length
    ? contactCards.map((c) => `<div class="contact-card"><div class="label">${c.label}</div><div class="value">${c.value}</div></div>`).join('')
    : '';
  const fallback = document.getElementById('brgyContactFallback');
  if (fallback) fallback.style.display = contactCards.length ? 'none' : 'block';

  /* mini gallery */
  renderGallery('brgyGalleryGrid', gallery);

  /* scoped search */
  const searchable = [
    ...spots.map((s, i) => ({ label: s.name, sub: `${s.barangay} \u00B7 ${s.category}`, action: () => openDetails(s, i + 1) })),
    ...packages.map((p) => ({ label: p.name, sub: 'Tour package', action: () => (location.hash = '#brgy-packages') })),
    { label: 'Tour Packages', sub: `Packages in ${brgy.name}`, action: () => (location.hash = '#brgy-packages') },
    { label: 'Local Tour Guides', sub: `Guides in ${brgy.name}`, action: () => (location.hash = '#brgy-guides') },
    { label: 'Barangay Contact', sub: `Contact info for ${brgy.name}`, action: () => (location.hash = '#brgy-contact') }
  ];
  wireSearch(searchable);
}

/* ---------- entry point ---------- */
if (document.getElementById('brgyDirectoryGrid')) {
  renderDirectory();
} else if (document.body.dataset.barangay) {
  renderBarangayPage(document.body.dataset.barangay);
}