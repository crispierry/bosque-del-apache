const checkedDate = "2026-06-03";
const gearCheckedDate = "2026-06-04";

const assets = {
  geese: "./assets/snow-geese-gary-stolz-usfws-1800.jpg",
  cranes: "./assets/sandhill-cranes-ryan-hagerty-usfws-1800.jpg",
  flyout: "./assets/snow-geese-flyout-lynne-braden-usfws-1800.jpg",
};

const leafletAssets = {
  css: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  js: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  integrity: "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=",
};

let leafletLoadPromise;

const sources = [
  {
    topic: "Official refuge",
    title: "USFWS Bosque del Apache Visit Us",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us",
    checked: checkedDate,
  },
  {
    topic: "Official refuge",
    title: "USFWS Auto Tour",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/activities/auto-tour",
    checked: checkedDate,
  },
  {
    topic: "Official refuge",
    title: "USFWS Rules and Policies",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/rules-policies",
    checked: checkedDate,
  },
  {
    topic: "Official refuge",
    title: "USFWS Species and Seasons",
    url: "https://www.fws.gov/refuge/bosque-del-apache/species",
    checked: checkedDate,
  },
  {
    topic: "Field guide",
    title: "Cornell All About Birds - Bosque del Apache",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    checked: checkedDate,
  },
  {
    topic: "Field guide",
    title: "The Quite Wild - Bird Photography for Beginners at Bosque del Apache",
    url: "https://thequitewild.com/bird-photography-for-beginners-bosque-del-apache/",
    checked: checkedDate,
  },
  {
    topic: "Field guide",
    title: "Evie Wilder - Sandhill Crane Migration",
    url: "https://eviewilder.com/blog/sandhill-crane-migration-bosque-del-apache-winter/",
    checked: checkedDate,
  },
  {
    topic: "Gear specs",
    title: "Sony support lens specifications",
    url: "https://www.sony.com/electronics/support/lenses-e-mount-lenses",
    checked: checkedDate,
  },
  {
    topic: "Gear specs",
    title: "Canon RF lens specifications",
    url: "https://www.usa.canon.com/shop/cameras/lenses",
    checked: checkedDate,
  },
  {
    topic: "Camera body",
    title: "Sony ILCE-7RM6 / Alpha 7R VI specifications",
    url: "https://www.sony.com/electronics/support/e-mount-body-ilce-7-series/ilce-7rm6/specifications",
    checked: gearCheckedDate,
  },
  {
    topic: "Sigma E-mount gear",
    title: "Sigma 60-600mm F4.5-6.3 DG DN OS | Sports",
    url: "https://www.sigma-global.com/en/lenses/s023_60_600_45_63/",
    checked: gearCheckedDate,
  },
  {
    topic: "Sigma E-mount gear",
    title: "Sigma 150-600mm F5-6.3 DG DN OS | Sports",
    url: "https://www.sigma-global.com/en/lenses/s021_150_600_5_63/",
    checked: gearCheckedDate,
  },
  {
    topic: "Sigma E-mount gear",
    title: "Sigma 500mm F5.6 DG DN OS | Sports",
    url: "https://www.sigma-global.com/en/lenses/s024_500_56/",
    checked: gearCheckedDate,
  },
  {
    topic: "Sigma teleconverters",
    title: "Sigma TELE CONVERTER TC-1411 / TC-2011 compatibility",
    url: "https://www.sigma-global.com/en/support/download/SIGMA-TELE-CONVERTER-TC1411_TC2011_EN_240220.pdf",
    checked: gearCheckedDate,
  },
  {
    topic: "Safari lens research",
    title: "Digital Camera World - Best lenses for safari photography in 2026",
    url: "https://www.digitalcameraworld.com/buying-guides/best-lenses-for-safari-photography",
    checked: checkedDate,
  },
  {
    topic: "Safari lens research",
    title: "Drew Sproule - African photo safari gear",
    url: "https://drewsproule.com/blog/the-best-camera-gear-to-pack-for-an-african-photo-safari",
    checked: checkedDate,
  },
  {
    topic: "Lodging photos",
    title: "Holiday Inn Express Socorro Gallery",
    url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/socorro/socnm/hoteldetail/gallery",
    checked: checkedDate,
  },
  {
    topic: "Lodging photos",
    title: "Comfort Inn & Suites Socorro",
    url: "https://www.choicehotels.com/en-xl/new-mexico/socorro/comfort-inn-hotels/nm126",
    checked: checkedDate,
  },
  {
    topic: "Lodging photos",
    title: "Best Western Socorro Hotel & Suites",
    url: "https://www.bestwestern.com/en_US/book/socorro/hotel-rooms/best-western-socorro-hotel-suites/propertyCode.32105.html",
    checked: checkedDate,
  },
  {
    topic: "Lodging photos",
    title: "Fairfield by Marriott Inn & Suites Los Lunas Photos",
    url: "https://www.marriott.com/en-gb/hotels/abqlf-fairfield-inn-and-suites-los-lunas/photos/",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "ABQ Sunport facts and airlines",
    url: "https://www.abqsunport.com/facts-figures/",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "ABQ Sunport rental cars",
    url: "https://www.abqsunport.com/rental-cars/",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "SFO nonstop destinations",
    url: "https://www.flysfo.org/nonstop/where-we-fly-united-states",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "Southwest Oakland to Albuquerque",
    url: "https://www.southwest.com/en/flights/flights-from-oakland-to-albuquerque",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "Southwest San Jose to Albuquerque",
    url: "https://www.southwest.com/routes/flights-from-san-jose-ca-to-albuquerque",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "New Mexico Tourism - Bosque del Apache",
    url: "https://www.newmexico.org/places-to-visit/regions/southwest/bosque-del-apache/",
    checked: checkedDate,
  },
  {
    topic: "Travel",
    title: "NMDOT winter travel information",
    url: "https://www.nmroads.com/",
    checked: checkedDate,
  },
];

const photoLocations = [
  {
    name: "Visitor Center",
    type: "Refuge base",
    lat: 33.804777,
    lon: -106.890917,
    windows: ["mid-morning", "intel"],
    confidence: "official FWS",
    note:
      "Start here when open for current water, road, roost, and closure intelligence. Visitor Center hours currently show Thu-Mon, 9 AM-4 PM.",
  },
  {
    name: "North Crane Pond parking",
    type: "Crane pool",
    lat: 33.8593284,
    lon: -106.8766304,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note:
      "Primary crane-pool scout for dawn lift-off and evening returns. Verify legal pullouts, signs, wind direction, and active birds each day.",
  },
  {
    name: "South Crane Pond north pullout",
    type: "Crane pool",
    lat: 33.8545263,
    lon: -106.8778053,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note:
      "Alternate crane-pool angle for reflection, landing lanes, and mountain bands. Use only legal parking, and stay clear of the railroad and shoulders.",
  },
  {
    name: "South Crane Pond south pullout",
    type: "Crane pool",
    lat: 33.8515291,
    lon: -106.8785379,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note:
      "Good for adjusting against wind and light when the north pullout is crowded or the birds stage farther south.",
  },
  {
    name: "Flight Deck / Main Pool",
    type: "Viewpoint deck",
    lat: 33.8048326,
    lon: -106.8844325,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note:
      "Classic snow-goose blast-off position when Main Pool has water and birds. Scout the afternoon before committing a sunrise here.",
  },
  {
    name: "Dabbler Deck",
    type: "Wetland deck",
    lat: 33.7903825,
    lon: -106.8922801,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note:
      "South Loop ducks, coots, reeds, reflections, slower practice, and clean habitat frames after the first fly-out.",
  },
  {
    name: "Eagle Scout Deck",
    type: "Wetland deck",
    lat: 33.7992911,
    lon: -106.8842161,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note:
      "A calmer wetland viewpoint for ducks, geese, reeds, reflections, and exposure practice on bright birds.",
  },
  {
    name: "Willow Deck",
    type: "Wetland deck",
    lat: 33.8127697,
    lon: -106.8618949,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note:
      "North Loop wetland work with long-lens compression. Keep tripod legs compact if other visitors are present.",
  },
  {
    name: "Coyote Deck",
    type: "Wetland deck",
    lat: 33.8158514,
    lon: -106.8611816,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note:
      "Pair with Willow Deck for ducks, distant cranes, raptors, and habitat images when the crop-field action slows.",
  },
  {
    name: "Farm Deck / North Loop fields",
    type: "Field staging",
    lat: 33.8326838,
    lon: -106.8610046,
    windows: ["mid-morning", "sunset"],
    confidence: "planning pin",
    note:
      "Use after fly-out for feeding cranes/geese, raptors, and flight lines. Field access and bird placement change with management activity.",
  },
  {
    name: "Rio Viejo / Bike Trail parking",
    type: "Trailhead",
    lat: 33.7946779,
    lon: -106.8733529,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note:
      "Short-walk change of pace for marsh birds, passerines, quail, roadrunner, and texture work. Potable water is not assumed on the loop.",
  },
];

const lodgingLocations = [
  {
    rank: 1,
    name: "Comfort Inn & Suites Socorro",
    area: "Socorro",
    lat: 34.0782267,
    lon: -106.8958421,
    drive: "25-30 min",
    price: "Dec 6-12 snapshot: from $722 total",
    best: "Best safe/value default",
    image:
      "https://www.choicehotels.com/en-xl/new-mexico/socorro/comfort-inn-hotels/nm126",
    imageLabel: "Official hotel photos",
    note:
      "Interior-corridor chain option with breakfast, Wi-Fi, parking, microwave/fridge, indoor pool/hot tub, and the strongest value fit in the current snapshot.",
    watch:
      "Lowest rates can be nonrefundable. Verify direct refundable total, cancellation time, and recent room-specific reviews before booking.",
  },
  {
    rank: 2,
    name: "Best Western Socorro Hotel & Suites",
    area: "Socorro",
    lat: 34.0720531,
    lon: -106.8924442,
    drive: "25-30 min",
    price: "Dec 6-12 snapshot: from $726 total",
    best: "Strong value backup",
    image:
      "https://www.bestwestern.com/en_US/book/socorro/hotel-rooms/best-western-socorro-hotel-suites/propertyCode.32105.html",
    imageLabel: "Official hotel gallery",
    note:
      "Free breakfast and parking, indoor pool, pet-friendly rooms available, and convenient Socorro fuel/food access.",
    watch:
      "Slightly weaker review profile than the top choice. Recheck noise, room type, and cancellation terms.",
  },
  {
    rank: 3,
    name: "Holiday Inn Express Socorro by IHG",
    area: "Socorro",
    lat: 34.0709527,
    lon: -106.8924458,
    drive: "25-30 min",
    price: "Dec 6-12 snapshot: from $1,181 total",
    best: "Cleanest low-friction chain choice",
    image:
      "https://digital.ihg.com/is/image/ihg/holiday-inn-express-socorro-6484441509-4x3?wid=733",
    imageLabel: "IHG room photo",
    note:
      "Reliable chain experience, breakfast listed 6:00-9:30 AM, indoor pool, free Wi-Fi, and easy Socorro logistics.",
    watch:
      "Materially more expensive in the snapshot. Worth it only if direct refundable pricing tightens or comfort premium matters.",
  },
  {
    rank: 4,
    name: "Econo Lodge Inn & Suites Socorro",
    area: "Socorro",
    lat: 34.0644474,
    lon: -106.8936162,
    drive: "25-30 min",
    price: "Dec 6-12 snapshot: from $631 total",
    best: "Cheapest acceptable fallback",
    image:
      "https://www.expedia.com/Socorro-Hotels-Econo-Lodge-Socorro.h13443.Hotel-Information",
    imageLabel: "Expedia hotel photos",
    note:
      "Budget fallback with free parking and breakfast. It keeps the dawn drive reasonable if prices jump elsewhere.",
    watch:
      "Expect motel tradeoffs in finish, sound, and comfort. Inspect 2026 reviews before committing.",
  },
  {
    rank: 5,
    name: "Casa Blanca Bed and Breakfast",
    area: "San Antonio",
    lat: 33.917846,
    lon: -106.868875,
    drive: "12-15 min",
    price: "Posted $100-$120/night; direct availability required",
    best: "Closest birding-oriented base",
    image: "https://casablancabedandbreakfast.com/",
    imageLabel: "Property website",
    note:
      "Closest lodging option, refuge-savvy hosts, and very short pre-dawn commute if the room and terms work.",
    watch:
      "Availability requires direct contact. Cash/check and winter cancellation terms may be less convenient than a chain hotel.",
  },
  {
    rank: 6,
    badge: "Bonvoy",
    name: "Fairfield by Marriott Inn & Suites Los Lunas",
    area: "Los Lunas",
    lat: 34.81935,
    lon: -106.74183,
    drive: "~1 hr 20 min",
    price: "Dec 6-12 snapshot: from $1,003 total",
    best: "Marriott Bonvoy tradeoff",
    image:
      "https://www.marriott.com/en-gb/hotels/abqlf-fairfield-inn-and-suites-los-lunas/photos/",
    imageLabel: "Marriott photo gallery",
    note:
      "Closest practical Bonvoy option found, with free breakfast, free parking, fitness center, and newer-property appeal.",
    watch:
      "Not a photography-first base. A 6:10 AM setup means leaving around 4:20 AM, so use only if points/status outweigh the commute.",
  },
];

