async function loadDestinations() {
    const { data, error } = await supabaseClient
        .from("destinations")
        .select(`
            *,
            destination_categories (
                category_id,
                categories (
                    id,
                    name
                )
            ),
            destination_images (
                image_url,
                alt_text,
                caption,
                sort_order
            )
        `)
        .eq("status", "published")
        .order("name");

    if (error) {
        console.error("Error loading destinations:", error);
        return [];
    }

    console.log("Destinations from Supabase:", data);
    return data;
}

function placeholderSVG(category, seed) {
  const palette = {
    Falls: ["#2E8B6F", "#132A20"],
    Caves: ["#7A6142", "#1A3527"],
    Cave: ["#7A6142", "#1A3527"],
    Mountains: ["#4FB4D8", "#13233A"],
    Resorts: ["#C98A4B", "#20402F"],
    Camps: ["#7A9B5C", "#1E2E18"],
    Historical: ["#A6763F", "#241A10"]
  };
  const [c1, c2] = palette[category] || ["#2E8B6F", "#132A20"];
  return `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g${seed}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="400" height="260" fill="url(#g${seed})"/>
    <polygon points="0,190 80,120 160,170 240,90 320,160 400,180 400,260 0,260" fill="${c2}" opacity="0.6"/>
  </svg>`;
}

function spotMedia(spot, seed) {
  return spot.img ? `<img src="${spot.img}" alt="${spot.name}" loading="lazy">` : placeholderSVG(spot.categories[0], seed);
}

