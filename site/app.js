const assets = {
  geese: "./assets/snow-geese-gary-stolz-usfws-1800.jpg",
  cranes: "./assets/sandhill-cranes-ryan-hagerty-usfws-1800.jpg",
  flyout: "./assets/snow-geese-flyout-lynne-braden-usfws-1800.jpg",
};

const sources = [
  {
    topic: "Winter bird timing",
    title: "USFWS species and seasons",
    url: "https://www.fws.gov/refuge/bosque-del-apache/species",
    checked: "2026-06-03",
  },
  {
    topic: "Access, fees, hours",
    title: "USFWS Visit Us",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us",
    checked: "2026-06-03",
  },
  {
    topic: "Auto tour",
    title: "USFWS Auto Tour",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/activities/auto-tour",
    checked: "2026-06-03",
  },
  {
    topic: "Rules",
    title: "USFWS Rules and Policies",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/rules-policies",
    checked: "2026-06-03",
  },
  {
    topic: "Map pins",
    title: "OpenStreetMap / Overpass",
    url: "https://overpass-turbo.eu/",
    checked: "2026-06-03",
  },
  {
    topic: "Photo field guidance",
    title: "Cornell All About Birds photo guide",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    checked: "2026-06-03",
  },
  {
    topic: "Festival timing",
    title: "Festival of the Cranes",
    url: "https://friendsofbosquedelapache.org/festival/",
    checked: "2026-06-03",
  },
  {
    topic: "Festival programming",
    title: "All About Birds Festival listing",
    url: "https://www.allaboutbirds.org/news/event/festival-of-the-cranes/",
    checked: "2026-06-03",
  },
  {
    topic: "Sun times",
    title: "Timeanddate Socorro November 2026",
    url: "https://www.timeanddate.com/sun/usa/socorro?month=11&year=2026",
    checked: "2026-06-03",
  },
  {
    topic: "Sun times",
    title: "Timeanddate Socorro December 2026",
    url: "https://www.timeanddate.com/sun/usa/socorro?month=12&year=2026",
    checked: "2026-06-03",
  },
  {
    topic: "Lodging",
    title: "Holiday Inn Express Socorro",
    url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/socorro/socnm/hoteldetail/directions",
    checked: "2026-06-03",
  },
  {
    topic: "Lodging",
    title: "Holiday Inn Express Socorro reviews",
    url: "https://www.expedia.com/Socorro-Hotels-Holiday-Inn-Express-Socorro.h1652820.Hotel-Information",
    checked: "2026-06-03",
  },
  {
    topic: "Lodging",
    title: "Comfort Inn & Suites Socorro",
    url: "https://www.expedia.com/Socorro-Hotels-Comfort-Inn-And-Suites.h1580177.Hotel-Information",
    checked: "2026-06-03",
  },
  {
    topic: "Lodging",
    title: "Best Western Socorro Hotel & Suites",
    url: "https://www.expedia.com/Socorro-Hotels-Best-Western-Socorro-Hotel-Suites.h9243.Hotel-Information",
    checked: "2026-06-03",
  },
  {
    topic: "Lodging",
    title: "Econo Lodge Socorro",
    url: "https://www.expedia.com/Socorro-Hotels-Econo-Lodge-Socorro.h13443.Hotel-Information",
    checked: "2026-06-03",
  },
  {
    topic: "Lodging",
    title: "Casa Blanca reservations",
    url: "https://casablancabedandbreakfast.com/reservations/",
    checked: "2026-06-03",
  },
  {
    topic: "Marriott Bonvoy",
    title: "Fairfield by Marriott Inn & Suites Los Lunas",
    url: "https://www.marriott.com/en-us/hotels/abqlf-fairfield-inn-and-suites-los-lunas/overview/",
    checked: "2026-06-03",
  },
  {
    topic: "Marriott Bonvoy",
    title: "Fairfield Los Lunas Expedia snapshot",
    url: "https://www.expedia.com/Los-Lunas-Hotels-Fairfield-By-Marriott-Inn-Suites-Los-Lunas.h127387152.Hotel-Information",
    checked: "2026-06-03",
  },
  {
    topic: "Image licenses",
    title: "USFWS Snow Geese, Gary Stolz",
    url: "https://www.fws.gov/media/snow-geese-bosque-del-apache-national-wildlife-refuge",
    checked: "2026-06-03",
  },
  {
    topic: "Image licenses",
    title: "USFWS Sandhill Cranes, Ryan Hagerty",
    url: "https://www.fws.gov/media/sandhill-cranes-6",
    checked: "2026-06-03",
  },
  {
    topic: "Image licenses",
    title: "USFWS Snow Geese Fly Overhead, Lynne Braden",
    url: "https://www.fws.gov/media/snow-geese-fly-overhead-bosque-del-apache-refuge",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Evie Wilder - Sandhill Crane Migration",
    url: "https://eviewilder.com/blog/sandhill-crane-migration-bosque-del-apache-winter/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "The Quite Wild - Bird Photography for Beginners at Bosque del Apache",
    url: "https://thequitewild.com/bird-photography-for-beginners-bosque-del-apache/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Outdoor Photographer - Extreme Close-Up",
    url: "https://www.outdoorphotographer.com/tips-techniques/wildlife-techniques/extreme-close-up/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "WildernessShots - How to Shoot Wildlife Photography",
    url: "https://www.wildernessshots.com/how-to-shoot-wildlife-photography",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "NANPA Bosque del Apache Regional Event",
    url: "https://nanpa.org/eventcalendar/bosque-del-apache-national-wildlife-refuge-regional-event-december-4-7-2022/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "BirdWatching - Best camera settings for bird photography",
    url: "https://www.birdwatchingdaily.com/photography/how-to-photograph-birds/best-camera-settings-for-bird-photography/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Chasing Hippoz - Bosque del Apache photography and travel guide",
    url: "https://www.chasinghippoz.com/travel-photo-blog/2019/11/3/wxk15i7zdi06279j8bzassi9cgs98a",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Outdoor Photographer / OEL - Bosque del Apache National Wildlife Refuge",
    url: "https://www.oelmag.com/bosque-del-apache-national-wildlife-refuge/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "LifePixel - Bosque del Apache Wildlife Refuge",
    url: "https://www.lifepixel.com/photography-locations/bosque-del-apache-wildlife-refuge",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Luminous Landscape - Bosque del Apache",
    url: "https://luminous-landscape.com/bosque-del-apache/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Cornell All About Birds - Bosque del Apache photo guide",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    checked: "2026-06-03",
  },
  {
    topic: "Media",
    title: "Thom Hogan - Bosque del Apache",
    url: "https://www.bythom.com/photographic-travel/united-states/bosque-del-apache.html",
    checked: "2026-06-03",
  },
  {
    topic: "EXIF evidence",
    title: "Wikimedia Commons - Sandhill Crane at Bosque del Apache",
    url: "https://commons.wikimedia.org/wiki/File:Sandhill_Crane_(Bosque_del_Apache_National_Wildlife_Refuge).jpg",
    checked: "2026-06-03",
  },
  {
    topic: "EXIF evidence",
    title: "Wikimedia Commons - Snow Geese at Bosque del Apache",
    url: "https://commons.wikimedia.org/wiki/File:Snow_Geese_(Bosque_del_Apache_National_Wildlife_Refuge).jpg",
    checked: "2026-06-03",
  },
  {
    topic: "EXIF evidence",
    title: "Wikimedia Commons - Bosque Light",
    url: "https://commons.wikimedia.org/wiki/File:Bosque_Light.jpg",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Sony - FE 100-400mm F4.5 GM OSS",
    url: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel100400mc",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Sony - FE 200-600mm F5.6-6.3 G OSS",
    url: "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel200600g/specifications",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Sony - FE 400-800mm F6.3-8 G OSS",
    url: "https://www.sony.co.uk/electronics/camera-lenses/sel400800g/specifications",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Sony - FE 24-105mm F4 G OSS",
    url: "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel24105g/specifications",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Sony - FE 24-70mm F2.8 GM II",
    url: "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel2470gm2/specifications",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Sony - FE 70-200mm F2.8 GM OSS II",
    url: "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel70200gm2/specifications",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Canon - RF100-500mm F4.5-7.1 L IS USM",
    url: "https://www.usa.canon.com/shop/p/rf100-500mm-f4-5-7-1-l-is-usm",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Canon - RF200-800mm F6.3-9 IS USM",
    url: "https://www.usa.canon.com/shop/p/rf200-800mm-f6-3-9-is-usm",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Canon - RF24-105mm F4 L IS USM",
    url: "https://www.usa.canon.com/shop/catalog/product/view/id/50549/s/rf24-105mm-f4-l-is-usm/",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Canon - RF24-70mm F2.8 L IS USM",
    url: "https://www.usa.canon.com/shop/p/rf24-70mm-f2-8l-is-usm",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Canon - RF70-200mm F2.8 L IS USM",
    url: "https://www.usa.canon.com/shop/p/rf70-200mm-f2-8-l-is-usm",
    checked: "2026-06-03",
  },
  {
    topic: "Gear specs",
    title: "Canon - RF70-200mm F2.8 L IS USM Z",
    url: "https://www.usa.canon.com/shop/p/rf70-200mm-f2-8-l-is-usm-z",
    checked: "2026-06-03",
  },
  {
    topic: "Safari gear",
    title: "Safari Tanzania - Safari Photography Tips",
    url: "https://safaritanzania.com/blog/safari-photography-tips-complete-guide",
    checked: "2026-06-03",
  },
  {
    topic: "Safari gear",
    title: "Magical Tanzania - Tanzania Safari Photography Guide 2026",
    url: "https://magicaltanzania.com/blog/tanzania-safari-photography-guide-2026/",
    checked: "2026-06-03",
  },
  {
    topic: "Safari gear",
    title: "Digital Camera World - Best lenses for safari photography in 2026",
    url: "https://www.digitalcameraworld.com/buying-guides/best-lenses-for-safari-photography",
    checked: "2026-06-03",
  },
];

