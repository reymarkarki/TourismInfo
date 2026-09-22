/*
  barangay-data.js
  -----------------
  Data for the 8-barangay tourism directory. This file does NOT duplicate
  tourist spot info — it reuses SPOTS and GALLERY_DATA from ../data.js and
  filters them per barangay with getSpotsForBarangay() / getGalleryForBarangay().

  This file only adds what data.js doesn't have:
    - a short blurb per barangay (for the hero/header)
    - a barangay hall address (left blank until the tourism office confirms one)
    - tour packages you curate yourself (packages: [])
    - local tour guides you curate yourself (guides: [])

  HOW TO ADD REAL DATA LATER
  ---------------------------
  1. Tour packages: add objects to a barangay's `packages` array, e.g.

       packages: [
         {
           name: 'Falls & Cave Day Tour',
           price: '₱450 per person',
           duration: '8 hours',
           groupSize: 'Good for 4–6 people',
           destinations: ['Puning Cave'],       // optional — auto-fills from
                                                 // this barangay's spots if omitted
           tourGuide: 'Included, arranged by the barangay tourism desk',
           transportation: 'Not included',
           meals: '1 packed lunch included',
           accommodation: 'Day tour — no accommodation',
           inclusions: ['Entrance fees', 'Local guide', 'Lunch'],
           exclusions: ['Transportation to DRT', 'Personal gear'],
           contact: 'Bayabas Barangay Tourism Desk'
         }
       ]

     Until you add packages here, each barangay page shows one auto-built
     "Day Tour" suggestion made from its own SPOTS entries, clearly labeled
     as a suggested itinerary rather than an official package.

  2. Local tour guides: add objects to a barangay's `guides` array, e.g.

       guides: [
         {
           name: 'Juan Dela Cruz',
           image: '',                    // optional path, e.g. 'images/guides/juan.jpg'
           specialization: ['Hiking', 'Nature Tour'],
           contact: '09XX XXX XXXX',
           tourType: 'Mountain trekking',
           description: 'DOT-accredited guide, 10+ years on the DRT trails.'
         }
       ]

     Until you add guides, the page shows the standard
     "no guide info yet" message instead of inventing one.

  3. Barangay hall address: fill in `hall.address` / `hall.contact` once the
     tourism office confirms it. Leave as null to keep the automatic
     "contact the Municipal Tourism Office" fallback.
*/

const BARANGAYS = [
  {
    slug: 'bayabas',
    name: 'Bayabas',
    aliases: [],
    blurb: 'Home to Puning Cave, one of Central Luzon\u2019s most-visited cave systems and bat sanctuaries.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'camachile',
    name: 'Camachile',
    aliases: [],
    blurb: 'Falls and ridgelines across the barangay proper and Sitio Arm Strong, including Secret Falls and Mount Secret.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'camachin',
    name: 'Camachin',
    aliases: [],
    blurb: 'One of DRT\u2019s eight barangays along the Sierra Madre foothills. Tourist spot listings for Camachin are coming soon.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'kabayunan',
    name: 'Kabayunan',
    aliases: [],
    blurb: 'Home to Kabayunan View Deck, a ridgeline camp and viewpoint over the Sierra Madre.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'kalawakan',
    name: 'Kalawakan',
    aliases: [],
    blurb: 'DRT\u2019s most spot-dense barangay — waterfalls, mountain ridgelines, and a campsite on the way to Mt. Lawad.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'pulong-sampalok',
    name: 'Pulong Sampalok',
    aliases: [],
    blurb: 'DRT\u2019s town center, home to Caribbean Waves Resort and the Municipal Tourism Office.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'sapang-bulac',
    name: 'Sapang Bulac',
    // data.js has a typo variant "Sapang Bulak" in a couple of gallery entries —
    // matched here so this barangay's gallery still picks them up.
    aliases: ['Sapang Bulak'],
    blurb: 'Mountain views and a family resort at the foot of Mt. Brigino.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  },
  {
    slug: 'talbak',
    name: 'Talbak',
    aliases: [],
    blurb: 'Home to Verdivia Falls, DRT\u2019s adventure waterfall known for cliff jumps and bamboo rafting.',
    hall: { address: null, contact: null, email: null, facebook: null },
    packages: [],
    guides: []
  }
];

/* Matches a SPOTS/GALLERY_DATA "barangay" string to a barangay record.
   Handles exact matches, spelling aliases (e.g. "Sapang Bulak"), and
   sub-locality suffixes (e.g. "Camachile, So. Arm Strong"). */
function barangayFieldMatches(fieldValue, brgy) {
  if (!fieldValue) return false;
  const names = [brgy.name, ...(brgy.aliases || [])];
  return names.some((n) => fieldValue === n || fieldValue.startsWith(n + ','));
}

function getSpotsForBarangay(brgy) {
  return (typeof SPOTS !== 'undefined' ? SPOTS : []).filter((s) => barangayFieldMatches(s.barangay, brgy));
}

function getGalleryForBarangay(brgy) {
  return (typeof GALLERY_DATA !== 'undefined' ? GALLERY_DATA : []).filter((g) => barangayFieldMatches(g.barangay, brgy));
}

function getBarangayBySlug(slug) {
  return BARANGAYS.find((b) => b.slug === slug) || null;
}
