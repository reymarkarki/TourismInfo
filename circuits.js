/* circuits.js — Circuit Index (circuits.html) and Circuit Detail (circuit.html?id=...).
   Reads CIRCUITS / CIRCUIT_START / SPOTS from data.js. Adding a circuit there
   automatically adds a card here. Optional circuit fields shown only if present:
   duration, difficulty, bestFor. */
(function () {
  const esc = (s) => DRTCategories.esc(s == null ? "" : s);
  const spotById = (id) => SPOTS.find((s) => s.id === id) || null;
  const stopsOf = (c) => c.stops.filter((s) => s.type === "spot").map((s) => spotById(s.id)).filter(Boolean);
  const startOf = (c) => c.stops.find((s) => s.type === "start") || null;
  const brgyOf = (sp) => String(sp.barangay || "").split(",")[0].trim();
  const barangaysOf = (c) => [...new Set(stopsOf(c).map(brgyOf).filter(Boolean))];
  const heroImg = (c) => c.img || (c.images && c.images[0]) || (stopsOf(c)[0] && stopsOf(c)[0].img) || "";
  const detailURL = (c) => "circuit.html?id=" + encodeURIComponent(c.id);
  const ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const PIN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';

  const img = (src, alt) => (src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.remove()">` : "");
  const pills = (c) =>
    [`${stopsOf(c).length} destination${stopsOf(c).length === 1 ? "" : "s"}`, c.duration, c.difficulty]
      .filter(Boolean)
      .map((t) => `<span class="cx-pill">${esc(t)}</span>`)
      .join("");

  /* ---------- index ---------- */
  function renderIndex() {
    const grid = document.getElementById("cxGrid");
    if (!grid || typeof CIRCUITS === "undefined") return;
    grid.innerHTML = CIRCUITS.map((c) => {
      const st = startOf(c);
      return `<a class="cx-card" href="${detailURL(c)}">
        <div class="cx-card-media">${img(heroImg(c), c.name)}</div>
        <div class="cx-card-body">
          <p class="cx-card-loc">${esc(barangaysOf(c).join(" · "))}</p>
          <h3>${esc(c.name)}</h3>
          <p>${esc(c.shortDesc)}</p>
          <div class="cx-pills">${pills(c)}</div>
          ${st ? `<p class="cx-card-start">${PIN}<span>Starts at ${esc(st.label)}</span></p>` : ""}
          <span class="cx-card-cta">Explore circuit ${ARROW}</span>
        </div>
      </a>`;
    }).join("");
  }

  /* ---------- detail ---------- */
  function mapPoints(c) {
    const st = startOf(c);
    return [st && st.mapQuery, ...stopsOf(c).map(spotMapQuery)].filter(Boolean);
  }
  function directionsURL(c) {
    const p = mapPoints(c);
    const mid = p.slice(1, -1);
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(p[0])}&destination=${encodeURIComponent(p[p.length - 1])}` +
      (mid.length ? `&waypoints=${mid.map(encodeURIComponent).join("|")}` : "");
  }
  function embedURL(c) {
    const p = mapPoints(c);
    return `https://maps.google.com/maps?output=embed&saddr=${encodeURIComponent(p[0])}&daddr=${p.slice(1).map(encodeURIComponent).join("+to:")}`;
  }
  const list = (arr) => `<ul class="cx-list">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;

  const svg = (p) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const OV_ICON = {
    "Starting point": svg('<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    "Stops": svg('<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H12"/>'),
    "Barangays": svg('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'),
    "Duration": svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    "Difficulty": svg('<path d="M3 20l6-10 4 6 3-4 5 8z"/>'),
    "Best for": svg('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>')
  };

  function renderDetail() {
    const root = document.getElementById("cxDetail");
    const id = new URLSearchParams(location.search).get("id");
    const c = typeof CIRCUITS !== "undefined" && CIRCUITS.find((x) => x.id === id);
    if (!c) {
      root.innerHTML = `<div class="wrap cx-main cx-empty"><h1 class="cx-h2">Circuit not found</h1><p>We couldn't find that circuit.</p><a class="cx-btn cx-btn--solid" href="circuits.html">All circuits</a></div>`;
      return;
    }
    document.title = `${c.name} — Doña Remedios Trinidad`;
    const stops = stopsOf(c);
    const st = startOf(c);

    const overview = [
      ["Starting point", st && st.label],
      ["Stops", `${stops.length} destination${stops.length === 1 ? "" : "s"}`],
      ["Barangays", barangaysOf(c).join(", ")],
      ["Duration", c.duration],
      ["Difficulty", c.difficulty],
      ["Best for", c.bestFor]
    ].filter((r) => r[1]);

    const timeline =
      (st ? `<li class="cx-stop cx-stop--start"><span class="cx-node">S</span><div class="cx-stop-card"><div class="cx-stop-body"><p class="cx-stop-meta">Starting point</p><h3>${esc(st.label)}</h3></div></div></li>` : "") +
      stops.map((sp, i) => `<li class="cx-stop">
        <span class="cx-node">${i + 1}</span>
        <div class="cx-stop-card">
          <div class="cx-stop-media">${img(sp.img, sp.name)}</div>
          <div class="cx-stop-body">
            <p class="cx-stop-meta">${esc(brgyOf(sp))}${sp.distanceFromTownCenter ? " · " + esc(sp.distanceFromTownCenter) : ""}</p>
            <h3>${esc(sp.name)}</h3>
            <p>${esc(sp.shortDesc)}</p>
            <a class="cx-link" href="${esc(spotDirectionsURL(sp))}" target="_blank" rel="noopener">${PIN}<span>Directions</span></a>
          </div>
        </div></li>`).join("");

    const fees = stops.map((sp) => {
      const extra = [sp.tourguide && "Guide: " + sp.tourguide, sp.parkingFee && "Parking: " + sp.parkingFee].filter(Boolean).join(" · ");
      return `<li><div><strong>${esc(sp.name)}</strong>${extra ? `<small>${esc(extra)}</small>` : ""}</div><span>${esc(formatFee(sp))}</span></li>`;
    }).join("");

    const exp = [];
    if (c.expectations) exp.push(`<article class="cx-box"><h3>What you'll experience</h3><p>${esc(c.expectations)}</p></article>`);
    if (c.whyChoose) exp.push(`<article class="cx-box cx-box--accent"><h3>Why choose this circuit</h3><p>${esc(c.whyChoose)}</p></article>`);
    if (c.whatToBring && c.whatToBring.length) exp.push(`<article class="cx-box"><h3>What to bring</h3>${list(c.whatToBring)}</article>`);
    if (c.whereToSleep && c.whereToSleep.length) exp.push(`<article class="cx-box"><h3>Where to sleep</h3>${list(c.whereToSleep)}</article>`);

    root.innerHTML = `
    <header class="cx-hero cx-hero--detail">
      <div class="cx-hero-bg">${img(heroImg(c), c.name)}</div>
      <div class="cx-hero-in wrap">
        <a class="cx-back" href="circuits.html">&larr; All circuits</a>
        <p class="cx-kicker">Tourism circuit</p>
        <h1>${esc(c.name)}</h1>
        <p class="cx-lead">${esc(c.shortDesc)}</p>
        <div class="cx-pills cx-pills--light">${pills(c)}<span class="cx-pill">${esc(barangaysOf(c).join(" · "))}</span></div>
      </div>
    </header>
    <main class="wrap cx-main">
      <section class="cx-overview">${overview.map((r) => `<div class="cx-info"><small>${OV_ICON[r[0]] || ""}<span>${esc(r[0])}</span></small><strong>${esc(r[1])}</strong></div>`).join("")}</section>
      <section class="cx-section"><h2 class="cx-h2">The route</h2><ol class="cx-timeline">${timeline}</ol></section>
      <section class="cx-section"><h2 class="cx-h2">Map</h2>
        <div class="cx-map"><iframe src="${esc(embedURL(c))}" loading="lazy" title="Route map for ${esc(c.name)}" allowfullscreen></iframe></div>
        <a class="cx-btn cx-btn--solid" href="${esc(directionsURL(c))}" target="_blank" rel="noopener">Open route in Google Maps ${ARROW}</a>
      </section>
      ${exp.length ? `<section class="cx-section"><h2 class="cx-h2">Plan your day</h2><div class="cx-boxes">${exp.join("")}</div></section>` : ""}
      <section class="cx-section"><h2 class="cx-h2">Fees &amp; expenses</h2><ul class="cx-fees">${fees}</ul>
        <p class="cx-note">Rates are per the destination's listing — confirm current fees with the barangay tourism desk.</p></section>
      <section class="cx-cta"><h2>Ready to go?</h2><p>Questions about guides or bookings? Reach the tourism office.</p>
        <div><a class="cx-btn cx-btn--solid" href="index.html#contact">Contact tourism office</a><a class="cx-btn cx-btn--ghost" href="circuits.html">Back to circuits</a></div></section>
    </main>`;
  }

  /* ---------- nav drawer + scroll state (same hooks as script.js) ---------- */
  function initNav() {
    const nav = document.getElementById("nav"), links = document.getElementById("navlinks"), burger = document.getElementById("hamburger");
    const set = (o) => { links.classList.toggle("open", o); document.body.classList.toggle("nav-open", o); burger.setAttribute("aria-expanded", String(o)); };
    set(false);
    burger.addEventListener("click", (e) => { e.stopPropagation(); set(!links.classList.contains("open")); });
    document.addEventListener("click", (e) => { if (!links.contains(e.target)) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  }

  initNav();
  document.body.dataset.page === "detail" ? renderDetail() : renderIndex();
})();