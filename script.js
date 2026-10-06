/* DRT Tourism: home page behaviour.
   Needs (loaded before this file): categories.js, data.js, spot-details.js */

/* ---------- shared helpers ---------- */

const escHTML = DRTCategories.esc;

function makeClickable(el, handler) {
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.addEventListener("click", handler);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler(e);
    }
  });
}

/* One <div class="className"> per item, appended to `host`; returns the elements.
   Pass `onClick(item, index, element)` to make each card clickable. A missing host is skipped. */
function renderCards(host, items, className, html, onClick) {
  if (!host) return [];
  return items.map((item, i) => {
    const el = document.createElement("div");
    el.className = className;
    el.innerHTML = html(item, i);
    if (onClick) makeClickable(el, () => onClick(item, i, el));
    host.appendChild(el);
    return el;
  });
}

/* The "See More" / "Show Less" button and its wrapper */
function createMoreControl() {
  const wrap = document.createElement("div");
  wrap.className = "spot-more-wrap";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "spot-more-btn";
  wrap.appendChild(btn);
  return { wrap, btn };
}

/* "Camachile, So. Arm Strong" -> "Camachile" */
const primaryBarangay = (spot) => spot.barangay.split(",")[0].trim();

function brgySlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function getSpotById(id) {
  return SPOTS.find((s) => s.id === id) || null;
}

/* ---------- spot media ---------- */

let placeholderCount = 0; // keeps each gradient id unique on the page

