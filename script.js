/* Makes a non-button element (card, list row) work for keyboard and screen-reader users */
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

function placeholderSVG(category, seed) {
  const [c1, c2] = DRTCategories.palette(category);
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g${seed}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="400" height="260" fill="url(#g${seed})"/>
    <polygon points="0,190 80,120 160,170 240,90 320,160 400,180 400,260 0,260" fill="${c2}" opacity="0.6"/>
  </svg>`;
}

function spotMedia(spot, seed) {
  return spot.img ? `<img src="${spot.img}" alt="${spot.name}" loading="lazy">` : placeholderSVG(DRTCategories.idsFor(spot)[0], seed);
}

function spotSlides(spot, seed) {
  const images = spot.images && spot.images.length ? spot.images : [spot.img].filter(Boolean);
  if (!images.length) return placeholderSVG(DRTCategories.idsFor(spot)[0], seed);
  const slides = images
    .map(
      (src, i) =>
        `<img src="${src}" alt="${spot.name}" class="dm-slide" data-index="${i}" style="display:${i === 0 ? "block" : "none"}">`
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
      show(parseInt(d.dataset.index));
    })
  );
}
/* detail modal */
const detailModal = document.getElementById("detailModal");

function openDetails(spot, seed) {
  document.getElementById("dmMedia").innerHTML = spotSlides(spot, seed);
  document.getElementById("dmTag").innerHTML = DRTCategories.tagHTML(spot, "");
  document.getElementById("dmTitle").textContent = spot.name;
  document.getElementById("dmDesc").textContent = spot.fullDesc;
  renderSpotDetails(spot, "");
  setupDmSlider();
  detailModal.classList.add("open");
  document.getElementById("dmClose").focus();
}
document.getElementById("dmClose").addEventListener("click", () => detailModal.classList.remove("open"));
detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) detailModal.classList.remove("open");
});

/*landing page */
const featuredGrid = document.getElementById("featuredGrid");
SPOTS.slice(0, 3).forEach((s, i) => {
  const el = document.createElement("div");
  el.className = "featured-card";
  el.innerHTML = `<div class="fc-media">${spotMedia(s, i + 1)}</div>
    <div class="fc-body"><h4>${s.name}</h4><div class="loc">${s.barangay}</div></div>`;
  makeClickable(el, () => openDetails(s, i + 1));
  featuredGrid.appendChild(el);
});


/* tourist spots */
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
  b.innerHTML = cat ? `${DRTCategories.iconHTML(cat, "")}<span>${cat.label}</span>` : `<span>${c}</span>`;
  b.dataset.cat = c;
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    activeSpotCategory = c;
    spotsExpanded = false;
    updateSpotGrid();
  });
  spotFilters.appendChild(b);
});

/* explore per barangay */
function brgySlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

const brgyGrid = document.getElementById("brgyGrid");
if (brgyGrid) {
  const brgyGroups = {};
  SPOTS.forEach((s) => {
    const brgy = s.barangay.split(",")[0].trim();
    if (!brgyGroups[brgy]) brgyGroups[brgy] = { count: 0, img: s.img };
    brgyGroups[brgy].count += 1;
  });

  Object.keys(brgyGroups)
    .sort()
    .forEach((brgy) => {
      const g = brgyGroups[brgy];
      const brgyRecord = typeof BARANGAYS !== "undefined" ? BARANGAYS.find((b) => barangayFieldMatches(brgy, b)) : null;
      const img = (brgyRecord && brgyRecord.heroImg) || g.img;
      const href = `barangay/barangay-${brgySlug(brgy)}.html`;
      const el = document.createElement("a");
      el.className = "brgy-card";
      el.href = href;
      el.innerHTML = `
        ${img ? `<img src="${img}" alt="${brgy}" loading="lazy">` : ""}
        <div class="brgy-card-body">
          <div class="brgy-count">${g.count} spot${g.count > 1 ? "s" : ""}</div>
          <h4>${brgy}</h4>
        </div>`;
      brgyGrid.appendChild(el);
    });
}

const spotGrid = document.getElementById("spotGrid");
SPOTS.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "spot-card";
  card.dataset.cat = DRTCategories.idsFor(s).join("|");
  card.dataset.brgy = s.barangay.split(",")[0].trim();
  card.innerHTML = `
    <div class="spot-media">${spotMedia(s, i + 1)}${DRTCategories.badgeHTML(s, "")}</div>
    <div class="spot-body">
      <div class="loc">${s.barangay}</div>
      <h3>${s.name}</h3>
      <p>${s.shortDesc}</p>
      <div class="spot-facts">
        <span><img src="icon/money.png" class="meta-icon" alt="" />${DRTCategories.esc(formatFee(s))}</span>
        ${formatHours(s) ? `<span><img src="icon/24-hour-clock.png" class="meta-icon" alt="" />${DRTCategories.esc(formatHours(s))}</span>` : ""}
      </div>
    </div>`;
  makeClickable(card, () => openDetails(s, i + 1));
  spotGrid.appendChild(card);
});

/* "See More" / "Show Less" for the spot grid (respects the active category filter) */
const spotMoreWrap = document.createElement("div");
spotMoreWrap.className = "spot-more-wrap";
const spotMoreBtn = document.createElement("button");
spotMoreBtn.type = "button";
spotMoreBtn.className = "spot-more-btn";
spotMoreWrap.appendChild(spotMoreBtn);
spotGrid.after(spotMoreWrap);

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

  const needsToggle = matching.length > SPOTS_PER_PAGE;
  spotMoreWrap.style.display = needsToggle ? "" : "none";
  spotMoreBtn.textContent = spotsExpanded ? "Show Less" : "See More Spots";
  spotMoreBtn.setAttribute("aria-expanded", String(spotsExpanded));
}

spotMoreBtn.addEventListener("click", () => {
  spotsExpanded = !spotsExpanded;
  updateSpotGrid(spotsExpanded ? SPOTS_PER_PAGE : -1);
  if (!spotsExpanded) {
    // collapsing: bring the top of the grid back into view
    spotFilters.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

updateSpotGrid();

/* tourism circuits */
function getSpotById(id) {
  return SPOTS.find((s) => s.id === id) || null;
}

function circuitStops(circuit) {
  return circuit.stops
    .filter((s) => s.type === "spot")
    .map((s) => getSpotById(s.id))
    .filter(Boolean);
}

function circuitBarangays(circuit) {
  const names = circuitStops(circuit).map((sp) => sp.barangay.split(",")[0].trim());
  return [...new Set(names)];
}

const circuitModal = document.getElementById("circuitModal");

function openCircuit(circuit, seed) {
  const stops = circuitStops(circuit);

  document.getElementById("circMedia").innerHTML = circuit.img
    ? `<img src="${circuit.img}" alt="${circuit.name}" loading="lazy">`
    : circuit.images && circuit.images[0]
      ? `<img src="${circuit.images[0]}" alt="${circuit.name}" loading="lazy">`
      : placeholderSVG("Falls", seed);
  document.getElementById("circTag").textContent = "Tourism circuit";
  document.getElementById("circTitle").textContent = circuit.name;
  document.getElementById("circDesc").textContent = circuit.shortDesc || "";

  const start = circuit.stops[0];
  document.getElementById("circRoute").innerHTML = [
    `<div class="circ-step"><span class="circ-num">S</span><span class="circ-label">${start.label}</span></div>`,
    ...stops.map(
      (sp, i) =>
        `<span class="circ-arrow">&rarr;</span><div class="circ-step"><span class="circ-num">${i + 1}</span><span class="circ-label">${sp.name}</span></div>`
    )
  ].join("");

  document.getElementById("circStops").innerHTML = stops
    .map(
      (sp, i) => `
      <div class="circ-stop-card" data-idx="${i}">
        <div class="circ-stop-media">${spotMedia(sp, i + 1)}</div>
        <div class="circ-stop-body"><h4>${sp.name}</h4><p>${sp.distanceFromTownCenter || sp.barangay}</p></div>
      </div>`
    )
    .join("");
  document.querySelectorAll("#circStops .circ-stop-card").forEach((card, i) => {
    makeClickable(card, () => {
      circuitModal.classList.remove("open");
      openDetails(stops[i], i + 1);
    });
  });

  const bring =
    circuit.whatToBring && circuit.whatToBring.length
      ? `<h5>What to bring</h5><ul>${circuit.whatToBring.map((x) => `<li>${x}</li>`).join("")}</ul>`
      : "";
  const sleep =
    circuit.whereToSleep && circuit.whereToSleep.length
      ? `<h5>Where to sleep</h5><ul>${circuit.whereToSleep.map((x) => `<li>${x}</li>`).join("")}</ul>`
      : "";
  document.getElementById("circInfo").innerHTML = `
    <div class="circ-info-card">
      <h4>What to expect</h4>
      <p>${circuit.expectations || ""}</p>
      ${bring}
      ${sleep}
    </div>
    <div class="circ-info-card circ-info-why">
      <h4>Why choose this circuit</h4>
      <p>${circuit.whyChoose || ""}</p>
    </div>`;

  const points = [circuit.stops[0].mapQuery, ...stops.map((sp) => spotMapQuery(sp))].filter(Boolean);
  const origin = points[0];
  const destination = points[points.length - 1];
  const waypoints = points.slice(1, -1);
  document.getElementById("circDirections").href =
    `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}` +
    (waypoints.length ? `&waypoints=${waypoints.map(encodeURIComponent).join("|")}` : "");

  circuitModal.classList.add("open");
  document.getElementById("circClose").focus();
}

document.getElementById("circClose")?.addEventListener("click", () => circuitModal.classList.remove("open"));
circuitModal?.addEventListener("click", (e) => {
  if (e.target === circuitModal) circuitModal.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") circuitModal?.classList.remove("open");
});

const circuitGrid = document.getElementById("circuitGrid");
if (circuitGrid && typeof CIRCUITS !== "undefined") {
  CIRCUITS.forEach((c, i) => {
    const stopCount = c.stops.filter((s) => s.type === "spot").length;
    const media = c.img
      ? `<img src="${c.img}" alt="${c.name}" loading="lazy">`
      : c.images && c.images[0]
        ? `<img src="${c.images[0]}" alt="${c.name}" loading="lazy">`
        : placeholderSVG("Falls", i + 1);
    const card = document.createElement("div");
    card.className = "circuit-card";
    card.innerHTML = `
      <div class="circuit-media">${media}</div>
      <div class="circuit-body">
        <div class="loc">${circuitBarangays(c).join(" · ")}</div>
        <h3>${c.name}</h3>
        <p>${c.shortDesc || ""}</p>
        <span class="circuit-count">${stopCount} stop${stopCount === 1 ? "" : "s"}</span>
      </div>`;
    makeClickable(card, () => { location.href = "circuit.html?id=" + encodeURIComponent(c.id); });
    circuitGrid.appendChild(card);
  });
}

/* maps */
const mapEmbed = document.getElementById("mapEmbed");
const mapList = document.getElementById("mapList");
SPOTS.forEach((s, i) => {
  const el = document.createElement("div");
  el.className = "map-item";
  el.innerHTML = `<h4>${s.name}</h4><p>${[s.barangay, formatDistance(s)].filter(Boolean).join(" · ")}</p>`;
  makeClickable(el, () => {
    document.querySelectorAll(".map-item").forEach((x) => x.classList.remove("active"));
    el.classList.add("active");
    mapEmbed.src = `https://www.google.com/maps?q=${encodeURIComponent(spotMapQuery(s))}&output=embed`;
  });
  mapList.appendChild(el);
});

