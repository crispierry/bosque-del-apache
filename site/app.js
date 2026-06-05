const checkedDate = "2026-06-03";
const gearCheckedDate = "2026-06-04";
const visualCheckedDate = "2026-06-04";

const assets = {
  geese: "./assets/snow-geese-gary-stolz-usfws-1800.jpg",
  cranes: "./assets/sandhill-cranes-ryan-hagerty-usfws-1800.jpg",
  flyout: "./assets/snow-geese-flyout-lynne-braden-usfws-1800.jpg",
};

const generatedVisuals = [
  {
    id: "crane-roost-dawn",
    title: "Dawn Crane Roost",
    src: "./assets/generated/crane-roost-dawn-contact-sheet.jpg",
    category: "Sunrise",
    alt:
      "Generated five-frame planning preview of sandhill crane dawn roost scenes at Bosque del Apache",
    caption:
      "Generated planning preview for crane-pool sunrise work; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows", "Sources"],
    examples: [
      "Crane silhouettes before sunrise",
      "Cold breath and shallow-water atmosphere",
      "Reflection pair in calm water",
      "Takeoff run with wing stretch",
      "Wide mountain-band roost scene",
    ],
    promptSummary:
      "Early-December sandhill crane roost, cold predawn light, shallow water, mountain bands, five realistic frames.",
  },
  {
    id: "snow-goose-blastoff",
    title: "Snow Goose Blast-Off",
    src: "./assets/generated/snow-goose-blastoff-contact-sheet.jpg",
    category: "Sunrise",
    alt:
      "Generated five-frame planning preview of snow goose roost and blast-off scenes at Bosque del Apache",
    caption:
      "Generated planning preview for Flight Deck or Main Pool blast-off decisions; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows", "Media"],
    examples: [
      "Still roost before lift-off",
      "First flock wave rising low",
      "Wide mass blast-off over water",
      "Overhead flock texture",
      "Separated goose groups against pastel dawn",
    ],
    promptSummary:
      "Main Pool style snow goose roost and lift-off, cold dawn, realistic flock behavior, five realistic frames.",
  },
  {
    id: "crane-evening-return",
    title: "Crane Evening Return",
    src: "./assets/generated/crane-evening-return-contact-sheet.jpg",
    category: "Sunset",
    alt:
      "Generated five-frame planning preview of sandhill crane landing and evening return scenes at Bosque del Apache",
    caption:
      "Generated planning preview for crane-pool sunset work; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows"],
    examples: [
      "Final approach with feet down",
      "Paired cranes in warm side light",
      "Family group landing",
      "Reflection landing with ripples",
      "Wide flock against dusky mountain bands",
    ],
    promptSummary:
      "Highway 1 crane ponds, shallow water, winter sunset, landing posture, reflections, five realistic frames.",
  },
  {
    id: "farm-field-feeding",
    title: "Farm-Field Feeding",
    src: "./assets/generated/farm-field-feeding-contact-sheet.jpg",
    category: "Mid-morning",
    alt:
      "Generated five-frame planning preview of cranes, geese, and raptors in Bosque del Apache managed farm fields",
    caption:
      "Generated planning preview for field-feeding and vehicle-blind work; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows", "Media", "Sources"],
    examples: [
      "Feeding cranes in winter crop rows",
      "Mixed geese and cranes with mountains",
      "Raptor crossing a field edge",
      "Flock lifting from crop rows",
      "Quiet vehicle-blind perspective from a legal pullout",
    ],
    promptSummary:
      "Managed refuge fields, legal roadside perspective, cranes, geese, raptor, winter mid-morning sun, five realistic frames.",
  },
  {
    id: "wetland-deck",
    title: "Wetland Deck Details",
    src: "./assets/generated/wetland-deck-contact-sheet.jpg",
    category: "Mid-morning",
    alt:
      "Generated five-frame planning preview of ducks, reeds, water texture, and wetland deck scenes at Bosque del Apache",
    caption:
      "Generated planning preview for Dabbler, Eagle Scout, Willow, and Coyote Deck work; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows"],
    examples: [
      "Ducks in reed reflections",
      "Coots and water texture",
      "Distant cranes compressed through reeds",
      "Backlit cattail and sparkle",
      "Quiet wetland layers with birds small in frame",
    ],
    promptSummary:
      "Public deck perspective, winter reeds, ducks, coots, reflections, mid-morning glare, five realistic frames.",
  },
  {
    id: "desert-edge-details",
    title: "Desert-Edge Details",
    src: "./assets/generated/desert-edge-details-contact-sheet.jpg",
    category: "Mid-morning",
    alt:
      "Generated five-frame planning preview of roadrunner, quail, sparrows, tracks, and dry Bosque del Apache habitat details",
    caption:
      "Generated planning preview for Rio Viejo, trail, and habitat-detail work; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows"],
    examples: [
      "Roadrunner on a gravel edge",
      "Small quail group in winter brush",
      "Sparrow on a dried seedhead",
      "Tracks and frosty dust",
      "Quiet trail habitat with cottonwoods",
    ],
    promptSummary:
      "Rio Viejo style refuge edge, dry winter grasses, roadrunner, quail, sparrow, tracks, five realistic frames.",
  },
  {
    id: "weather-motion-fallback",
    title: "Weather And Motion Fallbacks",
    src: "./assets/generated/weather-motion-fallback-contact-sheet.jpg",
    category: "Fallback",
    alt:
      "Generated five-frame planning preview of mist, gray light, panning blur, snow-dusted reeds, and silhouettes at Bosque del Apache",
    caption:
      "Generated planning preview for gray-day and slow-shutter fallback work; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Photo Windows", "Practice"],
    examples: [
      "Cranes in light mist",
      "High-key geese over gray water",
      "Intentional panning blur",
      "Snow-dusted reeds with distant birds",
      "Dark flock silhouettes against a pale sky",
    ],
    promptSummary:
      "Cold gray Bosque weather, mist, light snow, slow shutter panning, silhouette fallback frames, five realistic frames.",
  },
  {
    id: "filter-practice",
    title: "Filter Practice",
    src: "./assets/generated/filter-practice-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame planning preview of circular polarizer, neutral-density, protective filter, step-up ring, and cold-weather filter practice",
    caption:
      "Generated planning preview for filter rehearsals; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Practice", "Sources"],
    examples: [
      "CPL glare test over water",
      "Fast bird flight with no filter",
      "ND shutter-drag practice",
      "Protective filter and cleaning kit",
      "Gloved step-up ring handling",
    ],
    promptSummary:
      "Practical local filter training, water glare, no-filter flight, ND blur, clear filter cleaning, cold hands, five realistic frames.",
  },
  {
    id: "travel-workflow",
    title: "Travel Workflow",
    src: "./assets/generated/travel-workflow-contact-sheet.jpg",
    category: "Travel",
    alt:
      "Generated five-frame planning preview of hotel room battery charging, staged camera bodies, rental SUV cargo, route check, and memory-card backup",
    caption:
      "Generated planning preview for travel and field-workflow preparation; not an actual Bosque field photograph.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Gallery", "Itinerary", "Travel", "Sources"],
    examples: [
      "Hotel battery and card charging",
      "Two bodies staged before dawn",
      "Rental SUV cargo organized",
      "Predawn route check",
      "Evening backup and field notebook",
    ],
    promptSummary:
      "Socorro hotel workflow, two cameras, rental SUV cargo, predawn route check, backup routine, five realistic frames.",
  },
];

const practiceVisuals = [
  {
    id: "practice-camera-setup",
    title: "Camera Setup Baseline Practice",
    src: "./assets/generated/practice-camera-setup-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of two-camera staging, camera controls, batteries, cards, and reset practice",
    caption:
      "Generated training preview for practice item 1, Camera Setup Baseline; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Two-body staging, camera controls, non-readable screen review, batteries/cards, gloves, and quick reset practice.",
  },
  {
    id: "practice-exposure-modes",
    title: "Exposure Modes Practice",
    src: "./assets/generated/practice-exposure-modes-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of aperture priority, shutter priority, manual exposure, silhouettes, and exposure review",
    caption:
      "Generated training preview for practice item 2, Aperture Priority, Shutter Priority, and Manual; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Static bird, moving bird, silhouette, exposure controls, and non-readable camera review at a local wetland.",
  },
  {
    id: "practice-shutter-speed",
    title: "Shutter Speed Ladder Practice",
    src: "./assets/generated/practice-shutter-speed-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of frozen flight, wing blur, panning blur, flock blur, and motion review",
    caption:
      "Generated training preview for practice item 3, Shutter Speed Ladder; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Frozen bird flight, controlled wing blur, panning, slow flock blur, and field review at a winter pond.",
  },
  {
    id: "practice-handholding",
    title: "Handholding Mechanics Practice",
    src: "./assets/generated/practice-handholding-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of long-lens stance, hip rotation, lens support, acquisition, and short burst practice",
    caption:
      "Generated training preview for practice item 4, Handholding and Body Mechanics; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Stable stance, hip rotation, left-hand support, wider acquisition, and short burst posture with a long lens.",
  },
  {
    id: "practice-support",
    title: "Support Choice Practice",
    src: "./assets/generated/practice-support-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of beanbag, tripod, gimbal, monopod, deck, and handheld long-lens support practice",
    caption:
      "Generated training preview for practice item 5, Tripod, Gimbal, Monopod, and Beanbag; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Beanbag from vehicle, tripod/gimbal at a pullout, monopod and compact tripod footprint on a deck, and handheld pivot.",
  },
  {
    id: "practice-white-birds-exposure",
    title: "White Birds Exposure Practice",
    src: "./assets/generated/practice-white-birds-exposure-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of white birds against dark reeds, bright water, pale sky, camera review, and exposure checking",
    caption:
      "Generated training preview for practice item 6, White Birds and Exposure; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "White birds against dark, bright, and pale backgrounds, non-readable exposure review, and highlight-detail checking.",
  },
  {
    id: "practice-behavior-prediction",
    title: "Behavior Prediction Practice",
    src: "./assets/generated/practice-behavior-prediction-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of crane and goose pre-flight cues, wind-aware movement, and quiet observation",
    caption:
      "Generated training preview for practice item 7, Behavior Prediction; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Crane neck stretch, wing stretch, goose agitation, wind-oriented movement, and quiet long-lens observation.",
  },
  {
    id: "practice-cold-dust-workflow",
    title: "Cold And Dust Workflow Practice",
    src: "./assets/generated/practice-cold-dust-workflow-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of batteries, gloves, mounted lens, blower kit, rain sleeve, and dust-safe handling",
    caption:
      "Generated training preview for practice item 8, Cold and Dust Workflow; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Batteries in warm pocket, lens mounted before departure, rain sleeve/blower kit, predawn gloves, and dust-safe handling.",
  },
  {
    id: "practice-readiness-checklist",
    title: "Pre-trip Readiness Practice",
    src: "./assets/generated/practice-readiness-checklist-contact-sheet.jpg",
    category: "Practice",
    alt:
      "Generated five-frame training preview of local bird practice, intentional blur, card backup, packed bag, and two-camera staging",
    caption:
      "Generated training preview for practice item 9, Pre-trip Readiness Checklist; not an actual Bosque field photograph.",
    rights:
      "AI-generated practice preview from this guide's training notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    promptSummary:
      "Local bird-in-flight session, intentional blur, card backup, field bag pack, and final two-camera setup before departure.",
  },
];

const practiceFrameExamples = {
  "practice-camera-setup": [
    "Two-camera staging table",
    "Flight preset control check",
    "Battery and card reset",
    "Glove-friendly menu rehearsal",
    "Long-lens readiness target",
  ],
  "practice-exposure-modes": [
    "Aperture Priority static bird",
    "Shutter Priority moving bird",
    "Manual exposure silhouette",
    "Auto ISO review check",
    "Histogram comparison frame",
  ],
  "practice-shutter-speed": [
    "Frozen flight at fast shutter",
    "Controlled wing blur",
    "Smooth panning pass",
    "Slow flock blur test",
    "Motion ladder review",
  ],
  "practice-handholding": [
    "Stable long-lens stance",
    "Hip-rotation tracking",
    "Left-hand lens support",
    "Wide acquisition before zoom",
    "Short burst framing check",
  ],
  "practice-support": [
    "Vehicle beanbag position",
    "Tripod and gimbal wait",
    "Monopod deck footprint",
    "Compact support reset",
    "Handheld pivot comparison",
  ],
  "practice-white-birds-exposure": [
    "White subject against dark reeds",
    "Bright-water exposure test",
    "Pale-sky highlight check",
    "Camera review and histogram",
    "Feather-detail comparison",
  ],
  "practice-behavior-prediction": [
    "Crane neck-stretch cue",
    "Wing-tension preflight moment",
    "Goose flock agitation",
    "Wind-oriented launch lane",
    "Quiet observation before tracking",
  ],
  "practice-cold-dust-workflow": [
    "Warm battery rotation",
    "Lens mounted before dust",
    "Glove change rehearsal",
    "Blower and rain-sleeve access",
    "Predawn readiness test",
  ],
  "practice-readiness-checklist": [
    "Local bird flight proof",
    "Intentional blur homework",
    "Travel backup station",
    "Packed field bag edit",
    "Final two-camera staging",
  ],
};

