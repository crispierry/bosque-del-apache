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
    checked: "2026-06-02",
  },
  {
    topic: "Access, fees, hours",
    title: "USFWS Visit Us",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us",
    checked: "2026-06-02",
  },
  {
    topic: "Rules",
    title: "USFWS Rules and Policies",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/rules-policies",
    checked: "2026-06-02",
  },
  {
    topic: "Photo field guidance",
    title: "Cornell All About Birds photo guide",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    checked: "2026-06-02",
  },
  {
    topic: "Festival timing",
    title: "Festival of the Cranes",
    url: "https://friendsofbosquedelapache.org/festival/",
    checked: "2026-06-02",
  },
  {
    topic: "Sun times",
    title: "Timeanddate Socorro December 2026",
    url: "https://www.timeanddate.com/sun/usa/socorro?month=12&year=2026",
    checked: "2026-06-02",
  },
  {
    topic: "Lodging",
    title: "Holiday Inn Express Socorro",
    url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/socorro/socnm/hoteldetail/directions",
    checked: "2026-06-02",
  },
  {
    topic: "Lodging",
    title: "Casa Blanca Bed and Breakfast",
    url: "https://casablancabedandbreakfast.com/",
    checked: "2026-06-02",
  },
];

const locations = [
  {
    name: "Visitor Center",
    type: "Refuge base",
    lat: 33.804777,
    lon: -106.890917,
    windows: ["mid-morning"],
    confidence: "confirmed",
    note: "Staff map, current roost intel, Desert Arboretum, water refill when open.",
  },
  {
    name: "Old Highway 1 crane pools",
    type: "Shooting zone",
    lat: 33.8292,
    lon: -106.8914,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note: "Use legal pullouts near shallow north approach pools; verify exact active pool daily.",
  },
  {
    name: "Flight Deck / Main Pool",
    type: "Shooting zone",
    lat: 33.7918,
    lon: -106.8883,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note: "Classic blast-off platform when Main Pool has water and birds.",
  },
  {
    name: "Highway 1 west crane pool",
    type: "Shooting zone",
    lat: 33.7836,
    lon: -106.8952,
    windows: ["sunrise", "sunset"],
    confidence: "planning pin",
    note: "Crane landing and reflection setup; arrive 60-75 minutes before sunset.",
  },
  {
    name: "South Loop wetlands",
    type: "Shooting zone",
    lat: 33.7964,
    lon: -106.8828,
    windows: ["sunrise", "mid-morning"],
    confidence: "planning pin",
    note: "Dabbler and Diver Deck / Boardwalk direction; good ducks, coots, reeds, and reflections.",
  },
  {
    name: "North Loop farm fields",
    type: "Shooting zone",
    lat: 33.8178,
    lon: -106.8844,
    windows: ["mid-morning", "sunset"],
    confidence: "planning pin",
    note: "Feeding cranes/geese and raptors after fly-out; gates can change.",
  },
  {
    name: "Willow / Coyote Deck area",
    type: "Shooting zone",
    lat: 33.8216,
    lon: -106.8798,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note: "Shared deck space for wetland views, ducks, raptors, and passerines.",
  },
  {
    name: "Rio Viejo / Bike Trail parking",
    type: "Trailhead",
    lat: 33.7951,
    lon: -106.8678,
    windows: ["mid-morning"],
    confidence: "planning pin",
    note: "Marsh and trailhead change-of-pace; vault toilets nearby.",
  },
];

