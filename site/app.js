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
        gear: "Sony 200-600 + 24-105, or Canon 100-500 + 24-105",
        position: "Use legal crane-pond parking or pullouts. Stay off railroad, private land, shoulders, and closed areas.",
      },
      {
        window: "Mid-morning",
        time: "9:00 AM to 11:00 AM",
        place: "Visitor Center if open, otherwise South Loop wetlands",
        goal: "Use staff intel when available, then work Dabbler Deck, Eagle Scout Deck, and wetland subjects.",
        gear: "Sony 200-600 or 400-800, Canon 100-500 or 200-800",
        position: "Move slowly through legal pullouts; keep vehicle as a blind.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "North Crane Pond / Highway 1 crane pools",
        goal: "Crane landings, silhouettes, reflections, and mountain bands.",
        gear: "Sony 24-105 + 200-600, or Canon 24-105 + 100-500",
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
        gear: "24-105 for scale plus 200-600 or 100-500 for flight",
        position: "Start wide into dawn color; switch to panning as light rises.",
      },
      {
        window: "Mid-morning",
        time: "After fly-out",
        place: "North Loop / Farm Deck crop fields",
        goal: "Feeding cranes/geese, harriers, bald eagles, and flight lines.",
        gear: "Sony 200-600 handheld or 400-800; Canon 100-500 or 200-800",
        position: "Use legal pullouts around crop fields; do not block road.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "South Crane Pond pullouts",
        goal: "Crane family groups returning to shallow water.",
        gear: "Sony 200-600, Canon 100-500, wide zoom for sky/reflection",
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
        gear: "Sony 200-600 no TC, Canon 100-500 no TC",
        position: "Adjust along legal pullouts for wind; birds depart into wind.",
      },
      {
        window: "Mid-morning",
        time: "9:15 AM to 11:30 AM",
        place: "Willow Deck and Coyote Deck",
        goal: "Wetland views, ducks, cranes/geese, raptors, and passerines.",
        gear: "Sony 400-800 or 200-600; Canon 200-800 or 100-500",
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
        gear: "Sony 200-600, Canon 100-500, 24-105 for habitat",
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
        gear: "Sony 200-600 or 400-800; Canon 100-500 or 200-800",
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
        gear: "Sony 200-600 or 24-105; Canon 100-500 or 24-105",
        position: "Stay in or near the vehicle and do not approach wildlife.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:40 PM",
        place: "Highway 1 crane-pool finale",
        goal: "Pick one clean composition: landing reflection, mountain bands, or wide sky punctuation.",
        gear: "Sony 24-105 + 200-600; Canon 24-105 + 100-500",
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

const gearCards = [
  {
    name: "Long wildlife kit",
    uses: "Crane pools, feeding fields, decks",
    sony: "200-600 for moving birds; 400-800 for distance in good light",
    canon: "100-500 for moving birds; 200-800 for distance in good light",
  },
  {
    name: "Wide flock kit",
    uses: "Blast-offs, reflections, mountain bands",
    sony: "24-105 plus 200-600",
    canon: "24-105 plus 100-500",
  },
  {
    name: "Low-light rule",
    uses: "Pre-dawn and last color",
    sony: "No 1.4x except static silhouettes",
    canon: "No 1.4x except static silhouettes",
  },
  {
    name: "Field support",
    uses: "Vehicle work, deck sessions, highway pullouts",
    sony: "Beanbag/monopod for vehicle and deck work",
    canon: "Tripod only where it does not block shared space",
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
          <h3>Keep Sony and Canon for now</h3>
          <p class="card-copy">The final camera system is still open. Keep both branches in the plan, then pick one 24-105 plus one flexible long zoom before packing.</p>
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
        <p class="eyebrow">Lens configuration</p>
        <h2>Gear</h2>
      </div>
      <p>The camera system is intentionally still open. Keep both Sony and Canon branches until the final pack list is chosen.</p>
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
            <p><b>Sony:</b> ${card.sony}</p>
            <p><b>Canon:</b> ${card.canon}</p>
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
renderSources();
initTabs();