const locations = [
  {
    name: "Visitor Center",
    type: "Refuge base",
    lat: 33.804777,
    lon: -106.890917,
    windows: ["mid-morning"],
    confidence: "official FWS",
    note: "Staff map, current roost intel, Desert Arboretum, adjacent flush toilets, and water inside when the visitor center is open. Current hours: Thu-Mon, 9 AM-4 PM.",
  },
  {
    name: "North Crane Pond parking",
    type: "Crane-pool pullout",
    lat: 33.8593284,
    lon: -106.8766304,
    windows: ["sunrise", "sunset"],
    confidence: "OSM planning pin",
    note: "Legal-parking check for crane-pool sunrise and sunset work. Verify active roost and posted signs daily.",
  },
  {
    name: "Flight Deck / Main Pool",
    type: "Viewpoint deck",
    lat: 33.8048326,
    lon: -106.8844325,
    windows: ["sunrise", "sunset"],
    confidence: "OSM planning pin",
    note: "Classic blast-off platform when Main Pool has water and birds. Restroom nearby.",
  },
  {
    name: "Flight Deck restroom",
    type: "Restroom",
    lat: 33.8051216,
    lon: -106.8844646,
    windows: ["logistics"],
    confidence: "OSM planning pin",
    note: "Restroom next to the Flight Deck area.",
  },
  {
    name: "South Crane Pond north pullout",
    type: "Crane-pool pullout",
    lat: 33.8545263,
    lon: -106.8778053,
    windows: ["sunrise", "sunset"],
    confidence: "OSM planning pin",
    note: "Crane landing and reflection setup if birds are using the pond. Park only where legal.",
  },
  {
    name: "South Crane Pond south pullout",
    type: "Crane-pool pullout",
    lat: 33.8515291,
    lon: -106.8785379,
    windows: ["sunrise", "sunset"],
    confidence: "OSM planning pin",
    note: "Alternate crane-pool pullout for dawn or final-light scouting.",
  },
  {
    name: "Dabbler Deck",
    type: "Viewpoint deck",
    lat: 33.7903825,
    lon: -106.8922801,
    windows: ["sunrise", "mid-morning"],
    confidence: "OSM planning pin",
    note: "South Loop ducks, coots, reeds, reflections, and quieter wetland frames.",
  },
  {
    name: "Dabbler Deck parking",
    type: "Parking",
    lat: 33.7904421,
    lon: -106.892859,
    windows: ["sunrise", "mid-morning"],
    confidence: "OSM planning pin",
    note: "Practical parking pin for the Dabbler Deck stop.",
  },
  {
    name: "Eagle Scout Deck",
    type: "Viewpoint deck",
    lat: 33.7992911,
    lon: -106.8842161,
    windows: ["sunrise", "mid-morning"],
    confidence: "OSM planning pin",
    note: "South Loop wetland viewpoint for ducks, geese, reeds, and reflections.",
  },
  {
    name: "Farm Deck",
    type: "Viewpoint deck",
    lat: 33.8326838,
    lon: -106.8610046,
    windows: ["mid-morning", "sunset"],
    confidence: "OSM planning pin",
    note: "Crop-field and distant bird activity after fly-out. Confirm gates and field access same day.",
  },
  {
    name: "Willow Deck",
    type: "Viewpoint deck",
    lat: 33.8127697,
    lon: -106.8618949,
    windows: ["mid-morning"],
    confidence: "OSM planning pin",
    note: "North Loop wetland views. Keep tripod footprint compact.",
  },
  {
    name: "Coyote Deck",
    type: "Viewpoint deck",
    lat: 33.8158514,
    lon: -106.8611816,
    windows: ["mid-morning"],
    confidence: "OSM planning pin",
    note: "North Loop wetland views, often paired with Willow Deck.",
  },
  {
    name: "Rio Viejo / Bike Trail parking",
    type: "Trailhead",
    lat: 33.7946779,
    lon: -106.8733529,
    windows: ["mid-morning"],
    confidence: "OSM planning pin",
    note: "Marsh and trailhead change-of-pace with restroom area nearby. Potable water not assumed on loop.",
  },
  {
    name: "Buckhorn Tavern",
    type: "Food",
    lat: 33.9174613,
    lon: -106.8691594,
    windows: ["food"],
    confidence: "OSM planning pin",
    note: "San Antonio meal candidate. Check current hours before relying on it.",
  },
  {
    name: "San Antonio fuel",
    type: "Fuel",
    lat: 33.9179009,
    lon: -106.8685662,
    windows: ["fuel"],
    confidence: "OSM planning pin",
    note: "Closest practical fuel cluster north of the refuge. Recheck hours.",
  },
  {
    name: "Holiday Inn Express Socorro",
    type: "Lodging",
    lat: 34.0709527,
    lon: -106.8924458,
    windows: ["lodging"],
    confidence: "OSM lodging pin",
    note: "Cleanest low-friction chain option, but pricier in the preferred Dec 6-12 snapshot.",
  },
  {
    name: "Comfort Inn & Suites Socorro",
    type: "Lodging",
    lat: 34.0782267,
    lon: -106.8958421,
    windows: ["lodging"],
    confidence: "OSM lodging pin",
    note: "Current safe/value default for the preferred Dec 6-12 window, about 25-30 minutes from refuge targets.",
  },
  {
    name: "Best Western Socorro Hotel & Suites",
    type: "Lodging",
    lat: 34.0720531,
    lon: -106.8924442,
    windows: ["lodging"],
    confidence: "OSM lodging pin",
    note: "Current value backup for the preferred Dec 6-12 window, about 25-30 minutes from refuge targets.",
  },
  {
    name: "Econo Lodge Inn & Suites Socorro",
    type: "Lodging",
    lat: 34.0644474,
    lon: -106.8936162,
    windows: ["lodging"],
    confidence: "OSM lodging pin",
    note: "Budget fallback in Socorro, about 25-30 minutes from refuge targets.",
  },
  {
    name: "Socorro fuel cluster",
    type: "Fuel",
    lat: 34.0726097,
    lon: -106.8931135,
    windows: ["fuel"],
    confidence: "OSM planning pin",
    note: "Convenient north Socorro fuel area near the main chain-hotel options.",
  },
];

