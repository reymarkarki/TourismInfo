const HERO_IMAGE = '';

const GALLERY_DATA = [
    { barangay: "Pulong Sampalok", spot: "Arko, DRT", src: "https://i.ytimg.com/vi/Yj9p-zYescc/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Arko, DRT", src: "https://i.ytimg.com/vi/MZWZ-pQmzGw/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Mama Piat", src: "https://i.ytimg.com/vi/yo_wubjH1UI/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Kape Piat", src: "https://i.ytimg.com/vi/QZcJ9ymmqRY/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Abo Spring", src: "https://i.ytimg.com/vi/dWgRt9s2DiY/maxresdefault.jpg" },
    { barangay: "Camachin", spot: "Candle Monument", src: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/763684857_1475524217955107_2975815000551628723_n.jpg?stp=dst-jpg_tt6&cstp=mx1640x924&ctp=s1640x924&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE9a5_9ocJ6tn8l4I8C-l3okk50l0e94eeSTnSXR73h53TmUX2VjrYDz-CT0akxCvRmNDPr_yGT2pirFZ8iW7dv&_nc_ohc=03O8TDG5I64Q7kNvwGR1amW&_nc_oc=AdqVzOFKFM6JCRT12FsGu4bPIMC5kDE_hqfTA4sQrcM2CK5QZsvOmn5nMIUO4X2nTQP-mnKNXKnzmSKo4nO_RzMs&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=X-gbHRA5Tm6B5x9haNrC2Q&_nc_ss=7b2a8&oh=00_AQLuBjBDvmuAWCwHNwUKw-fN04YiaVFaihqZDOYlIXkt9Q&oe=6AA95CFF" },
    { barangay: "Kalawakan", spot: "Sakbod Falls", src: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/139340834_162174625681869_6721321720128755992_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x608&ctp=s1080x608&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEuMY8CVEaaJono6E4fHSQN4Eyh3_PXY2LgTKHf89djYseiL_MzLw6IE0lz1CHizPEKdgjm1LV0dDRpWc5yU5HA&_nc_ohc=ghVDeBfvu8EQ7kNvwHISRM9&_nc_oc=Adp5rIyoFnTynmdTKnf2L-bRuJFbSt3Z-IXo9m0n1hTHZaLDgKCGn0Idd_k2pbXIMzZc34ZnAjoQ6opfDmLp7oPU&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=Q7SqtDztMRox0D0GxcsUmg&_nc_ss=7b2a8&oh=00_AQKaSO5_t5F-O2O2vopOLR_u5H9-gAEjElYgloFskKjWXQ&oe=6ACAFFB0" },
    { barangay: "Bayabas", spot: "Puning Cave", src: "https://i.ytimg.com/vi/TkX95o4Qfo0/maxresdefault.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Bayabas", spot: "Bayabas trail", src: "gallery/bayabas-1.jpg" },
    { barangay: "Sapang Bulac", spot: "Mountain View", src: "https://i.ytimg.com/vi/6w1A-W-A5dQ/maxresdefault.jpg" },
    { barangay: "Camachile", spot: "Secret Falls", src: "https://i.ytimg.com/vi/GaPwvEbljnM/maxresdefault.jpg"},
    { barangay: "Sapang Bulac", spot: "Hanging bridge", src: "gallery/sapang-bayan-1.jpg" },
    { barangay: "Talbak", spot: "Verdibia Falls", src: "https://i.ytimg.com/vi/4gpAh2J1nns/maxresdefault.jpg" },
];

const SPOTS = [
    /*Falls*/
    {
        id: 'secret-falls',
        name: 'Secret Falls',
        category: 'Falls',
        barangay: 'Camachile',
        img: 'https://i.ytimg.com/vi/GaPwvEbljnM/maxresdefault.jpg',
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
      img:'https://i.ytimg.com/vi/TkX95o4Qfo0/maxresdefault.jpg',
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
        img: 'https://i.ytimg.com/vi/Yj9p-zYescc/maxresdefault.jpg',
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
        img: 'https://i.ytimg.com/vi/6w1A-W-A5dQ/maxresdefault.jpg',
        shortDesc: 'A family-friendly swimming pool.',
        fullDesc: 'A relaxing swimming pool destination close to the Mt. Brigino, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Sapang Bulac, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱200 – ₱250 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 7 km from the town center; accessible by tricycle or private vehicle.',
        contact: 'Mountain View Resort front desk',
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