function spotSlides(spot, seed) {
  const images = spot.images && spot.images.length ? spot.images : [spot.img].filter(Boolean);
  if (!images.length) return placeholderSVG(spot.categories[0], seed);
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
  document.getElementById("dmTag").textContent = `${spot.barangay} · ${spot.categories.join(", ")}`;
  document.getElementById("dmTitle").textContent = spot.name;
  document.getElementById("dmDesc").textContent = spot.fullDesc;
  const meta = [

    {
      k: "Location",
      v: spot.location,
      icon: "icon/map.png"
    },
    {
      k: "Entrance fee",
      v: spot.entranceFee,
      icon: "icon/money.png"
    },
    {
      k: "Tourguide fee",
      v: spot.tourguide,
      icon: "icon/photography.png"
    },
    {
      k: "Parking fee",
      v: spot.parkingFee,
      icon: "icon/fee.png"
    },
    {
      k: "Opening hours",
      v: spot.hours,
      icon: "icon/24-hour-clock.png"
    },
    {
      k: "Activities",
      v: spot.activities.join(", "),
      icon: "icon/team-building.png"
    },
    {
      k: "How to get there",
      v: spot.howToGetThere,
      icon: "icon/direction.png"
    },
    {
      k: "Contact",
      v: spot.contact,
      icon: "icon/contact-mail.png"
    },
    {
      k: "FaceBook",
      v: spot.facebook,
      icon: "icon/facebook.png"
    },
    {
      k: "Distance",
      v: spot.distanceFromTownCenter,
      icon: "icon/direction.png"
    }
  ];
  document.getElementById("dmMeta").innerHTML = meta
    .filter((m) => m.v)
    .map((m) => {
      let value = m.v;
      if (m.k === "FaceBook") {
        const url = value.startsWith("http") ? value : `https://${value}`;
        value = `<a href="${url}" target="_blank" rel="noopener">Visit Facebook Page →</a>`;
      }
      return `<div>
      <div class="k"><img src="${m.icon}" class="meta-icon" alt="" />${m.k}</div>
      <div class="v">${value}</div>
    </div>`;
    })
    .join("");
  const dmRules = document.getElementById("dmRules");
  if (dmRules) {
    dmRules.innerHTML =
      spot.rules && spot.rules.length
        ? `<h4>Rules &amp; Reminders</h4><ul>${spot.rules.map((r) => `<li>${r}</li>`).join("")}</ul>`
        : "";
  }
  setupDmSlider();
  document.getElementById("dmDirections").href =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(spot.mapQuery)}`;
  detailModal.classList.add("open");
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
  el.addEventListener("click", () => openDetails(s, i + 1));
  featuredGrid.appendChild(el);
});

const quickNav = document.getElementById("quickNav");
[
  {
    label: "All tourist spots",
    href: "#spots"
  },
  {
    label: "Circuits",
    href: "#circuits"
  },
  {
    label: "Map",
    href: "#map"
  },
  {
    label: "Barangay",
    href: "barangay/index.html"
  },
  {
    label: "How to get there",
    href: "#getting-there"
  },
  {
    label: "Fees & information",
    href: "#fees"
  },
  {
    label: "Contact",
    href: "#contact"
  }
].forEach((q) => {
  const a = document.createElement("a");
  a.href = q.href;
  a.textContent = q.label;
  quickNav.appendChild(a);
});

/* tourist spots */
const categories = ["All", ...new Set(SPOTS.flatMap((s) => s.categories))];
const spotFilters = document.getElementById("spotFilters");
categories.forEach((c, i) => {
  const b = document.createElement("button");
  b.className = "filter-btn" + (i === 0 ? " active" : "");
  b.textContent = c;
  b.dataset.cat = c;
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    document.querySelectorAll(".spot-card").forEach((card) => {
      const cardCats = card.dataset.cat.split("|");
      card.style.display = c === "All" || cardCats.includes(c) ? "" : "none";
    });
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
  card.dataset.cat = s.categories.join("|");
  card.dataset.brgy = s.barangay.split(",")[0].trim();
  card.innerHTML = `
    <div class="spot-media">${spotMedia(s, i + 1)}</div>
    <div class="spot-body">
      <div class="loc">${s.barangay}</div>
      <h3>${s.name}</h3>
      <p>${s.shortDesc}</p>
      <div class="spot-facts">
        <span><img src="icon/money.png" class="meta-icon" alt="" />${s.entranceFee}</span>
        <span><img src="icon/24-hour-clock.png" class="meta-icon" alt="" />${s.hours}</span>
      </div>
    </div>`;
  card.addEventListener("click", () => openDetails(s, i + 1));
  spotGrid.appendChild(card);
});

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
  document.getElementById("circTag").textContent = circuitBarangays(circuit).join(" · ");
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
    card.addEventListener("click", () => {
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

  const points = [circuit.stops[0].mapQuery, ...stops.map((sp) => sp.mapQuery)].filter(Boolean);
  const origin = points[0];
  const destination = points[points.length - 1];
  const waypoints = points.slice(1, -1);
  document.getElementById("circDirections").href =
    `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}` +
    (waypoints.length ? `&waypoints=${waypoints.map(encodeURIComponent).join("|")}` : "");

  circuitModal.classList.add("open");
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
    card.addEventListener("click", () => openCircuit(c, i + 1));
    circuitGrid.appendChild(card);
  });
}

/* maps */
const mapEmbed = document.getElementById("mapEmbed");
const mapList = document.getElementById("mapList");
SPOTS.forEach((s, i) => {
  const el = document.createElement("div");
  el.className = "map-item";
  el.innerHTML = `<h4>${s.name}</h4><p>${s.barangay} · ${s.distanceFromTownCenter}</p>`;
  el.addEventListener("click", () => {
    document.querySelectorAll(".map-item").forEach((x) => x.classList.remove("active"));
    el.classList.add("active");
    mapEmbed.src = `https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&output=embed`;
  });
  mapList.appendChild(el);
});

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
    sub: `${s.barangay} · ${s.categories.join(", ")}`,
    action: () => openDetails(s, i + 1)
  })),
  ...(typeof CIRCUITS !== "undefined"
    ? CIRCUITS.map((c, i) => ({
        label: c.name,
        sub: "Tourism circuit",
        action: () => openCircuit(c, i + 1)
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
      el.addEventListener("click", () => {
        closeSearch();
        s.action();
      });
      searchResults.appendChild(el);
    });
});

/* for mobile  */
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
hamburger.addEventListener("click", () => navlinks.classList.toggle("open"));
navlinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navlinks.classList.remove("open")));
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

(function () {
  const grid = document.getElementById("drtMarqueeGrid");
  const lightbox = document.getElementById("drtMarqueeLightbox");
  const lightboxImg = document.getElementById("drtMarqueeLightboxImg");
  const caption = document.getElementById("drtMarqueeCaption");
  const closeBtn = document.getElementById("drtMarqueeClose");

  if (!grid || !lightbox) return;

 
  function getColumnCount() {
    return window.innerWidth <= 630 ? 3 : 4;
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
loadDestinations();