const flightOptions = [
  {
    airport: "SFO",
    route: "San Francisco to Albuquerque",
    recommendation: "Strongest Bay Area default when SFO is convenient.",
    detail:
      "SFO's official nonstop list includes Albuquerque on United. Recheck the exact December schedule and fare before booking because airline frequency can change.",
    source: "https://www.flysfo.org/nonstop/where-we-fly-united-states",
  },
  {
    airport: "OAK",
    route: "Oakland to Albuquerque",
    recommendation: "Good East Bay option if the nonstop timing works.",
    detail:
      "Southwest lists Oakland to Albuquerque service. Treat it as schedule-dependent and compare arrival time against the drive south to Socorro.",
    source: "https://www.southwest.com/en/flights/flights-from-oakland-to-albuquerque",
  },
  {
    airport: "SJC",
    route: "San Jose to Albuquerque",
    recommendation: "South Bay fallback, likely connection-first.",
    detail:
      "Southwest's current San Jose to Albuquerque route page does not show the same nonstop confidence as SFO or OAK. Use it if the connection is better than driving to SFO/OAK.",
    source: "https://www.southwest.com/routes/flights-from-san-jose-ca-to-albuquerque",
  },
  {
    airport: "ABQ",
    route: "Albuquerque to Socorro / Bosque",
    recommendation: "Rent at ABQ, then drive south.",
    detail:
      "ABQ is New Mexico's largest commercial airport and offers nonstop service to more than 30 destinations. From the north, FWS directions use I-25 south to exit 139, then US 380 and NM-1 to the visitor center.",
    source: "https://www.abqsunport.com/facts-figures/",
  },
];

const rentalCarGuidance = [
  {
    title: "Best default: compact or midsize SUV",
    note:
      "A normal car can handle the main paved/highway approach and usual refuge gravel roads, but an SUV gives better clearance, cargo room, visibility, and winter-weather margin.",
  },
  {
    title: "AWD is useful, not mandatory",
    note:
      "Book AWD if the price difference is modest or if December weather looks snowy or icy. It helps on I-25, NM-1, gravel pullouts, and muddy shoulders, but it does not replace cautious driving.",
  },
  {
    title: "Avoid low-clearance sedans",
    note:
      "The Scenic Drive is described by FWS as a wide gravel road, but you will be moving slowly, pulling into turnouts, and carrying long lenses. Extra clearance is a comfort and gear-protection decision.",
  },
  {
    title: "Plan around camera cargo",
    note:
      "Choose a hatchback/crossover cargo area with a cover if possible. Keep long lenses, tripod, beanbag, layers, snacks, water, and backup gear out of sight when parked.",
  },
  {
    title: "Fuel, water, and winter checks",
    note:
      "Top off in Albuquerque or Socorro before dawn loops. FWS notes bottled water is not available on the refuge and potable water is not available on the Auto Tour Loop. Check NMRoads or 511 before winter travel.",
  },
];

const tripDays = [
  {
    date: "Sun Dec 6",
    label: "Arrival",
    theme:
      "Arrive, settle the room, and use any remaining light for a no-pressure scout.",
    detail:
      "Do not make the arrival day carry the trip. The job is to confirm the drive time, fuel, food, cold-weather workflow, and the first sunrise target.",
    slots: [
      {
        window: "Afternoon",
        time: "After arrival",
        place: "Socorro hotel / San Antonio route check",
        goal:
          "Unload, charge batteries, stage layers, and set the vehicle so the first morning is frictionless.",
        gear:
          "Keep one body with 24-105 and one body with the long zoom mounted before sleep.",
        position:
          "Drive the route once in daylight if possible. Fill fuel before evening.",
      },
      {
        window: "Sunset",
        time: "Arrive by 3:40 PM if timing allows",
        place: "North or South Crane Pond",
        goal:
          "Scout active roosts, parking, light angle, and wind. A clean scouting note is more valuable than forcing a keeper.",
        gear:
          "24-105 for context; Sony 200-600 or Canon 100-500 for bird placement.",
        position:
          "Stay in legal pullouts only. Mark which side of the road gives the better mountain and reflection background.",
      },
    ],
  },
  {
    date: "Mon Dec 7",
    label: "On-site Day 1",
    theme: "Lock the active roosts and establish the morning rhythm.",
    detail:
      "This is the systems day: camera settings, gloves, battery swaps, position, and how birds respond to wind. Keep notes after every window.",
    slots: [
      {
        window: "Sunrise",
        time: "Be parked by 6:10-6:15 AM",
        place: "Highway 1 crane pools",
        goal:
          "Cranes lifting from shallow water, cold breath, reflections, and first wind-direction notes.",
        gear:
          "Sony 200-600 as primary, Sony 24-105 on second body; Canon 100-500 or 200-800 plus RF 24-105.",
        position:
          "Pre-compose two frames: a tight crane lane and a wide reflection/sky frame. Birds usually depart into wind.",
      },
      {
        window: "Mid-morning",
        time: "9:00-11:30 AM",
        place: "Visitor Center, Dabbler Deck, Eagle Scout Deck",
        goal:
          "Use staff intel if open, then practice exposure on ducks, geese, reeds, and bright water.",
        gear:
          "Flexible long zoom handheld or beanbag. Keep 24-105 ready for habitat images.",
        position:
          "Move slowly, let the vehicle be the blind, and write down where birds are actually feeding.",
      },
      {
        window: "Sunset",
        time: "Arrive by 3:35-3:45 PM",
        place: "Best active crane pool",
        goal:
          "Crane family groups returning to water, mountain bands, silhouettes, and reflection practice.",
        gear:
          "Long zoom plus 24-105. Avoid teleconverters until light is stable.",
        position:
          "Choose one clean background and stay with it instead of chasing every landing.",
      },
    ],
  },
  {
    date: "Tue Dec 8",
    label: "On-site Day 2",
    theme: "Go for the classic blast-off, then follow feeding patterns.",
    detail:
      "If Main Pool is active, this is the best morning to commit to Flight Deck. If not, use the crane-pool data from Day 1.",
    slots: [
      {
        window: "Sunrise",
        time: "Set before civil twilight",
        place: "Flight Deck / Main Pool or strongest roost repeat",
        goal:
          "Snow-goose blast-off, flock shapes, sound, sky color, and a wide-to-long sequence.",
        gear:
          "24-105 for the initial mass lift; long zoom once birds separate.",
        position:
          "Start wider than instinct. Switch longer only after the flock breaks into readable shapes.",
      },
      {
        window: "Mid-morning",
        time: "After fly-out",
        place: "North Loop fields / Farm Deck",
        goal:
          "Feeding cranes and geese, raptors crossing fields, and practice tracking birds against changing backgrounds.",
        gear:
          "Sony 100-400 or 200-600; Canon 100-500. Use 400-800/200-800 only if birds stay distant.",
        position:
          "Park fully clear of traffic. Do not block the loop while waiting on repeated flight lines.",
      },
      {
        window: "Sunset",
        time: "Arrive by 3:40 PM",
        place: "South Crane Pond pullouts",
        goal:
          "Landing posture, wing shape, paired cranes, and warm side light over water.",
        gear:
          "Long zoom on support if waiting; 24-105 for roost scale and sky.",
        position:
          "Let wind choose the landing side. Leave room in frame in front of the bird.",
      },
    ],
  },
  {
    date: "Wed Dec 9",
    label: "On-site Day 3",
    theme: "Behavior, repetition, and cleaner backgrounds.",
    detail:
      "By now the plan should be less about finding birds and more about predicting what the same birds will do next.",
    slots: [
      {
        window: "Sunrise",
        time: "Be positioned by 6:10 AM",
        place: "Best crane-pool repeat",
        goal:
          "Takeoff runs, head/neck focus, cold-air atmosphere, and controlled panning bursts.",
        gear:
          "Sony 200-600 or Canon 100-500. Skip teleconverters in dim predawn light.",
        position:
          "Watch for neck stretch, wing stretch, head bobbing, and crouch. Start tracking before the bird commits.",
      },
      {
        window: "Mid-morning",
        time: "9:15-11:30 AM",
        place: "Willow Deck and Coyote Deck",
        goal:
          "Wetland compression, ducks, reeds, raptors, and quiet-detail frames after the big morning action.",
        gear:
          "Long zoom or 70-200 for closer habitat. Tripod only if space allows.",
        position:
          "Keep the tripod footprint compact; work one background until it is clean.",
      },
      {
        window: "Sunset",
        time: "Arrive by 3:40 PM",
        place: "Flight Deck if active, otherwise crane pools",
        goal:
          "Returning geese, cranes crossing last light, slow shutter experiments after safe frames are captured.",
        gear:
          "Long zoom for safe frames; 24-105 for slow flock movement over color.",
        position:
          "Make the safe image first, then try 1/250, 1/125, and 1/60 panning.",
      },
    ],
  },
  {
    date: "Thu Dec 10",
    label: "On-site Day 4",
    theme: "Habitat, marsh texture, and slower seeing.",
    detail:
      "Use this day to widen the story. The strongest Bosque set is not only tight bird portraits; it includes place, weather, water, and scale.",
    slots: [
      {
        window: "Sunrise",
        time: "Start near the loop entrance by 6:15 AM",
        place: "South Loop wetland stretch",
        goal:
          "Mist, reeds, ducks, geese, harriers, and early rim light through habitat.",
        gear:
          "24-105 and flexible long zoom. Save the longest lens for bright, distant subjects.",
        position:
          "Work slowly toward Dabbler Deck. Let layered habitat become part of the image.",
      },
      {
        window: "Mid-morning",
        time: "9:30-11:30 AM",
        place: "Rio Viejo / Bike Trail area",
        goal:
          "Roadrunner, quail, sparrows, cattails, coots, mammals, tracks, and smaller story details.",
        gear:
          "Long zoom handheld or beanbag; 24-105 for trail and habitat.",
        position:
          "Stay on open routes and move only when subjects are calm. No flushing for a photograph.",
      },
      {
        window: "Sunset",
        time: "Arrive by 3:35 PM",
        place: "North Loop fields near Farm Deck",
        goal:
          "Field staging, warm side light, cranes feeding, and birds crossing darker backgrounds.",
        gear:
          "Long zoom on support if the birds are distant; 70-200 or 24-105 if they approach.",
        position:
          "Confirm gates and signs the same day. If the fields are dead, return to the roost.",
      },
    ],
  },
  {
    date: "Fri Dec 11",
    label: "On-site Day 5",
    theme: "Repeat the strongest setup and finish deliberately.",
    detail:
      "The final full day should be a quality pass. Repeat what worked, delete weak assumptions, and come home with a coherent set.",
    slots: [
      {
        window: "Sunrise",
        time: "Be parked by 6:05-6:10 AM",
        place: "Best current roost repeat",
        goal:
          "Use everything learned: wind, light, background, behavior cues, and pre-focused lanes.",
        gear:
          "Primary long zoom plus 24-105. Do not experiment until the first clean sequence is done.",
        position:
          "Commit to one high-yield spot. The final morning is not the moment to chase a completely new location.",
      },
      {
        window: "Mid-morning",
        time: "9:00-11:00 AM",
        place: "Visitor Center / central road / strongest deck",
        goal:
          "Fill missing subjects: roadrunner, quail, raptors, environmental wide frames, and quiet portraits.",
        gear:
          "Flexible long zoom; 24-105 for the closing place images.",
        position:
          "Stay patient and review the shot list from the first four days before moving.",
      },
      {
        window: "Sunset",
        time: "Arrive by 3:35 PM",
        place: "Highway 1 crane-pool finale",
        goal:
          "Choose a final composition: reflection landing, mountain band, or wide sky punctuation.",
        gear:
          "Long zoom plus 24-105; optional tripod for locked reflection frames.",
        position:
          "Stay through legal light. Birds may return after sunset, and the best color may come late.",
      },
    ],
  },
  {
    date: "Sat Dec 12",
    label: "Departure",
    theme: "Leave clean, backed up, and with next-step notes.",
    detail:
      "Departure morning is for packing, backups, and one optional short loop only if the travel schedule leaves real margin.",
    slots: [
      {
        window: "Morning",
        time: "Before checkout",
        place: "Hotel / optional short loop",
        goal:
          "Back up cards, clean lenses, record field notes, and pack without rushing.",
        gear:
          "Travel kit only unless a short final scout is realistic.",
        position:
          "Do not risk the departure schedule for a marginal extra stop.",
      },
    ],
  },
];