const days = [
  {
    day: "Day 1",
    theme: "Scout the refuge and lock the active roosts. If this is Wednesday, staff intel may wait until Thursday.",
    slots: [
      {
        window: "Sunrise",
        time: "Be in position by 6:15 AM",
        place: "North Crane Pond / Highway 1 crane pools",
        goal: "Cranes and geese leaving shallow water against southeast color.",
        gear: "Sony 100-400 f/4.5 + 24-105, or Canon 100-500 + 24-105",
        position: "Use legal crane-pond parking or pullouts. Stay off railroad, private land, shoulders, and closed areas.",
      },
      {
        window: "Mid-morning",
        time: "9:00 AM to 11:00 AM",
        place: "Visitor Center if open, otherwise South Loop wetlands",
        goal: "Use staff intel when available, then work Dabbler Deck, Eagle Scout Deck, and wetland subjects.",
        gear: "Sony 100-400 f/4.5 or 400-800, Canon 100-500 or 200-800",
        position: "Move slowly through legal pullouts; keep vehicle as a blind.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "North Crane Pond / Highway 1 crane pools",
        goal: "Crane landings, silhouettes, reflections, and mountain bands.",
        gear: "Sony 24-105 + 100-400 f/4.5, or Canon 24-105 + 100-500",
        position: "Park fully clear of road and pre-compose landing lanes.",
      },
    ],
  },
  {
    day: "Day 2",
    theme: "Go for the classic blast-off, then follow birds to fields.",
    slots: [
      {
        window: "Sunrise",
        time: "Be on platform before civil twilight",
        place: "Flight Deck / Main Pool",
        goal: "Snow goose blast-off, flock patterns, cranes, and ducks.",
        gear: "24-105 for scale plus Sony 100-400 f/4.5 or Canon 100-500 for flight",
        position: "Start wide into dawn color; switch to panning as light rises.",
      },
      {
        window: "Mid-morning",
        time: "After fly-out",
        place: "North Loop / Farm Deck crop fields",
        goal: "Feeding cranes/geese, harriers, bald eagles, and flight lines.",
        gear: "Sony 100-400 f/4.5 handheld or 400-800; Canon 100-500 or 200-800",
        position: "Use legal pullouts around crop fields; do not block road.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "South Crane Pond pullouts",
        goal: "Crane family groups returning to shallow water.",
        gear: "Sony 100-400 f/4.5, Canon 100-500, wide zoom for sky/reflection",
        position: "Choose lower angle only where safe and legal.",
      },
    ],
  },
  {
    day: "Day 3",
    theme: "Crane behavior and deck-based wetlands.",
    slots: [
      {
        window: "Sunrise",
        time: "Be in position by 6:15 AM",
        place: "South Crane Pond / Highway 1 pool",
        goal: "Takeoff runs, cold-air breath, reflections, and smaller crane groups.",
        gear: "Sony 100-400 f/4.5 no TC, Canon 100-500 no TC",
        position: "Adjust along legal pullouts for wind; birds depart into wind.",
      },
      {
        window: "Mid-morning",
        time: "9:15 AM to 11:30 AM",
        place: "Willow Deck and Coyote Deck",
        goal: "Wetland views, ducks, cranes/geese, raptors, and passerines.",
        gear: "Sony 400-800 or 100-400 f/4.5; Canon 200-800 or 100-500",
        position: "Keep tripod footprint compact on shared deck space.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "Flight Deck, if birds are using Main Pool",
        goal: "Geese returning to water and cranes crossing last light.",
        gear: "Wide zoom plus flexible long zoom",
        position: "Compose wider than instinct; flock shape over color is the frame.",
      },
    ],
  },
  {
    day: "Day 4",
    theme: "Marsh texture, habitat, and field staging.",
    slots: [
      {
        window: "Sunrise",
        time: "Be near loop entrance by 6:20 AM",
        place: "South Loop first wetland stretch",
        goal: "Rim light, mist, reeds, ducks, geese, cranes, and harriers.",
        gear: "Sony 100-400 f/4.5, Canon 100-500, 24-105 for habitat",
        position: "Work slowly toward Dabbler and Diver Deck. Pull fully aside.",
      },
      {
        window: "Mid-morning",
        time: "9:30 AM to 11:30 AM",
        place: "Rio Viejo / Bike Trail restroom area",
        goal: "Marsh birds, cattails, coots, sparrows, quail, roadrunner, and mammals.",
        gear: "Long zoom plus 24-105",
        position: "Use vehicle as blind, then short walks only where open.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:40 PM",
        place: "North Loop fields near Farm Deck",
        goal: "Crane/geese staging before roost flights.",
        gear: "Sony 100-400 f/4.5 or 400-800; Canon 100-500 or 200-800",
        position: "Confirm gates same day. Warm side light favors darker backgrounds.",
      },
    ],
  },
  {
    day: "Day 5",
    theme: "Repeat the strongest roost and finish clean.",
    slots: [
      {
        window: "Sunrise",
        time: "Be in position by 6:10 AM",
        place: "Best current roost repeat",
        goal: "Use the first four days to choose Flight Deck for geese or Highway 1 pools for cranes.",
        gear: "Wide zoom plus flexible long zoom; no TC in dim light",
        position: "Highest-yield final morning is usually the active roost, not a new spot.",
      },
      {
        window: "Mid-morning",
        time: "9:00 AM to 11:00 AM",
        place: "Visitor Center / Desert Arboretum / central two-way road",
        goal: "Roadrunner, Gambel's quail, sparrows, phoebes, Cooper's hawk.",
        gear: "Sony 100-400 f/4.5 or 24-105; Canon 100-500 or 24-105",
        position: "Stay in or near the vehicle and do not approach wildlife.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:40 PM",
        place: "Highway 1 crane-pool finale",
        goal: "Pick one clean composition: landing reflection, mountain bands, or wide sky punctuation.",
        gear: "Sony 24-105 + 100-400 f/4.5; Canon 24-105 + 100-500",
        position: "Stay until legal light allows; birds may return after sunset.",
      },
    ],
  },
];