function placeholderSVG(category) {
  const [c1, c2] = DRTCategories.palette(category);
  const id = `ph-grad-${++placeholderCount}`;
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="400" height="260" fill="url(#${id})"/>
    <polygon points="0,190 80,120 160,170 240,90 320,160 400,180 400,260 0,260" fill="${c2}" opacity="0.6"/>
  </svg>`;
}

function spotMedia(spot) {
  return spot.img
    ? `<img src="${escHTML(spot.img)}" alt="${escHTML(spot.name)}" loading="lazy">`
    : placeholderSVG(DRTCategories.idsFor(spot)[0]);
}

function spotSlides(spot) {
  const images = spot.images && spot.images.length ? spot.images : [spot.img].filter(Boolean);
  if (!images.length) return placeholderSVG(DRTCategories.idsFor(spot)[0]);
  const slides = images
    .map(
      (src, i) =>
        `<img src="${escHTML(src)}" alt="${escHTML(spot.name)}" class="dm-slide" data-index="${i}" style="display:${i === 0 ? "block" : "none"}">`
    )
    .join("");
  const arrows =
    images.length > 1
      ? `
    <button class="dm-slide-prev" aria-label="Previous photo">&#8249;</button>
    <button class="dm-slide-next" aria-label="Next photo">&#8250;</button>
    <div class="dm-slide-dots">${images.map((_, i) => `<span class="dm-dot${i === 0 ? " active" : ""}" data-index="${i}"></span>`).join("")}</div>
  `
      : "";
  return `<div class="dm-slider">${slides}${arrows}</div>`;
}

function setupDmSlider() {
  const slider = document.querySelector("#dmMedia .dm-slider");
  if (!slider) return;
  const slides = slider.querySelectorAll(".dm-slide");
  const dots = slider.querySelectorAll(".dm-dot");
  let current = 0;

  function show(i) {
    slides.forEach((s, idx) => (s.style.display = idx === i ? "block" : "none"));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    current = i;
  }
  slider.querySelector(".dm-slide-prev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    show((current - 1 + slides.length) % slides.length);
  });
  slider.querySelector(".dm-slide-next")?.addEventListener("click", (e) => {
    e.stopPropagation();
    show((current + 1) % slides.length);
  });
  dots.forEach((d) =>
    d.addEventListener("click", (e) => {
      e.stopPropagation();
      show(Number(d.dataset.index));
    })
  );
}

/* ---------- modals ---------- */

/* Close button + click on the dimmed backdrop. (Escape is handled once, near the nav code.) */
function wireModalClose(modal, closeBtn) {
  if (!modal) return;
  const close = () => modal.classList.remove("open");
  closeBtn?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
}

const detailModal = document.getElementById("detailModal");
const circuitModal = document.getElementById("circuitModal");

function openDetails(spot) {
  document.getElementById("dmMedia").innerHTML = spotSlides(spot);
  document.getElementById("dmTag").innerHTML = DRTCategories.tagHTML(spot, "");
  document.getElementById("dmTitle").textContent = spot.name;
  document.getElementById("dmDesc").textContent = spot.fullDesc;
  renderSpotDetails(spot, "");
  setupDmSlider();
  detailModal.classList.add("open");
  document.getElementById("dmClose").focus();
}

wireModalClose(detailModal, document.getElementById("dmClose"));
wireModalClose(circuitModal, document.getElementById("circClose"));

/* ---------- landing page: featured spots ---------- */

renderCards(
  document.getElementById("featuredGrid"),
  SPOTS.slice(0, 3),
  "featured-card",
  (s) => `<div class="fc-media">${spotMedia(s)}</div>
    <div class="fc-body"><h4>${escHTML(s.name)}</h4><div class="loc">${escHTML(s.barangay)}</div></div>`,
  openDetails
);

/* ---------- spot filters + grid ---------- */

DRTCategories.audit(SPOTS);
const categories = ["All", ...DRTCategories.usedBy(SPOTS).map((c) => c.id)];
const spotFilters = document.getElementById("spotFilters");
const SPOTS_PER_PAGE = 6;
let activeSpotCategory = "All";
let spotsExpanded = false;

categories.forEach((c, i) => {
  const b = document.createElement("button");
  b.className = "filter-btn" + (i === 0 ? " active" : "");
  const cat = DRTCategories.get(c);
  b.innerHTML = cat ? `${DRTCategories.iconHTML(cat, "")}<span>${cat.label}</span>` : `<span>${escHTML(c)}</span>`;
  b.dataset.cat = c;
  b.addEventListener("click", () => {
    spotFilters.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    activeSpotCategory = c;
    spotsExpanded = false;
    updateSpotGrid();
  });
  spotFilters.appendChild(b);
});

const spotGrid = document.getElementById("spotGrid");
renderCards(
  spotGrid,
  SPOTS,
  "spot-card",
  (s) => {
    const hours = formatHours(s);
    return `
    <div class="spot-media">${spotMedia(s)}${DRTCategories.badgeHTML(s, "")}</div>
    <div class="spot-body">
      <div class="loc">${escHTML(s.barangay)}</div>
      <h3>${escHTML(s.name)}</h3>
      <p>${escHTML(s.shortDesc)}</p>
      <div class="spot-facts">
        <span><img src="icon/money.png" class="meta-icon" alt="" />${escHTML(formatFee(s))}</span>
        ${hours ? `<span><img src="icon/24-hour-clock.png" class="meta-icon" alt="" />${escHTML(hours)}</span>` : ""}
      </div>
    </div>`;
  },
  openDetails
).forEach((card, i) => {
  card.dataset.cat = DRTCategories.idsFor(SPOTS[i]).join("|");
  card.dataset.brgy = primaryBarangay(SPOTS[i]);
});

const spotMore = createMoreControl();
spotGrid.after(spotMore.wrap);

function updateSpotGrid(animateFrom = -1) {
  const cards = [...spotGrid.querySelectorAll(".spot-card")];
  const matching = cards.filter(
    (card) => activeSpotCategory === "All" || card.dataset.cat.split("|").includes(activeSpotCategory)
  );
  const limit = spotsExpanded ? matching.length : SPOTS_PER_PAGE;

  cards.forEach((card) => {
    const idx = matching.indexOf(card);
    const visible = idx !== -1 && idx < limit;
    card.style.display = visible ? "" : "none";
    card.classList.remove("spot-reveal");
    if (visible && animateFrom >= 0 && idx >= animateFrom) {
      card.style.setProperty("--reveal-delay", `${(idx - animateFrom) * 60}ms`);
      void card.offsetWidth; // restart the animation
      card.classList.add("spot-reveal");
    }
  });

  spotMore.wrap.style.display = matching.length > SPOTS_PER_PAGE ? "" : "none";
  spotMore.btn.textContent = spotsExpanded ? "Show Less" : "See More Spots";
  spotMore.btn.setAttribute("aria-expanded", String(spotsExpanded));
}

spotMore.btn.addEventListener("click", () => {
  spotsExpanded = !spotsExpanded;
  updateSpotGrid(spotsExpanded ? SPOTS_PER_PAGE : -1);
  if (!spotsExpanded) {
    spotFilters.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

updateSpotGrid();

/* ---------- barangay cards ---------- */

const brgyGrid = document.getElementById("brgyGrid");
if (brgyGrid) {
  const brgyGroups = {};
  SPOTS.forEach((s) => {
    const brgy = primaryBarangay(s);
    if (!brgyGroups[brgy]) brgyGroups[brgy] = { count: 0, img: s.img };
    brgyGroups[brgy].count += 1;
  });

  // BARANGAYS / barangayFieldMatches come from the barangay scripts; the cards still work without them.
  const canMatchRecords = typeof BARANGAYS !== "undefined" && typeof barangayFieldMatches === "function";

  Object.keys(brgyGroups)
    .sort()
    .forEach((brgy) => {
      const g = brgyGroups[brgy];
      const brgyRecord = canMatchRecords ? BARANGAYS.find((b) => barangayFieldMatches(brgy, b)) : null;
      const img = (brgyRecord && brgyRecord.heroImg) || g.img;
      const el = document.createElement("a");
      el.className = "brgy-card";
      el.href = `barangay/barangay-${brgySlug(brgy)}.html`;
      el.innerHTML = `
        ${img ? `<img src="${escHTML(img)}" alt="${escHTML(brgy)}" loading="lazy">` : ""}
        <div class="brgy-card-body">
          <div class="brgy-count">${g.count} spot${g.count > 1 ? "s" : ""}</div>
          <h4>${escHTML(brgy)}</h4>
        </div>`;
      brgyGrid.appendChild(el);
    });
}

/* ---------- circuits ---------- */

const circuitURL = (circuit) => "circuit.html?id=" + encodeURIComponent(circuit.id);

function circuitStops(circuit) {
  return circuit.stops
    .filter((s) => s.type === "spot")
    .map((s) => getSpotById(s.id))
    .filter(Boolean);
}

function circuitBarangays(circuit) {
  return [...new Set(circuitStops(circuit).map(primaryBarangay))];
}

function circuitMedia(circuit) {
  const src = circuit.img || (circuit.images && circuit.images[0]);
  return src
    ? `<img src="${escHTML(src)}" alt="${escHTML(circuit.name)}" loading="lazy">`
    : placeholderSVG("falls");
}

function openCircuit(circuit) {
  const stops = circuitStops(circuit);

  document.getElementById("circMedia").innerHTML = circuitMedia(circuit);
  document.getElementById("circTag").textContent = "Tourism circuit";
  document.getElementById("circTitle").textContent = circuit.name;
  document.getElementById("circDesc").textContent = circuit.shortDesc || "";

  const start = circuit.stops[0];
  document.getElementById("circRoute").innerHTML = [
    `<div class="circ-step"><span class="circ-num">S</span><span class="circ-label">${escHTML(start.label)}</span></div>`,
    ...stops.map(
      (sp, i) =>
        `<span class="circ-arrow">&rarr;</span><div class="circ-step"><span class="circ-num">${i + 1}</span><span class="circ-label">${escHTML(sp.name)}</span></div>`
    )
  ].join("");

  const circStops = document.getElementById("circStops");
  circStops.innerHTML = ""; // replace the previous circuit's stops
  const stopCards = renderCards(
    circStops,
    stops,
    "circ-stop-card",
    (sp) => `
        <div class="circ-stop-media">${spotMedia(sp)}</div>
        <div class="circ-stop-body"><h4>${escHTML(sp.name)}</h4><p>${escHTML(sp.distanceFromTownCenter || sp.barangay)}</p></div>`,
    (sp) => {
      circuitModal.classList.remove("open");
      openDetails(sp);
    }
  );
  stopCards.forEach((card, i) => (card.dataset.idx = i));

  const list = (title, items) =>
    items && items.length ? `<h5>${title}</h5><ul>${items.map((x) => `<li>${escHTML(x)}</li>`).join("")}</ul>` : "";
  document.getElementById("circInfo").innerHTML = `
    <div class="circ-info-card">
      <h4>What to expect</h4>
      <p>${escHTML(circuit.expectations || "")}</p>
      ${list("What to bring", circuit.whatToBring)}
      ${list("Where to sleep", circuit.whereToSleep)}
    </div>
    <div class="circ-info-card circ-info-why">
      <h4>Why choose this circuit</h4>
      <p>${escHTML(circuit.whyChoose || "")}</p>
    </div>`;

  const points = [circuit.stops[0].mapQuery, ...stops.map(spotMapQuery)].filter(Boolean);
  const origin = points[0];
  const destination = points[points.length - 1];
  const waypoints = points.slice(1, -1);
  document.getElementById("circDirections").href =
    `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}` +
    (waypoints.length ? `&waypoints=${waypoints.map((w) => encodeURIComponent(w)).join("|")}` : "");

  circuitModal.classList.add("open");
  document.getElementById("circClose").focus();
}

renderCards(
  document.getElementById("circuitGrid"),
  CIRCUITS,
  "circuit-card",
  (c) => {
    const stopCount = c.stops.filter((s) => s.type === "spot").length;
    return `
      <div class="circuit-media">${circuitMedia(c)}</div>
      <div class="circuit-body">
        <div class="loc">${escHTML(circuitBarangays(c).join(" · "))}</div>
        <h3>${escHTML(c.name)}</h3>
        <p>${escHTML(c.shortDesc || "")}</p>
        <span class="circuit-count">${stopCount} stop${stopCount === 1 ? "" : "s"}</span>
      </div>`;
  },
  (c) => {
    location.href = circuitURL(c);
  }
);

/* ---------- map ---------- */

const mapEmbed = document.getElementById("mapEmbed");
const mapList = document.getElementById("mapList");
renderCards(
  mapList,
  SPOTS,
  "map-item",
  (s) => `<h4>${escHTML(s.name)}</h4><p>${escHTML([s.barangay, formatDistance(s)].filter(Boolean).join(" · "))}</p>`,
  (s, i, el) => {
    mapList.querySelectorAll(".map-item").forEach((x) => x.classList.remove("active"));
    el.classList.add("active");
    mapEmbed.src = `https://www.google.com/maps?q=${encodeURIComponent(spotMapQuery(s))}&output=embed`;
  }
);