const lodgingVisuals = [
  {
    id: "lodging-comfort-inn",
    title: "Comfort Inn Lodging Preview",
    src: "./assets/generated/lodging-comfort-inn-preview.jpg",
    category: "Travel",
    alt:
      "Reference-based generated preview of the Comfort Inn Socorro exterior, room, breakfast area, and dawn photographer departure workflow",
    caption:
      "Reference-based generated lodging preview for the Comfort Inn planning card, grounded in official Choice Hotels exterior, room, and breakfast photos; not an actual hotel photograph.",
    rights:
      "AI-generated lodging preview based on checked official hotel-gallery references. Official hotel photos remain link-only.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Comfort Inn Socorro reference cues: tan exterior with arched windows and portico, neutral double-queen room, wood-cabinet breakfast counter, and predawn gear loading.",
  },
  {
    id: "lodging-best-western",
    title: "Best Western Lodging Preview",
    src: "./assets/generated/lodging-best-western-preview.jpg",
    category: "Travel",
    alt:
      "Reference-based generated preview of the Best Western Socorro exterior, fireplace lobby, room, and indoor-pool amenity",
    caption:
      "Reference-based generated lodging preview for the Best Western planning card, grounded in known public property-photo cues; not an actual hotel photograph.",
    rights:
      "AI-generated lodging preview based on checked public hotel-gallery references. Official hotel photos remain link-only.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Best Western Socorro reference cues: practical exterior, warm fireplace lobby, spacious room/work area, breakfast and indoor pool amenities.",
  },
  {
    id: "lodging-holiday-inn",
    title: "Holiday Inn Express Lodging Preview",
    src: "./assets/generated/lodging-holiday-inn-preview.jpg",
    category: "Travel",
    alt:
      "Reference-based generated preview of the Holiday Inn Express Socorro exterior, green-accent guest room, breakfast bar, and indoor pool",
    caption:
      "Reference-based generated lodging preview for the Holiday Inn Express planning card, grounded in official IHG exterior, room, breakfast, and pool photos; not an actual hotel photograph.",
    rights:
      "AI-generated lodging preview based on checked official hotel-gallery references. Official hotel photos remain link-only.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Holiday Inn Express Socorro reference cues: columned curved-canopy exterior, green-accent room, striped carpet, dark-cabinet breakfast bar, and indoor pool.",
  },
  {
    id: "lodging-econo-lodge",
    title: "Econo Lodge Lodging Preview",
    src: "./assets/generated/lodging-econo-lodge-preview.jpg",
    category: "Travel",
    alt:
      "Reference-based generated preview of the Econo Lodge Socorro exterior, teal-accent room, lobby, and breakfast room",
    caption:
      "Reference-based generated lodging preview for the Econo Lodge planning card, grounded in official Choice Hotels room, lobby, and breakfast photos; not an actual hotel photograph.",
    rights:
      "AI-generated lodging preview based on checked official hotel-gallery references. Official hotel photos remain link-only.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Econo Lodge Socorro reference cues: teal bed runners, wood-look floor, compact room amenities, simple lobby, and wood-cabinet breakfast room.",
  },
  {
    id: "lodging-casa-blanca",
    title: "Casa Blanca Lodging Preview",
    src: "./assets/generated/lodging-casa-blanca-preview.jpg",
    category: "Travel",
    alt:
      "Reference-based generated preview of Casa Blanca Bed and Breakfast as a historic adobe house, guest room, breakfast table, and quiet predawn veranda",
    caption:
      "Reference-based generated lodging preview for the Casa Blanca planning card, grounded in known historic adobe B&B property details; not an actual property photograph.",
    rights:
      "AI-generated lodging preview based on checked public property references. Official property photos remain link-only.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Casa Blanca reference cues: historic double-adobe house, tin roof, spacious veranda, warm guest room, homemade breakfast, and quiet short-commute departure.",
  },
  {
    id: "lodging-fairfield-los-lunas",
    title: "Fairfield Los Lunas Lodging Preview",
    src: "./assets/generated/lodging-fairfield-los-lunas-preview.jpg",
    category: "Travel",
    alt:
      "Reference-based generated preview of Fairfield Los Lunas exterior, modern guest room, breakfast area, and long-commute packing workflow",
    caption:
      "Reference-based generated lodging preview for the Fairfield Los Lunas planning card, grounded in the official Marriott exterior image and gallery categories; not an actual hotel photograph.",
    rights:
      "AI-generated lodging preview based on checked official hotel-gallery references. Official hotel photos remain link-only.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Fairfield Los Lunas reference cues: orange/tan exterior, white tower, dark accent bay, white canopy, stone pillar, modern rooms/dining, and long-commute prep.",
  },
];

const travelVisuals = [
  {
    id: "travel-airport-route-map",
    title: "Bay Area To Bosque Route Map",
    src: "./assets/generated/travel-airport-route-map-preview.jpg",
    category: "Travel",
    alt:
      "Generated editorial route-map illustration from Bay Area airports to Albuquerque and south to Bosque del Apache",
    caption:
      "Generated editorial route-map preview for Travel planning; labels are rendered by the site for accuracy, not baked into the image.",
    rights:
      "AI-generated travel-planning illustration created for this project. No third-party map tiles, logos, or airport branding are reused.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Simplified western U.S. route-map illustration with Bay Area origin cluster, ABQ destination, road south to Bosque del Apache, refuge wetland vignette, and no readable text or logos.",
  },
  {
    id: "travel-rental-car-cargo",
    title: "Rental SUV Cargo Workflow",
    src: "./assets/generated/travel-rental-car-cargo-preview.jpg",
    category: "Travel",
    alt:
      "Generated editorial illustration of a rental SUV cargo area organized for predawn wildlife photography",
    caption:
      "Generated rental car setup illustration for Travel planning; no real rental company, vehicle brand, or camera brand is represented.",
    rights:
      "AI-generated travel-planning illustration created for this project. Use as a logistics visual, not as a literal vehicle or rental-company recommendation.",
    placement: ["Travel", "Visual Asset Manifest"],
    promptSummary:
      "Compact rental SUV before dawn with organized long lens, camera bag, support, beanbag, layers, water, batteries, cards, route notebook, and no readable text or logos.",
  },
];

const standaloneGalleryVisuals = generatedVisuals.flatMap((visual) =>
  visual.examples.map((example, index) => {
    const frameNumber = String(index + 1).padStart(2, "0");
    return {
      id: `${visual.id}-${frameNumber}`,
      parentId: visual.id,
      title: example,
      src: `./assets/generated/gallery-standalone/${visual.id}-${frameNumber}.jpg`,
      category: visual.category,
      alt: `Generated standalone planning preview of ${example.toLowerCase()} at Bosque del Apache`,
      caption:
        `${example}. Standalone HD planning frame separated from the ${visual.title} generated contact sheet; not an actual Bosque field photograph.`,
      rights: visual.rights,
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        `${example} from the ${visual.title.toLowerCase()} planning set, separated from the original contact sheet for closer field-study use.`,
    };
  })
);

const practiceStandaloneVisuals = practiceVisuals.flatMap((visual) =>
  (practiceFrameExamples[visual.id] || [visual.title]).map((example, index) => {
    const frameNumber = String(index + 1).padStart(2, "0");
    return {
      id: `${visual.id}-${frameNumber}`,
      parentId: visual.id,
      title: example,
      src: `./assets/generated/practice-standalone/${visual.id}-${frameNumber}.jpg`,
      category: "Practice",
      alt: `Generated standalone training preview of ${example.toLowerCase()}`,
      caption:
        `${example}. Standalone training frame separated from the ${visual.title} contact sheet; not an actual Bosque field photograph.`,
      rights: visual.rights,
      placement: ["Practice", "Visual Asset Manifest"],
      description:
        `${example} from the ${visual.title.toLowerCase()} training set, separated into an individual inspection frame for pre-trip practice.`,
    };
  })
);

const visualById = new Map(
  [
    ...generatedVisuals,
    ...standaloneGalleryVisuals,
    ...practiceVisuals,
    ...practiceStandaloneVisuals,
    ...travelVisuals,
    ...lodgingVisuals,
  ].map((visual) => [visual.id, visual])
);

const galleryLessons = {
  "crane-roost-dawn": {
    supposedLocation:
      "North Loop crane roost pool or another active shallow-water roost visible from a legal pullout.",
    lens: "Sony FE 200-600mm, Canon RF 200-800mm, or similar long wildlife zoom.",
    focalLength: "500-700mm for individual cranes; 200-350mm when the roost, water, and mountains matter more than one bird.",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1000-1/2000 sec for takeoff; 1/250-1/500 sec for quiet pre-sunrise silhouettes.",
    technique:
      "Arrive before dawn, expose for the sky and water highlights, keep the birds as clean silhouettes until the light rises, and leave space in front of cranes that begin to stretch or run.",
  },
  "snow-goose-blastoff": {
    supposedLocation:
      "Flight Deck, Main Pool, or the current goose roost selected after the arrival scout.",
    lens: "100-400mm or 200-600mm class zoom, with a 24-105mm ready if the flock erupts close.",
    focalLength: "100-300mm for the full white cloud of geese; 400-600mm once birds separate into readable patterns.",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/2000-1/3200 sec",
    technique:
      "Pre-compose wider than feels necessary, protect white feathers from clipping, start tracking before the first wave lifts, and switch from mass pattern to individual birds only after the flock opens up.",
  },
  "crane-evening-return": {
    supposedLocation:
      "Highway 1 crane ponds, South Loop wetlands, or the evening pool where birds are returning into the wind.",
    lens: "Long wildlife zoom on a beanbag, monopod, or tripod/gimbal.",
    focalLength: "400-700mm for landing cranes; 200-300mm for wider sunset lines and mountain context.",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1600-1/2500 sec",
    technique:
      "Use wind direction to predict the landing lane, focus on the head and front shoulder, pan through touchdown, and keep enough room below the feet for reflections and splash.",
  },
  "farm-field-feeding": {
    supposedLocation:
      "Managed farm fields along the Auto Tour Loop or a roadside pullout where cranes and geese are feeding legally within view.",
    lens: "200-600mm, 200-800mm, or 100-500mm class zoom from the vehicle.",
    focalLength: "300-600mm for feeding groups; 700-800mm for raptors or distant behavior.",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1000-1/2500 sec",
    technique:
      "Use the vehicle as a blind, move slowly, watch behavior instead of chasing distance, and include rows, dust, or mountains when the bird action alone is too static.",
  },
  "wetland-deck": {
    supposedLocation:
      "Dabbler Deck, Eagle Scout Deck, Willow Deck, Coyote Deck, or another public wetland viewing point.",
    lens: "100-400mm, 200-600mm, or 200-800mm depending on distance and how much habitat should stay in frame.",
    focalLength: "300-800mm for birds through reeds; 100-250mm for layered habitat and reflections.",
    aperture: "f/8-f/11",
    shutterSpeed: "1/500-1/2000 sec",
    technique:
      "Build layered compositions through reeds, wait for clean head angles, use exposure compensation for bright water, and use a circular polarizer only when glare control is worth the shutter-speed cost.",
  },
  "desert-edge-details": {
    supposedLocation:
      "Rio Viejo Trail, visitor-center edges, dry brush margins, or quiet pullouts where desert habitat meets refuge water.",
    lens: "Long zoom for wildlife, plus 24-105mm for habitat textures and tracks.",
    focalLength: "400-800mm for roadrunner, quail, or sparrows; 50-105mm for tracks and habitat detail.",
    aperture: "f/6.3-f/8 for wildlife; f/8-f/11 for habitat details.",
    shutterSpeed: "1/1000-1/2000 sec for wildlife; 1/125-1/500 sec for still details.",
    technique:
      "Slow down after the morning spectacle, scan edges before stepping forward, get lower when possible, and use clean backgrounds so small subjects do not disappear into brush.",
  },
  "weather-motion-fallback": {
    supposedLocation:
      "Any legal loop pullout, deck, or roost edge when fog, overcast, wind, snow, or flat light changes the original plan.",
    lens: "200-600mm or 100-500mm zoom, handheld or on a support that allows smooth panning.",
    focalLength: "200-500mm for panning and flock motion; 500-800mm for compressed gray-weather studies.",
    aperture: "f/6.3-f/9",
    shutterSpeed: "1/30-1/250 sec for intentional blur; 1/1000 sec or faster when the goal is still sharp action.",
    technique:
      "Turn bad light into a motion study: pan with heads, shoot bursts through the smoothest part of the swing, and use high-key exposure when gray water and white birds dominate.",
  },
  "filter-practice": {
    supposedLocation:
      "Practice pond, wetland deck, or Bosque water edge where glare and reflections can be tested without risking peak bird action.",
    lens: "24-105mm for controlled tests; 100-400mm or 200-600mm only when the filter is already mounted and shutter speed remains adequate.",
    focalLength: "24-200mm for filter tests; avoid stacking filters at extreme telephoto lengths during action.",
    aperture: "f/8-f/11",
    shutterSpeed: "1/250-1/1000 sec with a CPL if subjects are static; 1/15-1/60 sec with ND for deliberate water or wing blur.",
    technique:
      "Practice rotating the CPL while watching water glare, rehearse removing filters quickly for flight, and use ND only for intentional motion experiments, not surprise bird action.",
  },
  "travel-workflow": {
    supposedLocation:
      "Socorro hotel room, rental SUV cargo area, and the predawn staging routine before driving to the refuge.",
    lens: "24-105mm or phone/documentary camera for planning and gear-reference frames.",
    focalLength: "24-50mm",
    aperture: "f/4-f/5.6",
    shutterSpeed: "1/60-1/125 sec",
    technique:
      "Photograph the setup as a checklist: charged batteries, empty cards, two camera roles, packed layers, route notes, and the evening backup station before anything gets repacked.",
  },
};