const days = [
  {
    day: "Day 1",
    theme: "Scout the refuge and lock the active roosts.",
    slots: [
      {
        window: "Sunrise",
        time: "Be in position by 6:15 AM",
        place: "Old Highway 1 / north approach crane pools",
        goal: "Cranes and geese leaving shallow water against southeast color.",
        gear: "Sony 200-600 + 24-105, or Canon 100-500 + 24-105",
        position: "Safe shoulder or pullout. Choose east-side pool for goose silhouettes or west-side pool for cranes.",
      },
      {
        window: "Mid-morning",
        time: "9:00 AM to 11:00 AM",
        place: "Visitor Center, then South Loop wetlands",
        goal: "Use staff intel, then work Dabbler and Diver Deck / Boardwalk subjects.",
        gear: "Sony 200-600 or 400-800, Canon 100-500 or 200-800",
        position: "Move slowly through legal pullouts; keep vehicle as a blind.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "Highway 1 west-side crane pools",
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
        place: "North Loop / Farm Loop crop fields",
        goal: "Feeding cranes/geese, harriers, bald eagles, and flight lines.",
        gear: "Sony 200-600 handheld or 400-800; Canon 100-500 or 200-800",
        position: "Use legal pullouts around crop fields; do not block road.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:45 PM",
        place: "South Crane Pond / Highway 1 crane-pool pullout",
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
        place: "South Crane Pond / west Highway 1 pool",
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
        place: "Boardwalk / Rio Viejo-Bike Trail parking",
        goal: "Marsh birds, cattails, coots, sparrows, quail, roadrunner, and mammals.",
        gear: "Long zoom plus 24-105",
        position: "Use vehicle as blind, then short walks only where open.",
      },
      {
        window: "Sunset",
        time: "Arrive 3:40 PM",
        place: "North Loop fields near Phil Norton Observation Blind",
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
        place: "Highway 1 west crane pool",
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
    name: "Holiday Inn Express Socorro by IHG",
    area: "Socorro",
    drive: "25-30 min",
    price: "$112-$131+",
    best: "Cleanest low-friction choice",
    note: "Reliable chain hotel, easy parking, room fridge/microwave, Socorro food and fuel nearby.",
    watch: "Breakfast may start after departure; book refundable if bird reports or weather may shift.",
  },
  {
    rank: 2,
    name: "Casa Blanca Bed and Breakfast",
    area: "San Antonio",
    drive: "12-15 min",
    price: "$100-$120",
    best: "Closest birding-oriented base",
    note: "Very short drive, refuge-savvy hosts, early-bird hot drink/snack in peak winter.",
    watch: "Tiny inventory, cash/check only, two-night minimum in Nov/Dec/Jan, one-week cancellation.",
  },
  {
    rank: 3,
    name: "Comfort Inn & Suites Socorro",
    area: "Socorro",
    drive: "25-30 min",
    price: "$108-$140+",
    best: "Value chain alternative",
    note: "Interior corridors, smoke-free, Wi-Fi, microwave/fridge, indoor pool/hot tub.",
    watch: "Less polished than Holiday Inn; avoid prepaid nonrefundable rates unless dates are locked.",
  },
  {
    rank: 4,
    name: "Best Western Socorro Hotel & Suites",
    area: "Socorro",
    drive: "25-30 min",
    price: "$119-$216",
    best: "Solid main-strip backup",
    note: "Free breakfast/Wi-Fi, indoor pool, pet-friendly rooms available, practical parking.",
    watch: "Price range is wider; verify highway noise, room type, and cancellation window.",
  },
  {
    rank: 5,
    name: "Econo Lodge Inn & Suites",
    area: "Socorro",
    drive: "25-30 min",
    price: "$92-$96+",
    best: "Budget fallback",
    note: "Cheapest acceptable Socorro option found, with free parking and breakfast.",
    watch: "More variable comfort, sound, and finish. Inspect recent reviews before booking.",
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
            <p>Early December lines up with winter crane and goose concentrations, but the best roost can shift with water, wind, and refuge management. The plan is built to repeat the strongest active location instead of chasing novelty.</p>
          </div>
          <div class="stat-grid">
            <div class="stat"><b>6:55-6:58</b><span>Socorro sunrise, early Dec. 2026</span></div>
            <div class="stat"><b>4:57-4:58</b><span>Socorro sunset, early Dec. 2026</span></div>
            <div class="stat"><b>1 hr before</b><span>Refuge lands open before sunrise</span></div>
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
          <h3>Start at Old Highway 1 crane pools</h3>
          <p class="card-copy">Use the first sunrise to learn active roosts, wind direction, and how birds are leaving the pools. Then ask visitor-center staff where birds have been feeding and returning.</p>
          <div class="tag-row"><span class="tag sunrise">Sunrise</span><span class="tag">Crane pools</span><span class="tag verify">Verify daily</span></div>
        </section>
        <section class="panel">
          <p class="eyebrow">Booking bias</p>
          <h3>Socorro for low friction, San Antonio for closeness</h3>
          <p class="card-copy">Holiday Inn Express Socorro is the cleanest no-fuss pick. Casa Blanca is closer and photography-friendly, with B&B constraints.</p>
        </section>
        <section class="panel">
          <p class="eyebrow">Gear bias</p>
          <h3>Flexible long zoom first</h3>
          <p class="card-copy">For moving birds, favor 200-600 Sony or 100-500 Canon before the longest option. Keep 24-105 ready for scale, sky, and reflections.</p>
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
      <p>Socorro gives better food, fuel, and chain-hotel reliability. San Antonio is closer, with smaller lodging inventory and more policy constraints.</p>
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
      <p>The 1.4x teleconverter becomes useful after the light improves. Before sunrise, keep the kit fast, flexible, and clean.</p>
    </div>
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
        <p class="eyebrow">Checked June 2, 2026</p>
        <h2>Sources</h2>
      </div>
      <p>Current access, lodging, pricing, and bird-location notes should be rechecked before booking and again during the week of travel.</p>
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
      <p>Visitor Center coordinates are confirmed by USFWS. Shooting-zone pins are planning pins and need final verification against refuge maps and same-day staff intel.</p>
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
                <span class="tag ${place.confidence === "confirmed" ? "" : "verify"}">${place.confidence}</span>
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
        setTimeout(() => window.dispatchEvent(new Event("resize")), 60);
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