/* "See More" / "Show Less" for the map list (same pattern as the spot grid).
   The list is wrapped so the button sits under it without becoming a third
   column of the map grid on desktop. */
const MAP_ITEMS_PER_PAGE = 6;
let mapExpanded = false;
const mapSide = document.createElement("div");
mapSide.className = "map-side";
mapList.before(mapSide);
mapSide.appendChild(mapList);

const mapMore = createMoreControl();
mapSide.appendChild(mapMore.wrap);

function updateMapList() {
  const items = [...mapList.querySelectorAll(".map-item")];
  items.forEach((item, i) => {
    item.style.display = mapExpanded || i < MAP_ITEMS_PER_PAGE ? "" : "none";
  });
  mapMore.wrap.style.display = items.length > MAP_ITEMS_PER_PAGE ? "" : "none";
  mapMore.btn.textContent = mapExpanded ? "Show Less" : "See More";
  mapMore.btn.setAttribute("aria-expanded", String(mapExpanded));
}

mapMore.btn.addEventListener("click", () => {
  mapExpanded = !mapExpanded;
  updateMapList();
  if (!mapExpanded) {
    mapList.scrollTop = 0;
    mapList.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

updateMapList();

/* ---------- how to get there / fees / rules / contact ---------- */

renderCards(
  document.getElementById("routeSteps"),
  ROUTE_STEPS,
  "route-step",
  (s, i) => `<div class="route-num">${i + 1}</div><div><h4>${escHTML(s.t)}</h4><p>${escHTML(s.d)}</p></div>`
);

renderCards(
  document.getElementById("infoGrid"),
  INFO_CARDS,
  "info-card",
  (c) => `<h4>${escHTML(c.t)}</h4><p>${escHTML(c.d)}</p>`
);

const rulesList = document.getElementById("rulesList");
if (rulesList) {
  RULES.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    rulesList.appendChild(li);
  });
}

renderCards(
  document.getElementById("contactGrid"),
  CONTACT_CARDS,
  "contact-card",
  (c) => `<div class="label">${escHTML(c.label)}</div><div class="value">${escHTML(c.value)}</div>`
);

/* ---------- search ---------- */

const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
const searchResults = document.getElementById("searchResults");

const goTo = (hash) => () => {
  location.hash = hash;
};

const SEARCHABLE = [
  ...SPOTS.map((s) => ({
    label: s.name,
    sub: `${s.barangay} · ${DRTCategories.labelFor(s)}`,
    action: () => openDetails(s)
  })),
  ...CIRCUITS.map((c) => ({
    label: c.name,
    sub: "Tourism circuit",
    action: () => {
      location.href = circuitURL(c);
    }
  })),
  { label: "How to get there", sub: "Travel guide", action: goTo("#getting-there") },
  { label: "Fees & information", sub: "Entrance, parking & guide fees", action: goTo("#fees") },
  { label: "Map", sub: "Find each spot", action: goTo("#map") },
  { label: "Contact", sub: "Tourism office", action: goTo("#contact") }
];

function openSearch() {
  searchBox.classList.add("open");
  searchInput.value = "";
  searchResults.innerHTML = "";
  searchInput.focus();
}

function closeSearch() {
  searchBox.classList.remove("open");
}
searchToggle.addEventListener("click", openSearch);
searchClose.addEventListener("click", closeSearch);

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (!q) return;
  SEARCHABLE.filter((s) => s.label.toLowerCase().includes(q) || s.sub.toLowerCase().includes(q))
    .slice(0, 8)
    .forEach((s) => {
      const el = document.createElement("div");
      el.textContent = `${s.label}: ${s.sub}`;
      makeClickable(el, () => {
        closeSearch();
        s.action();
      });
      searchResults.appendChild(el);
    });
});