const gearItems = [
  {
    system: "Sony",
    name: "FE 24-105mm F4 G OSS",
    role: "Wide story, habitat, weather, flock scale",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/78666_original_local_1200x1050_v3_converted.webp",
    specs: {
      aperture: "f/4-f/22",
      filter: "77 mm",
      length: "113.3 mm",
      weight: "663 g",
      minFocus: "0.38 m",
      teleconverter: "No",
      introduced: "2017",
      stabilization: "Optical SteadyShot",
      zoomFocus: "Extending zoom; internal focus",
      weather: "Dust and moisture resistant design; fluorine front coating",
    },
    photo:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel24105g/specifications",
    photoLabel: "Sony product/spec page",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel24105g/specifications",
    note:
      "Keep this on a second body for blast-off scale, mountain bands, refuge context, and travel scenes.",
  },
  {
    system: "Sony",
    name: "FE 24-70mm F2.8 GM II",
    role: "Travel, people, low light, shallow depth of field",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/102462_original_local_1200x1050_v3_converted.webp",
    specs: {
      aperture: "f/2.8-f/22",
      filter: "82 mm",
      length: "119.9 mm",
      weight: "695 g",
      minFocus: "0.21-0.30 m AF",
      teleconverter: "No",
      introduced: "2022",
      stabilization: "No lens OSS; body-integrated stabilization",
      zoomFocus: "Extending zoom; floating focus with XD linear motors",
      weather: "Dust and moisture resistant design; fluorine front coating",
    },
    photo: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel2470gm2",
    photoLabel: "Sony product photo",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel2470gm2/specifications",
    note:
      "Useful outside the refuge, but the 24-105 is the better Bosque standard zoom because 70-105 mm matters for scale.",
  },
  {
    system: "Sony",
    name: "FE 70-200mm F2.8 GM OSS II",
    role: "Close wildlife, portraits, camp/travel compression, Tanzania second body",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/92317_original_local_1200x1050_v3_converted.webp",
    specs: {
      aperture: "f/2.8-f/22",
      filter: "77 mm",
      length: "200 mm",
      weight: "1,045 g without tripod mount",
      minFocus: "0.40-0.82 m",
      teleconverter: "SEL14TC / SEL20TC",
      introduced: "2021",
      stabilization: "Optical SteadyShot",
      zoomFocus: "Internal zoom; inner focus",
      weather: "Sealed seams, rubber gaskets, rubber mount ring; fluorine front coating",
    },
    photo: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel70200gm2",
    photoLabel: "Sony product photo",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel70200gm2/specifications",
    note:
      "Not the main Bosque bird lens, but it becomes much more important on Tanzania for close mammals and low-light vehicle work.",
  },
  {
    system: "Sony",
    name: "FE 100-400mm F4.5-5.6 GM OSS",
    role: "Lighter handheld flight zoom and close-pass lens",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/101425_original_local_1200x1050_v3_converted.webp",
    specs: {
      aperture: "f/4.5-5.6 to f/32-40",
      filter: "77 mm",
      length: "205 mm",
      weight: "1,395 g without tripod mount",
      minFocus: "0.98 m",
      teleconverter: "SEL14TC / SEL20TC",
      introduced: "2017",
      stabilization: "Optical SteadyShot",
      zoomFocus: "Extending zoom with torque adjuster; floating focus",
      weather: "Dust and moisture resistant design for light rain or windy conditions",
    },
    photo: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel100400gm",
    photoLabel: "Sony product photo",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel100400gm/specifications",
    note:
      "Excellent when birds are close, light is dim, or the 200-600 is too heavy for fast acquisition.",
  },
  {
    system: "Sony",
    name: "FE 200-600mm F5.6-6.3 G OSS",
    role: "Primary Sony wildlife reach for Bosque and classic Tanzania setup",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/101592_original_local_1200x1050_v3_converted.webp",
    specs: {
      aperture: "f/5.6-6.3 to f/32-36",
      filter: "95 mm",
      length: "318 mm",
      weight: "2,115 g",
      minFocus: "2.4 m",
      teleconverter: "SEL14TC / SEL20TC",
      introduced: "2019",
      stabilization: "Optical SteadyShot",
      zoomFocus: "Internal zoom; DDSSM autofocus",
      weather: "Dust and moisture resistant design; fluorine front coating",
    },
    photo: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel200600g",
    photoLabel: "Sony product photo",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel200600g/specifications",
    note:
      "A first-class Sony wildlife recommendation for Bosque and Tanzania. It is the cleanest Sony one-body long lens when birds, distant mammals, and vehicle-based field positions matter.",
  },
  {
    system: "Sony",
    name: "FE 400-800mm F6.3-8 G OSS",
    role: "Distant birds, distant cats, and bright-good-light reach",
    image: "assets/sony-fe-400-800-g-oss.jpg",
    specs: {
      aperture: "f/6.3-8 to f/36-45",
      filter: "105 mm",
      length: "346 mm",
      weight: "2,475 g",
      minFocus: "1.7-3.5 m",
      teleconverter: "SEL14TC / SEL20TC",
      introduced: "2025",
      stabilization: "Optical SteadyShot",
      zoomFocus: "Internal zoom; linear motor focus group",
      weather: "Internal zoom plus dust and moisture resistant design; fluorine front coating",
    },
    photo: "https://www.sony.co.uk/electronics/camera-lenses/sel400800g/specifications",
    photoLabel: "Sony product/spec page",
    source: "https://www.sony.co.uk/electronics/camera-lenses/sel400800g/specifications",
    note:
      "A specialized long-reach lens. Excellent for Bosque distance and birds, but too narrow and slow to be the automatic Tanzania primary.",
  },
  {
    system: "Sony",
    name: "SEL14TC 1.4x Teleconverter",
    role: "Good-light reach extension",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/81413_original_local_1200x1050_v3_converted.webp",
    specs: {
      aperture: "Loses 1 stop",
      filter: "None",
      length: "33.6 mm",
      weight: "167 g",
      minFocus: "Lens dependent",
      teleconverter: "N/A",
      introduced: "2016",
      stabilization: "N/A; lens/body stabilization still matters",
      zoomFocus: "No zoom or focus; mounts between body and compatible lens",
      weather: "No public sealing claim; avoid swaps in dust, rain, or snow",
    },
    photo: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel14tc",
    photoLabel: "Sony product photo",
    source: "https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel14tc",
    note:
      "Use after light improves. Avoid frequent mounting in dust, and do not make it the dawn default.",
  },
  {
    system: "Sigma E",
    name: "Sigma 60-600mm F4.5-6.3 DG DN OS | Sports",
    role: "One-lens Sony E wildlife range from flock context to 600mm reach",
    specs: {
      aperture: "f/4.5-6.3 to f/22-32",
      filter: "105 mm",
      length: "281.2 mm",
      weight: "2,485 g",
      minFocus: "0.45-2.6 m",
      teleconverter: "L-Mount only; no Sigma TC on Sony E",
      introduced: "2023",
      stabilization: "Sigma OS2, up to 7 stops wide / 6 stops tele",
      zoomFocus: "Extending dual-action zoom; HLA autofocus",
      weather: "Dust and splash resistant structure; water/oil repellent coating",
    },
    photo: "https://www.sigma-global.com/en/lenses/s023_60_600_45_63/",
    photoLabel: "Sigma product/spec page",
    source: "https://www.sigma-global.com/en/lenses/s023_60_600_45_63/",
    note:
      "A credible A7R VI-compatible E-mount wildlife option when avoiding lens changes matters more than weight. For Bosque, it is useful from vehicle pullouts, but it is heavier than the Sony 200-600 and has no Sony E-mount teleconverter path.",
  },
  {
    system: "Sigma E",
    name: "Sigma 150-600mm F5-6.3 DG DN OS | Sports",
    role: "Sony E-mount long wildlife zoom alternative",
    specs: {
      aperture: "f/5-6.3 to f/22-29",
      filter: "95 mm",
      length: "265.6 mm",
      weight: "2,100 g with tripod socket",
      minFocus: "0.58-2.8 m",
      teleconverter: "L-Mount only; no Sigma TC on Sony E",
      introduced: "2021",
      stabilization: "Sigma OS with Mode 1 / Mode 2",
      zoomFocus: "Extending dual-action zoom; stepping motor AF",
      weather: "Dust and splash resistant structure; water/oil repellent front coating",
    },
    photo: "https://www.sigma-global.com/en/lenses/s021_150_600_5_63/",
    photoLabel: "Sigma product/spec page",
    source: "https://www.sigma-global.com/en/lenses/s021_150_600_5_63/",
    note:
      "The closest Sigma alternative to the Sony 200-600 for Bosque birds. It fits Sony E-mount full-frame bodies, including the Alpha 7R VI, but Sigma's TC-1411/TC-2011 support is L-Mount-only.",
  },
  {
    system: "Sigma E",
    name: "Sigma 500mm F5.6 DG DN OS | Sports",
    role: "Compact prime for high-resolution Sony E bird work",
    specs: {
      aperture: "f/5.6 to f/32",
      filter: "95 mm",
      length: "236.6 mm",
      weight: "1,365 g",
      minFocus: "3.2 m",
      teleconverter: "L-Mount only; no Sigma TC on Sony E",
      introduced: "2024",
      stabilization: "Sigma OS2, up to 5 stops",
      zoomFocus: "Prime; HLA autofocus",
      weather: "Dust and splash resistant Sports-line structure; water/oil repellent coating",
    },
    photo: "https://www.sigma-global.com/en/lenses/s024_500_56/",
    photoLabel: "Sigma product/spec page",
    source: "https://www.sigma-global.com/en/lenses/s024_500_56/",
    note:
      "The sharp, lighter Sigma bird option for a high-resolution Sony body when fixed 500mm framing is acceptable. For Bosque, pair it with a second body or a 24-105 because it cannot zoom out when a flock erupts close.",
  },
  {
    system: "Canon",
    name: "RF 24-105mm F4 L IS USM",
    role: "Wide story, habitat, weather, flock scale",
    image:
      "https://s7d1.scene7.com/is/image/canon/2963C002_rf-24-105mm-f4-l-is-usm_primary2?fmt=webp-alpha",
    specs: {
      aperture: "f/4",
      filter: "77 mm",
      length: "107.3 mm",
      weight: "700 g",
      minFocus: "0.45 m",
      teleconverter: "No",
      introduced: "2018",
      stabilization: "Optical IS, up to 5 stops",
      zoomFocus: "Extending zoom; Nano USM autofocus",
      weather: "L-series dust/weather resistance; fluorine coating",
    },
    photo:
      "https://www.usa.canon.com/shop/catalog/product/view/id/50549/s/rf24-105mm-f4-l-is-usm/",
    photoLabel: "Canon product photo",
    source:
      "https://www.usa.canon.com/shop/catalog/product/view/id/50549/s/rf24-105mm-f4-l-is-usm/",
    note:
      "The best Canon standard zoom for Bosque because it reaches beyond 70 mm for flock scale and habitat compression.",
  },
  {
    system: "Canon",
    name: "RF 24-70mm F2.8 L IS USM",
    role: "Travel, people, low light, shallow depth of field",
    image:
      "https://s7d1.scene7.com/is/image/canon/3680C002_rf-24-70mm-f2.8-l-is-usm_primary?fmt=webp-alpha",
    specs: {
      aperture: "f/2.8",
      filter: "82 mm",
      length: "125.7 mm",
      weight: "900 g",
      minFocus: "0.21-0.38 m",
      teleconverter: "No",
      introduced: "2019",
      stabilization: "Optical IS, up to 5 stops",
      zoomFocus: "Extending zoom; Nano USM autofocus",
      weather: "L-series dust/weather resistance; fluorine coating",
    },
    photo: "https://www.usa.canon.com/shop/p/rf24-70mm-f2-8l-is-usm",
    photoLabel: "Canon product photo",
    source: "https://www.usa.canon.com/shop/p/rf24-70mm-f2-8l-is-usm",
    note:
      "A strong travel/event lens, but for the refuge it loses the useful 70-105 mm range.",
  },
  {
    system: "Canon",
    name: "RF 70-200mm F2.8 L IS USM",
    role: "Compact close wildlife and travel telephoto",
    image:
      "https://s7d1.scene7.com/is/image/canon/3792C002_rf70-200mm-f2.8-l-is-usm_primary?fmt=webp",
    specs: {
      aperture: "f/2.8",
      filter: "77 mm",
      length: "146 mm",
      weight: "1,070 g without tripod mount",
      minFocus: "0.7 m",
      teleconverter: "No",
      introduced: "2019",
      stabilization: "Optical IS, up to 5 stops",
      zoomFocus: "Extending compact zoom; independent Nano USM autofocus",
      weather: "Dust/weather-resistant construction at mount, switch panel, and rings; fluorine coatings",
    },
    photo: "https://www.usa.canon.com/shop/p/rf70-200mm-f2-8-l-is-usm",
    photoLabel: "Canon product photo",
    source:
      "https://downloads.canon.com/nw/camera/products/lenses/rf-70-200mm-f2-8-l-is-usm/specs/rf-70-200mm-f2-8-l-is-usm-specifications.pdf",
    note:
      "Compact and useful, but the non-Z version is not the extender-compatible choice.",
  },
  {
    system: "Canon",
    name: "RF 70-200mm F2.8 L IS USM Z",
    role: "Extender-compatible 70-200 for Canon",
    image:
      "https://s7d1.scene7.com/is/image/canon/6594C002-RF70-200MM-F2-8-L-IS-USM-Z-White-primary?fmt=webp-alpha",
    specs: {
      aperture: "f/2.8-f/22",
      filter: "82 mm",
      length: "199 mm",
      weight: "1,110-1,115 g",
      minFocus: "0.49-0.68 m",
      teleconverter: "Extender RF 1.4x / 2x",
      introduced: "2024",
      stabilization: "Optical IS modes 1, 2, 3",
      zoomFocus: "Internal zoom and internal focus; dual Nano USM autofocus",
      weather: "L-series weather-resistant construction; sealed rings/switch panel; fluorine coating",
    },
    photo:
      "https://www.usa.canon.com/shop/p/lens-rf70-200mm-f2-8-l-is-usm-z-white",
    photoLabel: "Canon product photo",
    source:
      "https://s7d1.scene7.com/is/content/canon/RF70-200mm_F2.8_L_IS_UZ_Specspdf",
    note:
      "Choose this over the compact RF 70-200 only if RF extender compatibility matters.",
  },
  {
    system: "Canon",
    name: "RF 100-500mm F4.5-7.1 L IS USM",
    role: "Primary Canon flight and flexible wildlife lens",
    image:
      "https://s7d1.scene7.com/is/image/canon/4112C002_rf100-500mm-f45-71-l-is-usm_primary?fmt=webp",
    specs: {
      aperture: "f/4.5-7.1 to f/32-54",
      filter: "77 mm",
      length: "207.6 mm short / 297.6 mm long",
      weight: "1,365 g without tripod mount",
      minFocus: "0.9-1.2 m",
      teleconverter: "Extender RF 1.4x / 2x at 300-500 mm",
      introduced: "2020",
      stabilization: "Optical IS, up to 5 stops",
      zoomFocus: "Extending zoom; Dual Nano USM autofocus",
      weather: "L-series dust/weather resistance; fluorine front and rear coatings",
    },
    photo: "https://www.usa.canon.com/shop/p/rf100-500mm-f4-5-7-1-l-is-usm",
    photoLabel: "Canon product photo",
    source: "https://www.usa.canon.com/shop/p/rf100-500mm-f4-5-7-1-l-is-usm",
    note:
      "The Canon default for Bosque and Tanzania because it balances reach, handling, and close-pass flexibility.",
  },
  {
    system: "Canon",
    name: "RF 200-800mm F6.3-9 IS USM",
    role: "Canon distant bird and long-reach wildlife lens",
    image:
      "https://s7d1.scene7.com/is/image/canon/6263C002_RF200_800mm_primary?fmt=webp-alpha&wid=760",
    specs: {
      aperture: "f/6.3-9 to f/54",
      filter: "95 mm",
      length: "314.1 mm at 200 mm",
      weight: "2,050 g",
      minFocus: "0.8-3.3 m",
      teleconverter: "Extender RF 1.4x / 2x",
      introduced: "2023",
      stabilization: "Optical IS, up to 5.5 stops",
      zoomFocus: "Extending zoom; Nano USM autofocus",
      weather: "Dust/weather-resistant construction at mount, switches, buttons, and rings",
    },
    photo: "https://www.usa.canon.com/shop/p/rf200-800mm-f6-3-9-is-usm",
    photoLabel: "Canon product photo",
    source: "https://www.usa.canon.com/shop/p/rf200-800mm-f6-3-9-is-usm",
    note:
      "Excellent for distant Bosque birds and distant wildlife, but slower than the 100-500 and less flexible close to the vehicle.",
  },
  {
    system: "Canon",
    name: "Extender RF 1.4x",
    role: "Good-light reach extension",
    image:
      "https://s7d1.scene7.com/is/image/canon/4113C002_extender-rf14x_primary?fmt=webp",
    specs: {
      aperture: "Loses 1 stop",
      filter: "None",
      length: "20.3 mm",
      weight: "225 g",
      minFocus: "Lens dependent",
      teleconverter: "N/A",
      introduced: "2020",
      stabilization: "N/A; lens/body stabilization still matters",
      zoomFocus: "No zoom or focus; mounts between body and compatible lens",
      weather: "No public sealing claim; avoid swaps in dust, rain, or snow",
    },
    photo: "https://www.usa.canon.com/shop/p/extender-rf1-4x",
    photoLabel: "Canon product photo",
    source: "https://www.usa.canon.com/shop/p/extender-rf1-4x",
    note:
      "Works with compatible RF lenses. On RF 100-500, remember the extender mounts only in the 300-500 mm zoom range.",
  },
  {
    system: "Support",
    name: "Beanbag or window support",
    role: "Vehicle blind stability",
    image: "https://www.lenscoat.com/cdn/shop/files/lspjbk.jpg?v=1735901881&width=1080",
    specs: {
      aperture: "N/A",
      filter: "N/A",
      length: "Model dependent",
      weight: "Usually 1-3 lb empty; fill locally if possible",
      minFocus: "N/A",
      teleconverter: "N/A",
      introduced: "Product dependent",
      stabilization: "Mechanical support",
      zoomFocus: "N/A",
      weather: "Use a rain cover; keep fabric dry before packing",
    },
    photo: "https://www.lenscoat.com/collections/featured-products/products/lenscoat-lenssack-pro-jr",
    photoLabel: "LensCoat product example",
    source: "https://www.lenscoat.com/collections/featured-products/products/lenscoat-lenssack-pro-jr",
    note:
      "The fastest support for the auto loop. It is quieter and more practical than deploying tripod legs from the car.",
  },
  {
    system: "Support",
    name: "Tripod, gimbal, and monopod",
    role: "Long waits, heavy lenses, decks, and locked compositions",
    image: "https://tripodhead.com/images/wh-200-web.jpg",
    specs: {
      aperture: "N/A",
      filter: "N/A",
      length: "Model dependent",
      weight: "Choose based on airline and lens load",
      minFocus: "N/A",
      teleconverter: "N/A",
      introduced: "Product dependent",
      stabilization: "Mechanical support",
      zoomFocus: "N/A",
      weather: "Use leg locks carefully in dust; dry before collapsing",
    },
    photo: "https://tripodhead.com/products/WH-Specs.cfm",
    photoLabel: "Wimberley product example",
    source: "https://tripodhead.com/products/WH-Specs.cfm",
    note:
      "Bring sturdy legs if using 200-600, 400-800, or RF 200-800 for long waits. A monopod is the low-footprint deck fallback.",
  },
];

