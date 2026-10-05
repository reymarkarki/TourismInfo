
const ROOT = '../';


function placeholderSVG(category, seed) {
  const [c1, c2] = DRTCategories.palette(category);
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="bg${seed}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="400" height="260" fill="url(#bg${seed})"/>
    <polygon points="0,190 80,120 160,170 240,90 320,160 400,180 400,260 0,260" fill="${c2}" opacity="0.6"/>
  </svg>`;
}

function spotMedia(spot, seed) {
  return spot.img ? `<img src="${ROOT}${spot.img}" alt="${spot.name}" loading="lazy">` : placeholderSVG(DRTCategories.idsFor(spot)[0], seed);
}

function spotSlides(spot, seed) {
  const images = spot.images && spot.images.length ? spot.images : [spot.img].filter(Boolean);
  if (!images.length) return placeholderSVG(DRTCategories.idsFor(spot)[0], seed);
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
  document.getElementById('dmTag').innerHTML = DRTCategories.tagHTML(spot, ROOT);
  document.getElementById('dmTitle').textContent = spot.name;
  document.getElementById('dmDesc').textContent = spot.fullDesc;
  renderSpotDetails(spot, ROOT);
  setupDmSlider();
  detailModal.classList.add('open');
}

document.getElementById('dmClose')?.addEventListener('click', () => detailModal.classList.remove('open'));
detailModal?.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('open');
});

(function () {
  const foot = document.getElementById('footMail');
  const mail = typeof CONTACT_CARDS !== 'undefined' && CONTACT_CARDS.find((c) => /email/i.test(c.label));
  if (foot && mail && mail.value) foot.href = 'mailto:' + mail.value;
})();

const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');
hamburger?.addEventListener('click', () => navlinks.classList.toggle('open'));
navlinks?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navlinks.classList.remove('open')));
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40);
});


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

/* ---------- tour package component ----------
   One data-driven card per package (see `packages` in barangay-data.js).
   Everything optional falls back gracefully, so a package with only the
   original fields (name, price, duration, groupSize, destinations,
   inclusions, exclusions, contact) still renders a complete card:
     tagline       short line under the title
     photos        false to hide the tilted photo pair, or ['path', 'path'] to pick them
     img / gallery hero image + extra photos (else taken from the package's
                   destination spots in data.js, else the barangay hero)
     experience    [{ title, desc?, img? }] (else built from `destinations`,
                   borrowing each matching spot's photo + short description)
     spotIds       data.js spot ids, parallel to `destinations`, for spots whose
                   name differs from the destination label
     tourType      third detail chip (default "Guided tour" when a guide is set)
     meetingPoint  (default: `contact`)                                       */
const PKG_ICON = {
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  people: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19c.4-3.4 2.8-5.2 6-5.2s5.6 1.8 6 5.2"/><path d="M16 5.6a3 3 0 010 5.8M18.5 14.2c1.6.7 2.3 2.1 2.5 4"/>',
  guide: '<path d="M12 3.5l7 2.8v5.2c0 4.2-2.8 7.4-7 9-4.2-1.6-7-4.8-7-9V6.3z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  route: '<circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="6" r="2.2"/><path d="M8 18h6.5a3.5 3.5 0 000-7h-5a3.5 3.5 0 010-7H16"/>',
  pin: '<path d="M12 21s6.5-5.6 6.5-10.5a6.5 6.5 0 10-13 0C5.5 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.3"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
  arrow: '<path d="M4 12h15M13.5 6.5L19 12l-5.5 5.5"/>',
  note: '<path d="M7 3.5h7l4 4V20a.5.5 0 01-.5.5h-10.5a.5.5 0 01-.5-.5V4a.5.5 0 01.5-.5z"/><path d="M9 12h6M9 15.5h6"/>',
  leaf: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19c2.5-4 5.5-6.5 9-8"/>'
};
const pkgIcon = (name, size = 18) =>
  `<svg class="pkg-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PKG_ICON[name]}</svg>`;


function parsePackagePrice(pkg) {
  const raw = String(pkg.price || '').trim();
  if (pkg.auto || !raw || /X{3}/.test(raw)) return { amount: 'Rates on request', unit: '' };
  const m = raw.match(/^([^\d\s]*\s?\d[\d,.]*)\s*(?:\/|per\s+)\s*([a-z ]+)$/i);
  return m ? { amount: m[1].trim(), unit: `/ ${m[2].trim()}` } : { amount: raw, unit: '' };
}

function findSpot(key, spots) {
  if (!key) return null;
  const k = String(key).trim().toLowerCase();
  const pools = [spots || [], typeof SPOTS !== 'undefined' ? SPOTS : []];
  for (const pool of pools) {
    const hit =
      pool.find((s) => s.id === k || s.name.toLowerCase() === k) ||
      pool.find((s) => { const n = s.name.toLowerCase(); return n.includes(k) || k.includes(n); });
    if (hit) return hit;
  }
  return null;
}

function packageSpots(pkg, spots) {
  return (pkg.destinations || []).map((d, i) => findSpot((pkg.spotIds || [])[i], spots) || findSpot(d, spots));
}

function packageExperience(pkg, spots) {
  const matched = packageSpots(pkg, spots);
  const items = pkg.experience && pkg.experience.length
    ? pkg.experience.map((x) => (typeof x === 'string' ? { title: x } : x))
    : (pkg.destinations || []).map((d, i) => ({ title: d, _spot: matched[i] }));
  return items.slice(0, 6).map((it) => {
    const spot = it._spot !== undefined ? it._spot : findSpot(it.title, spots);
    return { title: it.title, desc: it.desc || (spot && spot.shortDesc) || '', img: it.img || (spot && spot.img) || '' };
  });
}


function packageImages(pkg, brgy, spots) {
  const dest = packageSpots(pkg, spots).filter(Boolean);
  const pool = [pkg.img, ...(pkg.gallery || []), ...dest.map((s) => s.img), ...dest.flatMap((s) => s.images || [])].filter(Boolean);
  const unique = [...new Set(pool)];

  const photos = pkg.photos === false ? [] : Array.isArray(pkg.photos) ? pkg.photos.slice(0, 2) : unique.slice(1, 3);
  return { hero: unique[0] || (brgy && brgy.heroImg) || '', photos };
}

function packageCard(pkg, ctx = {}) {
  const esc = DRTCategories.esc;
  const spots = ctx.spots || [];
  const price = parsePackagePrice(pkg);
  const imgs = packageImages(pkg, ctx.brgy, spots);
  const experience = packageExperience(pkg, spots);
  const inclusions = pkg.inclusions && pkg.inclusions.length ? pkg.inclusions : ['To be announced'];
  const exclusions = pkg.exclusions || [];
  const tourType = pkg.tourType || (!pkg.auto && pkg.tourGuide && !/^not/i.test(pkg.tourGuide) ? 'Guided tour' : '');
  const chips = [
    pkg.duration && ['clock', pkg.duration],
    pkg.groupSize && ['people', pkg.groupSize.replace(/^(good|best) for\s+/i, '')],
    tourType && ['guide', tourType]
  ].filter(Boolean);
  const meeting = pkg.meetingPoint || pkg.contact || 'Municipal Tourism Office';
  const src = (p) => `${ROOT}${p}`;

  return `<article class="pkg">
    <header class="pkg-hero">
      ${imgs.hero ? `<div class="pkg-hero-media"><img src="${esc(src(imgs.hero))}" alt="${esc(pkg.name)}" loading="lazy" decoding="async" onerror="this.remove()"></div>` : '<div class="pkg-hero-media"></div>'}
      <span class="pkg-badge">${pkgIcon('route', 16)}${pkg.auto ? 'Suggested itinerary' : 'Tour package'}</span>
      <div class="pkg-hero-copy">
        <h3 class="pkg-title">${esc(pkg.name)}</h3>
        ${pkg.tagline ? `<p class="pkg-tagline">${esc(pkg.tagline)}</p>` : ''}
        <p class="pkg-price"><span class="pkg-amount">${esc(price.amount)}</span>${price.unit ? `<span class="pkg-unit">${esc(price.unit)}</span>` : ''}</p>
        ${chips.length ? `<ul class="pkg-chips">${chips.map(([ic, t]) => `<li>${pkgIcon(ic, 16)}<span>${esc(t)}</span></li>`).join('')}</ul>` : ''}
      </div>
      <p class="pkg-script" aria-hidden="true">Explore<br>Discover<br>Experience</p>
    </header>

    <div class="pkg-body">
      <div class="pkg-col pkg-exp-col">
        <h4 class="pkg-label">The experience</h4>
        ${pkg.description ? `<p class="pkg-intro">${esc(pkg.description)}</p>` : ''}
        <ul class="pkg-exp">
          ${experience.map((x) => `<li>
            <span class="pkg-exp-thumb">${x.img ? `<img src="${esc(src(x.img))}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : pkgIcon('leaf', 22)}</span>
            <span class="pkg-exp-text"><strong>${esc(x.title)}</strong>${x.desc ? `<span>${esc(x.desc)}</span>` : ''}</span>
          </li>`).join('') || '<li><span class="pkg-exp-text"><strong>To be announced</strong></span></li>'}
        </ul>
      </div>

      <div class="pkg-col pkg-info-col">
        <div>
          <h4 class="pkg-label">Your package includes</h4>
          <ul class="pkg-includes">
            ${inclusions.map((t) => `<li><span class="pkg-tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>${esc(t)}</li>`).join('')}
          </ul>
        </div>
        ${exclusions.length ? `<div class="pkg-excl">
          <h4 class="pkg-label">Not included</h4>
          <ul>${exclusions.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        </div>` : ''}
        <div class="pkg-meet">
          <span class="pkg-meet-icon">${pkgIcon('pin', 20)}</span>
          <div><h4 class="pkg-label">Meeting point</h4><p>${esc(meeting)}</p></div>
        </div>
      </div>

      <aside class="pkg-col pkg-aside">
        ${imgs.photos.length ? `<div class="pkg-photos pkg-photos--${imgs.photos.length}">${imgs.photos.map((p) => `<button type="button" class="pkg-photo" aria-label="View larger photo of ${esc(pkg.name)}" data-pkg="${esc(pkg.name)}"><img src="${esc(src(p))}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.remove()"></button>`).join('')}</div>` : ''}
      </aside>
    </div>

    <div class="pkg-note">${pkgIcon('note', 18)}<p>Rates and availability are subject to confirmation with the barangay tourism desk.</p></div>
    <div class="pkg-note">${pkgIcon('note', 18)}<p>Online booking is not available on this website. This page is for information only. For questions or reservations, please contact the tourism office.</p></div>
  </article>`;
}


document.addEventListener('click', (e) => {
  const btn = e.target.closest && e.target.closest('.pkg-photo');
  const box = document.getElementById('drtMarqueeLightbox');
  if (!btn || !box) return;
  const img = btn.querySelector('img');
  document.getElementById('drtMarqueeLightboxImg').src = img.src;
  document.getElementById('drtMarqueeLightboxImg').alt = btn.dataset.pkg || '';
  document.getElementById('drtMarqueeCaption').textContent = btn.dataset.pkg || '';
  box.classList.add('drt-open');
});

/* one-time fade/slide as each package scrolls into view */
function revealPackages() {
  const cards = document.querySelectorAll('#brgyPackageGrid .pkg');
  if (!cards.length || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.remove('pkg--wait'); io.unobserve(en.target); }
  }), { threshold: 0.08 });
  cards.forEach((c) => { c.classList.add('pkg--wait'); io.observe(c); });
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


function renderDirectory() {
  const grid = document.getElementById('brgyDirectoryGrid');
  grid.innerHTML = '';
  BARANGAYS.forEach((brgy, i) => {
    const spots = getSpotsForBarangay(brgy);
    const gallery = getGalleryForBarangay(brgy);
    const heroSpot = spots[0];
    const media = brgy.heroImg
      ? `<img src="${ROOT}${brgy.heroImg}" alt="${brgy.name}" loading="lazy">`
      : heroSpot ? spotMedia(heroSpot, i + 1) : gallery.length ? `<img src="${ROOT}${gallery[0].src}" alt="${brgy.name}" loading="lazy">` : placeholderSVG('Falls', i + 1);
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


function renderBarangayPage(slug) {
  const brgy = getBarangayBySlug(slug);
  if (!brgy) return;
  const spots = getSpotsForBarangay(brgy);
  const gallery = getGalleryForBarangay(brgy);


  const heroImg = document.getElementById('brgyHeroImg');
  if (heroImg) {
    const rep = brgy.heroImg || (spots[0] ? spots[0].img : gallery[0] ? gallery[0].src : null);
    if (rep) heroImg.src = `${ROOT}${rep}`;
    else heroImg.closest('.hero-media').remove();
  }
  const countEl = document.getElementById('brgySpotCount');
  if (countEl) countEl.textContent = `${spots.length} Tourist Spot${spots.length === 1 ? '' : 's'}`;

  /* tourist spots (filters + grid), or an empty state */
  const spotSection = document.getElementById('brgySpotsBody');
  if (spots.length) {
    DRTCategories.audit(spots);
    const categories = ['All', ...DRTCategories.usedBy(spots).map((c) => c.id)];
    const filtersHTML =
      categories.length > 2
        ? `<div class="spot-filters" id="brgySpotFilters">${categories.map((c, i) => { const cat = DRTCategories.get(c); return `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${cat ? `${DRTCategories.iconHTML(cat, ROOT)}<span>${cat.label}</span>` : `<span>${c}</span>`}</button>`; }).join('')}</div>`
        : '';
    spotSection.innerHTML = `${filtersHTML}<div class="spot-grid" id="brgySpotGrid"></div>`;
    const spotGrid = document.getElementById('brgySpotGrid');
    spots.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'spot-card';
      card.dataset.cat = DRTCategories.idsFor(s).join('|');
      card.innerHTML = `
        <div class="spot-media">${spotMedia(s, i + 1)}${DRTCategories.badgeHTML(s, ROOT)}</div>
        <div class="spot-body">
          <div class="loc">${s.barangay}</div>
          <h3>${s.name}</h3>
          <p>${s.shortDesc}</p>
          <div class="spot-facts">
            <span><img src="${ROOT}icon/money.png" class="meta-icon" alt="" />${DRTCategories.esc(formatFee(s))}</span>
            ${formatHours(s) ? `<span><img src="${ROOT}icon/24-hour-clock.png" class="meta-icon" alt="" />${DRTCategories.esc(formatHours(s))}</span>` : ''}
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
          card.style.display = b.dataset.cat === 'All' || card.dataset.cat.split('|').includes(b.dataset.cat) ? '' : 'none';
        });
      });
    });
  } else {
    spotSection.innerHTML = `<div class="empty-state"><strong>No tourist spots listed yet</strong>Tourist spot listings for ${brgy.name} are coming soon. Check the barangay tourism desk in the meantime, or browse spots in neighboring barangays.</div>`;
  }


  const packageGrid = document.getElementById('brgyPackageGrid');
  const packages = [...(brgy.packages || [])];
  if (packages.length === 0) {
    const auto = buildAutoPackage(brgy, spots);
    if (auto) packages.unshift(auto);
  }
  packageGrid.innerHTML = packages.length
    ? packages.map((p) => packageCard(p, { brgy, spots })).join('')
    : `<div class="empty-state"><strong>No tour packages yet</strong>Tour packages for ${brgy.name} haven\u2019t been published yet. Contact the Municipal Tourism Office for current options.</div>`;

  revealPackages();

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
    
    const value = !isGenericDesk && s.facebook ? `${s.contact} \u00B7 <a href="${s.facebook.startsWith('http') ? s.facebook : 'https://' + s.facebook}" target="_blank" rel="noopener">Facebook</a>` : s.contact;
    contactCards.push({ label, value });
  });
  contactGrid.innerHTML = contactCards.length
    ? contactCards.map((c) => `<div class="contact-card"><div class="label">${c.label}</div><div class="value">${c.value}</div></div>`).join('')
    : '';
  const fallback = document.getElementById('brgyContactFallback');
  if (fallback) fallback.style.display = contactCards.length ? 'none' : 'block';

  
  renderGallery('brgyGalleryGrid', gallery);

 
  const searchable = [
    ...spots.map((s, i) => ({ label: s.name, sub: `${s.barangay} \u00B7 ${DRTCategories.labelFor(s)}`, action: () => openDetails(s, i + 1) })),
    ...packages.map((p) => ({ label: p.name, sub: 'Tour package', action: () => (location.hash = '#brgy-packages') })),
    { label: 'Tour Packages', sub: `Packages in ${brgy.name}`, action: () => (location.hash = '#brgy-packages') },
    { label: 'Local Tour Guides', sub: `Guides in ${brgy.name}`, action: () => (location.hash = '#brgy-guides') },
    { label: 'Barangay Contact', sub: `Contact info for ${brgy.name}`, action: () => (location.hash = '#brgy-contact') }
  ];
  wireSearch(searchable);
}


if (document.getElementById('brgyDirectoryGrid')) {
  renderDirectory();
} else if (document.body.dataset.barangay) {
  renderBarangayPage(document.body.dataset.barangay);
}