/* ---------- mobile / tablet navigation drawer ---------- */

const navLinks = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");
const desktopNav = window.matchMedia("(min-width: 60em)");

function setNav(open) {
  navLinks.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
  hamburger.setAttribute("aria-expanded", String(open));
}
hamburger.setAttribute("aria-expanded", "false");
hamburger.setAttribute("aria-controls", "navlinks");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  setNav(!navLinks.classList.contains("open"));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setNav(false)));
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open") && !navLinks.contains(e.target)) setNav(false);
});
desktopNav.addEventListener("change", (e) => {
  if (e.matches) setNav(false);
});

/* Escape closes whatever is open (the photo lightbox below has its own) */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  detailModal?.classList.remove("open");
  circuitModal?.classList.remove("open");
  closeSearch();
  if (navLinks.classList.contains("open")) {
    setNav(false);
    hamburger.focus();
  }
});

/* lock page scroll while any overlay (menu, modal, lightbox, search) is open */
(function () {
  const overlays = ["detailModal", "circuitModal", "drtMarqueeLightbox", "searchBox"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const isOpen = (el) => el.classList.contains("open") || el.classList.contains("drt-open");
  const sync = () =>
    document.documentElement.classList.toggle(
      "scroll-locked",
      overlays.some(isOpen) || navLinks.classList.contains("open")
    );
  const observer = new MutationObserver(sync);
  [...overlays, navLinks].forEach((el) => observer.observe(el, { attributes: true, attributeFilter: ["class"] }));
})();

/* ---------- photo gallery marquee ---------- */

(function () {
  const grid = document.getElementById("drtMarqueeGrid");
  const lightbox = document.getElementById("drtMarqueeLightbox");
  const lightboxImg = document.getElementById("drtMarqueeLightboxImg");
  const caption = document.getElementById("drtMarqueeCaption");
  const closeBtn = document.getElementById("drtMarqueeClose");

  if (!grid || !lightbox) return;

  function getColumnCount() {
    const w = window.innerWidth;
    return w <= 480 ? 2 : w <= 900 ? 3 : 4;
  }

  function openMarqueeLightbox(photo) {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.spot;
    caption.innerHTML =
      `<span style="font-weight:600;display:block;">${escHTML(photo.spot)}</span>` +
      `<span style="font-size:0.85rem;opacity:0.75;">Brgy. ${escHTML(photo.barangay)}</span>`;
    lightbox.classList.add("drt-open");
  }

  function buildMarquee() {
    grid.innerHTML = "";

    const columnCount = getColumnCount();
    const columns = Array.from({ length: columnCount }, () => []);
    GALLERY_DATA.forEach((photo, i) => columns[i % columnCount].push(photo));

    columns.forEach((colPhotos, colIndex) => {
      if (colPhotos.length === 0) return;
      while (colPhotos.length < 4) colPhotos.push(...colPhotos); // enough photos to fill the column

      const col = document.createElement("div");
      col.className = "drt-marquee-col" + (colIndex % 2 === 1 ? " drt-reverse" : "");

      const track = document.createElement("div");
      track.className = "drt-marquee-track";

      colPhotos.concat(colPhotos).forEach((photo) => {
        const item = document.createElement("div");
        item.className = "drt-marquee-item";
        const img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.spot;
        img.loading = "lazy";
        item.appendChild(img);
        item.addEventListener("click", () => openMarqueeLightbox(photo));
        track.appendChild(item);
      });

      col.appendChild(track);
      grid.appendChild(col);
    });
  }

  buildMarquee();

  let resizeTimer;
  let lastColumnCount = getColumnCount();
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const current = getColumnCount();
      if (current !== lastColumnCount) {
        lastColumnCount = current;
        buildMarquee();
      }
    }, 200);
  });

  closeBtn.addEventListener("click", () => lightbox.classList.remove("drt-open"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("drt-open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("drt-open");
  });
})();

