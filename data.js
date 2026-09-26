const GALLERY_DATA = [
    { barangay: "Pulong Sampalok", spot: "Carribean Resort", src: "resorts/carrebean/carrebean1.jpg" },
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
    { barangay: "Sapang Bulac", spot: "Mountain View", src: "resorts/mountainView/mountainview.jpg" },
    { barangay: "Camachile", spot: "Secret Falls", src: "falls/secretfall/secretfalls.jpg"},
    { barangay: "Sapang Bulac", spot: "Villa Andrea Resort", src: "images/gallery/villaAndrea.jpg" },
    { barangay: "Talbak", spot: "Verdivia Falls", src: "images/gallery/verdivia.jpg" },
];

const SPOTS = [
    /*Falls*/
    {
        id: 'secret-falls',
        name: 'Secret Falls',
        categories: ['Falls'],
        barangay: 'Camachile',
        img: 'falls/secretfall/secretfalls.jpg',
        images: [
            'falls/secretfall/secretfalls.jpg',
            'falls/secretfall/secretfalls1.jpg',
            'falls/secretfall/secretfalls2.jpg',
            'falls/secretfall/secretfalls3.jpg',
            'falls/secretfall/secretfalls4.jpg',
        ],
        shortDesc: 'A hidden waterfall wrapped in dense greenery, reached by a short, shaded trek.',
        fullDesc: 'A hidden waterfall wrapped in dense greenery, one of Bulacan\'s best-kept secrets. The trek in is short and shaded, and the pool at the bottom is calm enough for a long swim.',
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 – ₱90 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking'],
        howToGetThere: 'Register at the Camachile barangay hall, then a short guided trek to the falls.',
        contact: 'Camachile Barangay Tourism Desk',
        tourguide: '₱20 per head',
        facebook: 'https://www.facebook.com/people/Secret-FALLS/100063681378480/',
        distanceFromTownCenter: '~5 km from the Municipal Hall',
        rules: ["Wear a life vest or be a confident swimmer before entering the pool.", "No littering \u2014 bring your trash back down with you.", "Trail can be slippery after rain; wear shoes with good grip."],
        mapQuery: 'Secret Falls, Camachile, Doña Remedios Trinidad, Bulacan'
},
    /*Resorts */
    {
        id: 'caribbean-waves',
        name: 'Caribbean Waves Resort',
        categories: ['Resorts'],
        barangay: 'Pulong Sampalok',
        img: 'resorts/carrebean/carrebean1.jpg',
        images: [
            'resorts/carrebean/carrebean1.jpg',
            'resorts/carrebean/carrebean2.jpg',
            'resorts/carrebean/carrebean3.jpg',
            'resorts/carrebean/carrebean4.jpg',
            'resorts/carrebean/carrebean5.jpg',
            'resorts/carrebean/carrebean6.jpg', 
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
        rules: ["Children must be supervised by an adult at all times in the pool area.", "Outside food and drinks may not be allowed \u2014 check with the front desk.", "Life vests are recommended for non-swimmers."],
        mapQuery: 'Caribbean Waves Resort, Pulong Sampaloc, Doña Remedios Trinidad, Bulacan'
    },
   
    {
        id: 'verdivia-falls',
        name: 'Verdivia Falls',
        categories: ['Falls'],
        barangay: 'Talbak',
        img: 'falls/verdivia/verdivia.jpg',
        images:[
            'falls/verdivia/verdivia.jpg',
            'falls/verdivia/verdivia1.jpg',
            'falls/verdivia/verdivia2.jpg',
            'falls/verdivia/verdivia3.jpg',
            'falls/verdivia/verdivia4.jpg',
        
        ],
        shortDesc: 'DRT\'s adventure waterfall: cliff jumps, a wide pool, and bamboo rafts.',
        fullDesc: 'Named for its green ("verde") waters, Verdivia is DRT\'s adventure waterfall. Cliff jumps for the thrill-seekers, a wide swimming pool for everyone else, and bamboo rafts drifting the calmer stretch downstream.',
        location: 'Barangay Talbak, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱10 per person, plus ₱200 per group for a guide',
        parkingFee: '₱30 per vehicle',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Cliff diving', 'Bamboo rafting', 'Swimming'],
        howToGetThere: 'Register in Talbak barangay hall, then a short walk to the falls.',
        contact: 'Talbak Barangay Tourism Desk',
        facebook:'https://www.facebook.com/VerdiviaFalls/',
        distanceFromTownCenter: '~14 km from the Municipal Hall',
        rules: ["Cliff jumping is only allowed in the marked, guide-approved spot.", "Check water level with your guide before diving \u2014 conditions change after rain.", "Bamboo rafts are guide-operated; do not paddle out on your own."],
        mapQuery: 'Verdivia Falls, Talbak, Doña Remedios Trinidad, Bulacan'
  },

    /*Cave*/
    




    /*Mountains*/
    {
        id: 'tila-pilon',
        name: 'Tila-Pilon Hills',
        categories: ['Mountains'],
        barangay: 'Kalawakan',
        img: 'mountain/tilaPilon/tilaPilon.jpg',
        images: [
            'mountain/tilaPilon/tilaPilon.jpg',
            'mountain/tilaPilon/tilaPilon1.jpg',
            'mountain/tilaPilon/tilaPilon2.jpg',
            'mountain/tilaPilon/tilaPilon3.jpg',
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
        rules: ["A barangay guide is required for the marked trail.", "Trek may be called off during heavy rain or storm warnings \u2014 check with the barangay hall first.", "Bring enough water; there are no stores along the ridge."],
        mapQuery: 'Tila-Pilon, Kalawakan, Doña Remedios Trinidad, Bulacan'
    },
    {
        id: 'mt.secret',
        name: 'Mount Secret',
        categories: ['Mountains'],
        barangay: 'Camachile, So. Arm Strong',
        img: 'mountain/MT.SECRET/thumbnail mt secret.jpg', 
        images:[
           'mountain/MT.SECRET/thumbnail mt secret.jpg',
           'mountain/MT.SECRET/Mt.secret.jpg',
            'mountain/MT.SECRET/Mt(1).jpg',
            'mountain/MT.SECRET/Mt(2).jpg',
            'mountain/MT.SECRET/MT(3).jpg',
            'mountain/MT.SECRET/Mt(4).jpg',      
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
        rules: ["A local guide is strongly recommended, especially for the traverse toward Sumacbao River.", "Best attempted in dry weather; the trail can be hard to follow when overgrown.", "Inform the barangay tourism desk of your itinerary before heading out."],
        mapQuery: 'MT. Corona, Kalawakan, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'angeland',
        name: 'Angeland Kareta Falls',
        categories: ['Falls'],
        barangay: 'Camachile',
        img: 'falls/angeland/angeland.jpg',
        images: [
            'falls/angeland/angeland.jpg',
            'falls/angeland/angeland1.jpg',
            'falls/angeland/angeland2.webp',
            'falls/angeland/angeland3.jpg',
            'falls/angeland/angeland4.jpg',
        ],
        shortDesc: 'Looking for a quick escape from the city? Tara na sa Angeland Kareta Falls Nature Park sa DRT, Bulacan!',
        fullDesc: 'A hidden waterfall wrapped in dense greenery, one of Bulacan\'s best-kept secrets. The trek in is short and shaded, and the pool at the bottom is calm enough for a long swim.',
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: '₱20 motor',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking'],
        howToGetThere: 'Register at the Camachile barangay hall, then a short guided trek to the falls.',
        contact: ['Email: angeland.011l@gmail.com <br> No: 0917 152 1126'],
        tourguide: '₱300 per group',
        facebook: 'https://www.facebook.com/AngelandKaretaFallsNatureParkOfficialPage/',
        distanceFromTownCenter: '~5.5 km from the Municipal Hall',
        rules: ["Register and pay fees at the barangay hall before entering the park.", "Keep to the designated swimming area.", "No glass containers allowed near the falls."],
        mapQuery: 'Angeland, Camachile, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'mandala',
        name: `Antonio's Mandala Nature Park`,
        categories: ['Falls'],
        barangay: 'Camachile',
        img: 'falls/mandala/mandala.jpg',
        images: [
            'falls/mandala/mandala.jpg',
            'falls/mandala/mandala1.jpg',
            'falls/mandala/mandala2.jpg',
            'falls/mandala/mandala3.jpg',
            'falls/mandala/mandala4.jpg',
        ],
        shortDesc: '',
        fullDesc: `Mandala Falls is a hidden 3-meter waterfall located in Antonio's Nature Park, Doña Remedios Trinidad, Bulacan, offering a serene nature escape with a small entry fee.`,
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: '₱20 motor',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking', 'Camping'],
        howToGetThere: 'Register at the Camachile barangay hall, then a short guided trek to the falls.',
        tourguide: '₱300 per group',
        facebook: 'https://www.facebook.com/mandalawaterfallsdrt/',
        distanceFromTownCenter: '~5.6 km from the Municipal Hall',
        rules: ["Camping is only allowed in designated areas \u2014 ask the caretaker on arrival.", "Put out campfires completely before leaving or sleeping.", "Bring out all your trash; there is no regular collection at the site."],
        mapQuery: 'Mandala Falls, Camachile, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'kabayunan',
        name: 'Kabayuan View Deck',
        categories: ['Mountains'],
        barangay: 'Kabayunan',
        img: 'mountain/kabayunanView/thumbnail kabayunan.jpg',
        images:[
            'mountain/kabayunanView/thumbnail kabayunan.jpg',
            'mountain/kabayunanView/K1.jpg',
            'mountain/kabayunanView/K2.jpg',
            'mountain/kabayunanView/K3.jpg',
            'mountain/kabayunanView/K4.jpg',
            'mountain/kabayunanView/Kabayunan fee.jpg',
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
        rules: ["Overnight campers must register in advance at the barangay hall.", "Keep noise down after dark out of respect for other campers.", "Secure tents well \u2014 the view deck can get windy at night."],
        mapQuery: 'Kabayunan View Deck, Kabayunan, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'mt.lawad',
        name: 'MT. Lawad',
        categories: ['Mountains'],
        barangay: 'Kalawakan',
        img:'mountain/mtLawad/thumbnailLawad.jpg',
        images:[
            'mountain/mtLawad/thumbnailLawad.jpg',
            'mountain/mtLawad/ML1.jpg',
            'mountain/mtLawad/ML2.jpg',
            'mountain/mtLawad/ML3.jpg',
            'mountain/mtLawad/ML4.jpg',
            'mountain/mtLawad/ML5.jpg',
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
        rules: ["A guide is required; the trail is not fully marked.", "Not recommended during typhoon season \u2014 river crossings can be dangerous.", "Start early to avoid being caught on the ridge after dark."],
        mapQuery: 'MT. Lawad, Kalawakan, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'mt. brigino',
        name: 'MT. Brigino',
        categories: ['Mountains'],
        barangay: 'Sapang Bulac',
        img: 'mountain/mtBrigino/THUMBNAIL BRIGINO.jpg',
        images:[
            'mountain/mtBrigino/THUMBNAIL BRIGINO.jpg',
            'mountain/mtBrigino/MB1.jpg',
            'mountain/mtBrigino/MB2.jpg',
            'mountain/mtBrigino/MB3.jpg',
            'mountain/mtBrigino/MB4.jpg',
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
        rules: ["Campfires must be supervised and fully extinguished before leaving.", "Coordinate with the barangay guide for the best arrival time.", "Bring a flashlight or headlamp for the late-afternoon hike."],
        mapQuery: 'MT. Brigino, Sapang Bulac, Doña Remedios Trinidad, Bulacan'
    },
    {
        id: 'kalinaw',
        name: 'Kalinaw Campsite',
        categories: ['Camps'],
        img: 'camp/kalinaw/kalinaw.jpg',
        images:[
            'camp/kalinaw/kalinaw.jpg',
            'camp/kalinaw/KK1.jpg',
            'camp/kalinaw/KK2.jpg',
            'camp/kalinaw/KK3.jpg',
            'camp/kalinaw/KK4.jpg',
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
        rules: ["Reserve your slot with the barangay hall before heading up.", "Practice Leave No Trace \u2014 pack out everything you bring in.", "Nights can get cold; bring appropriate camping gear."],
        mapQuery: 'Space Camp, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
      id: 'puning-cave',
      name: 'Puning Cave',
      categories: ['Caves'],
      barangay: 'Bayabas',
      img:'cave/puning/puning.jpg',
      images:[
          'cave/puning/puning.jpg',
          'cave/puning/PC1.jpg',
          'cave/puning/PC2.jpg',
          'cave/puning/PC3.jpg',
          'cave/puning/PC4.jpg',
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
      rules: ["Guided entry only — the cave is closed without a barangay guide.", "Do not touch or disturb the bat colonies or rock formations.", "Open seasonally (dry season); confirm availability before visiting."],
      mapQuery: 'Puning Cave, Bayabas, Doña Remedios Trinidad, Bulacan'
    },
    {
        id: '13th-falls',
        name: '13th Falls',
        categories: ['Falls'],
        barangay: 'Camachin',
        img: 'falls/13thFalls/13thfalls.png',
        images: [
            'falls/13thFalls/13thfalls.png',
            'falls/13thFalls/13thfalls3.jpg',
            'falls/13thFalls/13thfalls4.jpeg',
            'falls/13thFalls/13thfalls5.jpeg',
            
        ],
        shortDesc: 'A hidden waterfall wrapped in dense greenery, reached by a short, shaded trek.',
        fullDesc: 'A hidden waterfall wrapped in dense greenery, one of Bulacan\'s best-kept secrets. The trek in is short and shaded, and the pool at the bottom is calm enough for a long swim.',
        location: 'Barangay Camachin, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 – ₱90 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking'],
        howToGetThere: 'Register at the Camachin barangay hall, then a short guided trek to the falls.',
        contact: 'Camachin Barangay Tourism Desk',
        tourguide: '₱150 per head',
        facebook: 'https://www.facebook.com/DRTBULACAN13falls/',
        distanceFromTownCenter: '~23.7 km from the Municipal Hall',
        rules: ["Register at the barangay hall and go with a guide.", "Avoid swimming during or right after heavy rain.", "Bring back all trash \u2014 there are no bins on the trail."],
        mapQuery: '13th Falls, Camachin, Doña Remedios Trinidad, Bulacan'
},
    {
        id: 'monument-candle',
        name: 'Monument Candle',
        categories: ['Historical'],
        barangay: 'Camachin',
        img: 'images/gallery/candleMonument.jpg',
        images: [
            'images/gallery/candleMonument.jpg',
            'images/candle/candle2.jpg',
            'images/candle/candle1.jpg',
            'images/candle/candle3.jpeg',
            
        ],
        shortDesc: 'The monument stands as a historical marker and symbol of remembrance for the lives lost during a battle against guerrillas in 1938',
        fullDesc: ' Perched high on the mountain peak, it offers a breathtaking 360-degree panoramic view of the surrounding terrain, stretching across parts of Bulacan and neighboring areas like Pampanga and Metro Manila on clear days.',
        location: 'Barangay Camachin, Doña Remedios Trinidad, Bulacan',
        entranceFee: '60 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Hiking', 'Camping', 'Trekking'],
        howToGetThere: 'Register at the Camachin barangay hall, then a short guided trek to the falls.',
        contact: '0965 665 6349',
        tourguide: '₱150 per head',
        facebook: 'https://www.facebook.com/13thfallsCandle/',
        distanceFromTownCenter: '~23.7 km from the Municipal Hall',
        rules: ["Be respectful \u2014 the monument honors those who died in the 1938 battle.", "Photography is welcome, but avoid climbing on the structure.", "Trail up can be steep; wear proper footwear."],
        mapQuery: 'Monuument Candle, Camachin, Doña Remedios Trinidad, Bulacan'
},  
    {
        id: 'talon-pari',
        name: 'Talon Pari Falls',
        categories: ['Falls'],
        barangay: 'Kalawakan',
        img: 'falls/talonPari/talon.jpg',
         images:[
            'falls/talonPari/talon.jpg',
            'falls/talonPari/TP1.jpg',
            'falls/talonPari/TP2.jpg',
            'falls/talonPari/TP3.jpg',
           ],
        shortDesc: 'A quieter waterfall with clear pools and a scenic mountain backdrop.',
        fullDesc: 'A waterfall surrounded by lush forest, reached by a short hike or motorbike. Known for its clear pools, relaxing atmosphere, and mountain backdrop.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱30 – ₱50 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography'],
        howToGetThere: 'Ask your barangay guide to include it alongside a nearby falls trip.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/people/TALON-PARI-FALLS/61564140403589/',
        distanceFromTownCenter: '~16 km from the Municipal Hall',
        rules: ["A guide from the barangay hall is recommended for the trail.", "Pools can rise quickly after rain \u2014 check conditions before swimming."],
        mapQuery: 'Talon Pari Falls, Kalawakan, Doña Remedios Trinidad, Bulacan'
  },
    {
        id: 'Mountainview',
        name: 'Mountainview Resort',
        categories: ['Resorts'],
        barangay: 'Sapang Bulac',
        img: 'resorts/mountainView/mountainview.jpg',
        images:[
            'resorts/mountainView/mountainview.jpg',
            'resorts/mountainView/mv1.jpg',
            'resorts/mountainView/mv2.jpg',
            'resorts/mountainView/MV3.jpg',
            'resorts/mountainView/mv4.jpg',
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
        rules: ["Supervise children near the pool at all times.", "Respect the resort's posted hours and house rules."],
        mapQuery: 'MOUNTAINVIEW RESORT, Sapang Bulac, Dona Remedios Trinidad, Bulacan'
  },
    {
        id: 'simbahang-bato',
        name: 'Simbahang Bato',
        categories: ['Caves', 'Historical'],
        barangay: 'Camachile',
        img: 'mountain/tilaPilon/tilaPilon.jpg',
        images: [
            'mountain/tilaPilon/tilaPilon.jpg',
            'mountain/tilaPilon/tilaPilon1.jpg',
            'mountain/tilaPilon/tilaPilon2.jpg',
            'mountain/tilaPilon/tilaPilon3.jpg',
        ],
        shortDesc: 'A hidden shrine carved by nature.',
        fullDesc: 'A cave with rugged rock formations, housing an image of the Nazareno. Discovered in the late 1970s by marble cutters from Bicol. Now a devotion site and nature attraction.',
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        tourguide: '₱300 per guide (covers up to 5 pax)',
        parkingFee: '₱20 (motor), ₱50(car)',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Cave', 'Prayer/devotion'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Camcahile Barangay Tourism Desk',
        facebook: null,
        distanceFromTownCenter: '~18 km from the Municipal Hall',
        rules: ["This is an active devotion site \u2014 keep quiet and be respectful near the shrine.", "A guide is required; the cave floor can be uneven and slippery.", "Wear closed shoes suited for rocky terrain."],
        mapQuery: 'Simbahang Bato, Camachile, Doña Remedios Trinidad, Bulacan'
    },
];

/*
how to get there
*/
const ROUTE_STEPS = [
    {
        t: 'From Manila',
        d: 'Roughly 2–3 hours by car via NLEX, exiting at Sta. Rita or Bocaue, then continuing through Norzagaray or Angat toward DRT\'s Poblacion in Barangay Pulong Sampalok.'
    },
    {
        t: 'By public transport',
        d: 'Take a Norzagaray- or Angat bus or van from Cubao, then transfer to a jeepney or tricycle heading into DRT proper or your target barangay.'
    },
    {
        t: 'By private vehicle',
        d: 'From NLEX, follow the road through Norzagaray (via Brgy. Matictic) or Angat into DRT — both routes lead into the municipality, with the Norzagaray side closer to Bayabas.'
    },
    {
        t: 'Once in DRT',
        d: 'Register at the barangay hall nearest your destination — this is also where you arrange a local guide and pay any entrance fee.'
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
        d: 'A local guide is required for most falls and caves, typically ₱150–₱500, shared by a group of 5–6, arranged at the barangay hall.',
        ic: 'guide'
    }, {
        t: 'Opening hours',
        d: 'Most spots welcome visitors from early morning until mid-afternoon. Plan to register by 7–8 AM so you\'re back before dark.',
        ic: 'clock'
    }, {
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
  'Always go with a licensed local guide. Several trails and cave systems are guided-only.',
  'Avoid trekking or river crossings during heavy rain. Trails and rivers can rise quickly.',
  'Leave No Trace.',
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

/*
  tourism circuits — each stop is either the starting point ({type:'start'})
  or a reference to a spot already defined in SPOTS ({type:'spot', id:'...'}).
  Distances/images/names are pulled live from SPOTS, so editing a spot above
  automatically updates any circuit that references it.
*/
const CIRCUIT_START = {
    type: 'start',
    label: 'DRT Municipal Hall',
    mapQuery: 'Municipal Hall, Pulong Sampalok, Doña Remedios Trinidad, Bulacan'
};

const CIRCUITS = [
    {
        id: 'cave-highlands',
        name: 'DRT Cave & Highlands Circuit',
        shortDesc: 'Explore the beauty of caves and the high view in the mountains.',
        img: 'circuit/mountains.png',
        stops: [
            CIRCUIT_START,
            { type: 'spot', id: 'puning-cave' },
            { type: 'spot', id: 'simbahang-bato' },
            { type: 'spot', id: 'talon-pari' },
            { type: 'spot', id: 'kabayunan' },
            { type: 'spot', id: 'mt.lawad' }
        ],
        expectations: 'A full day looping from the town center into Bayabas for the cave, then east into Kalawakan for a falls stop, a viewdeck, and a forest peak. Expect a mix of easy walks and a longer guided hike on the last stretch.',
        whatToBring: [
            'Cash for entrance & guide fees at each barangay hall',
            'Trekking shoes with good grip',
            'A flashlight or headlamp for the cave',
            'A dry bag and swimwear for Talon Pari Falls',
            'Water and trail snacks'
        ],
        whereToSleep: [
            'Kabayunan View Deck — overnight camping, ₱100',
            'Kalinaw Campsite, Kalawakan — tents, reserve at the barangay hall'
        ],
        whyChoose: 'For visitors who want one circuit that covers a cave, a waterfall, a viewpoint, and a mountain peak without backtracking to the town center between stops.',
    },
    {
        id: 'falls-mountains',
        name: 'DRT Falls & Mountains Circuit',
        shortDesc: 'Explore the beauty of the falls and the high view in the mountains.',
        img:'circuit/camachile-circuit.png',
        stops: [
            CIRCUIT_START,
            { type: 'spot', id: 'secret-falls' },
            { type: 'spot', id: 'mt.secret' },
            { type: 'spot', id: 'angeland' },
            { type: 'spot', id: 'mandala' }
        ],
        expectations: 'A Camachile-barangay loop stringing together two waterfalls and a mountain peak, all within a few kilometers of each other — a gentler day than the cave circuit, with shorter treks between stops.',
        whatToBring: [
            'Cash for entrance & guide fees',
            'Swimwear and a dry bag',
            'Trekking shoes for Mount Secret',
            'Sun protection — most of the day is outdoors'
        ],
        whereToSleep: [
            "Antonio's Mandala Nature Park — camping allowed in designated areas"
        ],
        whyChoose: 'For visitors who want falls, swimming, and a mountain viewpoint in one barangay, with less travel time between stops than the cave circuit.'
    }
];