/* "See More" / "Show Less" for the map list (same pattern as the spot grid).
   The list is wrapped so the button sits under it without becoming a third
   column of the map grid on desktop. */
const MAP_ITEMS_PER_PAGE = 6;
let mapExpanded = false;
const mapSide = document.createElement("div");
mapSide.className = "map-side";
mapList.before(mapSide);
mapSide.appendChild(mapList);

const mapMoreWrap = document.createElement("div");
mapMoreWrap.className = "spot-more-wrap";
const mapMoreBtn = document.createElement("button");
mapMoreBtn.type = "button";
mapMoreBtn.className = "spot-more-btn";
mapMoreWrap.appendChild(mapMoreBtn);
mapSide.appendChild(mapMoreWrap);

function updateMapList() {
  const items = [...mapList.querySelectorAll(".map-item")];
  items.forEach((item, i) => {
    item.style.display = mapExpanded || i < MAP_ITEMS_PER_PAGE ? "" : "none";
  });
  mapMoreWrap.style.display = items.length > MAP_ITEMS_PER_PAGE ? "" : "none";
  mapMoreBtn.textContent = mapExpanded ? "Show Less" : "See More";
  mapMoreBtn.setAttribute("aria-expanded", String(mapExpanded));
}

mapMoreBtn.addEventListener("click", () => {
  mapExpanded = !mapExpanded;
  updateMapList();
  if (!mapExpanded) {
    mapList.scrollTop = 0;
    mapList.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

updateMapList();

/*
routes
*/
const routeSteps = document.getElementById("routeSteps");
ROUTE_STEPS.forEach((s, i) => {
  const el = document.createElement("div");
  el.className = "route-step";
  el.innerHTML = `<div class="route-num">${i + 1}</div><div><h4>${s.t}</h4><p>${s.d}</p></div>`;
  routeSteps.appendChild(el);
});

/*fees */
const infoGrid = document.getElementById("infoGrid");
INFO_CARDS.forEach((c) => {
  const el = document.createElement("div");
  el.className = "info-card";
  el.innerHTML = `<h4>${c.t}</h4><p>${c.d}</p>`;
  infoGrid.appendChild(el);
});

const rulesList = document.getElementById("rulesList");
RULES.forEach((r) => {
  const li = document.createElement("li");
  li.textContent = r;
  rulesList.appendChild(li);
});

/*
contact
*/
const contactGrid = document.getElementById("contactGrid");
CONTACT_CARDS.forEach((c) => {
  const el = document.createElement("div");
  el.className = "contact-card";
  el.innerHTML = `<div class="label">${c.label}</div><div class="value">${c.value}</div>`;
  contactGrid.appendChild(el);
});

/*search bar */
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
const searchResults = document.getElementById("searchResults");

const SEARCHABLE = [
  ...SPOTS.map((s, i) => ({
    label: s.name,
    sub: `${s.barangay} · ${DRTCategories.labelFor(s)}`,
    action: () => openDetails(s, i + 1)
  })),
  ...(typeof CIRCUITS !== "undefined"
    ? CIRCUITS.map((c, i) => ({
        label: c.name,
        sub: "Tourism circuit",
        action: () => { location.href = "circuit.html?id=" + encodeURIComponent(c.id); }
      }))
    : []),
  {
    label: "How to get there",
    sub: "Travel guide",
    action: () => (location.hash = "#getting-there")
  },
  {
    label: "Fees & information",
    sub: "Entrance, parking & guide fees",
    action: () => (location.hash = "#fees")
  },
  {
    label: "Map",
    sub: "Find each spot",
    action: () => (location.hash = "#map")
  },
  {
    label: "Contact",
    sub: "Tourism office",
    action: () => (location.hash = "#contact")
  }
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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSearch();
});

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

/* mobile / tablet navigation drawer */
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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) {
    setNav(false);
    hamburger.focus();
  }
});
desktopNav.addEventListener("change", (e) => {
  if (e.matches) setNav(false);
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
      '<span style="font-weight:600;display:block;">' +
      photo.spot +
      "</span>" +
      '<span style="font-size:0.85rem;opacity:0.75;">Brgy. ' +
      photo.barangay +
      "</span>";
    lightbox.classList.add("drt-open");
  }

  function buildMarquee() {
    grid.innerHTML = "";

    const COLUMN_COUNT = getColumnCount();
    const columns = Array.from({ length: COLUMN_COUNT }, () => []);

    GALLERY_DATA.forEach((photo, i) => {
      columns[i % COLUMN_COUNT].push(photo);
    });

    columns.forEach((col) => {
            if (col.length === 0) return;
      while (col.length < 4) col.push(...col);
    });

    columns.forEach((colPhotos, colIndex) => {
      if (colPhotos.length === 0) return;

      const col = document.createElement("div");
      col.className = "drt-marquee-col" + (colIndex % 2 === 1 ? " drt-reverse" : "");

      const track = document.createElement("div");
      track.className = "drt-marquee-track";

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

/* contact form: sends to Formspree so messages arrive in your inbox.
   1) Make a free form at formspree.io  2) paste its link below.
   Until then it falls back to opening the visitor's mail app. */
const FORMSPREE_URL = "https://formspree.io/f/mljdkqkz"; // e.g. "https://formspree.io/f/abcd1234"

(function () {
  const form = document.getElementById("contactForm");
  const mail = (typeof CONTACT_CARDS !== "undefined" && CONTACT_CARDS.find((c) => /email/i.test(c.label))) || null;
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
    } catch (err) {
      status.classList.add("err");
      status.textContent = "Could not send your message. Please try again or email us directly.";
    } finally {
      btn.disabled = false;
    }
  });
})();

/* gentle one-time reveal for section headings and grids */
(function () {
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(".section-head, .circuit-grid, .route-steps, .info-grid, .contact-layout");
  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
  els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
})();
