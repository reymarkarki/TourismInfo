const FEE_FALLBACK = "Contact tourism office";
const INFO_ICONS = {
  fee: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  distance: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H12"/></svg>'
};

function cleanText(v) {
  return typeof v === "string" ? v.replace(/\s+/g, " ").trim() : "";
}

function formatFee(spot) {
  let fee = cleanText(spot && spot.entranceFee);
  if (!fee) return FEE_FALLBACK;
  if (/^(free|none|no fee|0|₱\s*0)$/i.test(fee)) return "Free";
  if (/^\d/.test(fee)) fee = "₱" + fee; //
  return fee.charAt(0).toUpperCase() + fee.slice(1);
}
const formatHours = (spot) => cleanText(spot && spot.hours);
const formatDistance = (spot) => cleanText(spot && spot.distanceFromTownCenter);


function spotCoords(spot) {
  const c = spot && spot.coordinates;
  if (!c || c.lat == null || c.lng == null || c.lat === "" || c.lng === "") return null;
  const lat = Number(c.lat);
  const lng = Number(c.lng);
  return Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180
    ? `${lat},${lng}`
    : null;
}


function spotMapQuery(spot) {
  return (
    spotCoords(spot) ||
    cleanText(spot && spot.mapQuery) ||
    cleanText([spot && spot.name, spot && spot.location].filter(Boolean).join(", "))
  );
}

function spotDirectionsURL(spot) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(spotMapQuery(spot))}`;
}

function spotInfoHTML(spot) {
  return [
    { k: "Fee", icon: INFO_ICONS.fee, v: formatFee(spot) },
    { k: "Hours", icon: INFO_ICONS.clock, v: formatHours(spot) },
    { k: "Distance", icon: INFO_ICONS.distance, v: formatDistance(spot) }
  ]
    .filter((c) => c.v)
    .map(
      (c) => `<div class="dm-info-card">
      <div class="dm-info-label">${c.icon}<span>${c.k}</span></div>
      <div class="dm-info-value">${DRTCategories.esc(c.v)}</div>
    </div>`
    )
    .join("");
}

const WIDE_META = ["Location", "How to get there", "Activities"];

function renderSpotDetails(spot, root) {
  root = root || "";
  document.getElementById("dmInfo").innerHTML = spotInfoHTML(spot);
  document.getElementById("dmDirections").href = spotDirectionsURL(spot);

  const meta = [
    { k: "Location", v: spot.location, icon: "icon/map.png" },
    { k: "Tourguide fee", v: spot.tourguide, icon: "icon/photography.png" },
    { k: "Parking fee", v: spot.parkingFee, icon: "icon/fee.png" },
    { k: "Activities", v: (spot.activities || []).join(", "), icon: "icon/team-building.png" },
    { k: "How to get there", v: spot.howToGetThere, icon: "icon/direction.png" },
    { k: "Contact", v: spot.contact, icon: "icon/contact-mail.png" },
    { k: "FaceBook", v: spot.facebook, icon: "icon/facebook.png" }
  ];
  document.getElementById("dmMeta").innerHTML = meta
    .map((m) => ({ ...m, v: Array.isArray(m.v) ? m.v.join("<br>") : m.v }))
    .filter((m) => typeof m.v === "string" && m.v.trim())
    .map((m) => {
      let value = m.v.trim();
      if (/^(none|n\/a)$/i.test(value)) value = "None";
      if (m.k === "FaceBook") {
        const url = value.startsWith("http") ? value : `https://${value}`;
        value = `<a href="${DRTCategories.esc(url)}" target="_blank" rel="noopener">Visit Facebook Page \u2192</a>`;
      }
      return `<div class="dm-card${WIDE_META.includes(m.k) ? " dm-card-wide" : ""}">
      <div class="k"><img src="${root}${m.icon}" class="meta-icon" alt="" />${m.k}</div>
      <div class="v">${value}</div>
    </div>`;
    })
    .join("");

  const dmRules = document.getElementById("dmRules");
  if (dmRules) {
    const rules = spot.rules && spot.rules.length ? spot.rules : typeof RULES !== "undefined" ? RULES : [];
    dmRules.innerHTML = rules.length
      ? `<h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg><span>Rules &amp; Reminders</span></h4><ul>${rules.map((r) => `<li>${DRTCategories.esc(r)}</li>`).join("")}</ul>`
      : "";
  }
}