/* ---------- contact form ---------- */

/* Messages are sent through Formspree. Set this to "" to fall back to opening
   the visitor's mail app instead. */
const FORMSPREE_URL = "https://formspree.io/f/mljdkqkz";

(function () {
  const form = document.getElementById("contactForm");
  const mail = CONTACT_CARDS.find((c) => /email/i.test(c.label));
  const to = mail ? mail.value : "";
  const foot = document.getElementById("footMail");
  if (foot && to) foot.href = "mailto:" + to;
  if (!form) return;

  const status = document.createElement("p");
  status.className = "form-status";
  status.setAttribute("role", "status");
  form.appendChild(status);
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = new FormData(form);

    if (!FORMSPREE_URL) {
      const body = "Name: " + f.get("name") + "\nEmail: " + f.get("email") + "\nMobile: " + (f.get("phone") || "-") + "\n\n" + f.get("message");
      location.href = "mailto:" + to + "?subject=" + encodeURIComponent("DRT Tourism: " + f.get("topic")) + "&body=" + encodeURIComponent(body);
      return;
    }

    btn.disabled = true;
    status.className = "form-status";
    status.textContent = "Sending…";
    try {
      const res = await fetch(FORMSPREE_URL, { method: "POST", body: f, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("bad response");
      form.reset();
      status.classList.add("ok");
      status.textContent = "Message sent. The tourism office will get back to you.";
    } catch {
      status.classList.add("err");
      status.textContent = "Could not send your message. Please try again or email us directly.";
    } finally {
      btn.disabled = false;
    }
  });
})();

/* ---------- gentle one-time reveal for section headings and grids ---------- */

(function () {
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(".section-head, .circuit-grid, .route-steps, .info-grid, .contact-layout");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      }),
    { threshold: 0.12 }
  );
  els.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
})();