const lodging = [
  {
    rank: 1,
    name: "Comfort Inn & Suites Socorro",
    area: "Socorro",
    drive: "25-30 min",
    price: "Dec 6-12 from $722 total",
    best: "Best safe/value default",
    note: "Interior corridors, smoke-free rooms, Wi-Fi, microwave/fridge, indoor pool/hot tub, practical parking, and breakfast listed 6-9 AM.",
    watch: "Lowest card was nonrefundable; two-queen refundable options cost extra. Verify direct refundable total before booking.",
  },
  {
    rank: 2,
    name: "Best Western Socorro Hotel & Suites",
    area: "Socorro",
    drive: "25-30 min",
    price: "Dec 6-12 from $726 total",
    best: "Strong value backup",
    note: "Free breakfast/parking, indoor pool, pet-friendly rooms available, and a small refundable-rate premium in the dated snapshot.",
    watch: "Lower overall review score than Comfort/Holiday Inn; verify noise, room type, and direct cancellation window.",
  },
  {
    rank: 3,
    name: "Holiday Inn Express Socorro by IHG",
    area: "Socorro",
    drive: "25-30 min",
    price: "Dec 6-12 from $1,181 total",
    best: "Cleanest low-friction chain choice",
    note: "Reliable chain hotel, easy parking, room fridge/microwave, Socorro food and fuel nearby. Stronger review profile than most local options.",
    watch: "Materially more expensive in the Dec 6-12 snapshot; fully refundable cards cost extra.",
  },
  {
    rank: 4,
    name: "Econo Lodge Inn & Suites",
    area: "Socorro",
    drive: "25-30 min",
    price: "Dec 6-12 from $631 total",
    best: "Cheapest acceptable fallback",
    note: "Free parking, breakfast, pet-friendly, and strong aggregate reviews for price.",
    watch: "Budget motel tradeoffs: comfort, sound, and finish are less certain. Inspect recent reviews before booking.",
  },
  {
    rank: 5,
    name: "Casa Blanca Bed and Breakfast",
    area: "San Antonio",
    drive: "12-15 min",
    price: "Posted $100-$120/night",
    best: "Closest birding-oriented base",
    note: "Very short drive, refuge-savvy hosts, early-bird hot drink/snack in peak winter.",
    watch: "Exact Dec 6-12 availability requires direct contact; cash/check only, two-night minimum, one-week cancellation policy in Nov/Dec/Jan.",
  },
  {
    rank: "Bonvoy",
    name: "Fairfield by Marriott Inn & Suites Los Lunas",
    area: "Los Lunas",
    drive: "~1 hr 20 min",
    price: "Dec 6-12 from $1,003 total",
    best: "Marriott Bonvoy tradeoff",
    note: "Closest practical Bonvoy candidate found. Marriott lists free breakfast, free parking, fitness center, business center, and no pets.",
    watch: "Not a Socorro base. Sunrise setup near 6 AM means leaving around 4:15-4:30 AM, so use only if points/status outweigh the commute.",
  },
];

const inspiration = [
  {
    title: "Snow geese in wetland scale",
    img: assets.geese,
    credit: "Gary Stolz / USFWS, Public Domain",
    source: "https://www.fws.gov/media/snow-geese-bosque-del-apache-national-wildlife-refuge",
    idea: "Mass white-flock texture and refuge context.",
  },
  {
    title: "Sandhill crane pair",
    img: assets.cranes,
    credit: "Ryan Hagerty / USFWS, Public Domain",
    source: "https://www.fws.gov/media/sandhill-cranes-6",
    idea: "Quiet water-level crane portrait and vertical crop potential.",
  },
  {
    title: "Fly-out over photographers",
    img: assets.flyout,
    credit: "Lynne Braden / USFWS volunteer, Public Domain",
    source: "https://www.fws.gov/media/snow-geese-fly-overhead-bosque-del-apache-refuge",
    idea: "Field experience image with sky filled by geese.",
  },
];

const mediaArticles = [
  {
    date: "2026-04-19",
    source: "Evie Wilder",
    title: "Sandhill Crane Migration",
    url: "https://eviewilder.com/blog/sandhill-crane-migration-bosque-del-apache-winter/",
    kind: "Fieldcraft",
    summary:
      "Recent crane field story with practical advice for bitter cold, snow, condensation, batteries, and being ready before first light.",
    lens:
      "Recommends a 70-600mm range, tripod or monopod, extra batteries, continuous autofocus, burst mode, and 1/1600 or faster for freezing flight.",
    apply:
      "Treat dawn as a cold-weather workflow problem: gloves, batteries, lens protection, and the long lens ready before the first crane movement.",
  },
  {
    date: "2025-11-01",
    source: "The Quite Wild",
    title: "15 Essential Tips for Bird Photography for Beginners at Bosque del Apache",
    url: "https://thequitewild.com/bird-photography-for-beginners-bosque-del-apache/",
    kind: "Guide",
    summary:
      "Structured beginner guide covering season, locations, camera settings, autofocus, exposure, telephoto choices, and support.",
    lens:
      "Recommends 100-400mm, 150-600mm, and 200-600mm zooms; notes 1.4x teleconverters help only when autofocus remains reliable.",
    apply:
      "Use it as a pre-trip settings checklist, then tune shutter speed, ISO, and autofocus behavior against the actual light.",
  },
  {
    date: "2024-06-03 updated",
    source: "Outdoor Photographer",
    title: "Extreme Close-Up",
    url: "https://www.outdoorphotographer.com/tips-techniques/wildlife-techniques/extreme-close-up/",
    kind: "Lens Evidence",
    summary:
      "Long-lens technique article that uses Bosque as a major bird-in-flight example and stresses support discipline.",
    lens:
      "Bosque snow goose example uses a Canon EOS-1D X, EF 400mm f/2.8L II, and EF 2x III for 800mm on full frame.",
    apply:
      "Extreme reach can make tight action images, but it is a specialized setup; keep the flexible zoom as the default.",
  },
  {
    date: "2024-04-21 updated / 2023-11-22 published",
    source: "WildernessShots",
    title: "How to Shoot Wildlife Photography",
    url: "https://www.wildernessshots.com/how-to-shoot-wildlife-photography",
    kind: "Technique",
    summary:
      "Broad wildlife tutorial with Bosque examples for action, light, shutter speed, panning, support, behavior, and focus.",
    lens:
      "Explains why telephoto zooms are often more practical than primes and why teleconverters cost light and image quality.",
    apply:
      "Supports using a flexible flight zoom first: Sony 100-400mm f/4.5 if available, Sony 200-600mm as the fallback, and Canon RF 100-500mm.",
  },
  {
    date: "2022-12",
    source: "NANPA",
    title: "Bosque del Apache National Wildlife Refuge Regional Event",
    url: "https://nanpa.org/eventcalendar/bosque-del-apache-national-wildlife-refuge-regional-event-december-4-7-2022/",
    kind: "Guide",
    summary:
      "Photo-tour planning page with likely locations, car-based shooting expectations, winter weather notes, and gear guidance.",
    lens:
      "Recommends 100-400mm and longer, 400mm or larger when possible, optional teleconverters, and sturdy tripod/gimbal support.",
    apply:
      "Bring both wide and long options. Most work is from a vehicle or short walk, so a long lens and support are practical.",
  },
  {
    date: "2021-07/08",
    source: "BirdWatching / Rick Sammon",
    title: "The best camera settings for bird photography",
    url: "https://www.birdwatchingdaily.com/photography/how-to-photograph-birds/best-camera-settings-for-bird-photography/",
    kind: "Settings",
    summary:
      "Settings article covering shutter speed, autofocus, exposure, frame rate, mood, and environmental bird photography.",
    lens:
      "Names Canon RF 100-500mm as a go-to wildlife zoom and shows a Bosque sunrise made with a Canon 5D Mark III and 24-105mm.",
    apply:
      "Carry the 24-105mm. Wide story frames are part of the Bosque shot list, not merely backup coverage.",
  },
  {
    date: "2019-11-03 URL date",
    source: "Chasing Hippoz",
    title: "My Photography & Travel Guide to Bosque Del Apache, NM",
    url: "https://www.chasinghippoz.com/travel-photo-blog/2019/11/3/wxk15i7zdi06279j8bzassi9cgs98a",
    kind: "Guide",
    summary:
      "Travel and photography guide covering when to go, lodging, locations, light, backgrounds, clothing, and gear.",
    lens:
      "Recommends 500mm, 600mm, or 800mm for isolation, but calls the Canon RF 100-500mm an excellent flexible Bosque option.",
    apply:
      "Use a two-body strategy when possible: long zoom for birds, 24-105mm or short telephoto for scale and environment.",
  },
  {
    date: "2019-07-02",
    source: "Outdoor Photographer / OEL",
    title: "Bosque del Apache National Wildlife Refuge",
    url: "https://www.oelmag.com/bosque-del-apache-national-wildlife-refuge/",
    kind: "Location",
    summary:
      "Concise location feature on winter subjects, weather, mist, low-angle perspective, panning, slow shutters, and environment.",
    lens:
      "No strict lens prescription; reinforces mixing action, flock, and landscape compositions.",
    apply:
      "Do not only chase full-frame birds. Work low where safe and legal, simplify backgrounds, and include mountains and sky.",
  },
  {
    date: "2016-12-21",
    source: "LifePixel / Bob Coates",
    title: "Bosque del Apache Wildlife Refuge",
    url: "https://www.lifepixel.com/photography-locations/bosque-del-apache-wildlife-refuge",
    kind: "Lens Evidence",
    summary:
      "Field-based guide focused on crane flight, behavior, support, local intel, and anticipation.",
    lens:
      "Uses a Panasonic Lumix GX85 with 100-400mm, equivalent to an 800mm full-frame field of view.",
    apply:
      "Reach helps, but the strongest lesson is behavior reading: watch posture and repeated flight paths before action happens.",
  },
  {
    date: "2009-01-13",
    source: "Luminous Landscape",
    title: "Bosque del Apache",
    url: "https://luminous-landscape.com/bosque-del-apache/",
    kind: "Lens Evidence",
    summary:
      "Classic early-digital Bosque photo essay emphasizing focal length, crop factor, and abundant migratory bird subjects.",
    lens:
      "Most images were made with a Canon 400mm f/4 DO IS on a Canon D30, giving a 640mm effective field of view.",
    apply:
      "The long-running Bosque sweet spot sits around 400-600mm equivalent or a little longer, depending on position.",
  },
  {
    date: "2008-07-15",
    source: "Cornell All About Birds / Marie Read",
    title: "Bosque Del Apache, New Mexico: A Bird Photographer's Playground",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    kind: "Technique",
    summary:
      "Bosque-specific field guide covering Main Pool, Old Highway 1, flight cues, wind/light alignment, exposure, and panning.",
    lens:
      "Says 300-400mm can be enough for flight, 500-600mm benefits from support, and wide or short telephoto lenses work for habitat.",
    apply:
      "Start wider for blast-offs and switch longer as birds separate. Wind and light direction should drive position.",
  },
  {
    date: "2008 original / current site",
    source: "Thom Hogan",
    title: "Bosque del Apache",
    url: "https://www.bythom.com/photographic-travel/united-states/bosque-del-apache.html",
    kind: "Fieldcraft",
    summary:
      "Counterpoint to gear obsession, arguing for prediction, discipline, position, and knowing the image you are trying to make.",
    lens:
      "Describes useful work with a 70-300mm and notes that a 600mm f/4 can be too much for some bird-plus-moon compositions.",
    apply:
      "Decide the shot first. For bird plus moon, flock shape, or sky scale, too much focal length can hurt.",
  },
];

