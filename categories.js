
(function (global) {
  const ICON_DIR = 'icon/categories/';

  const CATEGORY_LIST = [
    { id: 'falls',      label: 'Falls',      icon: ICON_DIR + 'falls.png',      palette: ['#010a07', '#000805'], aliases: ['fall', 'waterfall', 'waterfalls'] },
    { id: 'resorts',    label: 'Resorts',    icon: ICON_DIR + 'resorts.png',    palette: ['#C98A4B', '#20402F'], aliases: ['resort'] },
    { id: 'mountains',  label: 'Mountains',  icon: ICON_DIR + 'mountains.png',  palette: ['#4FB4D8', '#13233A'], aliases: ['mountain', 'hills', 'hill'] },
    { id: 'camps',      label: 'Camps',      icon: ICON_DIR + 'campsite.png',      palette: ['#7A9B5C', '#1E2E18'], aliases: ['camp', 'campsite', 'camping'] },
    { id: 'caves',      label: 'Caves',      icon: ICON_DIR + 'cave.png',      palette: ['#7A6142', '#1A3527'], aliases: ['cave'] },
    { id: 'historical', label: 'Historical', icon: ICON_DIR + 'historical.png', palette: ['#A6763F', '#241A10'], aliases: ['history', 'heritage'] }
  ];

  const DEFAULT_PALETTE = ['#2E8B6F', '#132A20'];
  const lookup = new Map();
  CATEGORY_LIST.forEach((c) => [c.id, c.label, ...(c.aliases || [])].forEach((k) => lookup.set(String(k).trim().toLowerCase(), c)));

  /* id, label or alias (any case) -> category object, or null */
  function get(value) {
    return value == null ? null : lookup.get(String(value).trim().toLowerCase()) || null;
  }

  /* A spot's valid category objects, de-duplicated, in the order written.
     Accepts `categories: [...]` (current) or a legacy `category: '...'`. */
  function forSpot(spot) {
    const raw = spot && (spot.categories != null ? spot.categories : spot.category);
    const list = Array.isArray(raw) ? raw : raw == null ? [] : [raw];
    const out = [];
    list.forEach((v) => {
      const c = get(v);
      if (c && !out.includes(c)) out.push(c);
    });
    return out;
  }

  const idsFor = (spot) => forSpot(spot).map((c) => c.id);
  const labelFor = (spot, sep) => forSpot(spot).map((c) => c.label).join(sep == null ? ', ' : sep);
  const palette = (value) => (get(value) || {}).palette || DEFAULT_PALETTE;

  /* Categories actually used by these spots (first-appearance order) */
  function usedBy(spots) {
    const seen = [];
    spots.forEach((s) => forSpot(s).forEach((c) => { if (!seen.includes(c)) seen.push(c); }));
    return seen;
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

  /* <img> for a category icon. `root` is '' on the home page, '../' on barangay
     pages. A missing file hides itself instead of showing a broken image. */
  function iconHTML(cat, root) {
    if (!cat || !cat.icon) return '';
    return `<img class="cat-icon" src="${(root || '') + cat.icon}" alt="" width="20" height="20" decoding="async" onerror="this.style.display='none'">`;
  }


  function tagHTML(spot, root) {
    const cats = forSpot(spot);
    const icons = cats.map((c) => iconHTML(c, root)).join('');
    return `${esc(spot.barangay || '')} · <span class="cat-inline">${icons}<span>${esc(cats.map((c) => c.label).join(', '))}</span></span>`;
  }


  function badgeHTML(spot, root) {
    const cats = forSpot(spot);
    if (!cats.length) return '';
    return `<span class="spot-cat">${cats.map((c) => iconHTML(c, root)).join('')}<span>${esc(cats.map((c) => c.label).join(' · '))}</span></span>`;
  }


  function audit(spots) {
    (spots || []).forEach((s) => {
      const raw = s.categories != null ? s.categories : s.category;
      const list = Array.isArray(raw) ? raw : raw == null ? [] : [raw];
      if (!list.length) console.warn(`[categories] "${s.name}" (${s.id}) has no category.`);
      list.forEach((v) => { if (!get(v)) console.warn(`[categories] "${s.name}" (${s.id}) has unknown category "${v}".`); });
    });
  }

  global.DRTCategories = { list: CATEGORY_LIST, get, forSpot, idsFor, labelFor, palette, usedBy, iconHTML, tagHTML, badgeHTML, audit, esc };
})(window);
