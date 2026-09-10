const HERO_IMAGE = '';

const SPOTS = [
    /*Falls*/

    {
        id: 'secret-falls',
        name: 'Secret Falls',
        category: 'Falls',
        barangay: 'Camachile',
        img: 'https://tse3.mm.bing.net/th/id/OIP._FiI-Q0tdDDDpz3xbknfUQHaEK?r=0&pid=Api&P=0&h=180',
        shortDesc: 'A hidden waterfall wrapped in dense greenery, reached by a short, shaded trek.',
        fullDesc: 'A hidden waterfall wrapped in dense greenery — one of Bulacan\'s best-kept secrets. The trek in is short and shaded, and the pool at the bottom is calm enough for a long swim.',
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱30 – ₱50 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking'],
        howToGetThere: 'Register at the Camachile barangay hall, then a short guided trek to the falls.',
        contact: 'Camachile Barangay Tourism Desk',
        distanceFromTownCenter: '~9 km from the Municipal Hall',
        mapQuery: 'Secret Falls, Camachile, Doña Remedios Trinidad, Bulacan'
  },
    {
        id: 'talon-pari',
        name: 'Talon Pari Falls',
        category: 'Falls',
        barangay: 'Kalawakan',
        img: 'https://tse1.mm.bing.net/th/id/OIP.6Gp08Wfnipc3zesiLaYGYgHaEK?r=0&pid=Api&P=0&h=180',
        shortDesc: 'A quieter waterfall with clear pools and a scenic mountain backdrop.',
        fullDesc: 'A hidden natural gem — a waterfall surrounded by lush forest, reached by a short hike or motorbike. Known for its clear pools, relaxing atmosphere, and mountain backdrop.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱30 – ₱50 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography'],
        howToGetThere: 'Ask your barangay guide to include it alongside a nearby falls trip.',
        contact: 'Kalawakan Barangay Tourism Desk',
        distanceFromTownCenter: '~16 km from the Municipal Hall',
        mapQuery: 'Talon Pari Falls, Kalawakan, Doña Remedios Trinidad, Bulacan'
  },
    {
        id: 'verdivia-falls',
        name: 'Verdivia Falls',
        category: 'Falls',
        barangay: 'Talbak',
        img: 'https://tse3.mm.bing.net/th/id/OIP.uXZq6WjhsPZIu2V7brK64QHaEK?r=0&pid=Api&P=0&h=180',
        shortDesc: 'DRT\'s adventure waterfall — cliff jumps, a wide pool, and bamboo rafts.',
        fullDesc: 'Named for its green ("verde") waters, Verdivia is DRT\'s adventure waterfall — cliff jumps for the thrill-seekers, a wide swimming pool for everyone else, and bamboo rafts drifting the calmer stretch downstream.',
        location: 'Barangay Talbak, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱10 per person, plus ₱200 per group for a guide',
        parkingFee: '₱30 per vehicle',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Cliff diving', 'Bamboo rafting', 'Swimming'],
        howToGetThere: 'Register in Talbak barangay hall, then a short walk to the falls.',
        contact: 'Talbak Barangay Tourism Desk',
        distanceFromTownCenter: '~14 km from the Municipal Hall',
        mapQuery: 'Verdivia Falls, Talbak, Doña Remedios Trinidad, Bulacan'
  },

    /*Cave*/
    




    /*Mountains*/
    {
        id: 'tila-pilon',
        name: 'Tila-Pilon Hills',
        category: 'Mountains',
        barangay: 'Kalawakan',
        img: 'https://tse3.mm.bing.net/th/id/OIP.IyRcFlaagJqaFXnnvg2slwHaEK?r=0&pid=Api&P=0&h=180',
        shortDesc: 'A ridgeline viewpoint known as the "Baguio of Bulacan."',
        fullDesc: 'A cool-climate ridgeline with sweeping views over the lowlands and neighboring provinces, best reached with a barangay guide for the marked trail.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        distanceFromTownCenter: '~18 km from the Municipal Hall',
        mapQuery: 'Tila-Pilon, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt.corona',
        name: 'MT. Corona',
        category: 'Mountains',
        barangay: 'Kalawakan',
        img: 'https://transitpinas.com/wp-content/uploads/2020/10/WipeOut56_14_2020_085617.534000_828682141826155-scaled.jpg',
        shortDesc: 'Mt. Corona — Bulacan’s breezy peak with Sierra Madre views."',
        fullDesc: 'A breezy ridgeline rising 612 meters above sea level, Mt. Corona rewards hikers with sweeping views of the Sierra Madre and Bulacan lowlands. Best explored with a local barangay guide, its marked trail offers both easy climbs for beginners and a tougher traverse toward the Sumacbao River for adventurers.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: '₱300 per guide',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        distanceFromTownCenter: '~50.1 km from the Municipal Hall',
        mapQuery: 'MT. Corona, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt.lawad',
        name: 'MT. Lawad',
        category: 'Mountains',
        barangay: 'Kalawakan',
        img: 'https://tse4.mm.bing.net/th/id/OIP.4kmKlKQGXZlGNNRYQzrWKwHaEK?r=0&pid=Api&P=0&h=180',
        shortDesc: 'Mt. Lawad — Sierra Madre’s hidden trail.',
        fullDesc: 'Mt. Lawad in DRT, Bulacan is a cool-climate forest peak with sweeping Sierra Madre views and frontier-style trails. Best explored with a barangay guide, it’s perfect for hikers seeking a raw, less-crowded adventure.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: '₱300-₱500 per guide',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        distanceFromTownCenter: '~28.6 km from the Municipal Hall',
        mapQuery: 'MT. Lawad, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt. brigino',
        name: 'MT. Brigino',
        category: 'Mountains',
        barangay: 'Sapang Bulac',
        img: 'https://i.ytimg.com/vi/XOW3nSD4ERc/maxresdefault.jpg',
        shortDesc: 'Mt. Brigino — Bulacan’s serene summit.',
        fullDesc: 'Mt. Brigino is a cool-climate peak in Doña Remedios Trinidad, offering forested trails and panoramic views of the Sierra Madre ridges. Best explored with a local barangay guide, it’s a serene alternative for hikers seeking a quieter, less-crowded climb.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'none',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        distanceFromTownCenter: '~9.8 km from the Municipal Hall',
        mapQuery: 'MT. Brigino, Sapang Bulac, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'kalinaw',
        name: 'Kalinaw Campsite',
        category: 'Camps',
        barangay: 'Kalawakan',
        img: 'https://tse2.mm.bing.net/th/id/OIP.gtQv2aQJza16sWtXBwYkFAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        shortDesc: 'Kalinaw Campsite — Find peace in the Sierra Madre.',
        fullDesc: 'Kalinaw Campsite is a peaceful mountain retreat in Doña Remedios Trinidad, surrounded by pine trees and cool Sierra Madre breezes. It’s a nature‑lover’s haven for camping, stargazing, and unwinding in a rustic, frontier setting.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'None',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Campsite', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        distanceFromTownCenter: '~26.8 km from the Municipal Hall',
        mapQuery: 'Space Camp, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
      id: 'puning-cave',
      name: 'Puning Cave',
      category: 'Caves',
      barangay: 'Bayabas',
      img: 'data:image/webp;base64,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',
      shortDesc: 'One of the most-visited caves in Central Luzon, known for its bat colonies and mineral formations.',
      fullDesc: 'A limestone cave at Sitio Tumana featuring dripstone and flowstone formations, home to an estimated population of thousands of fruit and insect bats. The site is ecologically sensitive and typically only open for guided visits during the dry season.',
      location: 'Barangay Bayabas, Doña Remedios Trinidad, Bulacan',
      entranceFee: '₱30 – ₱50 per person (VERIFY — general DRT cave/falls range)',
      parkingFee: 'VERIFY with barangay tourism desk',
      hours: 'Dry season only, daytime guided visits — VERIFY exact schedule',
      activities: ['Spelunking', 'Guided Tour', 'Photography'],
      howToGetThere: 'Register at the Bayabas barangay hall for a guide before entering the cave.',
      contact: 'Bayabas Barangay Tourism Desk',
      distanceFromTownCenter: '~5.1 km from the Municipal Hall',
      mapQuery: 'Puning Cave, Bayabas, Doña Remedios Trinidad, Bulacan'
    },


    /*Resorts */
    {
        id: 'caribbean-waves',
        name: 'Caribbean Waves Resort',
        category: 'Resorts',
        barangay: 'Pulong Sampalok',
        img: 'https://tse1.mm.bing.net/th/id/OIP.o98O490yPCc7-RgiprmmQQHaEK?r=0&pid=Api&P=0&h=180',
        shortDesc: 'A family-friendly swimming pool resort near the town center.',
        fullDesc: 'A relaxing swimming pool destination close to the Municipal Hall, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Pulong Sampalok, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱200 – ₱250 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 2 km from the town center; accessible by tricycle or private vehicle.',
        contact: 'Caribbean Waves Resort front desk',
        distanceFromTownCenter: '~2 km from the Municipal Hall',
        mapQuery: 'Caribbean Waves Resort, Pulong Sampaloc, Doña Remedios Trinidad, Bulacan'
  },



    {
        id: 'Mountainview',
        name: 'Mountainview Resort',
        category: 'Resorts',
        barangay: 'Sapang Bulac',
        img: 'https://th.bing.com/th/id/OIP.Y3QAgNzJCrH9CG08xqNg1QHaEK?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        shortDesc: 'A family-friendly swimming pool resort near the town center.',
        fullDesc: 'A relaxing swimming pool destination close to the Municipal Hall, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Sapang Bulac, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱200 – ₱250 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 7 km from the town center; accessible by tricycle or private vehicle.',
        contact: 'Caribbean Waves Resort front desk',
        distanceFromTownCenter: '~6.5km from the Municipal Hall',
        mapQuery: 'MOUNTAINVIEW RESORT, Sapang Bulac, Dona Remedios Trinidad, Bulacan'
  }
];