const exifEvidence = [
  {
    source: "Wikimedia Commons",
    subject: "Sandhill crane",
    evidence: "Canon EOS 60D, 350mm EXIF",
    url: "https://commons.wikimedia.org/wiki/File:Sandhill_Crane_(Bosque_del_Apache_National_Wildlife_Refuge).jpg",
    takeaway: "Good position can make crane images viable below 500mm.",
  },
  {
    source: "Wikimedia Commons",
    subject: "Snow geese",
    evidence: "Canon EOS 60D, 100mm EXIF",
    url: "https://commons.wikimedia.org/wiki/File:Snow_Geese_(Bosque_del_Apache_National_Wildlife_Refuge).jpg",
    takeaway: "Wide and short telephoto frames matter for flock scale.",
  },
  {
    source: "Wikimedia Commons",
    subject: "Bosque light",
    evidence: "Nikon D7000, 135mm EXIF / 202mm equivalent",
    url: "https://commons.wikimedia.org/wiki/File:Bosque_Light.jpg",
    takeaway: "Mid-telephoto works for light, water, mountains, and habitat.",
  },
  {
    source: "Luminous Landscape",
    subject: "Migratory birds",
    evidence: "Canon 400mm f/4 DO IS, 640mm effective field of view",
    url: "https://luminous-landscape.com/bosque-del-apache/",
    takeaway: "Classic Bosque bird work fits the 400-600mm-equivalent range and supports the split Sony kit.",
  },
  {
    source: "LifePixel",
    subject: "Crane flight",
    evidence: "Panasonic GX85 with 100-400mm, 200-800mm equivalent",
    url: "https://www.lifepixel.com/photography-locations/bosque-del-apache-wildlife-refuge",
    takeaway: "Long reach helps most when light and handling are under control.",
  },
  {
    source: "BirdWatching",
    subject: "Bosque sunrise",
    evidence: "Canon EOS 5D Mark III with 24-105mm",
    url: "https://www.birdwatchingdaily.com/photography/how-to-photograph-birds/best-camera-settings-for-bird-photography/",
    takeaway: "Carry the wide zoom for story, sky, and place.",
  },
];

const gearCards = [
  {
    name: "Sony premium kit",
    uses: "3 lenses plus Sony 1.4x teleconverter",
    items: [
      "FE 24-105mm F4 G OSS for flock scale, sky, reflections, weather, mountains, and habitat.",
      "FE 100-400mm F4.5 GM OSS as the dawn, flight, and close-pass wildlife lens.",
      "FE 400-800mm F6.3-8 G OSS for distant birds in good light.",
      "SEL14TC only after light improves; it is not the pre-sunrise default.",
    ],
    note: "Leave the 200-600mm home in this kit. Use it only as the fallback if the new 100-400mm f/4.5 or 400-800mm is not available.",
  },
  {
    name: "Canon kit",
    uses: "3 lenses plus Canon RF 1.4x extender",
    items: [
      "RF 24-105mm F4 L IS USM for flock scale, sky, reflections, landscapes, and habitat.",
      "RF 100-500mm F4.5-7.1 L IS USM as the primary wildlife lens.",
      "RF 200-800mm F6.3-9 IS USM for distant birds in good light.",
      "RF 1.4x extender only after light improves; on the RF 100-500mm it works from 300-500mm only.",
    ],
    note: "The RF 100-500mm stays first for flight. The RF 200-800mm is reach, not the dawn default.",
  },
  {
    name: "24-105mm vs 24-70mm",
    uses: "Standard zoom decision",
    items: [
      "Choose 24-105mm f/4 for Bosque.",
      "The extra 70-105mm range matters for flocks crossing water, mountain bands, and environmental compression.",
      "Use 24-70mm f/2.8 only as a swap for people, events, night scenes, or shallow-depth-of-field work outside the refuge plan.",
    ],
    note: "Do not carry both standard zooms for the refuge days.",
  },
  {
    name: "70-200mm f/2.8",
    uses: "Optional fourth lens",
    items: [
      "Consider it for close birds, compressed environmental frames, portraits, mammals, travel details, and low-light static subjects.",
      "Do not use it as the main Bosque bird lens; 200mm is short for most bird portraits and distant field work.",
      "It cannot replace the 24-105mm for big fly-outs, sky, weather, or landscape scale.",
      "Sony: FE 70-200mm F2.8 GM OSS II works with the Sony 1.4x teleconverter, but 98-280mm f/4 still does not replace the 100-400mm f/4.5.",
      "Canon: RF 70-200mm F2.8 L IS USM is the compact travel option; RF 70-200mm F2.8 L IS USM Z is the extender-compatible option.",
    ],
    note: "If we stay at three lenses, skip it. If we allow four lenses, this is the fourth lens.",
  },
];

