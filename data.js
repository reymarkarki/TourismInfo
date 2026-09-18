
const GALLERY_DATA = [
    { barangay: "Pulong Sampalok", spot: "Carribean Resort", src: "images/carrebean/carrebean1.jpg" },
    { barangay: "Pulong Sampalok", spot: "Arko, DRT", src: "images/gallery/arko.jpg" },
    { barangay: "Pulong Sampalok", spot: "Mama Piat", src: "images/gallery/mamaPiat.jpg" },
    { barangay: "Pulong Sampalok", spot: "Cafe Piat", src: "images/gallery/cafePiat.jpg" },
    { barangay: "Pulong Sampalok", spot: "Abo Spring", src: "images/gallery/abo.jpg" },
    { barangay: "Camachin", spot: "Candle Monument", src: "images/gallery/candleMonument.jpg" },
    { barangay: "Kalawakan", spot: "Sakbod Falls", src: "images/gallery/sakbod.jpg" },
    { barangay: "Bayabas", spot: "Puning Cave", src: "images/gallery/puning.jpg" },
    { barangay: "Kabayunan", spot: "Kabayunin View Deck", src: 'images/gallery/kabayunan.jpg' },
    { barangay: "Camachile", spot: "Mandala Water Park", src: "images/gallery/mandala.jpg" },
    { barangay: "Sapang Bulak", spot: "Dream Land", src: "images/gallery/dreamland.jpg" },
    { barangay: "Camachin", spot: "13th Falls ", src: "images/gallery/13thFalls.jpg" },
    { barangay: "Camachin", spot: "Iket River Resort", src: "images/gallery/iketRiver.jpg" },
    { barangay: "Camachin", spot: "Mojako's Hills", src: "images/gallery/mojakoHills.jpg" },
    { barangay: "Talbak", spot: "143 Steps", src: "images/gallery/143steps.jpg" },
    { barangay: "Sapang Bulac", spot: "Mountain View", src: "images/gallery/mountainview.jpg" },
    { barangay: "Camachile", spot: "Secret Falls", src: "images/secretfall/secretfalls.jpg"},
    { barangay: "Sapang Bulac", spot: "Villa Andrea Resort", src: "images/gallery/villaAndrea.jpg" },
    { barangay: "Talbak", spot: "Verdivia Falls", src: "images/gallery/verdivia.jpg" },
];