const kitRecommendations = [
  {
    title: "Bosque Sony default",
    summary:
      "Treat the Sony 200-600 as the primary long wildlife zoom unless weight or close-pass handling points to the 100-400.",
    items: [
      "Body 1: FE 200-600mm for cranes, geese, distant ducks, and repeatable flight lanes.",
      "Body 2: FE 24-105mm for blast-off scale, mountain bands, reflections, weather, and story frames.",
      "Optional swap: FE 100-400mm when birds are close or you need lighter handheld acquisition.",
      "Optional reach: FE 400-800mm only when light is strong and subjects are distant.",
    ],
  },
  {
    title: "Sigma E-mount alternatives",
    summary:
      "Sony Alpha 7R VI is an E-mount body, and Sigma's DG DN E-mount wildlife lenses fit that mount. Do not plan on Sigma teleconverters for Sony E-mount.",
    items: [
      "Best Sigma value/reach: 150-600mm F5-6.3 DG DN OS | Sports for cranes, geese, ducks, raptors, and distant fields.",
      "Best one-lens range: 60-600mm F4.5-6.3 DG DN OS | Sports when avoiding lens changes matters more than carrying extra weight.",
      "Best compact prime: 500mm F5.6 DG DN OS | Sports when sharp 500mm work and lighter handling matter more than zoom flexibility.",
      "Teleconverter note: Sigma TC-1411/TC-2011 support is L-Mount-only, so Sony E-mount Sigma reach should come from focal length and crop, not a TC.",
    ],
  },
  {
    title: "Tanzania Sony two-body default",
    summary:
      "For future safari use, the 200-600 belongs clearly in the long-lens slot.",
    items: [
      "Body 1: FE 200-600mm as the classic Sony wildlife lens for Serengeti, Ngorongoro, birds, distant cats, and fixed vehicle positions.",
      "Body 2: FE 70-200mm F2.8 for close mammals, cubs, portraits, low light, camp life, and environmental compression.",
      "Carry 24-105mm for landscapes and vehicle/camp context; mount it when the day is not wildlife-first.",
      "Do not carry both 200-600 and 400-800 unless distant birds are a top priority and baggage weight allows it.",
    ],
  },
  {
    title: "Canon equivalent",
    summary:
      "Canon keeps the RF 100-500 as the flexible primary and RF 200-800 as the reach specialist.",
    items: [
      "Bosque: RF 100-500 for flight and general wildlife, RF 200-800 for distant birds in good light, RF 24-105 for scale.",
      "Tanzania: RF 100-500 plus RF 70-200 F2.8 covers more vehicle situations than RF 200-800 alone.",
      "RF 200-800 is excellent for birds and distant cats, but it is not the first lens for close elephants, lions near the vehicle, or dusk action.",
    ],
  },
];

const filterGuidance = [
  {
    title: "Bring 77 mm basics",
    note:
      "77 mm covers the Sony 24-105, 70-200, 100-400 and Canon RF 24-105, RF 70-200 compact, RF 100-500. This is the most useful shared filter size.",
  },
  {
    title: "Bring 82 mm if using fast standard/Canon Z glass",
    note:
      "82 mm covers Sony 24-70 GM II, Canon RF 24-70, and Canon RF 70-200 Z. Useful for travel/landscape CPL work, not for dawn birds.",
  },
  {
    title: "Skip buying giant CPLs for birds",
    note:
      "95 mm and 105 mm filters fit the Sony 200-600, Sony 400-800, Canon RF 200-800, and the Sigma wildlife zooms/primes. They are expensive and cost light. Use lens hoods, rain sleeves, blower, and microfiber instead.",
  },
  {
    title: "Use polarizers selectively",
    note:
      "A circular polarizer can help water/reflection/sky scenes after sunrise. Remove it for flight, predawn, and any moment when shutter speed is the priority.",
  },
];

const gearComparisonRows = [
  {
    category: "Standard story zoom",
    sony: "FE 24-105mm F4 G OSS",
    canon: "RF 24-105mm F4 L IS USM",
    note: "Very similar travel/refuge-context role. Both share 77 mm filters; Canon is slightly shorter, Sony is slightly lighter.",
  },
  {
    category: "Fast standard zoom",
    sony: "FE 24-70mm F2.8 GM II",
    canon: "RF 24-70mm F2.8 L IS USM",
    note: "Canon adds optical IS; Sony is notably lighter. Both are travel/event lenses more than Bosque bird lenses.",
  },
  {
    category: "70-200 f/2.8",
    sony: "FE 70-200mm F2.8 GM OSS II",
    canon: "RF 70-200mm F2.8 L IS USM Z",
    note: "The Canon Z is the closer internal-zoom, extender-compatible comparison. The compact Canon non-Z is shorter but extends.",
  },
  {
    category: "Flexible wildlife zoom",
    sony: "FE 100-400mm F4.5-5.6 GM OSS",
    canon: "RF 100-500mm F4.5-7.1 L IS USM",
    note: "Canon gains 100 mm of reach; Sony is brighter at the long end and stops at 400 mm. Both extend while zooming.",
  },
  {
    category: "Classic long wildlife zoom",
    sony: "FE 200-600mm F5.6-6.3 G OSS",
    canon: "RF 200-800mm F6.3-9 IS USM",
    note: "Sony is internal-zoom and brighter; Canon reaches 800 mm and is slightly lighter but extends and is slower.",
  },
  {
    category: "Extreme reach specialist",
    sony: "FE 400-800mm F6.3-8 G OSS",
    canon: "RF 200-800mm F6.3-9 IS USM",
    note: "Sony is internal-zoom and better sealed around zoom movement; Canon starts wider and weighs less.",
  },
];