const tanzaniaCards = [
  {
    name: "What Tanzania changes",
    uses: "Shared Bosque + safari logic",
    items: [
      "The 70-200mm f/2.8 becomes much more useful for close mammals, portraits, low-light behavior, camp life, and vehicle-side subjects.",
      "The 100-400mm or 100-500mm class zoom becomes the safari backbone because animals can move from close to far while the vehicle position is fixed.",
      "The 400-800mm or 200-800mm reach lens stays valuable for Bosque birds, Tanzania birds, distant cats, and very distant wildlife, but it is less automatic than it is for Bosque.",
      "Dust favors two bodies and fewer lens changes: pre-mount the standard zoom on one body and the main wildlife zoom on the other.",
      "Small-aircraft or bush-flight baggage limits may force the super-reach lens out before the 70-200mm.",
    ],
    note: "For Bosque, protect reach. For Tanzania, protect flexible mammal coverage.",
  },
  {
    name: "Sony shared kit",
    uses: "4 lenses plus Sony 1.4x teleconverter",
    items: [
      "FE 24-105mm F4 G OSS for landscapes, vehicle/camp life, close elephants, and environmental wildlife.",
      "FE 70-200mm F2.8 GM OSS II for close mammals, portraits, low-light compression, cubs/family behavior, and travel images.",
      "FE 100-400mm F4.5 GM OSS as the main Tanzania wildlife lens and Bosque dawn/flight lens.",
      "FE 400-800mm F6.3-8 G OSS for Bosque reach, Tanzania birds, distant cats, and long-compression work.",
      "SEL14TC for good-light reach, but avoid frequent mounting and unmounting in dust.",
    ],
    note: "Three-lens Tanzania cut: keep 24-105 + 70-200 f/2.8 + 100-400. Leave 400-800 behind unless birds or distant wildlife are a major goal.",
  },
  {
    name: "Canon shared kit",
    uses: "4 lenses plus Canon RF 1.4x extender",
    items: [
      "RF 24-105mm F4 L IS USM for landscapes, vehicle/camp life, close mammals, and environmental wildlife.",
      "RF 70-200mm F2.8 L IS USM for compact travel, or RF 70-200mm F2.8 L IS USM Z if extender compatibility matters.",
      "RF 100-500mm F4.5-7.1 L IS USM as the main Tanzania wildlife lens and Bosque flight/default wildlife lens.",
      "RF 200-800mm F6.3-9 IS USM for Bosque reach, Tanzania birds, distant cats, and long-compression work.",
      "RF 1.4x extender for good light; remember the RF 100-500mm extender caveat from 300-500mm only.",
    ],
    note: "Three-lens Tanzania cut: keep 24-105 + 70-200 f/2.8 + RF 100-500. Leave RF 200-800 behind unless birds or distant wildlife are a priority.",
  },
];

const supportCards = [
  {
    name: "Vehicle support",
    uses: "Auto loop and road pullouts",
    items: [
      "Bring a beanbag or window support. It is fast, quiet, and more useful than a tripod inside the vehicle loop.",
      "Keep one wide lens and one wildlife lens ready so fly-outs do not become lens-change emergencies.",
    ],
    note: "Use the vehicle as a blind and stay fully clear of road edges.",
  },
  {
    name: "Tripod and head",
    uses: "Flight Deck, pools, decks, and static compositions",
    items: [
      "Bring sturdy carbon legs that can handle a body plus 200-600mm, 400-800mm, or RF 200-800mm class lens without extending the center column.",
      "Use a gimbal for extended long-lens flight tracking.",
      "Use a ball head for 24-105mm landscapes, locked reflections, and static compositions.",
      "Carry a monopod when decks or pullouts are too crowded for tripod legs.",
    ],
    note: "Standardize long lenses with Arca-Swiss plates or feet before travel.",
  },
  {
    name: "Remote shutter and flash",
    uses: "Small accessories with clear rules",
    items: [
      "Bring a compatible remote shutter release for tripod landscapes, reflections, static telephoto frames, moon/bird alignment, and slow-shutter flock experiments.",
      "Use the remote for locked-off work, not hand-held birds in flight.",
      "Do not bring flash for wildlife. It will not help at normal refuge distances and adds disturbance risk.",
      "Refuge rules prohibit using spotlights, automotive headlights, or other artificial light to spot, locate, or take animals.",
    ],
    note: "Pack the remote. Leave wildlife flash out of the field kit.",
  },
];

const practiceDrills = [
  {
    name: "Birds-in-flight acquisition",
    scenario: "Cranes or geese lifting off before sunrise, crossing wetlands, or landing in groups.",
    drill: "Raise, acquire, track for three seconds, then fire a short burst only when framing is clean.",
    standard: "Acquire without hunting and keep head or body focus through the burst.",
  },
  {
    name: "Panning ladder",
    scenario: "Lateral crane flight, geese crossing low over water, and slow wingbeat silhouettes.",
    drill: "Shoot moving subjects at 1/2000, 1/1000, 1/500, 1/250, and 1/125 second.",
    standard: "Know which speeds freeze detail, show controlled blur, or collapse keeper rate.",
  },
  {
    name: "White bird exposure",
    scenario: "Snow geese in sun, pale birds over reflective water, and white birds against dark vegetation.",
    drill: "Photograph bright subjects against dark, neutral, and bright backgrounds in one-third stop increments.",
    standard: "Preserve feather detail while keeping the scene usable.",
  },
  {
    name: "Backlit silhouette control",
    scenario: "Cranes and geese against sunrise color, sunset fly-ins, and rim-lit birds over water.",
    drill: "Expose for the sky, then vary from pure silhouette to slight shadow detail.",
    standard: "Keep sky color and readable bird shapes.",
  },
  {
    name: "Long-lens support rehearsal",
    scenario: "Road edges, vehicle pullouts, decks, and long waits in cold air.",
    drill: "Make ten-frame bursts from handheld, monopod, tripod, beanbag, and vehicle support.",
    standard: "Know the slowest reliable shutter speed for each support method.",
  },
  {
    name: "Cold-weather field workflow",
    scenario: "Pre-dawn setup, batteries, gloves, lens fog, dust, and car-to-position transitions.",
    drill: "Run a timed sunrise simulation from parking to test frame.",
    standard: "Be ready to shoot within two minutes of parking.",
  },
];

const bookStack = [
  "Secrets To Stunning Bird-In-Flight Photography",
  "Mastering Bird Photography",
  "Photographing Birds at Bosque Del Apache",
  "The Bird Photographer's Guide To Bosque del Apache",
];

function el(tag, className = "", html = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
}