const SPOTS = [
    /*Falls*/
    {
        id: 'secret-falls',
        name: 'Secret Falls',
        category: 'Falls',
        barangay: 'Camachile',
        img: 'images/secretfall/secretfalls.jpg',
        images: [
            'images/secretfall/secretfalls.jpg',
            'images/secretfall/secretfalls1.jpg',
            'images/secretfall/secretfalls2.jpg',
            'images/secretfall/secretfalls3.jpg',
            'images/secretfall/secretfalls4.jpg',
        ],
        shortDesc: 'A hidden waterfall wrapped in dense greenery, reached by a short, shaded trek.',
        fullDesc: 'A hidden waterfall wrapped in dense greenery — one of Bulacan\'s best-kept secrets. The trek in is short and shaded, and the pool at the bottom is calm enough for a long swim.',
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 – ₱90 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking'],
        howToGetThere: 'Register at the Camachile barangay hall, then a short guided trek to the falls.',
        contact: 'Camachile Barangay Tourism Desk',
        tourguide: '₱20 per head',
        facebook: 'https://www.facebook.com/people/Secret-FALLS/100063681378480/',
        distanceFromTownCenter: '~9 km from the Municipal Hall',
        mapQuery: 'Secret Falls, Camachile, Doña Remedios Trinidad, Bulacan'
},
    /*Resorts */
    {
        id: 'caribbean-waves',
        name: 'Caribbean Waves Resort',
        category: 'Resorts',
        barangay: 'Pulong Sampalok',
        img: 'images/carrebean/carrebean1.jpg',
        images: [
            'images/carrebean/carrebean1.jpg',
            'images/carrebean/carrebean2.jpg',
            'images/carrebean/carrebean3.jpg',
            'images/carrebean/carrebean4.jpg',
            'images/carrebean/carrebean5.jpg',
            'images/carrebean/carrebean6.jpg',
            
        ],
        shortDesc: 'A family-friendly swimming pool resort near the town center.',
        fullDesc: 'A relaxing swimming pool destination close to the Municipal Hall, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Pulong Sampalok, Doña Remedios Trinidad, Bulacan',
        entranceFee: `₱200 - ₱300 depends on the time` ,
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM - 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 2 km from the town center; accessible by tricycle or private vehicle.',
        contact: 'Caribbean Waves Resort front desk',
        facebook: 'https://www.facebook.com/CaribbeanResortBulacan',
        distanceFromTownCenter: '~2 km from the Municipal Hall',
        mapQuery: 'Caribbean Waves Resort, Pulong Sampaloc, Doña Remedios Trinidad, Bulacan'
    },
   
    {
        id: 'verdivia-falls',
        name: 'Verdivia Falls',
        category: 'Falls',
        barangay: 'Talbak',
        img: 'images/verdivia/verdivia.jpg',
        images:[
            'images/verdivia/verdivia.jpg',
            'images/verdivia/verdivia1.jpg',
            'images/verdivia/verdivia2.jpg',
            'images/verdivia/verdivia3.jpg',
            'images/verdivia/verdivia4.jpg',
        
        ],
        shortDesc: 'DRT\'s adventure waterfall — cliff jumps, a wide pool, and bamboo rafts.',
        fullDesc: 'Named for its green ("verde") waters, Verdivia is DRT\'s adventure waterfall — cliff jumps for the thrill-seekers, a wide swimming pool for everyone else, and bamboo rafts drifting the calmer stretch downstream.',
        location: 'Barangay Talbak, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱10 per person, plus ₱200 per group for a guide',
        parkingFee: '₱30 per vehicle',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Cliff diving', 'Bamboo rafting', 'Swimming'],
        howToGetThere: 'Register in Talbak barangay hall, then a short walk to the falls.',
        contact: 'Talbak Barangay Tourism Desk',
        facebook:'https://www.facebook.com/VerdiviaFalls/',
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
        img: 'images/tilaPilon/tilaPilon.jpg',
        images: [
            'images/tilaPilon/tilaPilon.jpg',
            'images/tilaPilon/tilaPilon1.jpg',
            'images/tilaPilon/tilaPilon2.jpg',
            'images/tilaPilon/tilaPilon3.jpg',
        ],
        shortDesc: 'A ridgeline viewpoint known as the "Baguio of Bulacan."',
        fullDesc: 'A cool-climate ridgeline with sweeping views over the lowlands and neighboring provinces, best reached with a barangay guide for the marked trail.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/Tilapilonhill/',
        distanceFromTownCenter: '~18 km from the Municipal Hall',
        mapQuery: 'Tila-Pilon, Kalawakan, Doña Remedios Trinidad, Bulacan'
    },
    {
        id: 'mt.secret',
        name: 'Mount Secret',
        category: 'Mountains',
        barangay: 'Camachile, So. Arm Strong',
        img: 'images/MT.SECRET/thumbnail mt secret.jpg', 
        images:[
           'images/MT.SECRET/thumbnail mt secret.jpg',
           'images/MT.SECRET/Mt.secret.jpg',
            'images/MT.SECRET/Mt(1).jpg',
            'images/MT.SECRET/Mt(2).jpg',
            'images/MT.SECRET/Mt(3).jpg',
            'images/MT.SECRET/Mt(4).jpg',      
        ],
        shortDesc: 'Mt. Secret — Bulacan’s breezy peak with Sierra Madre views."',
        fullDesc: 'A breezy ridgeline rising 612 meters above sea level, Mt. Corona rewards hikers with sweeping views of the Sierra Madre and Bulacan lowlands. Best explored with a local barangay guide, its marked trail offers both easy climbs for beginners and a tougher traverse toward the Sumacbao River for adventurers.',
        location: 'So. Arms Strong, Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: 'no official fee',
        parkingFee: 'None',
        tourguide: '₱300 per guide',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Near in Malangan Cave',
        contact: 'Camachile Barangay Tourism Desk',
        
        distanceFromTownCenter: '~4.9 km from the Municipal Hall',
        mapQuery: 'MT. Corona, Kalawakan, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'kabayunan',
        name: 'Kabayuan View Deck',
        category: 'Mountains',
        barangay: 'Kabayunan',
        img: 'images/kabayunanView/thumbnail kabayunan.jpg',
        images:[
            'images/kabayunanView/thumbnail kabayunan.jpg',
            'images/kabayunanView/K1.jpg',
            'images/kabayunanView/K2.jpg',
            'images/kabayunanView/K3.jpg',
            'images/kabayunanView/K4.jpg',
            'images/kabayunanView/Kabayunan fee.jpg',
        ],
        shortDesc: 'Kabayunan — Bulacan’s breezy peak with Sierra Madre views."',
        fullDesc: 'A breezy ridgeline rising 612 meters above sea level, Mt. Corona rewards hikers with sweeping views of the Sierra Madre and Bulacan lowlands. Best explored with a local barangay guide, its marked trail offers both easy climbs for beginners and a tougher traverse toward the Sumacbao River for adventurers.',
        location: 'Barangay Kabayunan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 Day Tour, ₱100 Over Night ',
        parkingFee: '₱10- ₱30',
        tourguide: 'none',
        hours: '6:00 AM –  5:00 PM, 5:00PM - 8:00 AM',
        activities: [ 'Photography', 'Viewpoint', 'Overnight Camping', ],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: "0964 192 1793",
        facebook:'https://www.facebook.com/kabayunanview/',
        distanceFromTownCenter: '~15.5 km from the Municipal Hall',
        mapQuery: 'Kabayunan View Deck, Kabayunan, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'mt.lawad',
        name: 'MT. Lawad',
        category: 'Mountains',
        barangay: 'Kalawakan',
        images:[
            'images/mtLawad/thumbnailLawad.jpg',
            'images/mtLawad/ML1.jpg',
            'images/mtLawad/ML2.jpg',
            'images/mtLawad/ML3.jpg',
            'images/mtLawad/ML4.jpg',
            'images/mtLawad/ML5.jpg',
        ],
        img: 'https://i.ytimg.com/vi/q7C5VhAAjj8/maxresdefault.jpg',
        shortDesc: 'Mt. Lawad — Sierra Madre’s hidden trail.',
        fullDesc: 'Mt. Lawad in DRT, Bulacan is a cool-climate forest peak with sweeping Sierra Madre views and frontier-style trails. Best explored with a barangay guide, it’s perfect for hikers seeking a raw, less-crowded adventure.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: '₱300-₱500 per guide',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: '0956 799 1913',
        facebook: 'https://www.facebook.com/mtlawadofficial/',
        distanceFromTownCenter: '~28.6 km from the Municipal Hall',
        mapQuery: 'MT. Lawad, Kalawakan, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'mt. brigino',
        name: 'MT. Brigino',
        category: 'Mountains',
        barangay: 'Sapang Bulac',
        img: 'images/mtBrigino/THUMBNAIL BRIGINO.jpg',
        images:[
            'images/mtBrigino/THUMBNAIL BRIGINO.jpg',
            'images/mtBrigino/MB1.jpg',
            'images/mtBrigino/MB2.jpg',
            'images/mtBrigino/MB3.jpg',
            'images/mtBrigino/MB4.jpg',
        ],
        shortDesc: 'Mt. Brigino — Bulacan’s serene summit.',
        fullDesc: 'Mt. Brigino is a cool-climate peak in Doña Remedios Trinidad, offering forested trails and panoramic views of the Sierra Madre ridges. Best explored with a local barangay guide, it’s a serene alternative for hikers seeking a quieter, less-crowded climb.',
        location: 'Barangay Sapang Bulak, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'none',
        hours: '5:00 PM – 12:00 PM, Best time to visit',
        activities: ['Photography', 'Viewpoint', '360° Mountain Peak View', 'Burn Fire'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: '0964 998 4381',
        facebook: 'https://www.facebook.com/MountBrigino/',
        distanceFromTownCenter: '~9.8 km from the Municipal Hall',
        mapQuery: 'MT. Brigino, Sapang Bulac, Doña Remedios Trinidad, Bulacan'
    },
    {
        id: 'kalinaw',
        name: 'Kalinaw Campsite',
        category: 'Camps',
        img: 'images/kalinaw/kalinaw.jpg',
        images:[
            'images/kalinaw/kalinaw.jpg',
            'images/kalinaw/KK1.jpg',
            'images/kalinaw/KK2.jpg',
            'images/kalinaw/KK3.jpg',
            'images/kalinaw/KK4.jpg',
        ],
        barangay: 'Kalawakan',
        img: 'https://tse2.mm.bing.net/th/id/OIP.gtQv2aQJza16sWtXBwYkFAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        shortDesc: 'Kalinaw Campsite — Find peace in the Sierra Madre.',
        fullDesc: 'Kalinaw Campsite is a peaceful mountain retreat in Doña Remedios Trinidad, surrounded by pine trees and cool Sierra Madre breezes. It’s a nature‑lover’s haven for camping, stargazing, and unwinding in a rustic, frontier setting.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'None',
        hours: '6:00 PM – 3:00 AM, Night',
        activities: ['Campsite', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/KalinawsaKalawakanCampsiteDRTBulacan/',
        distanceFromTownCenter: '~26.8 km from the Municipal Hall',
        mapQuery: 'Space Camp, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
      id: 'puning-cave',
      name: 'Puning Cave',
      category: 'Caves',
      barangay: 'Bayabas',
      img:'images/puning/puning.jpg',
      images:[
          'images/puning/puning.jpg',
          'images/puning/PC1.jpg',
          'images/puning/PC2.jpg',
          'images/puning/PC3.jpg',
          'images/puning/PC4.jpg',
      ],
      shortDesc: 'One of the most-visited caves in Central Luzon, known for its bat colonies and mineral formations.',
      fullDesc: 'A limestone cave at Sitio Tumana featuring dripstone and flowstone formations, home to an estimated population of thousands of fruit and insect bats. The site is ecologically sensitive and typically only open for guided visits during the dry season.',
      location: 'Barangay Bayabas, Doña Remedios Trinidad, Bulacan',
      entranceFee: '₱30 – ₱50 per person',
      parkingFee: 'VERIFY with barangay bayabas tourism desk',
      hours: '4:00 AM - 7:00 PM, daytime guided tour',
      activities: ['Spelunking', 'Guided Tour', 'Photography'],
      howToGetThere: 'Register at the Bayabas barangay hall for a guide before entering the cave.',
      contact: 'Bayabas Barangay Tourism Desk',
      facebook: 'https://www.facebook.com/profile.php/?id=100090761324798',
      distanceFromTownCenter: '~5.1 km from the Municipal Hall',
      mapQuery: 'Puning Cave, Bayabas, Doña Remedios Trinidad, Bulacan'
    },


    
     {
        id: 'talon-pari',
        name: 'Talon Pari Falls',
        category: 'Falls',
        barangay: 'Kalawakan',
        img: 'images/talonPari/talon.jpg',
         images:[
            'images/talonPari/talon.jpg',
            'images/talonPari/TP1.jpg',
            'images/talonPari/TP2.jpg',
            'images/talonPari/TP3.jpg',
           ],
        shortDesc: 'A quieter waterfall with clear pools and a scenic mountain backdrop.',
        fullDesc: 'A hidden natural gem — a waterfall surrounded by lush forest, reached by a short hike or motorbike. Known for its clear pools, relaxing atmosphere, and mountain backdrop.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱30 – ₱50 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography'],
        howToGetThere: 'Ask your barangay guide to include it alongside a nearby falls trip.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/people/TALON-PARI-FALLS/61564140403589/',
        distanceFromTownCenter: '~16 km from the Municipal Hall',
        mapQuery: 'Talon Pari Falls, Kalawakan, Doña Remedios Trinidad, Bulacan'
  },



    {
        id: 'Mountainview',
        name: 'Mountainview Resort',
        category: 'Resorts',
        barangay: 'Sapang Bulac',
        img: 'images/mountainView/mountainview.jpg',
        images:[
            'images/mountainView/mountainview.jpg',
            'images/mountainView/mv1.jpg',
            'images/mountainView/mv2.jpg',
            'images/mountainView/mv3.jpg',
            'images/mountainView/mv4.jpg',
        ],
        shortDesc: 'A family-friendly swimming pool.',
        fullDesc: 'A relaxing swimming pool destination close to the Mt. Brigino, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Sapang Bulac, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱100 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 7 km from the town center; accessible by tricycle or private vehicle.',
        contact: '0995 661 8403',
        facebook: 'https://www.facebook.com/Mountainfarm/',
        distanceFromTownCenter: '~6.5km from the Municipal Hall',
        mapQuery: 'MOUNTAINVIEW RESORT, Sapang Bulac, Dona Remedios Trinidad, Bulacan'
  }
];

/*
how to get there
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
  fees
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
  'Always go with a licensed local guide, several trails and cave systems are guided-only.',
  'Pack out everything you bring in; there are no waste bins at most falls and trails.',
  'Avoid trekking or river crossings during heavy rain, trails and rivers can rise quickly.',
  'Bring cash, most barangays and guides do not accept cards.',
  'Respect barangay curfews and closing times listed for each spot.'
];
/* 
   contact
*/
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