const mediaArticles = [
  {
    date: "2026-04-19",
    source: "Evie Wilder",
    title: "Sandhill Crane Migration",
    url: "https://eviewilder.com/blog/sandhill-crane-migration-bosque-del-apache-winter/",
    kind: "Fieldcraft",
    summary: [
      "This is a recent experiential field story built around photographing sandhill cranes during severe winter conditions at Bosque del Apache. Its strongest value is emotional and operational: it makes clear how cold, wind, snow, and silence before dawn shape the actual field experience.",
      "The article reinforces that the first task is not only camera setup but readiness. Batteries, gloves, layered clothing, lens protection, and condensation control are part of the photographic system when temperatures can drop well below freezing before sunrise.",
      "For this trip, use the piece as a reminder to arrive fully assembled. The long lens should already be mounted, camera settings should be ready before the first call from the pond, and the cold-weather workflow should be practiced before travel.",
    ],
    apply:
      "Cold-weather readiness, dawn patience, long-lens setup before first light.",
  },
  {
    date: "2025-11-01",
    source: "The Quite Wild",
    title: "15 Essential Tips for Bird Photography for Beginners at Bosque del Apache",
    url: "https://thequitewild.com/bird-photography-for-beginners-bosque-del-apache/",
    kind: "Technique",
    summary: [
      "This is the most direct beginner-to-field guide in the source set. It frames Bosque as a practical classroom because the subjects are repeated, the roads and decks create accessible positions, and the dawn/sunset rhythm gives multiple chances to improve.",
      "The settings advice is immediately useful: fast shutter speeds for geese and cranes in flight, continuous autofocus, zone/wide AF when birds are erratic, and intentional exposure control for white birds and backlit silhouettes.",
      "For this plan, the article becomes the baseline practice checklist. Before travel, rehearse 1/2000-1/3200 flight settings, 1/60-1/250 panning, back-button focus, and histogram review for white birds against dark and bright backgrounds.",
    ],
    apply:
      "Baseline camera settings, focus modes, panning drills, and beginner-safe field workflow.",
  },
  {
    date: "2008-07-15",
    source: "Cornell All About Birds / Marie Read",
    title: "Bosque Del Apache, New Mexico: A Bird Photographer's Playground",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    kind: "Location",
    summary: [
      "Cornell provides the classic Bosque-specific photography primer: Main Pool/Flight Deck for snow-goose blast-offs, Old Highway 1 crane pools for roosting and returns, and the auto tour loops for farm-field feeding behavior.",
      "The article is especially strong on behavior and positioning. It explains that cranes and geese follow daily routines, take off and land into wind, and show visible pre-flight cues before action. It also warns that Main Pool conditions can change, so staff/current-condition checks matter.",
      "For this trip, Cornell’s guidance argues for flexible daily planning. Use the first day to learn which pool is active, then return to the strongest roost instead of rigidly following a map. Keep wide and long lenses ready because Bosque rewards both tight action and environmental flock images.",
    ],
    apply:
      "Wind/light positioning, active-roost verification, behavior cues, and wide/long lens switching.",
  },
  {
    date: "2019-11-03",
    source: "Chasing Hippoz / Vito L. Tanzi",
    title: "My Photography & Travel Guide to Bosque Del Apache, NM",
    url: "https://www.chasinghippoz.com/travel-photo-blog/2019/11/3/wxk15i7zdi06279j8bzassi9cgs98a",
    kind: "Guide",
    summary: [
      "This travel guide is useful because it joins field locations with practical trip logistics: when to go, where to stay, how to think about light, and how to move through the refuge without overcomplicating the day.",
      "The location framing overlaps with the core plan: Flight Deck for iconic sunrise action, North/South Loops for fields and landscapes, and Visitor Center/garden areas for smaller subjects. It also reinforces that backgrounds and light often matter as much as focal length.",
      "For this itinerary, use the guide as a reminder to build a complete set rather than only bird portraits. The shot list should include cranes, geese, roost pools, flight lines, desert/mountain context, road-based wildlife, and the human rhythm of the refuge.",
    ],
    apply:
      "Travel logistics, location scan, complete shot list, and background-first composition.",
  },
  {
    date: "2024 updated",
    source: "Outdoor Photographer",
    title: "Extreme Close-Up",
    url: "https://www.outdoorphotographer.com/tips-techniques/wildlife-techniques/extreme-close-up/",
    kind: "Lens Evidence",
    summary: [
      "This article is useful less as a Bosque itinerary and more as evidence for what extreme reach can do when the goal is tight wildlife action. Its Bosque example uses very long effective focal length for snow geese.",
      "The lesson is that reach creates a specific image type: compressed, isolated, action-heavy, and often support-dependent. It is not a replacement for wide flock scenes or medium telephoto context.",
      "For gear planning, this supports carrying a true long option, especially the Sony 200-600, Sony 400-800, Canon RF 100-500, or Canon RF 200-800. It does not argue for using the longest setup at sunrise if the light is too low or the action is too close.",
    ],
    apply:
      "Long-reach justification, support discipline, and avoiding over-tight framing at blast-off.",
  },
  {
    date: "2024 updated",
    source: "WildernessShots",
    title: "How to Shoot Wildlife Photography",
    url: "https://www.wildernessshots.com/how-to-shoot-wildlife-photography",
    kind: "Technique",
    summary: [
      "This broader wildlife tutorial is useful because it translates Bosque lessons into repeatable fieldcraft: shutter speed choices, focus control, panning, support, subject behavior, and light direction.",
      "Its practical theme is that sharp wildlife work comes from prediction and stability, not just buying reach. Teleconverters and extreme focal lengths help only after autofocus, support, and exposure are under control.",
      "For this plan, the takeaway is to rehearse the whole chain before travel: acquire, track, pan, burst, review, and adjust. Do not wait until the crane pool to learn how the camera behaves in continuous autofocus.",
    ],
    apply:
      "End-to-end wildlife workflow practice and support-vs-handheld decision making.",
  },
  {
    date: "2022-12",
    source: "NANPA",
    title: "Bosque del Apache Regional Event",
    url: "https://nanpa.org/eventcalendar/bosque-del-apache-national-wildlife-refuge-regional-event-december-4-7-2022/",
    kind: "Guide",
    summary: [
      "The NANPA event page is useful because it describes Bosque through the lens of a working photo event: car-based shooting, winter weather, likely locations, and the expected need for long lenses and support.",
      "It reinforces that much of the refuge work is from vehicles, pullouts, decks, and short walks. That makes beanbags, monopods, gimbals, and fast lens/body readiness more useful than a heavy hiking setup.",
      "For this itinerary, the page supports the operational bias: use the vehicle as a blind, keep a long lens mounted, and bring support for the heaviest combinations without assuming every stop can handle tripod legs.",
    ],
    apply:
      "Vehicle-based field workflow, support planning, and winter packing.",
  },
  {
    date: "2021",
    source: "BirdWatching / Rick Sammon",
    title: "The best camera settings for bird photography",
    url: "https://www.birdwatchingdaily.com/photography/how-to-photograph-birds/best-camera-settings-for-bird-photography/",
    kind: "Settings",
    summary: [
      "This settings article is useful because it ties bird photography to repeatable choices: shutter speed, autofocus mode, exposure, frame rate, and the decision to include environment rather than only tight subjects.",
      "The Bosque connection is important because it includes a wide sunrise image, which supports carrying a standard zoom. Some of the best Bosque images are not long-lens portraits; they are sky, water, mountains, and bird scale.",
      "For the trip, use it to avoid a common mistake: standing at a blast-off with only a super-telephoto view. Keep 24-105 ready and know when the strongest image is a flock in place, not a single bird filling the frame.",
    ],
    apply:
      "Settings discipline and wide environmental bird photography.",
  },
  {
    date: "2019-07-02",
    source: "Outdoor Photographer / OEL",
    title: "Bosque del Apache National Wildlife Refuge",
    url: "https://www.oelmag.com/bosque-del-apache-national-wildlife-refuge/",
    kind: "Location",
    summary: [
      "This concise location feature emphasizes Bosque’s winter subjects, weather, mist, light, and variety. It is valuable because it keeps the plan from becoming only a gear spreadsheet.",
      "Its practical angle is experimentation: low perspective where legal, panning, slow shutters, flock shapes, and environmental composition. Those are all useful when the obvious bird action slows or weather turns gray.",
      "For the field plan, save one mid-morning or sunset for non-obvious work. Try motion blur, silhouettes, reeds, water color, and mountain-backed flock shapes after the safe sharp frames are captured.",
    ],
    apply:
      "Creative fallback plan for gray days and slower windows.",
  },
  {
    date: "2016-12-21",
    source: "LifePixel / Bob Coates",
    title: "Bosque del Apache Wildlife Refuge",
    url: "https://www.lifepixel.com/photography-locations/bosque-del-apache-wildlife-refuge",
    kind: "Fieldcraft",
    summary: [
      "This field-based guide focuses on cranes, behavior, local intel, and anticipation. It is another reminder that Bosque rewards watching before reacting.",
      "The lens evidence is useful because it shows the value of long effective reach, but the deeper point is timing: a bird telegraphs takeoff before the dramatic frame happens.",
      "For practice, convert this into a homework task: watch birds locally and call out the launch cue before pressing the shutter. The goal is to recognize movement early enough to acquire focus calmly.",
    ],
    apply:
      "Behavior prediction, long-reach use, and pre-flight cue practice.",
  },
  {
    date: "2009-01-13",
    source: "Luminous Landscape",
    title: "Bosque del Apache",
    url: "https://luminous-landscape.com/bosque-del-apache/",
    kind: "Lens Evidence",
    summary: [
      "This older photo essay remains useful because it shows how long Bosque has rewarded medium-to-long telephoto work. The technology is dated, but the field pattern is not.",
      "The article’s value is focal-length context. It supports the idea that 400-600 mm equivalent has long been a core Bosque range, with longer reach helpful when birds are distant.",
      "For the current kit, that strengthens the Sony 200-600 recommendation and the Canon 100-500/200-800 split. It also argues against assuming a 70-200 alone is enough for Bosque birds.",
    ],
    apply:
      "Historical focal-length evidence and long-lens expectations.",
  },
  {
    date: "Current site",
    source: "Thom Hogan",
    title: "Bosque del Apache",
    url: "https://www.bythom.com/photographic-travel/united-states/bosque-del-apache.html",
    kind: "Fieldcraft",
    summary: [
      "Thom Hogan’s piece is the strongest counterweight to pure gear thinking. It argues that prediction, discipline, position, and knowing the intended image matter more than maximum focal length.",
      "That is directly relevant to Bosque because some target images are harmed by too much reach. Bird-plus-moon, flock shape, sky scale, and environmental compositions often need restraint.",
      "For this plan, the rule is simple: decide the image before choosing the lens. The 200-600 is a key tool, but not every Bosque photograph is a 600 mm photograph.",
    ],
    apply:
      "Shot-first lens choice and discipline against over-tight compositions.",
  },
];

const exifEvidence = [
  {
    group: "Wide and Environmental",
    source: "Wikimedia Commons",
    subject: "Snow geese at Bosque",
    evidence: "Canon EOS 60D, 100mm EXIF",
    implication: "Wide and short-telephoto frames are part of the core Bosque story, especially for flock scale and refuge atmosphere.",
    url: "https://commons.wikimedia.org/wiki/File:Snow_Geese_(Bosque_del_Apache_National_Wildlife_Refuge).jpg",
  },
  {
    group: "Wide and Environmental",
    source: "BirdWatching / Rick Sammon",
    subject: "Bosque sunrise",
    evidence: "Canon EOS 5D Mark III with 24-105mm",
    implication: "The 24-105mm is not a backup lens; it is a primary tool for sky, water, mountains, light, and bird scale.",
    url: "https://www.birdwatchingdaily.com/photography/how-to-photograph-birds/best-camera-settings-for-bird-photography/",
  },
  {
    group: "Mid-Telephoto Context",
    source: "Wikimedia Commons",
    subject: "Bosque light / landscape",
    evidence: "Nikon D7000 with 55-300mm, 135mm EXIF; about 202mm full-frame equivalent",
    implication: "Mid-telephoto compression works for layered light, water, mountains, habitat, and birds as small elements in place.",
    url: "https://commons.wikimedia.org/wiki/File:Bosque_Light.jpg",
  },
  {
    group: "Core Long Range",
    source: "Wikimedia Commons",
    subject: "Sandhill crane",
    evidence: "Canon EOS 60D, 350mm EXIF",
    implication: "Good position can make crane images viable below 500mm, especially when birds are near pools or crossing predictable lanes.",
    url: "https://commons.wikimedia.org/wiki/File:Sandhill_Crane_(Bosque_del_Apache_National_Wildlife_Refuge).jpg",
  },
  {
    group: "Core Long Range",
    source: "Luminous Landscape",
    subject: "Migratory bird photography",
    evidence: "Canon D30 with Canon 400mm f/4 DO IS, 640mm effective field of view",
    implication: "Classic Bosque bird work often sits around the 400-600mm-equivalent range, supporting the Sony 200-600 and Canon 100-500 plans.",
    url: "https://luminous-landscape.com/bosque-del-apache/",
  },
  {
    group: "Extreme Reach",
    source: "LifePixel / Bob Coates",
    subject: "Crane flight and reflections",
    evidence: "Panasonic Lumix GX85 with 100-400mm; source notes an 800mm full-frame-equivalent setup",
    implication: "Long reach helps when light and handling are under control, but behavior reading and support are still decisive.",
    url: "https://www.lifepixel.com/photography-locations/bosque-del-apache-wildlife-refuge",
  },
  {
    group: "Extreme Reach",
    source: "Outdoor Photographer / George Lepp",
    subject: "Snow goose in flight",
    evidence: "Canon EOS-1D X, EF 400mm f/2.8L II, EF 2x III, 800mm",
    implication: "Extreme reach can produce tight action images, but it is specialized and support-dependent rather than the everyday default.",
    url: "https://www.outdoorphotographer.com/tips-techniques/wildlife-techniques/extreme-close-up/",
  },
];

const fieldImplications = [
  {
    title: "Decide the photograph before the lens.",
    note:
      "The evidence supports everything from 24-105mm environmental frames to 800mm tight action. Lens choice should follow the intended image, not a reflexive reach-maximizing habit.",
  },
  {
    title: "Sony 200-600 is the credible long default.",
    note:
      "For Bosque and especially Tanzania, the 200-600 is a primary wildlife tool. The 100-400 is the lighter close-pass option; the 400-800 is the bright-light reach specialist.",
  },
  {
    title: "Wide frames need equal readiness.",
    note:
      "Blast-offs, mountain bands, water color, and sky scale happen quickly. Keep 24-105 mounted on the second body instead of treating it as a bag lens.",
  },
  {
    title: "Reach only works after technique.",
    note:
      "Long lenses and teleconverters help when autofocus, support, shutter speed, exposure, and behavior prediction are already under control.",
  },
];