function renderOverview() {
  const root = document.querySelector("#overview");
  root.innerHTML = `
    <div class="dashboard">
      <section class="panel hero-panel">
        <div class="hero-copy">
          <div>
            <p class="eyebrow">Prime window: early December</p>
            <h2>Five days, three light windows, one moving refuge.</h2>
            <p>Early December lines up with winter crane and goose concentrations. The working bias is December 6-12 for a calmer post-festival week; November 29-December 5 stays in play only if the festival programming becomes the point.</p>
          </div>
          <div class="stat-grid">
            <div class="stat"><b>Nov 29-Dec 5</b><span>Festival overlap, 6 hotel nights</span></div>
            <div class="stat"><b>Dec 6-12</b><span>Post-festival, 6 hotel nights</span></div>
            <div class="stat"><b>Dec 2-5</b><span>Festival of the Cranes</span></div>
            <div class="stat"><b>6:53-7:03</b><span>Sunrise range across both options</span></div>
            <div class="stat"><b>4:57-4:58</b><span>Sunset range across both options</span></div>
            <div class="stat"><b>1 hr before</b><span>Refuge lands open before sunrise</span></div>
            <div class="stat"><b>Thu-Mon</b><span>Visitor Center, 9 AM-4 PM</span></div>
            <div class="stat"><b>$5</b><span>Daily private vehicle entrance</span></div>
          </div>
        </div>
        <figure class="hero-photo">
          <img src="${assets.flyout}" alt="Snow geese flying over photographers at Bosque del Apache" />
          <figcaption class="credit">Lynne Braden / USFWS volunteer, Public Domain</figcaption>
        </figure>
      </section>
      <aside class="side-stack">
        <section class="panel next-card">
          <p class="eyebrow">First morning</p>
          <h3>Start at the crane pools</h3>
          <p class="card-copy">Use the first sunrise to learn active roosts, wind direction, and how birds are leaving the pools. Both candidate trips start on Sunday, so current visitor-center hours should give you an early staff-intel opportunity.</p>
          <div class="tag-row"><span class="tag sunrise">Sunrise</span><span class="tag">Crane pools</span><span class="tag verify">Verify daily</span></div>
        </section>
        <section class="panel">
          <p class="eyebrow">Date bias</p>
          <h3>Prefer Dec 6-12</h3>
          <p class="card-copy">Festival week offers classes and guided outings, but it also brings the obvious crowd and lodging pressure. The week after should keep the bird timing without the event crush.</p>
        </section>
        <section class="panel">
          <p class="eyebrow">Booking bias</p>
          <h3>Socorro for safe value</h3>
          <p class="card-copy">Comfort Inn is the current safe/value default for Dec 6-12. Holiday Inn Express is the cleaner but pricier chain pick. Marriott Bonvoy is a Los Lunas tradeoff, not the default dawn base.</p>
        </section>
        <section class="panel">
          <p class="eyebrow">Gear bias</p>
          <h3>Fast flight zoom, one system at a time</h3>
          <p class="card-copy">The final camera system is still open. Keep both branches in the plan, but for moving birds favor Sony 100-400 f/4.5 or Canon 100-500 before the longest option.</p>
        </section>
      </aside>
    </div>`;
}

function renderItinerary() {
  const root = document.querySelector("#itinerary");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Five-day onsite plan</p>
        <h2>Itinerary</h2>
      </div>
      <p>Each day has a sunrise setup, a mid-morning work session, and a sunset position. Day 5 intentionally repeats the best current roost.</p>
    </div>
    <div class="day-tabs"></div>
    <div class="timeline"></div>`;

  const tabs = root.querySelector(".day-tabs");
  const timeline = root.querySelector(".timeline");
  days.forEach((day, index) => {
    const button = el("button", `day-tab ${index === 0 ? "is-active" : ""}`, day.day);
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      drawDay(day);
    });
    tabs.append(button);
  });

  function drawDay(day) {
    timeline.innerHTML = `<section class="panel"><p class="eyebrow">${day.day}</p><h3>${day.theme}</h3></section>`;
    day.slots.forEach((slot) => {
      timeline.append(
        el(
          "article",
          "slot-card",
          `<div>
            <div class="slot-time">${slot.window}</div>
            <p class="muted">${slot.time}</p>
          </div>
          <div>
            <h3>${slot.place}</h3>
            <p class="card-copy">${slot.goal}</p>
            <div class="tag-row"><span class="tag">${slot.gear}</span></div>
          </div>
          <div>
            <h3>Position</h3>
            <p class="card-copy">${slot.position}</p>
          </div>`
        )
      );
    });
  }

  drawDay(days[0]);
}

function renderWindows() {
  const root = document.querySelector("#windows");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Replan by light</p>
        <h2>Photo Windows</h2>
      </div>
      <p>When weather, wind, or bird locations change, switch by window instead of by day.</p>
    </div>
    <div class="window-tabs">
      <button class="window-tab is-active" data-window="Sunrise">Sunrise</button>
      <button class="window-tab" data-window="Mid-morning">Mid-morning</button>
      <button class="window-tab" data-window="Sunset">Sunset</button>
    </div>
    <div class="grid-3" id="window-results"></div>`;
  const result = root.querySelector("#window-results");
  const draw = (windowName) => {
    const matches = days.flatMap((day) =>
      day.slots
        .filter((slot) => slot.window === windowName)
        .map((slot) => ({ ...slot, day: day.day }))
    );
    result.innerHTML = matches
      .map(
        (slot) => `<article class="gear-card">
          <p class="eyebrow">${slot.day}</p>
          <h3>${slot.place}</h3>
          <p class="card-copy">${slot.goal}</p>
          <div class="tag-row"><span class="tag ${windowName === "Sunrise" ? "sunrise" : windowName === "Sunset" ? "sunset" : ""}">${windowName}</span><span class="tag">${slot.gear}</span></div>
        </article>`
      )
      .join("");
  };
  root.querySelectorAll(".window-tab").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll(".window-tab").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      draw(button.dataset.window);
    });
  });
  draw("Sunrise");
}

