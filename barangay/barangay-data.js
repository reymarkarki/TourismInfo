/* Each barangay's card image (directory page + its own hero banner) is
   auto-picked from its first tourist spot's photo. To force a specific
   image instead, add a `heroImg: 'path/to/image.jpg'` line to that
   barangay's entry below (same path format as a spot's `img` field). */
const BARANGAYS = [
    {
        slug: 'bayabas',
        name: 'Bayabas',
        // heroImg: 'images/your-photo.jpg', // optional — set this to force the card/hero image for Bayabas; leave unset to auto-use the first tourist spot's photo
        aliases: [],
        heroImg:'brgyImg/bayabass.png',
        blurb: 'Home to Puning Cave, one of Central Luzon\u2019s most-visited cave systems and bat sanctuaries.',
        hall: {
            address: "Barangay Bayabas Hall, Dona Remedios Trinidad, Bulacan",
            contact: null,
            email: "brgybybsbul@gmail.com",
            facebook: "https://www.facebook.com/p/Barangay-Bayabas-Do%C3%B1a-Remedios-Trinidad-Bulacan-61554412345071/"
        },
        packages: [
            {
                name: 'Puning Cave Adventure Tour',
                price: '₱450 per person',
                duration: '6–8 hours',
                groupSize: 'Good for 4–6 people',
                destinations: ['Puning Cave'],
                tourGuide: 'Included, arranged by the barangay tourism desk',
                transportation: 'Not included',
                meals: '1 packed lunch included',
                inclusions: ['Entrance fee', 'Enviroment fee', 'Local guide', 'Lunch'],
                exclusions: ['Transportation to DRT', 'Personal gear'],
                contact: 'Bayabas Barangay Tourism Desk'
    }
        ],
        guides: [
            {
                name: 'Nene',
                image: 'images/guides/juan.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving', 'Bat Watching'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },
            {
                name: 'Juan',
                image: 'images/guides/juan.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },

    ]
  },
    {
        slug: 'camachile',
        name: 'Camachile',
        aliases: [],
        heroImg: 'brgyImg/camachile.png',
        blurb: 'Falls and ridgelines across the barangay proper and Sitio Arm Strong, including Secret Falls and Mount Secret.',
        hall: {
            address: 'Barangay Hall, National Road, Brgy. Camachile, DRT, Bulacan',
            contact: null,
            email: null,
            facebook: null
        },
        packages: [
            {
                name: 'Three Wonders, One Journey.',
                description: 'Journey into the heart of nature with three enchanting waterfalls in one adventure. Feel the paradise embrace of Angeland Falls, uncover the hidden wonder of Secret Falls, and be captivated by the majestic flow of Mandala Falls. Three cascades, one unforgettable escape.',
                price: '₱450 per person',
                duration: '6–8 hours',
                groupSize: 'Good for 4–6 people',
                destinations: ['Angeland', 'Secret Falls', 'Mandala Falls'],
                tourGuide: 'Included, arranged by the barangay tourism desk',
                transportation: 'Not included',
                meals: '1 packed lunch included',
                inclusions: ['Entrance fee', 'Enviroment fee', 'Local guide', 'Lunch'],
                exclusions: ['Transportation to DRT', 'Personal gear'],
                contact: 'Barangay Camachile tourist dest'
            }
        ],
        guides: [
            {
                name: 'Rommel',
                image: 'falls/secretfall/secretfalls.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving', 'Bat Watching'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },
            {
                name: 'Juan',
                image: 'images/guides/juan.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },

    ]
  },
    {
        slug: 'camachin',
        name: 'Camachin',
        aliases: [],
        heroImg: 'brgyImg/camachin.png',
        blurb: 'One of DRT\u2019s eight barangays along the Sierra Madre foothills. Tourist spot listings for Camachin are coming soon.',
        hall: {
            address: null,
            contact: null,
            email: null,
            facebook: null
        },
        packages: [
            {
                name: 'Monument Candle and 13th Falls, Tour',
                price: '₱250 per person',
                duration: '5-8 hours',
                groupSize: 'Good for 4–6 people',
                destinations: ['Monument Candle', '13th Falls'],
                tourGuide: 'Included, arranged by the barangay tourism desk',
                transportation: 'Not included',
                meals: '1 packed lunch included',
                inclusions: ['Entrance fee', 'Enviroment fee', 'Local guide'],
                exclusions: ['Transportation to DRT', 'Personal gear'],
                contact: 'Camachin Barangay Tourism Desk'
            }

        ],
        guides: [
            {
                name: 'Nene',
                image: 'images/guides/juan.jpg',
                tourType: ['Trekking', 'Bath'],
                specialization: ['Caving', 'Bat Watching'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },
            {
                name: 'Juan',
                image: 'images/guides/juan.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },

        ]
  },
    {
        slug: 'kabayunan',
        name: 'Kabayunan',
        aliases: [],
        heroImg: 'brgyImg/kabayunan.png',
        blurb: 'Home to Kabayunan View Deck, a ridgeline camp and viewpoint over the Sierra Madre.',
        hall: {
            address: null,
            contact: null,
            email: null,
            facebook: null
        },
        packages: [],
        guides: [
            {
                name: 'Nene',
                image: 'images/guides/juan.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving', 'Bat Watching'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },
            {
                name: 'Juan',
                image: 'images/guides/juan.jpg',
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving'],
                description: '8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            },

        ]
  },
    {
        slug: 'kalawakan',
        name: 'Kalawakan',
                heroImg: 'brgyImg/kalawakan.png',
        aliases: [],
        blurb: 'DRT\u2019s most spot-dense barangay — waterfalls, mountain ridgelines, and a campsite on the way to Mt. Lawad.',
        hall: {
            address: null,
            contact: null,
            email: null,
            facebook: null
        },
        packages: [],
        guides: [
            {
                name: 'Juan Dela Cruz',
                image: 'images/guides/juan.jpg', // optional — kung wala, gagamit ng initials na avatar
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving', 'Bat Watching'],
                description: 'DOT-accredited guide, 8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            }
        ]
  },
    {
        slug: 'pulong-sampalok',
        name: 'Pulong Sampalok',
        heroImg: 'brgyImg/sampalok.png',
        aliases: [],
        blurb: 'DRT\u2019s town center, home to Caribbean Waves Resort and the Municipal Tourism Office.',
        hall: {
            address: null,
            contact: null,
            email: null,
            facebook: null
        },
        packages: [],
        guides: [{
            name: 'Juan Dela Cruz',
            image: 'images/guides/juan.jpg', // optional — kung wala, gagamit ng initials na avatar
            tourType: 'Cave & Spelunking Guide',
            specialization: ['Caving', 'Bat Watching'],
            description: 'DOT-accredited guide, 8+ years sa Puning Cave trails.',
            contact: '09XX XXX XXXX'
        }]
  },
    {
        slug: 'sapang-bulac',
        name: 'Sapang Bulac',
        heroImg: 'brgyImg/bulac.png',
        aliases: ['Sapang Bulak'],
        blurb: 'Mountain views and a family resort at the foot of Mt. Brigino.',
        hall: {
            address: null,
            contact: null,
            email: null,
            facebook: null
        },
        packages: [],
        guides: [{
            name: 'Juan Dela Cruz',
            image: 'images/guides/juan.jpg', // optional — kung wala, gagamit ng initials na avatar
            tourType: 'Cave & Spelunking Guide',
            specialization: ['Caving', 'Bat Watching'],
            description: 'DOT-accredited guide, 8+ years sa Puning Cave trails.',
            contact: '09XX XXX XXXX'
        }]
  },
    {
        slug: 'talbak',
        name: 'Talbak',
        heroImg: 'brgyImg/talbak.png',
        aliases: [],
        blurb: 'Home to Verdivia Falls, DRT\u2019s adventure waterfall known for cliff jumps and bamboo rafting.',
        hall: {
            address: null,
            contact: null,
            email: null,
            facebook: null
        },
        packages: [],
        guides: [{
                name: 'Juan Dela Cruz',
                image: 'images/guides/juan.jpg', // optional — kung wala, gagamit ng initials na avatar
                tourType: 'Cave & Spelunking Guide',
                specialization: ['Caving', 'Bat Watching'],
                description: 'DOT-accredited guide, 8+ years sa Puning Cave trails.',
                contact: '09XX XXX XXXX'
            }

    ]
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