const practiceLessons = {
  "filter-practice": {
    supposedLocation:
      "Local pond, refuge wetland edge, or any safe water surface where glare, reflection, and slow-shutter experiments can be repeated.",
    lens: "24-105mm for controlled filter tests; 100-400mm or 200-600mm only after shutter speed is still safe.",
    focalLength: "24-200mm for CPL and ND practice; 300-600mm only for deliberate long-lens glare tests.",
    aperture: "f/8-f/11",
    shutterSpeed: "1/250-1/1000 sec with CPL; 1/15-1/60 sec with ND for intentional blur.",
    technique:
      "Rotate the CPL while watching water glare, compare with and without the clear filter into low sun, and remove filters before fast bird action unless weather protection is truly needed.",
  },
  "practice-camera-setup": {
    supposedLocation:
      "Home desk, hotel-room staging table, vehicle cargo area, and a nearby test target before the first refuge morning.",
    lens: "24-105mm for setup documentation; long wildlife zoom mounted for the final readiness test.",
    focalLength: "24-50mm for setup frames; 400-600mm for the target-acquisition check.",
    aperture: "f/4-f/8",
    shutterSpeed: "1/60-1/125 sec for setup frames; 1/2000 sec for the flight preset test.",
    technique:
      "Build three camera states, rehearse the reset path, then prove the setup by going from bag/vehicle to correct flight settings in under 30 seconds.",
  },
  "practice-exposure-modes": {
    supposedLocation:
      "Local pond, park field, or roadside bird practice area with subjects crossing bright and dark backgrounds.",
    lens: "100-400mm, 200-600mm, or similar wildlife zoom.",
    focalLength: "300-600mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/500-1/2500 sec depending on whether the subject is static, walking, or flying.",
    technique:
      "Shoot the same subject in Aperture Priority, Shutter Priority, Manual with Auto ISO, and full Manual so the failure mode of each exposure approach is visible before the trip.",
  },
  "practice-shutter-speed": {
    supposedLocation:
      "Local birds, cyclists, cars, or any repeatable moving subject with safe space to pan.",
    lens: "100-400mm or 200-600mm class zoom.",
    focalLength: "300-600mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/3200, 1/2500, 1/1600, 1/800, 1/250, 1/125, and 1/60 sec ladder.",
    technique:
      "Capture safe sharp frames first, then slow the shutter in steps and judge each file by head sharpness, wing blur, and background streak quality.",
  },
  "practice-handholding": {
    supposedLocation:
      "Open park, shoreline, driveway, or local bird area where subjects can be acquired repeatedly.",
    lens: "Long wildlife zoom handheld, ideally the same lens planned for Bosque.",
    focalLength: "300-600mm; start wider, acquire, then zoom tighter after focus is stable.",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/1600-1/3200 sec for flight drills; 1/500-1/1000 sec for slower tracking.",
    technique:
      "Set feet first, rotate from the hips, support the lens under the foot or zoom ring, and fire short controlled bursts instead of holding the shutter down.",
  },
  "practice-support": {
    supposedLocation:
      "Vehicle window, deck rail, backyard target, or local pond where support styles can be compared back-to-back.",
    lens: "200-600mm, 400-800mm, RF 200-800mm, or the longest travel wildlife lens.",
    focalLength: "400-800mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/250-1/2000 sec, recorded separately for beanbag, monopod, tripod/gimbal, and handheld.",
    technique:
      "Test the same subject from each support, record the slowest shutter you trust, and decide before the trip which support belongs in each field position.",
  },
  "practice-white-birds-exposure": {
    supposedLocation:
      "Bright local birds, white practice target, sunlit water, or any high-contrast scene that can reveal clipped highlights.",
    lens: "100-400mm or 200-600mm wildlife zoom.",
    focalLength: "300-600mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1000-1/2500 sec",
    technique:
      "Use zebras or highlight alerts, watch the RGB histogram, start with modest negative exposure compensation in direct sun, and preserve feather texture over overall brightness.",
  },
  "practice-behavior-prediction": {
    supposedLocation:
      "Local pond, park, or refuge-like bird area where repeated takeoff and landing cues can be watched calmly.",
    lens: "100-400mm, 200-600mm, or binoculars first before the camera comes up.",
    focalLength: "300-600mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/1600-1/3200 sec once the predicted movement starts.",
    technique:
      "Watch for posture, head-bobbing, crouch, wing tension, and wind direction, then start tracking before the bird actually launches.",
  },
  "practice-cold-dust-workflow": {
    supposedLocation:
      "Driveway, hotel-room simulation, vehicle cargo area, or predawn staging routine before entering the refuge.",
    lens: "24-105mm for workflow documentation; long zoom already mounted before leaving shelter.",
    focalLength: "24-50mm for setup frames; 400-600mm for the final readiness target.",
    aperture: "f/4-f/8",
    shutterSpeed: "1/60-1/125 sec for setup; 1/1000-1/2000 sec for readiness test.",
    technique:
      "Keep batteries warm, mount lenses before dust and cold, practice glove changes, and keep cleaning/weather gear reachable without unpacking the bag.",
  },
  "practice-readiness-checklist": {
    supposedLocation:
      "Final local bird session, home backup station, packed field bag, and two-camera staging area before departure.",
    lens: "Long wildlife zoom for the proof session; 24-105mm for setup and pack-list documentation.",
    focalLength: "300-600mm for birds; 24-50mm for workflow frames.",
    aperture: "f/5.6-f/8 for birds; f/4-f/5.6 for setup images.",
    shutterSpeed: "1/2000-1/3200 sec for flight; 1/60-1/250 sec for backup and packing documentation.",
    technique:
      "Prove readiness with flight frames, intentional blur frames, a tested backup routine, and a packed bag that has already been edited down.",
  },
};

const practiceStandaloneLessons = Object.fromEntries(
  practiceStandaloneVisuals.map((visual) => {
    const lesson = practiceLessons[visual.parentId];
    return [
      visual.id,
      {
        ...lesson,
        technique: lesson.technique,
      },
    ];
  })
);

const standaloneGalleryLessons = Object.fromEntries(
  standaloneGalleryVisuals.map((visual) => {
    const lesson = galleryLessons[visual.parentId];
    return [
      visual.id,
      {
        ...lesson,
        technique: lesson.technique,
      },
    ];
  })
);

const lodgingLessons = {
  "lodging-comfort-inn": {
    supposedLocation:
      "Comfort Inn Socorro reference-based exterior, room, breakfast counter, and dawn departure workflow, used to think through safe parking, gear loading, and a short refuge commute.",
    lens: "24-70mm, 24-105mm, or phone wide lens for travel-documentation context.",
    focalLength: "24-35mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/30-1/125 sec on a stabilized camera; raise ISO if handholding before sunrise.",
    technique:
      "Use the official gallery as the truth source, then read the generated frame as a logistics exercise: car-to-door path, room reset space, breakfast access, light level, and departure path.",
  },
  "lodging-best-western": {
    supposedLocation:
      "Best Western Socorro reference-based exterior, fireplace lobby, room/work area, and indoor-pool/breakfast amenity set, used to plan what can be handled before the first photo window.",
    lens: "24-70mm, 24-105mm, or a compact wide-normal travel lens.",
    focalLength: "28-45mm",
    aperture: "f/4-f/5.6",
    shutterSpeed: "1/60-1/160 sec",
    technique:
      "Treat the generated frame as a source-grounded checklist, not booking proof: fireplace/lobby comfort, room work surface, indoor amenity value, coffee, gloves, tripod, bag, and exit route.",
  },
  "lodging-holiday-inn": {
    supposedLocation:
      "Holiday Inn Express Socorro reference-based exterior, green-accent guest room, breakfast bar, and indoor-pool workflow, used to plan battery charging, card handling, clothing layers, and a two-camera reset.",
    lens: "24-105mm travel zoom or 20-35mm wide zoom for tight interiors.",
    focalLength: "24-35mm",
    aperture: "f/4-f/5.6",
    shutterSpeed: "1/30-1/100 sec on a stabilized camera or tripod.",
    technique:
      "Photograph the room like a readiness checklist: batteries visible, cards contained, long lens protected, layers ready, and nothing essential hidden in a drawer.",
  },
  "lodging-econo-lodge": {
    supposedLocation:
      "Econo Lodge Socorro reference-based room, lobby, breakfast room, and dawn parking workflow, used to evaluate value, parking convenience, and basic departure logistics.",
    lens: "24-70mm or 24-105mm travel zoom.",
    focalLength: "28-50mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/60-1/250 sec",
    technique:
      "Use the frame to separate practical value from comfort risk: show the car-to-room distance, lighting, gear exposure, and how quickly you can leave quietly before sunrise.",
  },
  "lodging-casa-blanca": {
    supposedLocation:
      "Casa Blanca Bed and Breakfast reference-based historic adobe house, guest room, breakfast table, and quiet predawn veranda, used to imagine a closer, quieter base with smaller-inventory constraints.",
    lens: "24-70mm, 24-105mm, or 35mm prime.",
    focalLength: "24-40mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/30-1/125 sec",
    technique:
      "Balance atmosphere with evidence: use the official/property references for facts, then use the generated frame to test entry path, dawn light, cold cues, staged bag, and the close commute.",
  },
  "lodging-fairfield-los-lunas": {
    supposedLocation:
      "Fairfield Los Lunas reference-based modern exterior, guest room, breakfast area, and packed long-commute workflow, used to plan whether loyalty/status value is worth the longer drive.",
    lens: "24-70mm or 24-105mm travel zoom.",
    focalLength: "24-50mm",
    aperture: "f/4-f/5.6",
    shutterSpeed: "1/30-1/125 sec",
    technique:
      "Make the long-commute story visible: packed luggage, route planning, alarm discipline, and gear ready to carry straight to the car. Then check actual maps and official hotel photos before treating it as a viable base.",
  },
};

const travelLessons = {
  "travel-airport-route-map": {
    supposedLocation:
      "Bay Area origin airports, Albuquerque International Sunport, Socorro, and Bosque del Apache as a travel-planning route, not a navigational map.",
    lens: "Editorial infographic; no camera lens implied.",
    focalLength: "Route-scale overview",
    aperture: "Not applicable",
    shutterSpeed: "Not applicable",
    technique:
      "Use this as an orientation graphic: choose SFO, OAK, or SJC by schedule, land at ABQ, rent the car there, and keep the final road segment focused on I-25, Socorro, and the refuge approach.",
  },
  "travel-rental-car-cargo": {
    supposedLocation:
      "ABQ rental-car pickup, Socorro hotel parking, and predawn refuge departure workflow.",
    lens: "24-105mm or phone wide lens for documenting travel logistics.",
    focalLength: "24-35mm",
    aperture: "f/4-f/5.6",
    shutterSpeed: "1/30-1/125 sec",
    technique:
      "Choose the vehicle for cargo access, clearance, and quiet predawn workflow: long lens protected, support gear reachable, layers and water visible, and valuables hidden when parked.",
  },
};