function renderLodging() {
  const root = document.querySelector("#lodging");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Safe, comfortable, not too expensive</p>
        <h2>Lodging</h2>
      </div>
      <p>Plan on one room for two adults and six hotel nights. Socorro is still the photography-first base. San Antonio is closer but constrained; the closest practical Marriott Bonvoy option found is Los Lunas, which adds a much longer dawn drive.</p>
    </div>
    <div class="grid-2">
      ${lodging
        .map(
          (item) => `<article class="lodging-card" data-rank="${item.rank}">
            <span class="rank">${item.rank}</span>
            <h3>${item.name}</h3>
            <div class="lodging-meta">
              <span class="meta-pill">${item.area}</span>
              <span class="meta-pill">${item.drive}</span>
              <span class="meta-pill">${item.price}</span>
            </div>
            <p><b>${item.best}</b></p>
            <p class="card-copy">${item.note}</p>
            <p class="muted">${item.watch}</p>
          </article>`
        )
        .join("")}
    </div>`;
}

function renderGear() {
  const root = document.querySelector("#gear");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Camera kit</p>
        <h2>Gear</h2>
      </div>
      <p>The camera system is intentionally still open. Keep both Sony and Canon branches until the final pack list is chosen. Bosque rewards long reach; Tanzania makes the 70-200mm f/2.8 much more important.</p>
    </div>
    <section class="panel compact-note">
      <p class="eyebrow">Carry rule</p>
      <p class="card-copy">Do not carry both full long-lens kits unless there is a clear assignment for each body. A practical default is one 24-105, one flexible flight zoom, and the longest zoom left in the vehicle for bright mid-morning reach.</p>
    </section>
    <div class="grid-2">
      ${gearCards
        .map(
          (card) => `<article class="gear-card">
            <h3>${card.name}</h3>
            <p class="muted">${card.uses}</p>
            <ul class="kit-list">
              ${card.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <p class="card-copy">${card.note}</p>
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Shared safari kit</p>
        <h2>Bosque + Tanzania</h2>
      </div>
      <p>A Tanzania safari shifts the priority from distant birds toward vehicle-based mammal flexibility. The four-lens kit works best; the travel cut drops super-reach before it drops the 70-200mm.</p>
    </div>
    <div class="grid-2">
      ${tanzaniaCards
        .map(
          (card) => `<article class="gear-card">
            <h3>${card.name}</h3>
            <p class="muted">${card.uses}</p>
            <ul class="kit-list">
              ${card.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <p class="card-copy">${card.note}</p>
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Supports</p>
        <h2>Tripods, Heads, Gimbals</h2>
      </div>
      <p>Support should make the field day calmer, not slower. Vehicle support comes first; tripod and gimbal support matter most for long waits and heavy lenses.</p>
    </div>
    <div class="grid-2">
      ${supportCards
        .map(
          (card) => `<article class="gear-card">
            <h3>${card.name}</h3>
            <p class="muted">${card.uses}</p>
            <ul class="kit-list">
              ${card.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <p class="card-copy">${card.note}</p>
          </article>`
        )
        .join("")}
    </div>`;
}

function renderPractice() {
  const root = document.querySelector("#practice");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Pre-trip drills</p>
        <h2>Practice</h2>
      </div>
      <p>Practice is tied to field scenarios: fly-outs, panning, bright white birds, silhouettes, support, and cold pre-dawn workflow.</p>
    </div>
    <section class="panel">
      <p class="eyebrow">Tight buying stack</p>
      <div class="tag-row">
        ${bookStack.map((book) => `<span class="tag">${book}</span>`).join("")}
      </div>
    </section>
    <div class="grid-3" style="margin-top: 16px;">
      ${practiceDrills
        .map(
          (drill) => `<article class="gear-card">
            <h3>${drill.name}</h3>
            <p class="muted">${drill.scenario}</p>
            <p><b>Drill:</b> ${drill.drill}</p>
            <p><b>Success:</b> ${drill.standard}</p>
          </article>`
        )
        .join("")}
    </div>`;
}

function renderInspiration() {
  const root = document.querySelector("#inspiration");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Visual references</p>
        <h2>Inspiration</h2>
      </div>
      <p>These public-domain USFWS images can guide the visual system and may be candidates for site assets with credit.</p>
    </div>
    <div class="grid-3">
      ${inspiration
        .map(
          (item) => `<article class="photo-card">
            <figure>
              <img src="${item.img}" alt="${item.title}" />
              <figcaption>
                <h3>${item.title}</h3>
                <p class="card-copy">${item.idea}</p>
                <p class="muted">${item.credit}</p>
                <a href="${item.source}" target="_blank" rel="noreferrer">Source</a>
              </figcaption>
            </figure>
          </article>`
        )
        .join("")}
    </div>`;
}

function renderMedia() {
  const root = document.querySelector("#media");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Articles, EXIF, and field guidance</p>
        <h2>Media</h2>
      </div>
      <p>A research archive for Bosque del Apache photography articles, lens guidance, and auditable focal-length evidence. Articles are sorted newest first where dates are available.</p>
    </div>
    <section class="panel media-decision">
      <div>
        <p class="eyebrow">Lens decision</p>
        <h3>Sony 100-400 f/4.5 first if available. Canon RF 100-500 first.</h3>
        <p class="card-copy">Use the Sony FE 100-400mm F4.5 GM OSS for dawn, flight, and close passes, then the Sony 400-800mm for distant birds in good light. If the new 100-400mm is not available, the Sony 200-600mm remains the practical fallback. Keep 24-105 ready on either system for fly-outs, flock scale, mountains, reflections, weather, and habitat.</p>
      </div>
      <div class="media-counts" aria-label="Media counts">
        <span><b>${mediaArticles.length}</b> articles</span>
        <span><b>${exifEvidence.length}</b> evidence notes</span>
      </div>
    </section>
    <div class="filter-row media-filters">
      <button class="chip is-active" data-filter="All">All</button>
      <button class="chip" data-filter="Guide">Guides</button>
      <button class="chip" data-filter="Technique">Technique</button>
      <button class="chip" data-filter="Lens Evidence">Lens Evidence</button>
      <button class="chip" data-filter="Location">Location</button>
      <button class="chip" data-filter="Fieldcraft">Fieldcraft</button>
      <button class="chip" data-filter="Settings">Settings</button>
    </div>
    <div class="media-grid" id="media-results"></div>
    <section class="evidence-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Separate from article advice</p>
          <h2>EXIF Evidence</h2>
        </div>
        <p>These notes come from public metadata or published photo captions. They support the lens decision but do not replace field judgement.</p>
      </div>
      <div class="evidence-grid">
        ${exifEvidence
          .map(
            (item) => `<article class="evidence-card">
              <p class="eyebrow">${item.source}</p>
              <h3>${item.subject}</h3>
              <p><b>${item.evidence}</b></p>
              <p class="card-copy">${item.takeaway}</p>
              <a href="${item.url}" target="_blank" rel="noreferrer">Open evidence</a>
            </article>`
          )
          .join("")}
      </div>
    </section>`;

  const results = root.querySelector("#media-results");
  const draw = (filter) => {
    const articles = filter === "All" ? mediaArticles : mediaArticles.filter((item) => item.kind === filter);
    results.innerHTML = articles
      .map(
        (item) => `<article class="media-card">
          <div class="media-meta">
            <span>${item.date}</span>
            <span>${item.kind}</span>
          </div>
          <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h3>
          <p class="muted">${item.source}</p>
          <p class="card-copy">${item.summary}</p>
          <p><b>Lens / camera:</b> ${item.lens}</p>
          <p><b>Apply:</b> ${item.apply}</p>
        </article>`
      )
      .join("");
  };

  root.querySelectorAll(".media-filters .chip").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll(".media-filters .chip").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      draw(button.dataset.filter);
    });
  });

  draw("All");
}

function renderSources() {
  const root = document.querySelector("#sources");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Checked June 3, 2026</p>
        <h2>Sources</h2>
      </div>
      <p>Current access, lodging, pricing, water, road, and bird-location notes should be rechecked after final dates are set and again during the week of travel.</p>
    </div>
    <div class="timeline">
      ${sources
        .map(
          (source) => `<article class="source-row">
            <div><span class="tag">${source.topic}</span></div>
            <div>
              <h3><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a></h3>
              <p class="muted">${source.url}</p>
            </div>
            <div class="muted">${source.checked}</div>
          </article>`
        )
        .join("")}
    </div>`;
}

function renderMap() {
  const root = document.querySelector("#map");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Refuge map</p>
        <h2>Map</h2>
      </div>
      <p>Visitor Center coordinates are official FWS data. Deck, pullout, restroom, food, fuel, and lodging pins come from OpenStreetMap/Overpass and need field verification against posted refuge maps.</p>
    </div>
    <div class="map-layout">
      <div id="trip-map"></div>
      <aside class="map-list">
        ${locations
          .map(
            (place) => `<button class="map-item" data-location="${place.name}">
              <h3>${place.name}</h3>
              <p>${place.note}</p>
              <div class="tag-row">
                ${place.windows.map((item) => `<span class="tag">${item}</span>`).join("")}
                <span class="tag ${place.confidence.includes("official") ? "" : "verify"}">${place.confidence}</span>
              </div>
            </button>`
          )
          .join("")}
      </aside>
    </div>`;

  if (!window.L) {
    root.querySelector("#trip-map").outerHTML = `<div class="empty-map">Map library did not load. The location list is still available.</div>`;
    return;
  }

  const map = L.map("trip-map", {
    scrollWheelZoom: false,
  }).setView([33.804777, -106.890917], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const markerByName = new Map();
  locations.forEach((place) => {
    const marker = L.marker([place.lat, place.lon]).addTo(map);
    marker.bindPopup(`<b>${place.name}</b><br>${place.note}<br><small>${place.confidence}</small>`);
    markerByName.set(place.name, marker);
  });
  window.tripMap = map;
  window.tripMapBounds = L.latLngBounds(locations.map((place) => [place.lat, place.lon]));

  root.querySelectorAll(".map-item").forEach((button) => {
    button.addEventListener("click", () => {
      const marker = markerByName.get(button.dataset.location);
      if (!marker) return;
      map.setView(marker.getLatLng(), 14);
      marker.openPopup();
    });
  });
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.view;
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("is-active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
      button.classList.add("is-active");
      document.querySelector(`#${id}`).classList.add("is-active");
      if (id === "map") {
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
          if (window.tripMap && window.tripMapBounds) {
            window.tripMap.invalidateSize();
            if (!window.tripMapFitted) {
              window.tripMap.fitBounds(window.tripMapBounds, { padding: [24, 24] });
              window.tripMapFitted = true;
            }
          }
        }, 60);
      }
    });
  });
}

renderOverview();
renderMap();
renderItinerary();
renderWindows();
renderLodging();
renderGear();
renderPractice();
renderInspiration();
renderMedia();
renderSources();
initTabs();