const practiceModules = [
  {
    title: "Camera Setup Baseline",
    goal:
      "Build three ready-to-use camera states before the trip: flight, perched/static, and silhouette/sky.",
    steps: [
      "Flight: Shutter Priority or Manual with Auto ISO, 1/2000 sec starting point, f/5.6-f/8, continuous AF, tracking/wide zone, high-speed burst.",
      "Perched/static: Aperture Priority, f/5.6-f/8 for enough depth, Auto ISO cap around 3200-6400, minimum shutter 1/500-1/1000 depending focal length.",
      "Silhouette: Manual exposure or exposure lock from mid-toned sky, preserve sky color, let birds go dark, review histogram instead of the rear-screen preview.",
      "Create a custom button or quick menu path for AF area, subject detection, exposure comp, and drive mode.",
    ],
    homework:
      "Save or write down the exact camera menu settings for both bodies. Do one no-thinking reset from travel mode to flight mode in under 30 seconds.",
  },
  {
    title: "Aperture Priority, Shutter Priority, and Manual",
    goal:
      "Know which mode to use when light and subject behavior change quickly.",
    steps: [
      "Use Aperture Priority for static birds, landscapes, habitat, and calm subjects where depth of field matters more than exact shutter speed.",
      "Use Shutter Priority for practice days and fast action when the main job is protecting motion speed; watch that the camera does not hit the lens' widest aperture and underexpose.",
      "Use Manual with Auto ISO for serious bird flight: choose shutter and aperture, let ISO float, and use exposure compensation when the system allows it.",
      "Use full Manual for silhouettes, moon/sky alignments, or stable light where you do not want the meter to change as birds cross different backgrounds.",
    ],
    homework:
      "Photograph the same moving subject in all three modes and label which mode failed first and why.",
  },
  {
    title: "Shutter Speed Ladder",
    goal:
      "Know the difference between frozen action, controlled wing blur, and artistic pan blur before the refuge.",
    steps: [
      "Freeze geese and fast wingbeats at 1/2500-1/3200 when light allows.",
      "Use 1/1600-1/2500 for cranes and slower bird flight.",
      "Try 1/800-1/1250 when a little wing blur is acceptable but the head still needs to stay sharp.",
      "Practice 1/250, 1/125, and 1/60 only after safe frames are captured.",
    ],
    homework:
      "Make a contact sheet with five shutter speeds. Circle the slowest speed where the head is acceptably sharp.",
  },
  {
    title: "Handholding and Body Mechanics",
    goal:
      "Acquire birds without fighting the lens.",
    steps: [
      "Stand with feet set before raising the lens. Rotate from hips, not wrists.",
      "Start wider if using a zoom, acquire the subject, then zoom in only after focus is stable.",
      "Keep elbows relaxed and the left hand under the lens foot or zoom ring.",
      "Fire short bursts of 3-6 frames instead of holding the shutter through the entire pass.",
    ],
    homework:
      "Track 20 moving subjects for three seconds each without firing. Then repeat with short bursts and check framing drift.",
  },
  {
    title: "Tripod, Gimbal, Monopod, and Beanbag",
    goal:
      "Choose the support that matches the field position instead of carrying support as decoration.",
    steps: [
      "Beanbag: first choice from the vehicle loop; quiet, fast, and stable.",
      "Gimbal/tripod: best for long waits at pools with 200-600, 400-800, or RF 200-800.",
      "Monopod: best when decks are crowded or when tripod legs would be too intrusive.",
      "Handheld: best for close fly-bys, quick pivots, and when the subject changes distance quickly.",
    ],
    homework:
      "Shoot ten-frame tests handheld, beanbag, monopod, and tripod. Record the slowest shutter speed you trust for each setup.",
  },
  {
    title: "White Birds and Exposure",
    goal:
      "Stop blowing snow-goose detail without making the whole scene look dead.",
    steps: [
      "Use zebras/highlight alert if available.",
      "Watch the RGB histogram, especially when white birds cross dark vegetation.",
      "Start at -0.3 to -0.7 exposure compensation for white birds in direct light if highlights clip.",
      "Shoot RAW and review a few files at 100 percent before assuming the exposure is safe.",
    ],
    homework:
      "Photograph a bright white subject against dark, medium, and bright backgrounds. Keep highlight texture in all three.",
  },
  {
    title: "Behavior Prediction",
    goal:
      "Start tracking before the decisive moment.",
    steps: [
      "For cranes, watch for neck stretch, crouch, wing tension, and running steps.",
      "For geese and ducks, watch for head bobbing, sudden alert posture, flock agitation, and synchronized movement.",
      "Note wind direction because takeoffs and landings usually happen into wind.",
      "When behavior repeats, pre-focus on the lane and wait instead of chasing every bird.",
    ],
    homework:
      "Spend 30 minutes watching local birds without a camera. Say the launch cue out loud before the bird moves.",
  },
  {
    title: "Cold and Dust Workflow",
    goal:
      "Be ready within two minutes of parking in predawn cold.",
    steps: [
      "Pack batteries in an inner pocket and rotate cold batteries back to warmth.",
      "Mount lenses before leaving the hotel to avoid dust and cold lens changes.",
      "Use thin liner gloves plus warmer over-gloves that can be removed quickly.",
      "Keep blower, microfiber, rain sleeve, and dry bag accessible, not buried.",
    ],
    homework:
      "Run a timed driveway simulation: park, put on gloves, shoulder bag, mount support, and make a correct test frame in two minutes.",
  },
  {
    title: "Pre-trip Readiness Checklist",
    goal:
      "Arrive with the muscle memory already built.",
    steps: [
      "Complete three local bird sessions: one flight, one exposure, one panning/blur.",
      "Build two custom camera presets or a written reset checklist.",
      "Practice backing up cards to the exact travel drive/iPad/laptop workflow.",
      "Pack the field bag once, then remove anything that does not earn its space.",
    ],
    homework:
      "Before departure, produce 20 acceptable bird-in-flight frames, 10 intentional blur frames, and one written pack list.",
  },
];

const inspiration = [
  {
    title: "Snow geese in wetland scale",
    img: assets.geese,
    credit: "Gary Stolz / USFWS, Public Domain",
    source:
      "https://www.fws.gov/media/snow-geese-bosque-del-apache-national-wildlife-refuge",
    idea: "Mass white-flock texture and refuge context.",
    license: "Can be used with credit.",
  },
  {
    title: "Sandhill crane pair",
    img: assets.cranes,
    credit: "Ryan Hagerty / USFWS, Public Domain",
    source: "https://www.fws.gov/media/sandhill-cranes-6",
    idea: "Quiet water-level crane portrait and vertical crop potential.",
    license: "Can be used with credit.",
  },
  {
    title: "Fly-out over photographers",
    img: assets.flyout,
    credit: "Lynne Braden / USFWS volunteer, Public Domain",
    source:
      "https://www.fws.gov/media/snow-geese-fly-overhead-bosque-del-apache-refuge",
    idea: "Field experience image with sky filled by geese.",
    license: "Can be used with credit.",
  },
];