/*
   HOW TO GET THERE
*/
const ROUTE_STEPS = [
    {
        t: 'From Manila',
        d: 'Roughly 2–3 hours by car via NLEX, exiting toward San Miguel, then continuing on to DRT along the Eastern Bulacan Road.'
    },
    {
        t: 'By public transport',
        d: 'Take a bus bound for San Miguel, Bulacan, then transfer to a jeepney or tricycle heading into DRT proper or your target barangay.'
    },
    {
        t: 'By private vehicle',
        d: 'NLEX straight through to the Eastern Bulacan Road, with paved sections into Sapang Bulak and Camachile.'
    },
    {
        t: 'Once in DRT',
        d: 'Register at the barangay hall nearest your destination — this is also where you arrange a local guide.'
    }
];

/*
   FEES & INFORMATION
*/
const INFO_CARDS = [
    {
        t: 'Entrance fees',
        d: 'Typically ₱30–₱250 per attraction, paid at the barangay hall or resort entrance — bring small bills.',
        ic: 'ticket'
    },
    {
        t: 'Parking fees',
        d: 'Where available, parking runs ₱20–₱30 per vehicle at the jump-off point. Some spots have no vehicle access at all.',
        ic: 'car'
    },
    {
        t: 'Guide fees',
        d: 'Falls and caves generally require a local guide, ₱200–₱900 shared per group depending on the trail.',
        ic: 'guide'
    },
    {
        t: 'Opening hours',
        d: 'Most spots welcome visitors from early morning until mid-afternoon — plan to register by 7–8 AM.',
        ic: 'clock'
    },
    {
        t: 'Best time to visit',
        d: 'November to February, when cooler, drier weather makes trails and river crossings easier.',
        ic: 'sun'
    },
    {
        t: 'What to bring',
        d: 'Swimwear, a dry bag, hiking shoes with grip, sun protection, and cash for guides and entrance fees.',
        ic: 'bag'
    }
];
const RULES = [
  'Register with the barangay tourism desk before any trek or cave visit.',
  'Always go with a licensed local guide — several trails and cave systems are guided-only.',
  'Pack out everything you bring in; there are no waste bins at most falls and trails.',
  'Avoid trekking or river crossings during heavy rain — trails and rivers can rise quickly.',
  'Bring cash; most barangays and guides do not accept cards.',
  'Respect barangay curfews and closing times listed for each spot.'
];
/* ============================================================
   CONTACT
============================================================ */
const CONTACT_CARDS = [
    {
        label: 'Municipal Tourism Office',
        value: 'Municipal Hall, Pulong Sampalok, Doña Remedios Trinidad, Bulacan'
    },
    {
        label: 'Office hours',
        value: 'Monday – Friday, 8:00 AM – 5:00 PM'
    },
    {
        label: 'Trek registration',
        value: 'Available at each barangay tourism desk, including weekends'
    },
    {
        label: 'Email',
        value: 'tourism.drt@fanmade.com'
    }
];
