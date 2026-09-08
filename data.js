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
  {
    id: 'puning-cave',
    name: 'Puning Cave',
    category: 'Cave',
    barangay: 'Bayabas',
    img: 'https://tse4.mm.bing.net/th/id/OIP.dfAKlQDTWra1GjAg8uW7GQHaEK?r=0&pid=Api&P=0&h=180',
    shortDesc: 'A rugged cavern with rock formations, a short rainforest trek, and a small waterfall.',
    fullDesc: 'A large natural cavern known for its stalactites and stalagmites, a refreshing small waterfall, and a short rainforest trek leading to its entrance. Guided-only, aimed at hikers and spelunkers.',
    location: 'Barangay Bayabas, Doña Remedios Trinidad, Bulacan',
    entranceFee: '₱50 – ₱100 per person',
    parkingFee: 'None',
    hours: '7:00 AM – 3:00 PM, dry season only',
    activities: ['Spelunking', 'Trekking', 'Photography'],
    howToGetThere: 'Guided-only; arrange through the Bayabas barangay tourism desk in advance.',
    contact: 'Bayabas Barangay Tourism Desk',
    distanceFromTownCenter: '~12 km from the Municipal Hall',
    mapQuery: 'Puning Cave, Bayabas, Doña Remedios Trinidad, Bulacan'
  },
  
    
    
    
    /*Mountains*/
  {
    id: 'tila-pilon',
    name: 'Tila-Pilon Hills',
    category: 'Mountain',
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
    
    
    
    
    /*Resorts */
  {
    id: 'caribbean-waves',
    name: 'Caribbean Waves Resort',
    category: 'Resort',
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
    category: 'Resort',
    barangay: 'Sapang Bulac',
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
  }
];

/*
   HOW TO GET THERE
*/
const ROUTE_STEPS = [
  { t: 'From Manila', d: 'Roughly 2–3 hours by car via NLEX, exiting toward San Miguel, then continuing on to DRT along the Eastern Bulacan Road.' },
  { t: 'By public transport', d: 'Take a bus bound for San Miguel, Bulacan, then transfer to a jeepney or tricycle heading into DRT proper or your target barangay.' },
  { t: 'By private vehicle', d: 'NLEX straight through to the Eastern Bulacan Road, with paved sections into Sapang Bulak and Camachile.' },
  { t: 'Once in DRT', d: 'Register at the barangay hall nearest your destination — this is also where you arrange a local guide.' }
];

/*
   FEES & INFORMATION
*/
const INFO_CARDS = [
  { t: 'Entrance fees', d: 'Typically ₱30–₱250 per attraction, paid at the barangay hall or resort entrance — bring small bills.', ic: 'ticket' },
  { t: 'Parking fees', d: 'Where available, parking runs ₱20–₱30 per vehicle at the jump-off point. Some spots have no vehicle access at all.', ic: 'car' },
  { t: 'Guide fees', d: 'Falls and caves generally require a local guide, ₱200–₱900 shared per group depending on the trail.', ic: 'guide' },
  { t: 'Opening hours', d: 'Most spots welcome visitors from early morning until mid-afternoon — plan to register by 7–8 AM.', ic: 'clock' },
  { t: 'Best time to visit', d: 'November to February, when cooler, drier weather makes trails and river crossings easier.', ic: 'sun' },
  { t: 'What to bring', d: 'Swimwear, a dry bag, hiking shoes with grip, sun protection, and cash for guides and entrance fees.', ic: 'bag' }
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
  { label: 'Municipal Tourism Office', value: 'Municipal Hall, Pulong Sampalok, Doña Remedios Trinidad, Bulacan' },
  { label: 'Office hours', value: 'Monday – Friday, 8:00 AM – 5:00 PM' },
  { label: 'Trek registration', value: 'Available at each barangay tourism desk, including weekends' },
  { label: 'Email', value: 'tourism.drt@fanmade.com' }
];