const inspirationLinks = [
  {
    title: "Cornell / Marie Read Bosque article",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    note:
      "Inspiration-only photos and excellent field examples. Do not reuse images without permission.",
  },
  {
    title: "USFWS Bosque media library",
    url: "https://www.fws.gov/media-library?search=Bosque%20del%20Apache",
    note:
      "Best place to look for public-domain or agency-credit refuge images.",
  },
  {
    title: "eBird Bosque del Apache illustrated checklist",
    url: "https://ebird.org/hotspot/L130166",
    note:
      "Use for subject inspiration and seasonal expectations; image licensing varies by contributor.",
  },
  {
    title: "Flickr search: Bosque del Apache cranes",
    url: "https://www.flickr.com/search/?text=Bosque%20del%20Apache%20sandhill%20cranes",
    note:
      "Inspiration only unless a specific image has a compatible Creative Commons license.",
  },
  {
    title: "500px search: Bosque del Apache",
    url: "https://500px.com/search?q=Bosque%20del%20Apache&type=photos",
    note:
      "Good for composition study. Treat as inspiration-only.",
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

function externalLink(url, label = "Source") {
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function loadStylesheetOnce(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.crossOrigin = "";
  document.head.append(link);
}

function ensureLeaflet() {
  if (window.L) return Promise.resolve(true);
  if (leafletLoadPromise) return leafletLoadPromise;

  loadStylesheetOnce(leafletAssets.css);
  leafletLoadPromise = new Promise((resolve) => {
    const existingScript = document.querySelector(`script[src="${leafletAssets.js}"]`);
    const script = existingScript || document.createElement("script");

    const finish = () => resolve(Boolean(window.L));
    script.addEventListener("load", finish, { once: true });
    script.addEventListener(
      "error",
      () => {
        console.warn("Leaflet failed to load; map lists will remain available.");
        resolve(false);
      },
      { once: true }
    );

    if (!existingScript) {
      script.src = leafletAssets.js;
      script.integrity = leafletAssets.integrity;
      script.crossOrigin = "";
      script.defer = true;
      document.head.append(script);
    }
  });

  return leafletLoadPromise;
}

function renderOverview() {
  const root = document.querySelector("#overview");
  root.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Field plan</p>
        <h2>Bosque del Apache <span class="hero-date">Dec 6-12, 2026</span></h2>
        <p>Arrive Sunday, scout if there is light, shoot five full on-site days from Monday through Friday, and leave Saturday with backups complete. The field guide is organized around light windows so each day can adapt to water, wind, crowds, and bird movement. Have the $5 daily private vehicle entrance fee or pass ready before dawn.</p>
        <div class="hero-actions">
          <button class="button-link" data-jump="itinerary">Open itinerary</button>
          <button class="button-link secondary" data-jump="map">Check map</button>
          <a href="./complete-photographers-guide.html" class="button-link secondary">Read field guide</a>
        </div>
      </div>
      <figure class="hero-photo">
        <img src="${assets.flyout}" alt="Snow geese flying over photographers at Bosque del Apache" width="1800" height="1440" decoding="async" fetchpriority="high" />
        <figcaption>Lynne Braden / USFWS volunteer, Public Domain</figcaption>
      </figure>
    </section>
    <section class="stat-grid" aria-label="Trip facts">
      <article class="stat"><b>Dec 6</b><span>Arrival and scout</span></article>
      <article class="stat"><b>Dec 7-11</b><span>Five full photo days</span></article>
      <article class="stat"><b>Dec 12</b><span>Departure and backups</span></article>
      <article class="stat"><b>6:10 AM</b><span>Typical target parking time</span></article>
      <article class="stat"><b>3:35 PM</b><span>Typical sunset arrival time</span></article>
      <article class="stat"><b>12 mi</b><span>Auto Tour Loop distance</span></article>
      <article class="stat"><b>1 hr before</b><span>Auto loop opens before sunrise</span></article>
    </section>
    <section class="dashboard">
      <article class="panel">
        <p class="eyebrow">First morning</p>
        <h3>Be parked by 6:10 AM with a roost target already chosen.</h3>
        <p>Use the arrival scout to choose between the crane ponds, Flight Deck/Main Pool, and the strongest current roost. Have the $5 daily private vehicle entrance fee or pass ready before dawn. If the birds or wind disagree with the plan, switch locations early instead of chasing during peak light.</p>
      </article>
      <article class="panel">
        <p class="eyebrow">Pack tonight</p>
        <h3>Stage two camera roles before sleep.</h3>
        <p>Mount the long wildlife zoom for crane and goose action, keep the 24-105 ready for flock scale and place, and set out layers, hand warmers, cards, batteries, lens cloth, beanbag, water, and snacks.</p>
      </article>
      <article class="panel">
        <p class="eyebrow">Field rule</p>
        <h3>Choose the photograph before choosing the lens.</h3>
        <p>Some mornings want tight 500-800mm action. Others want geese, sky, water, mountains, and sound in one frame. Keep the plan flexible enough to make both kinds of image.</p>
      </article>
    </section>`;
}

async function renderGuide() {
  const root = document.querySelector("#guide");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Field guide</p>
        <h2>Complete Photographer's Guide</h2>
      </div>
      <p>A long-form, practical guide to seasons, field positions, behavior, settings, gear, scouting, ethics, logistics, and shot planning.</p>
    </div>
    <section class="panel guide-loader">
      <p class="eyebrow">Loading article</p>
      <p class="card-copy">Opening the complete guide inside the Bosque field experience.</p>
    </section>`;

  try {
    const response = await fetch("./complete-photographers-guide.html", { cache: "no-store" });
    if (!response.ok) throw new Error(`Guide request failed: ${response.status}`);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const article = doc.querySelector(".guide-article");
    if (!article) throw new Error("Guide article markup missing");
    root.innerHTML = `
      <div class="guide-view-header">
        <a class="button-link secondary" href="./complete-photographers-guide.html">Open reader page</a>
      </div>
      ${article.outerHTML}`;
  } catch (error) {
    root.innerHTML = `
      <div class="section-title">
        <div>
          <p class="eyebrow">Field guide</p>
          <h2>Complete Photographer's Guide</h2>
        </div>
        <p>The guide is available as a standalone page in this Bosque project.</p>
      </div>
      <section class="panel">
        <h3>Open the guide</h3>
        <p class="card-copy">The in-page article loader could not fetch the guide content in this environment.</p>
        <a class="button-link" href="./complete-photographers-guide.html">Open reader page</a>
      </section>`;
  }
}

async function renderMapInto(rootId, places, options = {}) {
  const root = document.querySelector(rootId);
  const hasMap = await ensureLeaflet();
  const mapId = options.mapId || "trip-map";
  const listClass = options.listClass || "map-list";
  const renderPlace = (place) => {
    const tag = hasMap ? "button" : "article";
    const attr = hasMap ? ` data-location="${place.name}"` : "";
    return `<${tag} class="map-item${hasMap ? "" : " is-static"}"${attr}>
      <h3>${place.rank ? `${place.rank}. ` : ""}${place.name}</h3>
      <p>${place.note}</p>
      <div class="tag-row">
        ${(place.windows || [place.area || place.type]).map((item) => `<span class="tag">${item}</span>`).join("")}
        <span class="tag verify">${place.confidence || place.drive}</span>
      </div>
    </${tag}>`;
  };

  root.innerHTML = `
    <div class="map-layout">
      <div id="${mapId}" class="map-canvas"></div>
      <aside class="${listClass}">
        ${places.map((place) => renderPlace(place)).join("")}
      </aside>
    </div>`;

  if (!hasMap) {
    root.querySelector(`#${mapId}`).outerHTML =
      `<div class="empty-map">Map library did not load. The location list is still available.</div>`;
    return;
  }

  const LRef = window.L;
  const map = LRef.map(mapId, { scrollWheelZoom: false }).setView(
    options.center || [33.804777, -106.890917],
    options.zoom || 12
  );
  LRef.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const markers = new Map();
  const markerPlaces = [...places];
  if (options.includeRefugeMarker) {
    markerPlaces.push({
      name: "Bosque del Apache Visitor Center",
      lat: 33.804777,
      lon: -106.890917,
      note: "Reference point for hotel distance comparison.",
      confidence: "official FWS",
    });
  }

  markerPlaces.forEach((place) => {
    const marker = LRef.marker([place.lat, place.lon]).addTo(map);
    marker.bindPopup(`<b>${place.name}</b><br>${place.note}<br><small>${place.confidence || place.drive || ""}</small>`);
    markers.set(place.name, marker);
  });

  const bounds = LRef.latLngBounds(markerPlaces.map((place) => [place.lat, place.lon]));
  map.fitBounds(bounds, { padding: [28, 28] });

  root.querySelectorAll(".map-item").forEach((button) => {
    button.addEventListener("click", () => {
      const marker = markers.get(button.dataset.location);
      if (!marker) return;
      map.setView(marker.getLatLng(), options.focusZoom || 14);
      marker.openPopup();
    });
  });

  if (options.globalName) {
    window[options.globalName] = { map, bounds };
  }
}

async function renderMap() {
  const root = document.querySelector("#map");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Photography-only map</p>
        <h2>Refuge Shooting Map</h2>
      </div>
      <p>Lodging has been removed from this map. This tab is for sunrise, mid-morning, sunset, field-position, and refuge-logistics decisions only.</p>
    </div>
    <div id="photo-map-host"></div>`;
  await renderMapInto("#photo-map-host", photoLocations, {
    mapId: "trip-map",
    globalName: "photoMapState",
    center: [33.82, -106.88],
    zoom: 12,
  });
}

function renderItinerary() {
  const root = document.querySelector("#itinerary");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Calendar plan</p>
        <h2>Itinerary</h2>
      </div>
      <p>Arrive December 6, shoot five full days, and leave December 12. Each day includes the purpose of the day so the plan adapts cleanly to water, wind, crowds, and bird movement.</p>
    </div>
    <div class="day-tabs"></div>
    <div class="timeline"></div>`;

  const tabs = root.querySelector(".day-tabs");
  const timeline = root.querySelector(".timeline");
  tripDays.forEach((day, index) => {
    const button = el("button", `day-tab ${index === 0 ? "is-active" : ""}`, `${day.date}<span>${day.label}</span>`);
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      drawDay(day);
    });
    tabs.append(button);
  });

  function drawDay(day) {
    timeline.innerHTML = `
      <section class="panel day-intro">
        <p class="eyebrow">${day.date} / ${day.label}</p>
        <h3>${day.theme}</h3>
        <p>${day.detail}</p>
      </section>`;
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
            <p><b>Gear:</b> ${slot.gear}</p>
          </div>
          <div>
            <h3>Position</h3>
            <p class="card-copy">${slot.position}</p>
          </div>`
        )
      );
    });
  }

  drawDay(tripDays[0]);
}

function renderWindows() {
  const root = document.querySelector("#windows");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Choose by light</p>
        <h2>Photo Windows</h2>
      </div>
      <p>Use this when conditions override the day-by-day itinerary. Each window now carries more daily context so it works as a field decision tool.</p>
    </div>
    <div class="window-tabs">
      <button class="window-tab is-active" data-window="Sunrise">Sunrise</button>
      <button class="window-tab" data-window="Mid-morning">Mid-morning</button>
      <button class="window-tab" data-window="Sunset">Sunset</button>
    </div>
    <div class="grid-2" id="window-results"></div>`;
  const result = root.querySelector("#window-results");
  const draw = (windowName) => {
    const matches = tripDays.flatMap((day) =>
      day.slots
        .filter((slot) => slot.window === windowName)
        .map((slot) => ({ ...slot, date: day.date, label: day.label, theme: day.theme }))
    );
    result.innerHTML = matches
      .map(
        (slot) => `<article class="gear-card">
          <p class="eyebrow">${slot.date} / ${slot.label}</p>
          <h3>${slot.place}</h3>
          <p class="card-copy">${slot.goal}</p>
          <p><b>Field note:</b> ${slot.position}</p>
          <div class="tag-row"><span class="tag ${windowName === "Sunrise" ? "sunrise" : windowName === "Sunset" ? "sunset" : ""}">${windowName}</span><span class="tag">${slot.theme}</span></div>
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

async function renderTravel() {
  const root = document.querySelector("#travel");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Flights, car, hotels</p>
        <h2>Travel</h2>
      </div>
      <p>Use Albuquerque as the practical airport, choose a car around dawn photography logistics, and keep Socorro as the photography-first hotel base.</p>
    </div>
    <section class="panel media-decision">
      <div>
        <p class="eyebrow">Airport default</p>
        <h3>Fly Bay Area to ABQ, then drive south.</h3>
        <p class="card-copy">Albuquerque International Sunport is the practical airport. From ABQ, rent a car, take I-25 south toward Socorro, then follow the official FWS route via exit 139, US 380, and NM-1 to the refuge visitor center.</p>
      </div>
      <div class="media-counts">
        <span><b>SFO / OAK / SJC</b> Bay Area options</span>
        <span><b>ABQ</b> rental car center</span>
      </div>
    </section>
    <div class="grid-4 travel-grid">
      ${flightOptions
        .map(
          (item) => `<article class="travel-card">
            <p class="eyebrow">${item.airport}</p>
            <h3>${item.route}</h3>
            <p><b>${item.recommendation}</b></p>
            <p class="card-copy">${item.detail}</p>
            ${externalLink(item.source, "Source")}
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Rental car</p>
        <h2>What to book</h2>
      </div>
      <p>The best car is not fancy; it is easy to load quietly in the dark, stable on winter highways, and practical on gravel pullouts.</p>
    </div>
    <div class="grid-3">
      ${rentalCarGuidance
        .map(
          (item) => `<article class="travel-card">
            <h3>${item.title}</h3>
            <p class="card-copy">${item.note}</p>
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Hotels and commute</p>
        <h2>Where to stay</h2>
      </div>
      <p>Socorro remains the photography-first base. The hotel-specific map stays here, separate from the main photography map.</p>
    </div>
    <div class="grid-2">
      ${lodgingLocations
        .map((item) => {
          const isImage = /\.(jpg|jpeg|png|webp)(\?|$)/i.test(item.image) || item.image.includes("/is/image/");
          return `<article class="lodging-card" data-rank="${item.rank}">
            <div class="rank-line">
              <span class="rank">${item.rank}</span>
              ${item.badge ? `<span class="meta-pill">${item.badge}</span>` : ""}
            </div>
            <a class="hotel-photo ${isImage ? "" : "hotel-photo-link"}" href="${item.image}" target="_blank" rel="noreferrer">
              ${
                isImage
                  ? `<img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />`
                  : `<span>${item.imageLabel}</span>`
              }
            </a>
            <h3>${item.name}</h3>
            <div class="lodging-meta">
              <span class="meta-pill">${item.area}</span>
              <span class="meta-pill">${item.drive}</span>
              <span class="meta-pill">${item.price}</span>
            </div>
            <p><b>${item.best}</b></p>
            <p class="card-copy">${item.note}</p>
            <p class="muted">${item.watch}</p>
            ${externalLink(item.image, item.imageLabel)}
          </article>`;
        })
        .join("")}
    </div>
    <section class="map-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Hotel distance map</p>
          <h2>Hotels vs. Bosque</h2>
        </div>
        <p>This map is intentionally lodging-only, with the refuge visitor center as the reference point.</p>
      </div>
      <div id="lodging-map-host"></div>
    </section>`;
  await renderMapInto("#lodging-map-host", lodgingLocations, {
    mapId: "lodging-map",
    globalName: "lodgingMapState",
    includeRefugeMarker: true,
    center: [34.04, -106.88],
    zoom: 9,
    focusZoom: 13,
  });
}

function renderGear() {
  const root = document.querySelector("#gear");
  const systems = ["Sony", "Sigma E", "Canon", "Support", "Compare"];
  const gearByName = (name) => gearItems.find((item) => item.name === name);
  const lensCell = (item, label) => {
    if (!item) return `<td data-label="${label}">Not configured</td>`;
    return `<td data-label="${label}">
      <strong>${item.name}</strong>
      <span>${item.specs.aperture}; ${item.specs.length}; ${item.specs.weight}; ${item.specs.filter}</span>
      <span>Min focus: ${item.specs.minFocus}; TC: ${item.specs.teleconverter}; introduced: ${item.specs.introduced}</span>
      <span>${item.specs.zoomFocus}</span>
      <span>${item.specs.weather}</span>
      ${externalLink(item.source, "Specs")}
    </td>`;
  };
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Camera kit</p>
        <h2>Gear</h2>
      </div>
      <p>Each lens and support item includes size, weight, aperture, stabilization, weather notes, minimum focusing distance, teleconverter support, and year introduced where applicable.</p>
    </div>
    <section class="panel media-decision">
      <div>
        <p class="eyebrow">Sony and Sigma compatibility</p>
        <h3>Sony Alpha 7R VI is the current A7R name to use.</h3>
        <p class="card-copy">Sony's official support pages list the Alpha 7R VI as model ILCE-7RM6 with E-mount. Sigma's full-frame DG DN lenses listed here are available in Sony E-mount, but Sigma's TC-1411 and TC-2011 teleconverters are L-Mount-only, so the Sony E-mount Sigma options should be evaluated without a teleconverter.</p>
      </div>
      <div class="media-counts">
        <span><b>${gearItems.length}</b> gear items</span>
        <span><b>${gearCheckedDate}</b> Sony/Sigma check</span>
      </div>
    </section>
    <div class="filter-row gear-filters">
      ${systems.map((system, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" data-system="${system}">${system}</button>`).join("")}
    </div>
    <div class="gear-results"></div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Pack guidance</p>
        <h2>Lens and filter decisions</h2>
      </div>
      <p>These recommendations are tuned for Bosque first and Tanzania second.</p>
    </div>
    <div class="grid-4">
      ${kitRecommendations
        .map(
          (card) => `<article class="gear-card">
            <h3>${card.title}</h3>
            <p class="card-copy">${card.summary}</p>
            <ul class="kit-list">${card.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>`
        )
        .join("")}
    </div>
    <div class="grid-4 filter-guidance">
      ${filterGuidance
        .map(
          (item) => `<article class="evidence-card">
            <h3>${item.title}</h3>
            <p class="card-copy">${item.note}</p>
          </article>`
        )
        .join("")}
    </div>`;

  const results = root.querySelector(".gear-results");
  const draw = (system) => {
    if (system === "Compare") {
      results.innerHTML = `<div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Sony</th>
              <th>Canon</th>
              <th>Takeaway</th>
            </tr>
          </thead>
          <tbody>
            ${gearComparisonRows
              .map((row) => {
                const sony = gearByName(row.sony);
                const canon = gearByName(row.canon);
                return `<tr>
                  <th scope="row">${row.category}</th>
                  ${lensCell(sony, "Sony")}
                  ${lensCell(canon, "Canon")}
                  <td data-label="Takeaway">${row.note}</td>
                </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
      <p class="muted comparison-note">Weather sealing language is manufacturer wording, not a waterproof guarantee. For Bosque, internal-zoom lenses reduce exposed barrel movement in dust and blowing grit; extending zooms are still viable but should be wiped before retracting.</p>`;
      return;
    }
    const items = gearItems.filter((item) => item.system === system);
    results.innerHTML = `<div class="gear-detail-grid">
      ${items
        .map((item) => {
          const hasImage = item.image;
          return `<article class="gear-detail-card">
            <a class="gear-photo ${hasImage ? "" : "gear-photo-link"}" href="${item.photo}" target="_blank" rel="noreferrer">
              ${
                hasImage
                  ? `<img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />`
                  : `<span>${item.photoLabel}</span>`
              }
            </a>
            <div class="gear-detail-copy">
              <p class="eyebrow">${item.system}</p>
              <h3>${item.name}</h3>
              <p class="card-copy">${item.role}</p>
              <dl class="spec-grid">
                <div><dt>Length</dt><dd>${item.specs.length}</dd></div>
                <div><dt>Weight</dt><dd>${item.specs.weight}</dd></div>
                <div><dt>Min focus</dt><dd>${item.specs.minFocus}</dd></div>
                <div><dt>Filter</dt><dd>${item.specs.filter}</dd></div>
                <div><dt>Aperture</dt><dd>${item.specs.aperture}</dd></div>
                <div><dt>TC</dt><dd>${item.specs.teleconverter}</dd></div>
                <div><dt>Introduced</dt><dd>${item.specs.introduced}</dd></div>
                <div><dt>Stabilization</dt><dd>${item.specs.stabilization}</dd></div>
                <div><dt>Zoom / focus</dt><dd>${item.specs.zoomFocus}</dd></div>
                <div><dt>Weather</dt><dd>${item.specs.weather}</dd></div>
              </dl>
              <p>${item.note}</p>
              <div class="tag-row">
                ${externalLink(item.photo, item.photoLabel)}
                ${externalLink(item.source, "Specs")}
              </div>
            </div>
          </article>`;
        })
        .join("")}
    </div>`;
  };

  root.querySelectorAll(".gear-filters .chip").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll(".gear-filters .chip").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      draw(button.dataset.system);
    });
  });
  draw("Sony");
}

function renderPractice() {
  const root = document.querySelector("#practice");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Beginning to end</p>
        <h2>Practice</h2>
      </div>
      <p>This section now works like a pre-flight curriculum: camera setup, modes, shutter speeds, physical handling, support, exposure, behavior, cold workflow, and homework.</p>
    </div>
    <section class="panel">
      <p class="eyebrow">Reading stack</p>
      <div class="tag-row">
        ${bookStack.map((book) => `<span class="tag">${book}</span>`).join("")}
      </div>
    </section>
    <div class="practice-list">
      ${practiceModules
        .map(
          (module, index) => `<article class="practice-card">
            <div class="practice-number">${index + 1}</div>
            <div>
              <h3>${module.title}</h3>
              <p class="card-copy">${module.goal}</p>
              <ul class="kit-list">${module.steps.map((step) => `<li>${step}</li>`).join("")}</ul>
              <p class="homework"><b>Homework:</b> ${module.homework}</p>
            </div>
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
      <p>Use public-domain images directly only when the source license supports it. Everything else is inspiration-only and linked out.</p>
    </div>
    <div class="grid-3">
      ${inspiration
        .map(
          (item) => `<article class="photo-card">
            <figure>
              <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async" />
              <figcaption>
                <h3>${item.title}</h3>
                <p class="card-copy">${item.idea}</p>
                <p class="muted">${item.credit}</p>
                <p class="muted">${item.license}</p>
                ${externalLink(item.source, "Source")}
              </figcaption>
            </figure>
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">More places to look</p>
        <h2>External Inspiration</h2>
      </div>
      <p>These are linked for study, not reused as site assets.</p>
    </div>
    <div class="grid-2">
      ${inspirationLinks
        .map(
          (item) => `<article class="evidence-card">
            <h3>${item.title}</h3>
            <p class="card-copy">${item.note}</p>
            ${externalLink(item.url, "Open reference")}
          </article>`
        )
        .join("")}
    </div>`;
}

function renderMedia() {
  const root = document.querySelector("#media");
  const kinds = ["All", ...Array.from(new Set(mediaArticles.map((item) => item.kind)))];
  const evidenceGroups = Array.from(new Set(exifEvidence.map((item) => item.group)));
  const primarySources = mediaArticles.slice(0, 3);
  root.innerHTML = `
    <div class="media-editorial">
      <section class="media-hero-section">
        <div class="media-hero-copy">
          <p class="eyebrow">Articles, EXIF, and field guidance</p>
          <h2>Media</h2>
          <p>The library is organized as a field decision tool: the recommendation first, then source guidance, EXIF evidence, practical implications, and citations.</p>
        </div>
        <aside class="recommendation-summary">
          <p class="eyebrow">Primary takeaway</p>
          <h3>Carry reach, but do not let reach make every decision.</h3>
          <p>The Sony 200-600 is a primary wildlife recommendation. The 24-105 stays ready for flock scale and place. The 100-400 and 400-800 are situational choices for handling or bright-light reach.</p>
        </aside>
      </section>

      <section class="media-brief-grid" aria-label="Research summary">
        <article class="brief-card is-primary">
          <span>01</span>
          <h3>Source guidance</h3>
          <p>Use Cornell, The Quite Wild, and Thom Hogan as the decision anchors: location behavior, practical settings, and restraint against pure gear obsession.</p>
        </article>
        <article class="brief-card">
          <span>02</span>
          <h3>EXIF evidence</h3>
          <p>The evidence supports a full range from 24-105mm environmental frames to 800mm tight action, with 400-600mm-equivalent work as the recurring center.</p>
        </article>
        <article class="brief-card">
          <span>03</span>
          <h3>Field implication</h3>
          <p>Arrive with two bodies staged: one long wildlife lens and one wide/context lens. Choose the shot first, then the focal length.</p>
        </article>
      </section>

      <section class="media-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Source and article guidance</p>
            <h3>What to read first</h3>
          </div>
          <p>Each article keeps its three-paragraph summary, but the layout now gives stronger weight to the most actionable sources.</p>
        </div>
        <div class="source-priority">
          ${primarySources
            .map(
              (item, index) => `<article class="priority-source-card ${index === 0 ? "is-lead" : ""}">
                <div class="media-meta">
                  <span>${item.date}</span>
                  <span>${item.kind}</span>
                </div>
                <h4><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h4>
                <p class="source-name">${item.source}</p>
                <p>${item.apply}</p>
              </article>`
            )
            .join("")}
        </div>
        <div class="filter-row media-filters">
          ${kinds.map((kind, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" data-filter="${kind}">${kind}</button>`).join("")}
        </div>
        <div class="article-results" id="media-results"></div>
      </section>

      <section class="media-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Supporting proof</p>
            <h3>EXIF evidence by focal-length role</h3>
          </div>
          <p>Grouped by what the data proves in the field, not by source chronology.</p>
        </div>
        <div class="evidence-board">
          ${evidenceGroups
            .map((group) => {
              const items = exifEvidence.filter((item) => item.group === group);
              return `<article class="evidence-group">
                <header>
                  <p class="eyebrow">${group}</p>
                  <strong>${items.length} evidence ${items.length === 1 ? "note" : "notes"}</strong>
                </header>
                <div class="evidence-list">
                  ${items
                    .map(
                      (item) => `<a class="evidence-note" href="${item.url}" target="_blank" rel="noreferrer">
                        <span>${item.source}</span>
                        <h4>${item.subject}</h4>
                        <p class="evidence-data">${item.evidence}</p>
                        <p>${item.implication}</p>
                      </a>`
                    )
                    .join("")}
                </div>
              </article>`;
            })
            .join("")}
        </div>
      </section>

      <section class="media-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Practical field implications</p>
            <h3>Field implications</h3>
          </div>
          <p>These are the operational decisions supported by the source set.</p>
        </div>
        <div class="implication-grid">
          ${fieldImplications
            .map(
              (item) => `<article class="implication-card">
                <h4>${item.title}</h4>
                <p>${item.note}</p>
              </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="media-section citation-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Links and citations</p>
            <h3>Source index</h3>
          </div>
          <p>Article photos remain inspiration-only unless the source license explicitly permits reuse.</p>
        </div>
        <div class="citation-list">
          ${mediaArticles
            .map(
              (item) => `<a href="${item.url}" target="_blank" rel="noreferrer">
                <span>${item.kind}</span>
                <strong>${item.title}</strong>
                <em>${item.source}</em>
              </a>`
            )
            .join("")}
        </div>
      </section>
    </div>`;

  const results = root.querySelector("#media-results");
  const draw = (filter) => {
    const articles = filter === "All" ? mediaArticles : mediaArticles.filter((item) => item.kind === filter);
    results.innerHTML = articles
      .map(
        (item, index) => `<article class="media-card article-card ${index === 0 && filter === "All" ? "is-featured" : ""}">
          <div class="article-kicker">
            <div class="media-meta">
              <span>${item.date}</span>
              <span>${item.kind}</span>
            </div>
            <p class="source-name">${item.source}</p>
          </div>
          <div class="article-body">
            <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h3>
            ${item.summary.map((paragraph) => `<p class="card-copy">${paragraph}</p>`).join("")}
            <p class="article-apply"><b>Use it for:</b> ${item.apply}</p>
          </div>
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
        <p class="eyebrow">Checked ${checkedDate}</p>
        <h2>Sources</h2>
      </div>
      <p>Current access, travel, lodging, pricing, specs, road, and bird-location notes should be rechecked after final booking and again in the week before travel.</p>
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

const defaultView = "overview";
const viewAliases = {
  lodging: "travel",
};

const viewRenderers = {
  overview: renderOverview,
  guide: renderGuide,
  map: renderMap,
  itinerary: renderItinerary,
  windows: renderWindows,
  travel: renderTravel,
  gear: renderGear,
  practice: renderPractice,
  inspiration: renderInspiration,
  media: renderMedia,
  sources: renderSources,
};

const renderedViews = new Map();

function normalizeViewId(id) {
  const resolvedId = viewAliases[id] || id;
  const view = document.getElementById(resolvedId || "");
  return view?.classList.contains("view") ? resolvedId : defaultView;
}

function ensureViewRendered(viewId) {
  if (renderedViews.has(viewId)) return renderedViews.get(viewId);
  const renderer = viewRenderers[viewId];
  if (!renderer) return Promise.resolve();

  const renderPromise = Promise.resolve(renderer()).catch((error) => {
    renderedViews.delete(viewId);
    throw error;
  });
  renderedViews.set(viewId, renderPromise);
  return renderPromise;
}

function getParentWindow() {
  try {
    return window.parent && window.parent !== window ? window.parent : null;
  } catch {
    return null;
  }
}

function viewFromHash(targetWindow) {
  const raw = targetWindow.location.hash.replace(/^#/, "");
  if (!raw) return "";
  try {
    return normalizeViewId(decodeURIComponent(raw));
  } catch {
    return normalizeViewId(raw);
  }
}

function requestedView() {
  const parentWindow = getParentWindow();
  const parentView = parentWindow ? viewFromHash(parentWindow) : "";
  const ownView = viewFromHash(window);
  const queryView = new URLSearchParams(window.location.search).get("view");
  return normalizeViewId(parentView || ownView || queryView || defaultView);
}

function writeViewUrl(targetWindow, id, mode) {
  const url = new URL(targetWindow.location.href);
  url.hash = id;
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  if (targetWindow.location.hash === `#${id}`) return;
  targetWindow.history[mode === "replace" ? "replaceState" : "pushState"]({ view: id }, "", nextUrl);
}

function syncViewUrls(id, mode = "push") {
  writeViewUrl(window, id, mode);
  const parentWindow = getParentWindow();
  if (parentWindow) {
    writeViewUrl(parentWindow, id, mode);
  }
}

async function showView(id, options = {}) {
  const viewId = normalizeViewId(id);
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.view === viewId;
    tab.classList.toggle("is-active", active);
    if (active) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
  if (options.updateUrl) {
    syncViewUrls(viewId, options.replace ? "replace" : "push");
  }

  try {
    await ensureViewRendered(viewId);
  } catch (error) {
    console.error(`Could not render ${viewId} view`, error);
  }

  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
    if (viewId === "map" && window.photoMapState) {
      window.photoMapState.map.invalidateSize();
      window.photoMapState.map.fitBounds(window.photoMapState.bounds, { padding: [28, 28] });
    }
    if (viewId === "travel" && window.lodgingMapState) {
      window.lodgingMapState.map.invalidateSize();
      window.lodgingMapState.map.fitBounds(window.lodgingMapState.bounds, { padding: [28, 28] });
    }
  }, 80);
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view, { updateUrl: true }));
  });
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const trigger = event.target.closest("[data-jump]");
    if (!trigger) return;
    event.preventDefault();
    showView(trigger.dataset.jump, { updateUrl: true });
  });
  const syncFromUrl = () => {
    const viewId = requestedView();
    showView(viewId, { updateUrl: false });
    writeViewUrl(window, viewId, "replace");
  };
  window.addEventListener("hashchange", syncFromUrl);
  window.addEventListener("popstate", syncFromUrl);
  const parentWindow = getParentWindow();
  if (parentWindow) {
    parentWindow.addEventListener("hashchange", syncFromUrl);
    parentWindow.addEventListener("popstate", syncFromUrl);
  }
  showView(requestedView(), { updateUrl: Boolean(window.location.hash || parentWindow?.location.hash), replace: true });
}

ensureViewRendered("overview").then(initTabs);