const visualLessons = {
  ...galleryLessons,
  ...standaloneGalleryLessons,
  ...practiceLessons,
  ...practiceStandaloneLessons,
  ...travelLessons,
  ...lodgingLessons,
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
    topic: "Safari lens guidance",
    title: "Digital Camera World - Best lenses for safari photography in 2026",
    url: "https://www.digitalcameraworld.com/buying-guides/best-lenses-for-safari-photography",
    checked: checkedDate,
  },
  {
    topic: "Safari lens guidance",
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
    labelShortMobile: "Visitor",
    labelDirection: "left",
    labelOffset: [-42, 54],
    labelOffsetMobile: [-42, 46],
    note:
      "Start here when open for current water, road, roost, and closure intelligence. Visitor Center hours currently show Thu-Mon, 9 AM-4 PM.",
  },
  {
    name: "North Crane Pond parking",
    type: "Crane pool",
    lat: 33.8593284,
    lon: -106.8766304,
    windows: ["sunrise", "sunset"],
    confidence: "field pin",
    labelShortMobile: "North Crane",
    labelDirection: "left",
    labelOffset: [-38, -8],
    note:
      "Primary crane-pool scout for dawn lift-off and evening returns. Verify legal pullouts, signs, wind direction, and active birds each day.",
  },
  {
    name: "South Crane Pond north pullout",
    type: "Crane pool",
    lat: 33.8545263,
    lon: -106.8778053,
    windows: ["sunrise", "sunset"],
    confidence: "field pin",
    labelShortMobile: "South Crane N",
    labelDirection: "left",
    labelOffset: [-38, 10],
    note:
      "Alternate crane-pool angle for reflection, landing lanes, and mountain bands. Use only legal parking, and stay clear of the railroad and shoulders.",
  },
  {
    name: "South Crane Pond south pullout",
    type: "Crane pool",
    lat: 33.8515291,
    lon: -106.8785379,
    windows: ["sunrise", "sunset"],
    confidence: "field pin",
    labelShortMobile: "South Crane S",
    labelDirection: "left",
    labelOffset: [-38, 30],
    note:
      "Good for adjusting against wind and light when the north pullout is crowded or the birds stage farther south.",
  },
  {
    name: "Flight Deck / Main Pool",
    type: "Viewpoint deck",
    lat: 33.8048326,
    lon: -106.8844325,
    windows: ["sunrise", "sunset"],
    confidence: "field pin",
    labelShortMobile: "Flight Deck",
    labelDirection: "left",
    labelOffset: [-42, -30],
    labelOffsetMobile: [-42, -62],
    note:
      "Classic snow-goose blast-off position when Main Pool has water and birds. Scout the afternoon before committing a sunrise here.",
  },
  {
    name: "Dabbler Deck",
    type: "Wetland deck",
    lat: 33.7903825,
    lon: -106.8922801,
    windows: ["mid-morning"],
    confidence: "field pin",
    labelShortMobile: "Dabbler",
    labelDirection: "left",
    labelOffset: [-38, 22],
    labelOffsetMobile: [-42, 76],
    note:
      "South Loop ducks, coots, reeds, reflections, slower practice, and clean habitat frames after the first fly-out.",
  },
  {
    name: "Eagle Scout Deck",
    type: "Wetland deck",
    lat: 33.7992911,
    lon: -106.8842161,
    windows: ["mid-morning"],
    confidence: "field pin",
    labelShortMobile: "Eagle Scout",
    labelDirection: "left",
    labelOffset: [-42, -38],
    labelOffsetMobile: [-42, -8],
    note:
      "A calmer wetland viewpoint for ducks, geese, reeds, reflections, and exposure practice on bright birds.",
  },
  {
    name: "Willow Deck",
    type: "Wetland deck",
    lat: 33.8127697,
    lon: -106.8618949,
    windows: ["mid-morning"],
    confidence: "field pin",
    labelShortMobile: "Willow",
    labelDirection: "right",
    labelOffset: [42, -30],
    note:
      "North Loop wetland work with long-lens compression. Keep tripod legs compact if other visitors are present.",
  },
  {
    name: "Coyote Deck",
    type: "Wetland deck",
    lat: 33.8158514,
    lon: -106.8611816,
    windows: ["mid-morning"],
    confidence: "field pin",
    labelShortMobile: "Coyote",
    labelDirection: "right",
    labelOffset: [42, 28],
    note:
      "Pair with Willow Deck for ducks, distant cranes, raptors, and habitat images when the crop-field action slows.",
  },
  {
    name: "Farm Deck / North Loop fields",
    type: "Field staging",
    lat: 33.8326838,
    lon: -106.8610046,
    windows: ["mid-morning", "sunset"],
    confidence: "field pin",
    labelShortMobile: "Farm Deck",
    labelDirection: "right",
    labelOffset: [38, 0],
    note:
      "Use after fly-out for feeding cranes/geese, raptors, and flight lines. Field access and bird placement change with management activity.",
  },
  {
    name: "Rio Viejo / Bike Trail parking",
    type: "Trailhead",
    lat: 33.7946779,
    lon: -106.8733529,
    windows: ["mid-morning"],
    confidence: "field pin",
    labelShortMobile: "Rio Viejo",
    labelDirection: "left",
    labelOffset: [-38, 8],
    labelOffsetMobile: [-42, -64],
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
    visualId: "lodging-comfort-inn",
    galleryUrl:
      "https://www.choicehotels.com/new-mexico/socorro/comfort-inn-hotels/nm126",
    galleryLabel: "Official Choice photos",
    galleryRights:
      "Link only. Choice hotel images are not cached or republished without permission.",
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
    visualId: "lodging-best-western",
    galleryUrl:
      "https://www.bestwestern.com/en_US/book/hotels-in-socorro/best-western-socorro-hotel-suites/propertyCode.32105.html",
    galleryLabel: "Official Best Western gallery",
    galleryRights:
      "Link only. Best Western images are not cached or republished without permission.",
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
    visualId: "lodging-holiday-inn",
    galleryUrl:
      "https://www.ihg.com/holidayinnexpress/hotels/us/en/socorro/socnm/hoteldetail/gallery",
    galleryLabel: "Official IHG gallery",
    galleryRights:
      "Link only. IHG images are not cached or republished without permission.",
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
    visualId: "lodging-econo-lodge",
    galleryUrl:
      "https://www.choicehotels.com/new-mexico/socorro/econo-lodge-hotels/nm066",
    galleryLabel: "Official Choice photos",
    galleryRights:
      "Link only. Choice hotel images are not cached or republished without permission.",
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
    visualId: "lodging-casa-blanca",
    galleryUrl: "https://casablancabedandbreakfast.com/",
    galleryLabel: "Official property website",
    galleryRights:
      "Link only. Property photos are not cached or republished without permission; recheck site integrity before booking.",
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
    visualId: "lodging-fairfield-los-lunas",
    galleryUrl:
      "https://www.marriott.com/en-us/hotels/abqlf-fairfield-inn-and-suites-los-lunas/photos/",
    galleryLabel: "Official Marriott gallery",
    galleryRights:
      "Link only. Marriott images are not cached or republished without permission.",
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

const itineraryVisualPlan = [
  {
    key: "Sun Dec 6|Afternoon|Socorro hotel / San Antonio route check",
    visualId: "travel-workflow",
    expected: [
      "Hotel-room charging and card staging",
      "Two-body dawn kit laid out before sleep",
      "Rental vehicle cargo organized for quiet access",
      "Fuel, snacks, water, and layers staged",
      "Daylight route note for the first sunrise drive",
    ],
  },
  {
    key: "Sun Dec 6|Sunset|North or South Crane Pond",
    visualId: "crane-evening-return",
    expected: [
      "Crane pool roost scout with mountain background",
      "Returning crane family groups",
      "Warm side-light wing shapes",
      "Reflection and ripple tests",
      "Parking, wind, and crowd-position reference frames",
    ],
  },
  {
    key: "Mon Dec 7|Sunrise|Highway 1 crane pools",
    visualId: "crane-roost-dawn",
    expected: [
      "Crane silhouettes before sunrise",
      "Cold breath over shallow water",
      "Takeoff runs and wing tension",
      "Low reflection pairs",
      "Wide roost scene with mountain bands",
    ],
  },
  {
    key: "Mon Dec 7|Mid-morning|Visitor Center, Dabbler Deck, Eagle Scout Deck",
    visualId: "wetland-deck",
    expected: [
      "Ducks and coots in reed reflections",
      "Bright-water exposure practice",
      "Distant cranes layered through habitat",
      "Backlit reeds and water texture",
      "Visitor-center intel translated into deck tests",
    ],
  },
  {
    key: "Mon Dec 7|Sunset|Best active crane pool",
    visualId: "crane-evening-return",
    expected: [
      "Crane landings with feet down",
      "Paired cranes crossing warm light",
      "Family groups returning to water",
      "Mountain-band silhouettes",
      "Locked reflection frame after safe action frames",
    ],
  },
  {
    key: "Tue Dec 8|Sunrise|Flight Deck / Main Pool or strongest roost repeat",
    visualId: "snow-goose-blastoff",
    expected: [
      "Still snow-goose roost before lift-off",
      "First white flock wave rising",
      "Wide mass blast-off over water",
      "Overhead flock texture",
      "Separated goose groups in pastel dawn",
    ],
  },
  {
    key: "Tue Dec 8|Mid-morning|North Loop fields / Farm Deck",
    visualId: "farm-field-feeding",
    expected: [
      "Feeding cranes in winter crop rows",
      "Mixed geese and cranes with mountain context",
      "Raptor crossing a field edge",
      "Flock lift from crop rows",
      "Vehicle-blind frame from a legal pullout",
    ],
  },
  {
    key: "Tue Dec 8|Sunset|South Crane Pond pullouts",
    visualId: "crane-evening-return",
    expected: [
      "Landing posture with space ahead of the bird",
      "Wing shape in warm side light",
      "Paired crane approach",
      "Reflection landing with ripples",
      "Wide roost scale as light fades",
    ],
  },
  {
    key: "Wed Dec 9|Sunrise|Best crane-pool repeat",
    visualId: "crane-roost-dawn",
    expected: [
      "Behavior cue sequence before takeoff",
      "Head and neck focus in low light",
      "Controlled panning burst",
      "Cold-air atmosphere over water",
      "Repeatable flight lane from the learned position",
    ],
  },
  {
    key: "Wed Dec 9|Mid-morning|Willow Deck and Coyote Deck",
    visualId: "wetland-deck",
    expected: [
      "Wetland compression through reeds",
      "Duck portraits with clean reflections",
      "Distant crane layers",
      "Raptor or goose passing behind habitat",
      "Minimal-footprint deck composition",
    ],
  },
  {
    key: "Wed Dec 9|Sunset|Flight Deck if active, otherwise crane pools",
    visualId: "weather-motion-fallback",
    expected: [
      "Safe sharp return-flight frame",
      "Slow flock movement over last color",
      "1/250 panning experiment",
      "1/125 or 1/60 abstract wing blur",
      "Silhouette fallback if light goes flat",
    ],
  },
  {
    key: "Thu Dec 10|Sunrise|South Loop wetland stretch",
    visualId: "weather-motion-fallback",
    expected: [
      "Mist and reeds before full sun",
      "Ducks or geese in muted habitat",
      "Harrier or raptor crossing gray light",
      "Wide weather-and-water scene",
      "Slow careful frame on layered habitat",
    ],
  },
  {
    key: "Thu Dec 10|Mid-morning|Rio Viejo / Bike Trail area",
    visualId: "desert-edge-details",
    expected: [
      "Roadrunner or quail on dry edge habitat",
      "Sparrows and seedheads",
      "Tracks, frost, and dust detail",
      "Cattails and cottonwood texture",
      "Small subject in a wider habitat frame",
    ],
  },
  {
    key: "Thu Dec 10|Sunset|North Loop fields near Farm Deck",
    visualId: "farm-field-feeding",
    expected: [
      "Field staging in warm side light",
      "Feeding cranes against darker backgrounds",
      "Birds crossing over crop rows",
      "Distant raptor or flock movement",
      "Fallback return-to-roost decision frame",
    ],
  },
  {
    key: "Fri Dec 11|Sunrise|Best current roost repeat",
    visualId: "crane-roost-dawn",
    expected: [
      "Final learned sunrise composition",
      "Wind-aligned takeoff lane",
      "Clean background crane action",
      "Wide roost context before departure",
      "One deliberate improvement over earlier mornings",
    ],
  },
  {
    key: "Fri Dec 11|Mid-morning|Visitor Center / central road / strongest deck",
    visualId: "desert-edge-details",
    expected: [
      "Missing subject fill: roadrunner, quail, or raptor",
      "Quiet portrait with clean background",
      "Environmental wide frame",
      "Roadside habitat detail",
      "Final checklist gap frame",
    ],
  },
  {
    key: "Fri Dec 11|Sunset|Highway 1 crane-pool finale",
    visualId: "crane-evening-return",
    expected: [
      "Reflection landing finale",
      "Mountain-band crane silhouette",
      "Wide sky punctuation",
      "Late legal-light return sequence",
      "Closing frame that matches the trip story",
    ],
  },
  {
    key: "Sat Dec 12|Morning|Hotel / optional short loop",
    visualId: "travel-workflow",
    expected: [
      "Card backup verification",
      "Lens cleaning and dust check",
      "Field notes written before memory fades",
      "Packed vehicle with gear out of sight",
      "Optional short-loop scout only if travel margin is real",
    ],
  },
];

const itineraryVisualsByKey = new Map(itineraryVisualPlan.map((item) => [item.key, item]));

function itinerarySlotKey(day, slot) {
  return `${day.date}|${slot.window}|${slot.place}`;
}

function visualPlanForSlot(day, slot) {
  return itineraryVisualsByKey.get(itinerarySlotKey(day, slot)) || {
    visualId: "crane-roost-dawn",
    expected: visualById.get("crane-roost-dawn").examples,
  };
}

const photoWindowVisuals = {
  Sunrise: ["crane-roost-dawn", "snow-goose-blastoff"],
  "Mid-morning": ["farm-field-feeding", "wetland-deck", "desert-edge-details"],
  Sunset: ["crane-evening-return", "weather-motion-fallback"],
};

const gearItems = [
  {
    system: "Sony",
    name: "FE 24-105mm F4 G OSS",
    role: "Wide story, habitat, weather, flock scale",
    specs: {
      aperture: "f/4-f/22",
      filter: "77 mm",
      length: "113.3 mm retracted / 163.2 mm extended",
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
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/78666_original_local_1200x1050_v3_converted.webp",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel24105g/specifications",
    note:
      "Keep this on a second body for blast-off scale, mountain bands, refuge context, and travel scenes.",
  },
  {
    system: "Sony",
    name: "FE 24-70mm F2.8 GM II",
    role: "Travel, people, low light, shallow depth of field",
    specs: {
      aperture: "f/2.8-f/22",
      filter: "82 mm",
      length: "119.9 mm retracted / 158.4 mm extended",
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
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/102462_original_local_1200x1050_v3_converted.webp",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel2470gm2/specifications",
    note:
      "Useful outside the refuge, but the 24-105 is the better Bosque standard zoom because 70-105 mm matters for scale.",
  },
  {
    system: "Sony",
    name: "FE 70-200mm F2.8 GM OSS II",
    role: "Close wildlife, portraits, camp/travel compression, Tanzania second body",
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
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/92317_original_local_1200x1050_v3_converted.webp",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel70200gm2/specifications",
    note:
      "Not the main Bosque bird lens, but it becomes much more important on Tanzania for close mammals and low-light vehicle work.",
  },
  {
    system: "Sony",
    name: "FE 100-400mm F4.5-5.6 GM OSS",
    role: "Lighter handheld flight zoom and close-pass lens",
    specs: {
      aperture: "f/4.5-5.6 to f/32-40",
      filter: "77 mm",
      length: "205 mm retracted / 289.6 mm extended",
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
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/101425_original_local_1200x1050_v3_converted.webp",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel100400gm/specifications",
    note:
      "Excellent when birds are close, light is dim, or the 200-600 is too heavy for fast acquisition.",
  },
  {
    system: "Sony",
    name: "FE 200-600mm F5.6-6.3 G OSS",
    role: "Primary Sony wildlife reach for Bosque and classic Tanzania setup",
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
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/101592_original_local_1200x1050_v3_converted.webp",
    source:
      "https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel200600g/specifications",
    note:
      "A first-class Sony wildlife recommendation for Bosque and Tanzania. It is the cleanest Sony one-body long lens when birds, distant mammals, and vehicle-based field positions matter.",
  },
  {
    system: "Sony",
    name: "FE 400-800mm F6.3-8 G OSS",
    role: "Distant birds, distant cats, and bright-good-light reach",
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
    image: "assets/sony-fe-400-800-g-oss.jpg",
    source: "https://www.sony.co.uk/electronics/camera-lenses/sel400800g/specifications",
    note:
      "A specialized long-reach lens. Excellent for Bosque distance and birds, but too narrow and slow to be the automatic Tanzania primary.",
  },
  {
    system: "Sony",
    name: "SEL14TC 1.4x Teleconverter",
    role: "Good-light reach extension",
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
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/81413_original_local_1200x1050_v3_converted.webp",
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
      length: "281.2 mm retracted / 385.4 mm extended",
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
    image: "https://www.sigma-global.com/lenses/s023_60_600_45_63_product_img01.png",
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
      length: "265.6 mm retracted / 370 mm extended",
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
    image: "https://www.sigma-global.com/lenses/s021_150_600_5_63_product_img01.png",
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
    image: "https://www.sigma-global.com/lenses/s024_500_56_product_img01.png",
    source: "https://www.sigma-global.com/en/lenses/s024_500_56/",
    note:
      "The sharp, lighter Sigma bird option for a high-resolution Sony body when fixed 500mm framing is acceptable. For Bosque, pair it with a second body or a 24-105 because it cannot zoom out when a flock erupts close.",
  },
  {
    system: "Canon",
    name: "RF 24-105mm F4 L IS USM",
    role: "Wide story, habitat, weather, flock scale",
    specs: {
      aperture: "f/4",
      filter: "77 mm",
      length: "107.3 mm retracted / 159.1 mm extended",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/2963C002_rf-24-105mm-f4-l-is-usm_primary2?fmt=webp-alpha&wid=760",
    source:
      "https://www.usa.canon.com/shop/catalog/product/view/id/50549/s/rf24-105mm-f4-l-is-usm/",
    note:
      "The best Canon standard zoom for Bosque because it reaches beyond 70 mm for flock scale and habitat compression.",
  },
  {
    system: "Canon",
    name: "RF 24-70mm F2.8 L IS USM",
    role: "Travel, people, low light, shallow depth of field",
    specs: {
      aperture: "f/2.8",
      filter: "82 mm",
      length: "125.7 mm retracted / 161.4 mm extended",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/3680C002_rf-24-70mm-f2.8-l-is-usm_primary?fmt=webp-alpha&wid=760",
    source: "https://www.usa.canon.com/shop/p/rf24-70mm-f2-8l-is-usm",
    note:
      "A strong travel/event lens, but for the refuge it loses the useful 70-105 mm range.",
  },
  {
    system: "Canon",
    name: "RF 70-200mm F2.8 L IS USM",
    role: "Compact close wildlife and travel telephoto",
    specs: {
      aperture: "f/2.8",
      filter: "77 mm",
      length: "146 mm retracted / 211.9 mm extended",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/3792C002_rf70-200mm-f2.8-l-is-usm_primary?fmt=webp-alpha&wid=760",
    source:
      "https://downloads.canon.com/nw/camera/products/lenses/rf-70-200mm-f2-8-l-is-usm/specs/rf-70-200mm-f2-8-l-is-usm-specifications.pdf",
    note:
      "Compact and useful, but the non-Z version is not the extender-compatible choice.",
  },
  {
    system: "Canon",
    name: "RF 70-200mm F2.8 L IS USM Z",
    role: "Extender-compatible 70-200 for Canon",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/6594C002-RF70-200MM-F2-8-L-IS-USM-Z-White-primary?fmt=webp-alpha&wid=760",
    source:
      "https://s7d1.scene7.com/is/content/canon/RF70-200mm_F2.8_L_IS_UZ_Specspdf",
    note:
      "Choose this over the compact RF 70-200 only if RF extender compatibility matters.",
  },
  {
    system: "Canon",
    name: "RF 100-500mm F4.5-7.1 L IS USM",
    role: "Primary Canon flight and flexible wildlife lens",
    specs: {
      aperture: "f/4.5-7.1 to f/32-54",
      filter: "77 mm",
      length: "207.6 mm retracted / 304.7 mm extended",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/4112C002_rf100-500mm-f45-71-l-is-usm_primary?fmt=webp-alpha&wid=760",
    source: "https://www.usa.canon.com/shop/p/rf100-500mm-f4-5-7-1-l-is-usm",
    note:
      "The Canon default for Bosque and Tanzania because it balances reach, handling, and close-pass flexibility.",
  },
  {
    system: "Canon",
    name: "RF 200-800mm F6.3-9 IS USM",
    role: "Canon distant bird and long-reach wildlife lens",
    specs: {
      aperture: "f/6.3-9 to f/54",
      filter: "95 mm",
      length: "314.1 mm retracted / 410.8 mm extended",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/6263C002_RF200_800mm_primary?fmt=webp-alpha&wid=760",
    source: "https://www.usa.canon.com/shop/p/rf200-800mm-f6-3-9-is-usm",
    note:
      "Excellent for distant Bosque birds and distant wildlife, but slower than the 100-500 and less flexible close to the vehicle.",
  },
  {
    system: "Canon",
    name: "Extender RF 1.4x",
    role: "Good-light reach extension",
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
    image:
      "https://s7d1.scene7.com/is/image/canon/4113C002_extender-rf14x_primary?fmt=webp-alpha&wid=760",
    source: "https://www.usa.canon.com/shop/p/extender-rf1-4x",
    note:
      "Works with compatible RF lenses. On RF 100-500, remember the extender mounts only in the 300-500 mm zoom range.",
  },
  {
    system: "Support",
    name: "Beanbag or window support",
    role: "Vehicle blind stability",
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
    image: "https://www.lenscoat.com/cdn/shop/files/lspjM5b.jpg?v=1735901881",
    source: "https://www.lenscoat.com/collections/featured-products/products/lenscoat-lenssack-pro-jr",
    note:
      "The fastest support for the auto loop. It is quieter and more practical than deploying tripod legs from the car.",
  },
  {
    system: "Support",
    name: "Tripod, gimbal, and monopod",
    role: "Long waits, heavy lenses, decks, and locked compositions",
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
    image: "https://tripodhead.com/images/wh-200-large.jpg",
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
    title: "77 mm shared basics",
    note:
      "77 mm covers Sony 24-105, Sony 70-200, Sony 100-400, Canon RF 24-105, Canon RF 70-200 compact, and Canon RF 100-500. This is the most useful shared CPL/clear filter size.",
  },
  {
    title: "82 mm fast-zoom branch",
    note:
      "82 mm covers Sony 24-70 GM II, Canon RF 24-70, and Canon RF 70-200 Z. Bring it only if that glass is in the bag and you expect travel, landscape, or water-glare work.",
  },
  {
    title: "95 mm and 105 mm caution",
    note:
      "95 mm fits Sony 200-600, Canon RF 200-800, Sigma 150-600, and Sigma 500. 105 mm fits Sony 400-800 and Sigma 60-600. These filters are expensive and cost light, so avoid giant CPLs for dawn birds unless a specific water/reflection use justifies them.",
  },
  {
    title: "Circular polarizer",
    note:
      "Use a CPL after sunrise for glare, water, sky, and wetland reflections. Remove it for predawn, flight, fast action, and any moment where shutter speed or autofocus confidence matters more.",
  },
  {
    title: "Neutral-density filter",
    note:
      "A 3-stop or 6-stop ND belongs in the practice kit for intentional shutter-drag water, flock blur, and panning experiments. It is not a first-light bird-action filter.",
  },
  {
    title: "Protective or clear filter",
    note:
      "Use clear/protective filters selectively for blowing dust, snow, rain, and travel handling. Remove them if flare, ghosting, or contrast loss appears, especially shooting toward low sun.",
  },
  {
    title: "Step-up rings",
    note:
      "A 77-to-82 mm step-up ring can reduce duplicate filters if 82 mm lenses are in the kit. Practice threading rings with gloves before the trip; do not learn this in predawn cold.",
  },
  {
    title: "No-filter default for action",
    note:
      "The default for cranes and geese in flight is hood on, no filter unless weather protection is truly needed. Light, shutter speed, and clean autofocus are the priority.",
  },
];

const filterPracticePlan = [
  {
    title: "CPL glare and reflection drill",
    bring: "77 mm CPL first; 82 mm only if the fast standard or Canon Z lens is traveling.",
    rehearse:
      "At a pond or lake, rotate from maximum glare reduction to no effect and photograph the same water, sky, and reed reflection.",
    avoid:
      "Do not leave the CPL on for bird flight, predawn scenes, or any setup where the lost light forces a weak shutter speed.",
  },
  {
    title: "ND shutter-drag drill",
    bring: "3-stop or 6-stop ND in the filter wallet, ideally in the shared 77 mm size.",
    rehearse:
      "After safe sharp frames, make 1/250, 1/125, and 1/60 panning frames of birds, cyclists, or cars at a local practice site.",
    avoid:
      "Do not use ND for the first crane takeoff or goose blast-off; capture the safe sequence before experimenting.",
  },
  {
    title: "Clear-filter weather drill",
    bring: "Clear/protective filter only for the lenses that will actually face dust, snow, or blowing grit.",
    rehearse:
      "Shoot toward low sun with and without the clear filter, then inspect flare, ghosting, and contrast on a larger screen.",
    avoid:
      "Do not assume a protective filter is harmless. Remove it when flare appears or when every bit of contrast matters.",
  },
  {
    title: "Step-up and cold-hands drill",
    bring: "77-to-82 mm step-up ring, filter pouch, blower, microfiber, and thin liner gloves.",
    rehearse:
      "Thread, unthread, pouch, and clean filters with gloves on, then reset the kit in the dark without dropping anything.",
    avoid:
      "Do not swap giant filters in windblown dust or over open water. If it feels clumsy at home, it will feel worse at Bosque.",
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

function parsePhysicalLength(lengthText) {
  const values = [...String(lengthText || "").matchAll(/(\d+(?:\.\d+)?)\s*mm/g)].map((match) =>
    Number(match[1])
  );
  if (!values.length) return null;

  const primary = values[0];
  const extended = /(short|retracted|extended|full extension|long)/i.test(lengthText)
    ? Math.max(...values)
    : null;
  return {
    primary,
    extended: extended && extended > primary ? extended : null,
  };
}

function parseWeightGrams(weightText) {
  const text = String(weightText || "");
  const range = text.match(/(\d[\d,]*(?:\.\d+)?)\s*-\s*(\d[\d,]*(?:\.\d+)?)\s*g\b/i);
  const toNumber = (value) => Number(value.replace(/,/g, ""));
  if (range) {
    const low = toNumber(range[1]);
    const high = toNumber(range[2]);
    return {
      primary: low,
      total: Math.max(low, high),
      label: `${low.toLocaleString()}-${high.toLocaleString()} g`,
    };
  }

  const values = [...text.matchAll(/(\d[\d,]*(?:\.\d+)?)\s*g\b/gi)].map((match) =>
    toNumber(match[1])
  );
  if (!values.length) return null;

  const total = Math.max(...values);
  return {
    primary: values[0],
    total,
    label: `${total.toLocaleString()} g`,
  };
}

function shortLensLabel(name) {
  return name
    .replace("Sigma ", "")
    .replace(" DG DN OS | Sports", "")
    .replace(" F4.5-5.6", "")
    .replace(" F4.5-7.1", "")
    .replace(" F4.5-6.3", "")
    .replace(" F5-6.3", "")
    .replace(" F5.6-6.3", "")
    .replace(" F6.3-8", "")
    .replace(" F6.3-9", "")
    .replace(" F2.8", "")
    .replace(" F4", "")
    .replace(" L IS USM Z", " Z")
    .replace(" L IS USM", "")
    .replace(" GM OSS II", " GM II")
    .replace(" G OSS", " G")
    .replace("1.4x Teleconverter", "1.4x TC")
    .replace("Extender RF 1.4x", "RF 1.4x TC");
}

function getLensScaleTrackWidth(itemCount) {
  const axisWidth = 78;
  const columnWidth = 78;
  const columnGap = 14;
  return axisWidth + itemCount * columnWidth + Math.max(0, itemCount - 1) * columnGap;
}

const lensLengthReferences = [
  { value: 100, label: "100 mm", note: "small travel zoom length" },
  { value: 200, label: "200 mm", note: "70-200 class reach" },
  { value: 300, label: "300 mm", note: "compact wildlife length" },
  { value: 400, label: "400 mm", note: "large long-lens body" },
];

const lensWeightReferences = [
  { value: 500, label: "500 g", note: "light carry" },
  { value: 1000, label: "1 kg", note: "daypack threshold" },
  { value: 2000, label: "2 kg", note: "long-lens carry" },
  { value: 2500, label: "2.5 kg", note: "heavy handheld" },
];

function renderScaleReferences(references, scaleMax, scaleType) {
  return `<div class="lens-scale-reference-strip" aria-label="${scaleType === "weight" ? "Weight" : "Length"} reference comparisons">
    ${references
      .map((reference) => {
        const pct = Math.max(8, Math.min((reference.value / scaleMax) * 100, 100));
        return `<article class="scale-reference-card ${scaleType === "weight" ? "is-weight" : "is-length"}">
          <span class="scale-reference-visual" style="--reference-size: ${pct.toFixed(2)};"></span>
          <strong>${reference.label}</strong>
          <em>${reference.note}</em>
        </article>`;
      })
      .join("")}
  </div>`;
}

const gearScaleBrands = [
  { label: "Sony", system: "Sony" },
  { label: "Sigma", system: "Sigma E" },
  { label: "Canon", system: "Canon" },
];

const gearScaleCategories = [
  {
    id: "standard",
    title: "105mm And Lower",
    description: "Story, travel, habitat, and wider refuge context lenses.",
  },
  {
    id: "seventy-two-hundred",
    title: "70-200mm Zooms",
    description: "Fast telephoto zooms for close wildlife, travel, and future safari overlap.",
  },
  {
    id: "wildlife-zooms",
    title: "Wildlife Zooms",
    description: "Flexible 100-500mm class lenses for flight, deck, and general wildlife work.",
  },
  {
    id: "super-zooms",
    title: "Super-Zooms And Long Reach",
    description: "Large variable-range and long-reach zooms for distant birds and field work.",
  },
  {
    id: "prime-reach",
    title: "Prime Reach",
    description: "Prime long-lens options where portability and sharp 500mm work matter.",
  },
  {
    id: "teleconverters",
    title: "Teleconverters",
    description: "Reach extenders that should be compared separately from full lenses.",
  },
];

function gearScaleCategoryForItem(item) {
  const name = item.name;
  if (/Teleconverter|Extender/i.test(name)) return "teleconverters";
  if (/24-105|24-70/i.test(name)) return "standard";
  if (/70-200/i.test(name)) return "seventy-two-hundred";
  if (/100-400|100-500/i.test(name)) return "wildlife-zooms";
  if (/500mm F5\\.6/i.test(name)) return "prime-reach";
  return "super-zooms";
}

function gearScaleOpticalItems(selectedSystems) {
  return gearItems.filter((item) => item.system !== "Support" && selectedSystems.has(item.system));
}

function renderGearScaleControls(selectedSystems) {
  return `<section class="gear-scale-controls panel" aria-label="Gear scale brand filters">
    <div>
      <p class="eyebrow">Scale filters</p>
      <h3>Compare by brand, then by category.</h3>
      <p class="card-copy">These checkboxes update both the length and weight scales. Categories keep each chart readable without one long horizontal scroll.</p>
    </div>
    <div class="gear-scale-checkboxes">
      ${gearScaleBrands
        .map(
          (brand) => `<label class="brand-checkbox">
            <input type="checkbox" data-scale-brand="${brand.system}" ${selectedSystems.has(brand.system) ? "checked" : ""} />
            <span>${brand.label}</span>
          </label>`
        )
        .join("")}
    </div>
  </section>`;
}

function renderScaleCategoryCharts({ items, scaleMax, ticks, scaleType, chartClass, ariaLabel, references, renderItem }) {
  const categories = gearScaleCategories
    .map((category) => ({
      ...category,
      items: items.filter((item) => item.category === category.id),
    }))
    .filter((category) => category.items.length);

  if (!categories.length) {
    return `<div class="gear-scale-empty">Select at least one brand to compare lenses.</div>`;
  }

  return `<div class="gear-scale-category-stack">
    ${categories
      .map((category) => {
        const chartItems = category.items;
        return `<section class="gear-scale-category" data-scale-category="${category.id}">
          <div class="gear-scale-category-header">
            <h3>${category.title}</h3>
            <p>${category.description}</p>
          </div>
          ${renderScaleReferences(references, scaleMax, scaleType)}
          <div class="lens-scale-chart ${chartClass || ""}" style="--lens-scale-track-width: ${getLensScaleTrackWidth(chartItems.length)}px;" role="img" aria-label="${ariaLabel}: ${category.title}">
            <div class="lens-scale-grid" aria-hidden="true">
              ${ticks
                .map((tick) => {
                  const label = scaleType === "weight" ? `${tick.toLocaleString()} g` : `${tick} mm`;
                  return `<span class="lens-scale-tick" style="--tick: ${((tick / scaleMax) * 100).toFixed(2)};"><em>${label}</em></span>`;
                })
                .join("")}
            </div>
            <div class="lens-scale-bars">
              ${chartItems.map(renderItem).join("")}
            </div>
          </div>
        </section>`;
      })
      .join("")}
  </div>`;
}

function renderLensLengthScale(selectedSystems = new Set(gearScaleBrands.map((brand) => brand.system))) {
  const scaleMax = 430;
  const ticks = [400, 350, 300, 200, 100, 0];
  const items = gearScaleOpticalItems(selectedSystems)
    .map((item) => {
      const length = parsePhysicalLength(item.specs.length);
      if (!length) return null;
      const type = item.name.includes("Teleconverter") || item.name.includes("Extender") ? "teleconverter" : "lens";
      return {
        type,
        category: gearScaleCategoryForItem(item),
        system: item.system,
        name: item.name,
        label: shortLensLabel(item.name),
        primaryMm: length.primary,
        extendedMm: length.extended,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aMax = a.extendedMm || a.primaryMm;
      const bMax = b.extendedMm || b.primaryMm;
      return bMax - aMax;
    });

  const renderItem = (item) => {
    const primaryPercent = Math.min((item.primaryMm / scaleMax) * 100, 100);
    const extensionPercent = item.extendedMm ? ((item.extendedMm - item.primaryMm) / scaleMax) * 100 : 0;
    const totalMm = item.extendedMm || item.primaryMm;
    const ariaLength = item.extendedMm
      ? `${item.primaryMm} millimeters retracted, ${item.extendedMm} millimeters extended`
      : `${item.primaryMm} millimeters`;
    return `<article class="lens-scale-column lens-scale-${item.system.toLowerCase().replace(/\s+/g, "-")} ${item.type === "teleconverter" ? "is-teleconverter" : ""}" data-scale="length" data-kind="${item.type}" data-system="${item.system}" data-primary-mm="${item.primaryMm}" data-total-mm="${totalMm}"${item.extendedMm ? ` data-extended-mm="${item.extendedMm}"` : ""} aria-label="${item.name}: ${ariaLength}">
      <div class="lens-scale-bar-stack" style="--bar-height: ${primaryPercent.toFixed(2)}; --extension-height: ${extensionPercent.toFixed(2)};">
        ${item.extendedMm ? `<span class="lens-scale-extension" title="${item.name} extended length: ${item.extendedMm} mm"></span>` : ""}
        <span class="lens-scale-bar" title="${item.name}: ${ariaLength}"></span>
      </div>
      <div class="lens-scale-label">
        <strong>${item.label}</strong>
        <span>${item.primaryMm}${item.extendedMm ? `-${item.extendedMm}` : ""} mm</span>
      </div>
    </article>`;
  };

  return `<section class="lens-scale-section" aria-labelledby="lens-scale-title">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Physical scale</p>
        <h2 id="lens-scale-title">Lens Length Scale</h2>
      </div>
      <p>Published compact length and sourced full-extension length in millimeters, grouped by useful lens category. Striped caps mark extending zoom barrels.</p>
    </div>
    <div class="lens-scale-legend" aria-label="Lens scale legend">
      <span><i class="legend-chip sony"></i>Sony</span>
      <span><i class="legend-chip sigma"></i>Sigma</span>
      <span><i class="legend-chip canon"></i>Canon</span>
      <span><i class="legend-chip extended"></i>Full-extension length</span>
    </div>
    ${renderScaleCategoryCharts({
      items,
      scaleMax,
      ticks,
      scaleType: "length",
      references: lensLengthReferences,
      ariaLabel: "Vertical bar chart comparing physical lens length in millimeters",
      renderItem,
    })}
    <p class="muted lens-scale-note">Each category is sorted by longest known physical length. Solid bars show compact listed length; striped caps show sourced full-extension measurements.</p>
  </section>`;
}

function renderLensWeightScale(selectedSystems = new Set(gearScaleBrands.map((brand) => brand.system))) {
  const scaleMax = 2600;
  const ticks = [2500, 2000, 1500, 1000, 500, 0];
  const items = gearScaleOpticalItems(selectedSystems)
    .map((item) => {
      const weight = parseWeightGrams(item.specs.weight);
      if (!weight) return null;
      const type = item.name.includes("Teleconverter") || item.name.includes("Extender") ? "teleconverter" : "lens";
      return {
        type,
        category: gearScaleCategoryForItem(item),
        system: item.system,
        name: item.name,
        label: shortLensLabel(item.name),
        weightG: weight.total,
        weightLabel: weight.label,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.weightG - a.weightG);

  const renderItem = (item) => {
    const barPercent = Math.min((item.weightG / scaleMax) * 100, 100);
    return `<article class="lens-scale-column lens-scale-${item.system.toLowerCase().replace(/\s+/g, "-")} ${item.type === "teleconverter" ? "is-teleconverter" : ""}" data-scale="weight" data-kind="${item.type}" data-system="${item.system}" data-weight-g="${item.weightG}" aria-label="${item.name}: ${item.weightLabel}">
      <div class="lens-scale-bar-stack" style="--bar-height: ${barPercent.toFixed(2)}; --extension-height: 0;">
        <span class="lens-scale-bar" title="${item.name}: ${item.weightLabel}"></span>
      </div>
      <div class="lens-scale-label">
        <strong>${item.label}</strong>
        <span>${item.weightLabel}</span>
      </div>
    </article>`;
  };

  return `<section class="lens-scale-section weight-scale-section" aria-labelledby="weight-scale-title">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Carry weight</p>
        <h2 id="weight-scale-title">Lens Weight Scale</h2>
      </div>
      <p>Listed lens and teleconverter weights in grams, grouped by the same categories as the length scale.</p>
    </div>
    <div class="lens-scale-legend" aria-label="Lens weight scale legend">
      <span><i class="legend-chip sony"></i>Sony</span>
      <span><i class="legend-chip sigma"></i>Sigma</span>
      <span><i class="legend-chip canon"></i>Canon</span>
    </div>
    ${renderScaleCategoryCharts({
      items,
      scaleMax,
      ticks,
      scaleType: "weight",
      chartClass: "weight-scale-chart",
      references: lensWeightReferences,
      ariaLabel: "Vertical bar chart comparing lens and teleconverter weight in grams",
      renderItem,
    })}
    <p class="muted lens-scale-note">Each category is sorted by listed weight. Where a manufacturer lists a small weight range, the chart uses the higher listed value and keeps the range in the label.</p>
  </section>`;
}

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

function visualIdForMedia(item) {
  const sourceText = `${item.source} ${item.title} ${item.kind}`;
  if (/crane|Evie|LifePixel/i.test(sourceText)) return "crane-roost-dawn";
  if (/goose|Cornell|BirdWatching|Extreme/i.test(sourceText)) return "snow-goose-blastoff";
  if (/field|Chasing|NANPA|Location/i.test(sourceText)) return "farm-field-feeding";
  if (/settings|Technique|Wilderness/i.test(sourceText)) return "filter-practice";
  if (/Hogan|Luminous|Lens/i.test(sourceText)) return "weather-motion-fallback";
  return "wetland-deck";
}

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
    visualId: "practice-camera-setup",
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
    visualId: "practice-exposure-modes",
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
    visualId: "practice-shutter-speed",
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
    visualId: "practice-handholding",
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
    visualId: "practice-support",
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
    visualId: "practice-white-birds-exposure",
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
    visualId: "practice-behavior-prediction",
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
    visualId: "practice-cold-dust-workflow",
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
    visualId: "practice-readiness-checklist",
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
    sourceLabel: "Cornell",
    visualId: "snow-goose-blastoff-03",
    description: [
      "Use this article as the editorial benchmark for how Bosque feels when bird density, sound, light, and photographer anticipation all stack together. It is especially useful for understanding why the refuge rewards a wide-to-long sequence instead of only tight bird portraits.",
      "The practical lesson is pacing: arrive early, start wider than instinct during goose lift-off, and study how behavior and light create the photograph before lens reach does. Article photos remain inspiration-only unless permission or a compatible license is recorded.",
    ],
    note:
      "Inspiration-only photos and excellent field examples. Do not reuse images without permission.",
  },
  {
    title: "USFWS Bosque media library",
    url: "https://www.fws.gov/media-library?search=Bosque%20del%20Apache",
    sourceLabel: "USFWS",
    visualId: "crane-roost-dawn-05",
    description: [
      "This is the first place to look when the project needs publishable refuge imagery because many U.S. Fish and Wildlife Service images are public domain or agency-credit material. It is also the safest reference source for habitat, roads, visitor context, and actual refuge species.",
      "Use the library to separate legally reusable visuals from inspiration-only browsing. Before publication, every selected image still needs its exact source URL, credit, and rights note recorded in the visual asset manifest.",
    ],
    note:
      "Best place to look for public-domain or agency-credit refuge images.",
  },
  {
    title: "eBird Bosque del Apache illustrated checklist",
    url: "https://ebird.org/hotspot/L130166",
    sourceLabel: "eBird",
    visualId: "farm-field-feeding-02",
    description: [
      "The hotspot checklist helps translate the photography plan into likely subjects rather than generic bird expectations. It is useful before each field window when deciding whether to prioritize cranes, geese, ducks, raptors, roadrunners, quail, sparrows, or habitat details.",
      "Treat contributor photos as inspiration and identification help, not as site assets. The main value is pattern recognition: what species appear, when they are reported, and which subjects deserve practice before the trip.",
    ],
    note:
      "Use for subject inspiration and seasonal expectations; image licensing varies by contributor.",
  },
  {
    title: "Flickr search: Bosque del Apache cranes",
    url: "https://www.flickr.com/search/?text=Bosque%20del%20Apache%20sandhill%20cranes",
    sourceLabel: "Flickr",
    visualId: "crane-evening-return-01",
    description: [
      "Flickr is useful for composition study because many photographers post variations on the same crane-pool themes: landing posture, reflection, side light, mountain bands, and winter water. Looking across many examples helps reveal which backgrounds repeat and which angles become cluttered.",
      "Reuse only a specific image with a compatible Creative Commons license or explicit permission, and document that decision before publication. Otherwise, keep the value at the study level: framing, timing, and field-position clues.",
    ],
    note:
      "Inspiration only unless a specific image has a compatible Creative Commons license.",
  },
  {
    title: "500px search: Bosque del Apache",
    url: "https://500px.com/search?q=Bosque%20del%20Apache&type=photos",
    sourceLabel: "500px",
    visualId: "weather-motion-fallback-03",
    description: [
      "500px is best treated as a composition and mood reference, especially for polished interpretations of Bosque weather, motion, silhouettes, and graphic flock shapes. It can help identify what a finished image might feel like after the logistical plan is already sound.",
      "The licensing posture should stay conservative: browse, study, and link out, but do not cache or republish portfolio work unless usage rights are explicitly secured. Use the generated planning frame here as a rights-safe visual stand-in.",
    ],
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

function sourceInitials(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function standaloneFrameIdsFor(parentId) {
  const visual = visualById.get(parentId);
  if (!visual) return [];
  if (visual.parentId) return [visual.id];
  const frames = [...standaloneGalleryVisuals, ...practiceStandaloneVisuals].filter(
    (item) => item.parentId === parentId
  );
  return frames.length ? frames.map((item) => item.id) : [parentId];
}

function renderStandaloneFrameCard(id, options = {}) {
  const visual = visualById.get(id);
  const lesson = visualLessons[id];
  if (!visual || !lesson) return "";
  const label = options.label || visual.title;
  const classes = ["visual-frame-card", options.compact ? "is-compact" : "", options.className || ""]
    .filter(Boolean)
    .join(" ");
  return `<button class="${classes}" type="button" data-visual-id="${visual.id}" aria-label="Open full image: ${visual.title}">
    <img src="${visual.src}" alt="${visual.alt}" loading="${options.loading || "lazy"}" decoding="async" />
    <span class="visual-frame-copy">
      <b>${label}</b>
      ${options.hideDescription ? "" : `<span>${visual.description || visual.caption}</span>`}
      <em>${lesson.focalLength}; ${lesson.aperture}; ${lesson.shutterSpeed}</em>
      ${options.showLocation ? `<small>${lesson.supposedLocation}</small>` : ""}
    </span>
  </button>`;
}

function renderStandaloneFrameGrid(parentId, options = {}) {
  const ids = standaloneFrameIdsFor(parentId).slice(0, options.limit || 5);
  const labels = options.labels || [];
  const classes = ["visual-frame-grid", options.className || "", options.compact ? "is-compact" : ""]
    .filter(Boolean)
    .join(" ");
  return `<div class="${classes}" aria-label="${options.ariaLabel || "Standalone generated image examples"}">
    ${ids
      .map((id, index) =>
        renderStandaloneFrameCard(id, {
          label: labels[index],
          compact: options.compact,
          hideDescription: options.hideDescription,
          showLocation: options.showLocation,
          loading: options.loading,
        })
      )
      .join("")}
  </div>`;
}

function renderGeneratedPreview(id, options = {}) {
  const visual = visualById.get(id) || generatedVisuals[0];
  const classes = ["planning-preview", options.className || ""].filter(Boolean).join(" ");
  const caption = options.caption || visual.caption;
  const label = options.label || "Generated planning preview";
  return `<figure class="${classes}">
    <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="${options.loading || "lazy"}" decoding="async" />
    <figcaption>
      <span>${label}</span>
      ${caption}
    </figcaption>
  </figure>`;
}

function renderVisualLightbox(titleId = "visual-lightbox-title") {
  return `<div class="gallery-lightbox" hidden role="dialog" aria-modal="true" aria-labelledby="${titleId}">
    <div class="gallery-lightbox-backdrop" data-gallery-close></div>
    <article class="gallery-lightbox-panel">
      <div class="gallery-lightbox-image-wrap">
        <img class="gallery-lightbox-image" alt="" width="1536" height="1024" />
      </div>
      <aside class="gallery-lightbox-copy">
        <button class="gallery-lightbox-close" type="button" data-gallery-close aria-label="Close full image">Close</button>
        <p class="eyebrow">Generated teaching image</p>
        <h3 class="gallery-lightbox-title" id="${titleId}"></h3>
        <p class="gallery-lightbox-note"></p>
        <dl class="gallery-tech-list">
          <div><dt>Scenario / location</dt><dd data-gallery-field="supposedLocation"></dd></div>
          <div><dt>Lens</dt><dd data-gallery-field="lens"></dd></div>
          <div><dt>Focal length</dt><dd data-gallery-field="focalLength"></dd></div>
          <div><dt>Aperture</dt><dd data-gallery-field="aperture"></dd></div>
          <div><dt>Shutter speed</dt><dd data-gallery-field="shutterSpeed"></dd></div>
        </dl>
        <section class="gallery-technique">
          <h4>Technique</h4>
          <p data-gallery-field="technique"></p>
        </section>
        <a class="button-link gallery-open-original" href="#" target="_blank" rel="noreferrer">Open full image</a>
      </aside>
    </article>
  </div>`;
}

function renderVisualTechMeta(id, options = {}) {
  const lesson = visualLessons[id];
  if (!lesson) return "";
  const classes = ["visual-tech-meta", options.compact ? "is-compact" : ""].filter(Boolean).join(" ");
  const fields = [
    ["Lens", lesson.lens],
    ["Focal length", lesson.focalLength],
    ["Aperture", lesson.aperture],
    ["Shutter speed", lesson.shutterSpeed],
    ["Technique", lesson.technique],
  ];
  return `<dl class="${classes}">
    ${fields
      .map(
        ([label, value]) => `<div class="${label === "Technique" ? "is-technique" : ""}">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>`
      )
      .join("")}
  </dl>`;
}

function renderTeachingPreview(id, options = {}) {
  const visual = visualById.get(id) || generatedVisuals[0];
  const classes = ["planning-preview", "teaching-preview", options.className || ""]
    .filter(Boolean)
    .join(" ");
  const caption = options.caption || visual.caption;
  const label = options.label || "Generated teaching preview";
  return `<figure class="${classes}">
    <button class="visual-expand-button" type="button" data-visual-id="${id}" aria-label="Open full image: ${visual.title}">
      <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="${options.loading || "lazy"}" decoding="async" />
      <span class="visual-expand-cue">Open full image</span>
    </button>
    <figcaption>
      <span>${label}</span>
      ${caption}
      ${renderVisualTechMeta(id, { compact: options.compact })}
    </figcaption>
  </figure>`;
}

function renderLodgingPreview(item) {
  const visual = visualById.get(item.visualId);
  if (!visual) {
    return `<a class="hotel-photo hotel-photo-link" href="${item.galleryUrl}" target="_blank" rel="noreferrer">
      ${renderLinkOnlyVisual(item.name, item.galleryLabel, "Official gallery link")}
    </a>`;
  }

  return `<figure class="hotel-photo hotel-generated-photo">
    <a class="visual-expand-button hotel-preview-button" href="${visual.src}" target="_blank" rel="noreferrer" data-visual-id="${visual.id}" aria-label="Open generated lodging preview: ${visual.title}">
      <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="lazy" decoding="async" />
      <span class="visual-expand-cue">Open full image</span>
    </a>
    <figcaption>
      <span>Reference-based generated preview</span>
      ${visual.caption}
    </figcaption>
  </figure>`;
}

function renderAirportBadge(item) {
  return `<div class="airport-badge" aria-label="${item.airport} airport planning marker">
    <span>${item.airport}</span>
    <em>${item.airport === "ABQ" ? "Arrival and rental car" : "Bay Area option"}</em>
  </div>`;
}

function renderAirportRouteMap() {
  const visual = visualById.get("travel-airport-route-map");
  const labels = [
    { code: "SFO", name: "San Francisco", style: "--x: 7%; --y: 30%;" },
    { code: "OAK", name: "Oakland", style: "--x: 16%; --y: 18%;" },
    { code: "SJC", name: "San Jose", style: "--x: 23%; --y: 42%;" },
    { code: "ABQ", name: "Albuquerque", style: "--x: 72%; --y: 35%;" },
    { code: "Socorro", name: "Hotel base", style: "--x: 62%; --y: 62%;" },
    { code: "Bosque", name: "Refuge", style: "--x: 78%; --y: 84%;" },
  ];
  return `<figure class="planning-preview travel-route-visual">
    <button class="visual-expand-button travel-route-button" type="button" data-visual-id="${visual.id}" aria-label="Open full airport route illustration">
      <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="eager" decoding="async" />
      ${labels
        .map(
          (label) => `<span class="airport-map-label" style="${label.style}">
            <b>${label.code}</b>
            <small>${label.name}</small>
          </span>`
        )
        .join("")}
      <span class="visual-expand-cue">Open full image</span>
    </button>
    <figcaption>
      <span>Generated travel illustration</span>
      ${visual.caption} SFO, OAK, SJC, ABQ, Socorro, and Bosque labels are site-rendered for accuracy.
    </figcaption>
  </figure>`;
}

function renderVisualMini(id, note = "Generated planning preview") {
  const visual = visualById.get(id) || generatedVisuals[0];
  return `<div class="visual-mini">
    <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="lazy" decoding="async" />
    <span>${note}</span>
  </div>`;
}

function renderLinkOnlyVisual(title, label, note = "Link only") {
  return `<div class="link-only-visual" aria-label="${title}">
    <span>${sourceInitials(label || title)}</span>
    <strong>${label || title}</strong>
    <em>${note}</em>
  </div>`;
}

function renderGearPhoto(item) {
  if (!item.image) {
    return `<a class="gear-photo gear-photo-link" href="${item.photo}" target="_blank" rel="noreferrer">
      ${renderLinkOnlyVisual(item.name, item.photoLabel, "Product photo link")}
    </a>`;
  }

  return `<a class="gear-photo gear-photo-image" href="${item.photo}" target="_blank" rel="noreferrer" aria-label="Open official product page for ${item.name}">
    <img src="${item.image}" alt="${item.name}" width="760" height="520" loading="lazy" decoding="async" onerror="this.closest('.gear-photo-image')?.classList.add('is-broken')" />
    <span class="gear-photo-source">${item.photoLabel}</span>
    <div class="gear-photo-fallback">
      ${renderLinkOnlyVisual(item.name, item.photoLabel, "Product photo link")}
    </div>
  </a>`;
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

function renderGallery() {
  const root = document.querySelector("#gallery");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Standalone generated planning frames</p>
        <h2>Gallery</h2>
      </div>
      <p>Forty-five standalone HD planning frames, separated from the original generated contact sheets. Open any frame for the full image, field location, camera settings, and technique notes.</p>
    </div>
    <div class="standalone-gallery-grid" aria-label="Generated Bosque standalone planning photos">
      ${standaloneGalleryVisuals
        .map((visual, index) => {
          const lesson = visualLessons[visual.id];
          return `<button class="standalone-gallery-card" type="button" data-visual-id="${visual.id}" aria-label="Open ${visual.title}">
            <img src="${visual.src}" alt="${visual.alt}" loading="${index < 8 ? "eager" : "lazy"}" decoding="async" />
            <span class="standalone-gallery-copy">
              <b>${visual.title}</b>
              <span>${visual.description}</span>
              <em>${lesson.focalLength}; ${lesson.aperture}; ${lesson.shutterSpeed}</em>
              <small>${lesson.supposedLocation}</small>
              <small><strong>Technique:</strong> ${lesson.technique}</small>
            </span>
          </button>`;
        })
        .join("")}
    </div>
    ${renderVisualLightbox("gallery-lightbox-title")}`;
  setupVisualLightbox(root);
}

function setupVisualLightbox(root) {
  const overlay = root.querySelector(".gallery-lightbox");
  if (!overlay) return;

  root.querySelectorAll("[data-visual-id], [data-gallery-id]").forEach((trigger) => {
    if (trigger.dataset.lightboxBound === "true") return;
    trigger.dataset.lightboxBound = "true";
    trigger.addEventListener("click", (event) => {
      const visualId = trigger.getAttribute("data-visual-id") || trigger.getAttribute("data-gallery-id");
      if (visualId && openVisualLightbox(overlay, visualId)) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });

  const close = () => {
    overlay.hidden = true;
    document.body.classList.remove("gallery-lock");
  };

  if (overlay.dataset.lightboxOverlayBound !== "true") {
    overlay.dataset.lightboxOverlayBound = "true";
    overlay.querySelectorAll("[data-gallery-close]").forEach((button) => {
      button.addEventListener("click", close);
    });
    overlay.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }
}

function openVisualLightbox(overlay, id) {
  const visual = visualById.get(id);
  const lesson = visualLessons[id];
  if (!overlay || !visual || !lesson) return false;

  const image = overlay.querySelector(".gallery-lightbox-image");
  const title = overlay.querySelector(".gallery-lightbox-title");
  const note = overlay.querySelector(".gallery-lightbox-note");
  const originalLink = overlay.querySelector(".gallery-open-original");
  const fields = {
    supposedLocation: overlay.querySelector('[data-gallery-field="supposedLocation"]'),
    lens: overlay.querySelector('[data-gallery-field="lens"]'),
    focalLength: overlay.querySelector('[data-gallery-field="focalLength"]'),
    aperture: overlay.querySelector('[data-gallery-field="aperture"]'),
    shutterSpeed: overlay.querySelector('[data-gallery-field="shutterSpeed"]'),
    technique: overlay.querySelector('[data-gallery-field="technique"]'),
  };

  image.src = visual.src;
  image.alt = visual.alt;
  title.textContent = visual.title;
  note.textContent =
    visual.category === "Travel"
      ? `${visual.caption} Use this as a planning and teaching reference, not proof of actual hotel or property conditions.`
      : `${visual.caption} Use this as inspiration and a practice target, not proof of actual December 2026 field conditions.`;
  Object.entries(fields).forEach(([key, node]) => {
    if (node) node.textContent = lesson[key];
  });
  originalLink.href = visual.src;
  overlay.hidden = false;
  document.body.classList.add("gallery-lock");
  overlay.querySelector(".gallery-lightbox-close")?.focus();
  return true;
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
  const labelMarkers = [];
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

  const getTooltipOptions = (place) => {
    const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    return {
      permanent: true,
      direction:
        isCompactMap && place.labelDirectionMobile
          ? place.labelDirectionMobile
          : place.labelDirection || "right",
      offset: isCompactMap && place.labelOffsetMobile ? place.labelOffsetMobile : place.labelOffset || [10, 0],
      className: "map-pin-label",
      opacity: 1,
      interactive: false,
    };
  };

  const getFitBoundsOptions = () => {
    if (!options.showPinLabels) return { padding: [28, 28] };
    const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    const horizontalPadding = isCompactMap ? 88 : 172;
    const verticalPadding = isCompactMap ? 38 : 44;
    return {
      paddingTopLeft: [horizontalPadding, verticalPadding],
      paddingBottomRight: [horizontalPadding, verticalPadding],
    };
  };

  const getTooltipText = (place) => {
    const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    return isCompactMap && place.labelShortMobile ? place.labelShortMobile : place.name;
  };

  const bindPinLabel = (marker, place) => {
    marker.unbindTooltip();
    marker.bindTooltip(getTooltipText(place), getTooltipOptions(place));
  };

  markerPlaces.forEach((place) => {
    const marker = LRef.marker([place.lat, place.lon]).addTo(map);
    marker.bindPopup(`<b>${place.name}</b><br>${place.note}<br><small>${place.confidence || place.drive || ""}</small>`);
    if (options.showPinLabels) {
      bindPinLabel(marker, place);
      labelMarkers.push({ marker, place });
    }
    markers.set(place.name, marker);
  });

  const bounds = LRef.latLngBounds(markerPlaces.map((place) => [place.lat, place.lon]));
  map.fitBounds(bounds, getFitBoundsOptions());

  if (options.showPinLabels) {
    let wasCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    let resizeTimer;
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          map.invalidateSize();
          const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
          if (isCompactMap !== wasCompactMap) {
            map.fitBounds(bounds, getFitBoundsOptions());
            labelMarkers.forEach(({ marker, place }) => bindPinLabel(marker, place));
            wasCompactMap = isCompactMap;
          }
        }, 160);
      },
      { passive: true }
    );
  }

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
    showPinLabels: true,
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
    <div class="timeline"></div>
    ${renderVisualLightbox("itinerary-lightbox-title")}`;

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
      const visualPlan = visualPlanForSlot(day, slot);
      timeline.append(
        el(
          "article",
          "slot-card itinerary-slot-card",
          `<div class="slot-copy">
            <div class="slot-kicker">
              <span class="slot-time">${slot.window}</span>
              <span>${slot.time}</span>
            </div>
            <h3>${slot.place}</h3>
            <p class="card-copy">${slot.goal}</p>
            <div class="slot-detail-grid">
              <p><b>Gear</b>${slot.gear}</p>
              <p><b>Position</b>${slot.position}</p>
            </div>
            <div class="slot-photo-types">
              <h4>Expected photo types</h4>
              <ol class="expected-list">
                ${visualPlan.expected.map((item) => `<li>${item}</li>`).join("")}
              </ol>
            </div>
          </div>
          <div class="slot-visual">
            ${renderStandaloneFrameGrid(visualPlan.visualId, {
              labels: visualPlan.expected,
              className: "itinerary-frame-grid",
              compact: true,
              hideDescription: true,
              showLocation: false,
              loading: "lazy",
              ariaLabel: `${slot.place} standalone expected photo examples`,
            })}
          </div>`
        )
      );
    });
    setupVisualLightbox(root);
  }

  drawDay(tripDays[0]);
  setupVisualLightbox(root);
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
    <div id="window-results"></div>
    ${renderVisualLightbox("windows-lightbox-title")}`;
  const result = root.querySelector("#window-results");
  const draw = (windowName) => {
    const matches = tripDays.flatMap((day) =>
      day.slots
        .filter((slot) => slot.window === windowName)
        .map((slot) => ({ ...slot, date: day.date, label: day.label, theme: day.theme }))
    );
    result.innerHTML = `
      <section class="window-visual-grid standalone-window-grid" aria-label="${windowName} standalone generated examples">
        ${(photoWindowVisuals[windowName] || [])
          .flatMap((visualId) => standaloneFrameIdsFor(visualId))
          .map((visualId) =>
            renderStandaloneFrameCard(visualId, {
              compact: true,
              showLocation: true,
              hideDescription: false,
            })
          )
          .join("")}
      </section>
      <div class="grid-2">
        ${matches
          .map((slot) => {
            const day = tripDays.find((item) => item.date === slot.date);
            const visualPlan = visualPlanForSlot(day, slot);
            const leadFrame = standaloneFrameIdsFor(visualPlan.visualId)[0];
            return `<article class="gear-card window-card">
          ${renderStandaloneFrameCard(leadFrame, {
            compact: true,
            hideDescription: true,
            className: "window-card-frame",
          })}
          <p class="eyebrow">${slot.date} / ${slot.label}</p>
          <h3>${slot.place}</h3>
          <p class="card-copy">${slot.goal}</p>
          <p><b>Field note:</b> ${slot.position}</p>
          <div class="tag-row"><span class="tag ${windowName === "Sunrise" ? "sunrise" : windowName === "Sunset" ? "sunset" : ""}">${windowName}</span><span class="tag">${slot.theme}</span></div>
        </article>`;
          })
          .join("")}
      </div>`;
    setupVisualLightbox(root);
  };
  root.querySelectorAll(".window-tab").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll(".window-tab").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      draw(button.dataset.window);
    });
  });
  draw("Sunrise");
  setupVisualLightbox(root);
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
    <section class="panel media-decision airport-route-section">
      <div>
        <p class="eyebrow">Airport default</p>
        <h3>Fly Bay Area to ABQ, then drive south.</h3>
        <p class="card-copy">Albuquerque International Sunport is the practical airport. From ABQ, rent a car, take I-25 south toward Socorro, then follow the official FWS route via exit 139, US 380, and NM-1 to the refuge visitor center.</p>
      </div>
      ${renderAirportRouteMap()}
    </section>
    <div class="grid-4 travel-grid">
      ${flightOptions
        .map(
          (item) => `<article class="travel-card">
            ${renderAirportBadge(item)}
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
    <section class="panel rental-car-section">
      ${renderTeachingPreview("travel-rental-car-cargo", {
        className: "rental-car-preview",
        label: "Generated rental car illustration",
        loading: "lazy",
      })}
      <div class="rental-car-copy">
        <p class="eyebrow">Rental car setup</p>
        <h3>Book for cargo access, not status.</h3>
        <p class="card-copy">The approved rental car illustration shows the practical decision: long lens protected, support reachable, water and layers visible, route notes handy, and valuables hidden when parked. Use it as a packing checklist before choosing the actual class at ABQ.</p>
        <div class="rental-car-guidance-list">
          ${rentalCarGuidance
            .map(
              (item) => `<article class="travel-card">
                <h4>${item.title}</h4>
                <p class="card-copy">${item.note}</p>
              </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Hotels and commute</p>
        <h2>Where to stay</h2>
      </div>
      <p>Socorro remains the photography-first base. The hotel-specific map stays here, separate from the main photography map.</p>
    </div>
    <section class="panel rights-callout">
      <div>
        <p class="eyebrow">Hotel photo policy</p>
        <h3>Reference-based previews here; real hotel photos stay linked.</h3>
        <p class="card-copy">The lodging cards use generated previews grounded in checked hotel/property photo references, so the travel section has visual context without republishing copyrighted hotel imagery. Use the official gallery or property link on each card to inspect the literal rooms, exterior, and amenities before booking.</p>
      </div>
      ${renderStandaloneFrameCard("travel-workflow-01", {
        className: "callout-preview",
        compact: true,
        showLocation: true,
      })}
    </section>
    <div class="grid-2">
      ${lodgingLocations
        .map((item) => {
          return `<article class="lodging-card" data-rank="${item.rank}">
            <div class="rank-line">
              <span class="rank">${item.rank}</span>
              ${item.badge ? `<span class="meta-pill">${item.badge}</span>` : ""}
            </div>
            ${renderLodgingPreview(item)}
            <h3>${item.name}</h3>
            <div class="lodging-meta">
              <span class="meta-pill">${item.area}</span>
              <span class="meta-pill">${item.drive}</span>
              <span class="meta-pill">${item.price}</span>
            </div>
            <p><b>${item.best}</b></p>
            <p class="card-copy">${item.note}</p>
            <p class="muted">${item.watch}</p>
            <p class="muted">${item.galleryRights}</p>
            ${externalLink(item.galleryUrl, item.galleryLabel)}
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
    </section>
    ${renderVisualLightbox("travel-lightbox-title")}`;
  setupVisualLightbox(root);
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
    </div>
    <div class="gear-scale-area">
      ${renderGearScaleControls(new Set(gearScaleBrands.map((brand) => brand.system)))}
      <div class="lens-length-scale-host"></div>
      <div class="lens-weight-scale-host"></div>
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
          return `<article class="gear-detail-card">
            ${renderGearPhoto(item)}
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

  const scaleState = new Set(gearScaleBrands.map((brand) => brand.system));
  const lengthHost = root.querySelector(".lens-length-scale-host");
  const weightHost = root.querySelector(".lens-weight-scale-host");
  const drawScales = () => {
    lengthHost.innerHTML = renderLensLengthScale(scaleState);
    weightHost.innerHTML = renderLensWeightScale(scaleState);
  };
  root.querySelectorAll("[data-scale-brand]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        scaleState.add(checkbox.dataset.scaleBrand);
      } else {
        scaleState.delete(checkbox.dataset.scaleBrand);
      }
      drawScales();
    });
  });
  drawScales();
  draw("Sony");
}

function renderPractice() {
  const root = document.querySelector("#practice");
  const filterTypeGuidance = filterGuidance.slice(3);
  const filterSizeGuidance = filterGuidance.slice(0, 3);
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Beginning to end</p>
        <h2>Practice</h2>
      </div>
      <p>A teaching hub for the nine pre-trip techniques. Open any card for the full lesson, and open any generated image for the full-size teaching view with lens, focal length, aperture, shutter speed, and technique notes.</p>
    </div>
    <section class="panel">
      <p class="eyebrow">Reading stack</p>
      <div class="tag-row">
        ${bookStack.map((book) => `<span class="tag">${book}</span>`).join("")}
      </div>
    </section>
    <section class="filter-learning-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Filter concepts first</p>
          <h2>What each filter is for</h2>
        </div>
        <p>Start with the photographic decision. Filters are handling tools for specific light, glare, weather, and motion problems, not default glass for every bird frame.</p>
      </div>
      <div class="filter-concept-grid">
        ${filterTypeGuidance
          .map(
            (item) => `<article class="filter-kit-card">
              <h3>${item.title}</h3>
              <p class="card-copy">${item.note}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>
    <section class="filter-size-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Then sizes</p>
          <h2>Which filter sizes matter</h2>
        </div>
        <p>Buy and pack around shared sizes first. The larger telephoto filters are special-purpose tools because they cost money, light, and field speed.</p>
      </div>
      <div class="filter-size-grid">
        ${filterSizeGuidance
          .map(
            (item) => `<article class="filter-kit-card">
              <h3>${item.title}</h3>
              <p class="card-copy">${item.note}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>
    <div class="section-title compact-title practice-technique-title">
      <div>
        <p class="eyebrow">1 to 9</p>
        <h2>Nine Technique Cards</h2>
      </div>
      <p>Use this as the quick table of contents. Each card opens a deeper lesson with the image larger and the steps separated for practice.</p>
    </div>
    <div class="practice-list practice-card-grid">
      ${practiceModules
        .map(
          (practiceModule, index) => `<article class="practice-card">
            <div class="practice-card-header">
              <div class="practice-number">${index + 1}</div>
              <div>
                <p class="eyebrow">Technique ${index + 1}</p>
                <h3>${practiceModule.title}</h3>
              </div>
            </div>
            ${practiceModule.visualId ? `<div class="practice-visual-wrap">${renderStandaloneFrameGrid(practiceModule.visualId, {
              className: "practice-frame-grid",
              compact: true,
              hideDescription: true,
              loading: index < 2 ? "eager" : "lazy",
              ariaLabel: `${practiceModule.title} standalone training frames`,
            })}</div>` : ""}
            <div class="practice-card-copy">
              <p class="card-copy">${practiceModule.goal}</p>
              <button class="button-link practice-open-button" type="button" data-jump="practice-${index + 1}">Open lesson</button>
            </div>
          </article>`
        )
        .join("")}
    </div>
    <section class="filter-practice-section dedicated-filter-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">End with kit and drills</p>
          <h2>Filter Kit And Drills</h2>
        </div>
        <p>Practice filters after the concepts and sizes are clear. The default for fast bird action is hood on and no filter unless weather protection is genuinely needed.</p>
      </div>
      <div class="filter-practice-layout">
        ${renderStandaloneFrameGrid("filter-practice", {
          className: "filter-frame-grid",
          compact: true,
          hideDescription: true,
          loading: "lazy",
          ariaLabel: "Filter practice standalone training frames",
        })}
        <div class="filter-drill-grid">
          ${filterPracticePlan
            .map(
              (item) => `<article class="filter-drill-card">
                <h3>${item.title}</h3>
                <p><b>Bring:</b> ${item.bring}</p>
                <p><b>Rehearse:</b> ${item.rehearse}</p>
                <p class="muted"><b>Avoid:</b> ${item.avoid}</p>
              </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
    ${renderVisualLightbox("practice-lightbox-title")}`;
  setupVisualLightbox(root);
}

function renderPracticeDetail(index) {
  const practiceModule = practiceModules[index];
  const root = document.querySelector(`#practice-${index + 1}`);
  if (!root || !practiceModule) return;

  const lesson = visualLessons[practiceModule.visualId];
  root.innerHTML = `
    <button class="button-link secondary practice-back-button" type="button" data-jump="practice">Back to Practice</button>
    <section class="practice-detail-hero">
      <div class="practice-detail-copy">
        <p class="eyebrow">Technique ${index + 1} of ${practiceModules.length}</p>
        <h2>${practiceModule.title}</h2>
        <p>${practiceModule.goal}</p>
        <dl class="visual-tech-meta practice-detail-meta">
          <div><dt>Lens</dt><dd>${lesson.lens}</dd></div>
          <div><dt>Focal length</dt><dd>${lesson.focalLength}</dd></div>
          <div><dt>Aperture</dt><dd>${lesson.aperture}</dd></div>
          <div><dt>Shutter speed</dt><dd>${lesson.shutterSpeed}</dd></div>
          <div class="is-technique"><dt>Technique</dt><dd>${lesson.technique}</dd></div>
        </dl>
      </div>
      <div class="practice-detail-visual">
        ${renderStandaloneFrameGrid(practiceModule.visualId, {
          className: "practice-detail-frame-grid",
          compact: false,
          hideDescription: false,
          showLocation: true,
          loading: "eager",
          ariaLabel: `${practiceModule.title} full standalone training frames`,
        })}
      </div>
    </section>
    <section class="practice-detail-grid">
      <article class="panel">
        <p class="eyebrow">Field steps</p>
        <h3>What to rehearse</h3>
        <ol class="kit-list practice-step-list">${practiceModule.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </article>
      <article class="panel">
        <p class="eyebrow">Homework</p>
        <h3>Proof before travel</h3>
        <p class="card-copy">${practiceModule.homework}</p>
      </article>
      <article class="panel">
        <p class="eyebrow">How to read the image</p>
        <h3>Use the generated preview as a checklist.</h3>
        <p class="card-copy">${lesson.supposedLocation}</p>
        <p class="homework"><b>Look for:</b> whether the image gives you a repeatable target for stance, timing, exposure, motion, or workflow. The goal is not to copy the generated frame; it is to know what decision you are practicing.</p>
      </article>
    </section>
    ${renderVisualLightbox(`practice-${index + 1}-lightbox-title`)}`;
  setupVisualLightbox(root);
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
    <section class="panel rights-callout inspiration-policy">
      <div>
        <p class="eyebrow">Image rights boundary</p>
        <h3>Study external work, but keep reused visuals rights-safe.</h3>
        <p class="card-copy">Copyrighted article, portfolio, product, hotel, and checklist photos stay linked for reference only unless a license or permission is recorded. The external-inspiration cards below use generated planning frames as visual treatments, then point back to the original source for study.</p>
      </div>
      ${renderStandaloneFrameCard("snow-goose-blastoff-03", {
        className: "callout-preview inspiration-callout-frame",
        compact: true,
        hideDescription: true,
      })}
    </section>
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
          (item) => `<article class="evidence-card link-reference-card external-inspiration-card">
            ${renderStandaloneFrameCard(item.visualId, {
              compact: true,
              hideDescription: true,
              className: "external-inspiration-visual",
            })}
            <h3>${item.title}</h3>
            ${(item.description || [item.note]).map((paragraph) => `<p class="card-copy">${paragraph}</p>`).join("")}
            <p class="muted">${item.note}</p>
            ${externalLink(item.url, "Open reference")}
          </article>`
        )
        .join("")}
    </div>
    ${renderVisualLightbox("inspiration-lightbox-title")}`;
  setupVisualLightbox(root);
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
                ${renderVisualMini(visualIdForMedia(item), "Generated preview")}
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
          <p>Article photos remain inspiration-only unless the source license explicitly permits reuse. The thumbnails in this tab are generated planning previews or link-only source cards, not scraped article images.</p>
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
            ${renderVisualMini(visualIdForMedia(item), "Generated preview")}
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
    <section class="panel source-policy">
      <p class="eyebrow">Source-first index</p>
      <p class="card-copy">This page prioritizes source quality, date checked, topic, and direct links. Repetitive generic thumbnails have been removed unless a future source-specific visual genuinely helps the citation.</p>
    </section>
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
  gallery: renderGallery,
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

practiceModules.forEach((_, index) => {
  viewRenderers[`practice-${index + 1}`] = () => renderPracticeDetail(index);
});

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
  const activeTabId = viewId.startsWith("practice-") ? "practice" : viewId;
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.view === activeTabId;
    tab.classList.toggle("is-active", active);
    if (active) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });
  document.querySelector(`.tab[data-view="${activeTabId}"]`)?.scrollIntoView({
    block: "nearest",
    inline: "center",
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

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

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
  document.querySelectorAll(".tab[data-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showView(button.dataset.view, { updateUrl: true });
    });
  });
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const visualTrigger = event.target.closest("[data-visual-id], [data-gallery-id]");
    if (visualTrigger) {
      const root = visualTrigger.closest(".view");
      const overlay = root?.querySelector(".gallery-lightbox");
      const visualId = visualTrigger.getAttribute("data-visual-id") || visualTrigger.getAttribute("data-gallery-id");
      if (overlay && visualId && openVisualLightbox(overlay, visualId)) {
        event.preventDefault();
        return;
      }
    }
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
