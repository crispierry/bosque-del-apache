// Research-backed Bosque del Apache data, visual records, and field-planning content.
// Rendering and interaction logic lives in app.js.
const checkedDate = "2026-06-03";
const gearCheckedDate = "2026-06-05";
const visualCheckedDate = "2026-06-04";
const guideFraming = {
  publicationDate: "June 5, 2026",
  proposedTripWindow: "Dec 6-12, 2026",
  title: "Guide scope",
  short:
    "This is a general Bosque del Apache photography guide with a dated planning example for Dec 6-12, 2026. Recheck sunrise, sunset, access, lodging, pricing, and field conditions for your own travel dates.",
  overview:
    "Use this as a general Bosque del Apache photography guide, then adapt the dated example to your own trip. The example window is Dec 6-12, 2026: arrive and scout on Sunday, photograph Monday through Friday, and leave Saturday with backups complete. Parking targets, sunrise times, and sunset arrivals are tied to that week, so recheck them if you travel at another time.",
};

const assets = {
  geese: "./assets/snow-geese-gary-stolz-usfws-1800.jpg",
  cranes: "./assets/sandhill-cranes-ryan-hagerty-usfws-1800.jpg",
  flyout: "./assets/snow-geese-flyout-lynne-braden-usfws-1800.jpg",
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const generatedVisuals = [
  {
    id: "crane-roost-dawn",
    title: "Dawn Crane Roost",
    src: "./assets/generated/crane-roost-dawn-contact-sheet.jpg",
    category: "Sunrise",
    alt:
      "Generated five-frame planning preview of sandhill crane dawn roost scenes at Bosque del Apache",
    caption:
      "Planning preview for crane-pool sunrise work; not a field photograph from Bosque.",
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
      "Planning preview for Flight Deck or Main Pool blast-off decisions; not a field photograph from Bosque.",
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
      "Planning preview for crane-pool sunset work; not a field photograph from Bosque.",
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
      "Planning preview for field-feeding and vehicle-blind work; not a field photograph from Bosque.",
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
      "Planning preview for Dabbler, Eagle Scout, Willow, and Coyote Deck work; not a field photograph from Bosque.",
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
      "Planning preview for Rio Viejo, trail, and habitat-detail work; not a field photograph from Bosque.",
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
      "Planning preview for gray-day and slow-shutter fallback work; not a field photograph from Bosque.",
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
      "Planning preview for filter rehearsals; not a field photograph from Bosque.",
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
      "Planning preview for travel and field-workflow preparation; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning preview from this guide's shot descriptions. Use as expectation-setting only.",
    placement: ["Itinerary", "Travel"],
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
      "Generated training preview for practice item 1, Camera Setup Baseline; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 2, Aperture Priority, Shutter Priority, and Manual; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 3, Shutter Speed Ladder; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 4, Handholding and Body Mechanics; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 5, Tripod, Gimbal, Monopod, and Beanbag; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 6, White Birds and Exposure; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 7, Behavior Prediction; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 8, Cold and Dust Workflow; not a field photograph from Bosque.",
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
      "Generated training preview for practice item 9, Pre-trip Readiness Checklist; not a field photograph from Bosque.",
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
      "Rental car setup illustration for travel planning; no real rental company, vehicle brand, or camera brand is represented.",
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
        `${example}. Standalone HD planning frame separated from the ${visual.title} generated contact sheet; not a field photograph from Bosque.`,
      rights: visual.rights,
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        `${example} from the ${visual.title.toLowerCase()} planning set, separated from the original contact sheet for closer field-study use.`,
    };
  })
);

const regeneratedGalleryImageGroups = {
  "crane-roost-dawn": [
    {
      id: "crane-roost-dawn-01",
      parentId: "crane-roost-dawn",
      title: "Crane silhouettes before sunrise",
      src: "./assets/generated/gallery-hd/crane-roost-dawn-01.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of sandhill crane silhouettes in a Bosque del Apache roost pool before sunrise",
      caption:
        "Generated standalone 1080p planning photo for crane-pool sunrise work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for pre-sunrise crane silhouettes, shallow water, reflections, and mountain-band context.",
    },
    {
      id: "crane-roost-dawn-02",
      parentId: "crane-roost-dawn",
      title: "Cold breath and shallow-water atmosphere",
      src: "./assets/generated/gallery-hd/crane-roost-dawn-02.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of sandhill cranes with visible cold breath in shallow Bosque del Apache roost water",
      caption:
        "Generated standalone 1080p planning photo for cold dawn roost atmosphere; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for cold breath, predawn blue light, shallow water, and calm crane behavior.",
    },
    {
      id: "crane-roost-dawn-03",
      parentId: "crane-roost-dawn",
      title: "Reflection pair in calm water",
      src: "./assets/generated/gallery-hd/crane-roost-dawn-03.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of a pair of sandhill cranes reflected in calm Bosque del Apache sunrise water",
      caption:
        "Generated standalone 1080p planning photo for quiet crane reflection work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for paired cranes, clean reflections, first light, and habitat context.",
    },
    {
      id: "crane-roost-dawn-04",
      parentId: "crane-roost-dawn",
      title: "Takeoff run with wing stretch",
      src: "./assets/generated/gallery-hd/crane-roost-dawn-04.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of a sandhill crane beginning a takeoff run across shallow Bosque del Apache water",
      caption:
        "Generated standalone 1080p planning photo for crane takeoff behavior; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for wing stretch, takeoff anticipation, water splash, and action framing.",
    },
    {
      id: "crane-roost-dawn-05",
      parentId: "crane-roost-dawn",
      title: "Wide mountain-band roost scene",
      src: "./assets/generated/gallery-hd/crane-roost-dawn-05.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of a wide Bosque del Apache crane roost scene with winter water and distant mountains",
      caption:
        "Generated standalone 1080p planning photo for wide roost context; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for environmental roost scale, scattered cranes, cold mist, and mountains.",
    },
  ],
  "snow-goose-blastoff": [
    {
      id: "snow-goose-blastoff-01",
      parentId: "snow-goose-blastoff",
      title: "Still roost before lift-off",
      src: "./assets/generated/gallery-hd/snow-goose-blastoff-01.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of snow geese resting on Bosque del Apache water before dawn lift-off",
      caption:
        "Generated standalone 1080p planning photo for snow goose roost anticipation; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for a calm snow goose roost before blast-off, with water, mountains, and early light.",
    },
    {
      id: "snow-goose-blastoff-02",
      parentId: "snow-goose-blastoff",
      title: "First flock wave rising low",
      src: "./assets/generated/gallery-hd/snow-goose-blastoff-02.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of the first wave of snow geese lifting low from a Bosque del Apache roost",
      caption:
        "Generated standalone 1080p planning photo for the first low flock wave; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for the first birds rising low, white-feather exposure, ripples, and dawn color.",
    },
    {
      id: "snow-goose-blastoff-03",
      parentId: "snow-goose-blastoff",
      title: "Wide mass blast-off over water",
      src: "./assets/generated/gallery-hd/snow-goose-blastoff-03.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of a wide mass snow goose blast-off over Bosque del Apache wetland water",
      caption:
        "Generated standalone 1080p planning photo for mass snow goose blast-off; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for wide flock spectacle, water context, mountain scale, and white-bird exposure control.",
    },
    {
      id: "snow-goose-blastoff-04",
      parentId: "snow-goose-blastoff",
      title: "Overhead flock texture",
      src: "./assets/generated/gallery-hd/snow-goose-blastoff-04.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of snow geese passing overhead in layered flock texture at Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for overhead flock pattern work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for readable overhead flock patterns, wing positions, and separated groups after lift-off.",
    },
    {
      id: "snow-goose-blastoff-05",
      parentId: "snow-goose-blastoff",
      title: "Separated goose groups against pastel dawn",
      src: "./assets/generated/gallery-hd/snow-goose-blastoff-05.jpg",
      category: "Sunrise",
      alt:
        "Generated standalone 1080p planning photo of separated snow goose groups flying against pastel dawn at Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for separated dawn flock composition; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for post-blast-off flock separation, layered groups, pastel sky, and wetland context.",
    },
  ],
  "crane-evening-return": [
    {
      id: "crane-evening-return-01",
      parentId: "crane-evening-return",
      title: "Final approach with feet down",
      src: "./assets/generated/gallery-hd/crane-evening-return-01.jpg",
      category: "Sunset",
      alt:
        "Generated standalone 1080p planning photo of a sandhill crane on final approach with feet down at a Bosque del Apache crane pond",
      caption:
        "Generated standalone 1080p planning photo for crane final approach and landing technique; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for evening crane final approach, feet-down posture, warm side light, and landing room.",
    },
    {
      id: "crane-evening-return-02",
      parentId: "crane-evening-return",
      title: "Paired cranes in warm side light",
      src: "./assets/generated/gallery-hd/crane-evening-return-02.jpg",
      category: "Sunset",
      alt:
        "Generated standalone 1080p planning photo of paired sandhill cranes in warm side light at Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for paired crane behavior in evening light; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for paired crane behavior, clean reflections, golden side light, and calm pond framing.",
    },
    {
      id: "crane-evening-return-03",
      parentId: "crane-evening-return",
      title: "Family group landing",
      src: "./assets/generated/gallery-hd/crane-evening-return-03.jpg",
      category: "Sunset",
      alt:
        "Generated standalone 1080p planning photo of a sandhill crane family group landing together at Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for crane family-group landing behavior; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for group landing lanes, family behavior, sunset water, and touchdown timing.",
    },
    {
      id: "crane-evening-return-04",
      parentId: "crane-evening-return",
      title: "Reflection landing with ripples",
      src: "./assets/generated/gallery-hd/crane-evening-return-04.jpg",
      category: "Sunset",
      alt:
        "Generated standalone 1080p planning photo of a sandhill crane touching down with rippled reflection in Bosque del Apache sunset water",
      caption:
        "Generated standalone 1080p planning photo for crane reflection landing work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for reflection, touchdown ripples, shallow water, and precise evening action framing.",
    },
    {
      id: "crane-evening-return-05",
      parentId: "crane-evening-return",
      title: "Wide flock against dusky mountain bands",
      src: "./assets/generated/gallery-hd/crane-evening-return-05.jpg",
      category: "Sunset",
      alt:
        "Generated standalone 1080p planning photo of sandhill cranes returning at dusk over Bosque del Apache water and mountain bands",
      caption:
        "Generated standalone 1080p planning photo for wide evening crane-return context; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for wide sunset crane return, dusky mountain bands, roost scale, and environmental framing.",
    },
  ],
  "farm-field-feeding": [
    {
      id: "farm-field-feeding-01",
      parentId: "farm-field-feeding",
      title: "Feeding cranes in winter crop rows",
      src: "./assets/generated/gallery-hd/farm-field-feeding-01.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of sandhill cranes feeding in winter crop rows at Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for farm-field crane feeding; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for cranes feeding in crop rows, field structure, mountain context, and vehicle-based work.",
    },
    {
      id: "farm-field-feeding-02",
      parentId: "farm-field-feeding",
      title: "Mixed geese and cranes with mountains",
      src: "./assets/generated/gallery-hd/farm-field-feeding-02.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of mixed snow geese and sandhill cranes feeding in a Bosque del Apache field with mountains",
      caption:
        "Generated standalone 1080p planning photo for mixed field flocks and mountain context; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for mixed geese and cranes, field rows, species comparison, and mountain scale.",
    },
    {
      id: "farm-field-feeding-03",
      parentId: "farm-field-feeding",
      title: "Raptor crossing a field edge",
      src: "./assets/generated/gallery-hd/farm-field-feeding-03.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of a raptor crossing low over a Bosque del Apache farm-field edge",
      caption:
        "Generated standalone 1080p planning photo for low raptor tracking over field edges; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for raptor behavior, field-edge backgrounds, and long-lens tracking decisions.",
    },
    {
      id: "farm-field-feeding-04",
      parentId: "farm-field-feeding",
      title: "Flock lifting from crop rows",
      src: "./assets/generated/gallery-hd/farm-field-feeding-04.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of cranes and geese lifting from Bosque del Apache winter crop rows",
      caption:
        "Generated standalone 1080p planning photo for farm-field lift-off action; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for a flock lifting from crop rows, dust, action tracking, and mid-morning field behavior.",
    },
    {
      id: "farm-field-feeding-05",
      parentId: "farm-field-feeding",
      title: "Quiet vehicle-blind perspective from a legal pullout",
      src: "./assets/generated/gallery-hd/farm-field-feeding-05.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of a quiet vehicle-blind perspective from a legal Bosque del Apache pullout with distant feeding birds",
      caption:
        "Generated standalone 1080p planning photo for legal vehicle-blind field work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for roadside patience, vehicle-blind etiquette, distant field birds, and undisturbed behavior.",
    },
  ],
  "wetland-deck": [
    {
      id: "wetland-deck-01",
      parentId: "wetland-deck",
      title: "Ducks in reed reflections",
      src: "./assets/generated/gallery-hd/wetland-deck-01.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of ducks moving through reed reflections at Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for wetland duck and reed-reflection work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for ducks, reed reflections, clean head angles, and layered mid-morning wetland composition.",
    },
    {
      id: "wetland-deck-02",
      parentId: "wetland-deck",
      title: "Coots and water texture",
      src: "./assets/generated/gallery-hd/wetland-deck-02.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of coots and ducks moving through textured Bosque del Apache wetland water",
      caption:
        "Generated standalone 1080p planning photo for coots, ducks, and bright-water texture; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for coots, ripples, bright water, exposure practice, and quiet wetland texture.",
    },
    {
      id: "wetland-deck-03",
      parentId: "wetland-deck",
      title: "Distant cranes compressed through reeds",
      src: "./assets/generated/gallery-hd/wetland-deck-03.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of distant sandhill cranes compressed through foreground reeds in mid-morning Bosque del Apache light",
      caption:
        "Generated standalone 1080p planning photo for long-lens compression through reeds; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for distant cranes, foreground reeds, long-lens layering, and mid-morning wetland light.",
    },
    {
      id: "wetland-deck-04",
      parentId: "wetland-deck",
      title: "Backlit cattail and sparkle",
      src: "./assets/generated/gallery-hd/wetland-deck-04.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of backlit cattails and sparkling Bosque del Apache wetland water",
      caption:
        "Generated standalone 1080p planning photo for backlit cattail and water-sparkle studies; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for cattail texture, backlight, water sparkle, and quiet non-spectacle composition.",
    },
    {
      id: "wetland-deck-05",
      parentId: "wetland-deck",
      title: "Quiet wetland layers with birds small in frame",
      src: "./assets/generated/gallery-hd/wetland-deck-05.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of layered Bosque del Apache wetland habitat with birds small in frame",
      caption:
        "Generated standalone 1080p planning photo for quiet wetland habitat layers; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for layered water, reeds, small birds, mountains, and calm mid-morning observation.",
    },
  ],
  "desert-edge-details": [
    {
      id: "desert-edge-details-01",
      parentId: "desert-edge-details",
      title: "Roadrunner on a gravel edge",
      src: "./assets/generated/gallery-hd/desert-edge-details-01.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of a roadrunner standing on a Bosque del Apache gravel edge",
      caption:
        "Generated standalone 1080p planning photo for desert-edge roadrunner work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for roadrunner behavior, gravel-edge habitat, dry winter brush, and respectful distance.",
    },
    {
      id: "desert-edge-details-02",
      parentId: "desert-edge-details",
      title: "Small quail group in winter brush",
      src: "./assets/generated/gallery-hd/desert-edge-details-02.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of a small quail group moving through Bosque del Apache winter brush",
      caption:
        "Generated standalone 1080p planning photo for quail in winter brush; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for small quail groups, brush separation, patient edge scanning, and mid-morning detail work.",
    },
    {
      id: "desert-edge-details-03",
      parentId: "desert-edge-details",
      title: "Sparrow on a dried seedhead",
      src: "./assets/generated/gallery-hd/desert-edge-details-03.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of a sparrow perched on a dried seedhead at the Bosque del Apache refuge edge",
      caption:
        "Generated standalone 1080p planning photo for small passerine edge work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for a small sparrow, dried seedhead texture, clean background, and long-lens patience.",
    },
    {
      id: "desert-edge-details-04",
      parentId: "desert-edge-details",
      title: "Tracks and frosty dust",
      src: "./assets/generated/gallery-hd/desert-edge-details-04.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of bird and animal tracks in frosty Bosque del Apache dust",
      caption:
        "Generated standalone 1080p planning photo for winter tracks and habitat-detail work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for tracks, frosty dust, grasses, movement evidence, and slower habitat observation.",
    },
    {
      id: "desert-edge-details-05",
      parentId: "desert-edge-details",
      title: "Quiet trail habitat with cottonwoods",
      src: "./assets/generated/gallery-hd/desert-edge-details-05.jpg",
      category: "Mid-morning",
      alt:
        "Generated standalone 1080p planning photo of quiet Bosque del Apache trail habitat with winter cottonwoods and dry grasses",
      caption:
        "Generated standalone 1080p planning photo for Rio Viejo-style trail habitat context; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for dry trail habitat, cottonwoods, small edge subjects, and environmental storytelling.",
    },
  ],
  "weather-motion-fallback": [
    {
      id: "weather-motion-fallback-01",
      parentId: "weather-motion-fallback",
      title: "Cranes in light mist",
      src: "./assets/generated/gallery-hd/weather-motion-fallback-01.jpg",
      category: "Fallback",
      alt:
        "Generated standalone 1080p planning photo of sandhill cranes in light mist over Bosque del Apache shallow water",
      caption:
        "Generated standalone 1080p planning photo for misty crane weather fallback work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for gray morning mist, quiet cranes, restrained color, and weather-sensitive field choices.",
    },
    {
      id: "weather-motion-fallback-02",
      parentId: "weather-motion-fallback",
      title: "High-key geese over gray water",
      src: "./assets/generated/gallery-hd/weather-motion-fallback-02.jpg",
      category: "Fallback",
      alt:
        "Generated standalone 1080p planning photo of snow geese flying low over gray Bosque del Apache water in high-key light",
      caption:
        "Generated standalone 1080p planning photo for high-key white-bird exposure; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for snow geese, gray water, white-feather exposure, and overcast high-key composition.",
    },
    {
      id: "weather-motion-fallback-03",
      parentId: "weather-motion-fallback",
      title: "Intentional panning blur",
      src: "./assets/generated/gallery-hd/weather-motion-fallback-03.jpg",
      category: "Fallback",
      alt:
        "Generated standalone 1080p planning photo of a Bosque del Apache bird rendered with intentional panning blur against streaked wetland reeds",
      caption:
        "Generated standalone 1080p planning photo for intentional panning blur; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for slow-shutter panning, readable subject shape, streaked reeds, and flat-light creativity.",
    },
    {
      id: "weather-motion-fallback-04",
      parentId: "weather-motion-fallback",
      title: "Snow-dusted reeds with distant birds",
      src: "./assets/generated/gallery-hd/weather-motion-fallback-04.jpg",
      category: "Fallback",
      alt:
        "Generated standalone 1080p planning photo of snow-dusted Bosque del Apache reeds with distant cranes or geese",
      caption:
        "Generated standalone 1080p planning photo for snow-dusted reed and weather texture work; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for light snow or frost, reed layers, distant birds, and quiet weather detail.",
    },
    {
      id: "weather-motion-fallback-05",
      parentId: "weather-motion-fallback",
      title: "Dark flock silhouettes against a pale sky",
      src: "./assets/generated/gallery-hd/weather-motion-fallback-05.jpg",
      category: "Fallback",
      alt:
        "Generated standalone 1080p planning photo of a dark Bosque del Apache flock silhouetted against a pale winter sky",
      caption:
        "Generated standalone 1080p planning photo for pale-sky flock silhouettes; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for silhouette shapes, pale overcast sky, diagonal flock movement, and minimal color.",
    },
  ],
  "filter-practice": [
    {
      id: "filter-practice-01",
      parentId: "filter-practice",
      title: "CPL glare test over water",
      src: "./assets/generated/gallery-hd/filter-practice-01.jpg",
      category: "Practice",
      alt:
        "Generated standalone 1080p planning photo of a circular polarizer glare test over reflective wetland water",
      caption:
        "Generated standalone 1080p planning photo for CPL glare testing; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for testing a circular polarizer against wetland glare, reflection, and shutter-speed tradeoffs.",
    },
    {
      id: "filter-practice-02",
      parentId: "filter-practice",
      title: "Fast bird flight with no filter",
      src: "./assets/generated/gallery-hd/filter-practice-02.jpg",
      category: "Practice",
      alt:
        "Generated standalone 1080p planning photo of a fast bird in flight used to show no-filter shutter-speed practice",
      caption:
        "Generated standalone 1080p planning photo for no-filter bird-flight practice; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for fast bird flight, clean backgrounds, and preserving shutter speed by removing filters.",
    },
    {
      id: "filter-practice-03",
      parentId: "filter-practice",
      title: "ND shutter-drag practice",
      src: "./assets/generated/gallery-hd/filter-practice-03.jpg",
      category: "Practice",
      alt:
        "Generated standalone 1080p planning photo of neutral-density shutter-drag practice with intentional waterbird motion blur",
      caption:
        "Generated standalone 1080p planning photo for ND shutter-drag experiments; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for deliberate slow-shutter blur, ND use, water movement, and controlled motion practice.",
    },
    {
      id: "filter-practice-04",
      parentId: "filter-practice",
      title: "Protective filter and cleaning kit",
      src: "./assets/generated/gallery-hd/filter-practice-04.jpg",
      category: "Practice",
      alt:
        "Generated standalone 1080p planning photo of a protective filter and cleaning kit staged before a Bosque del Apache field day",
      caption:
        "Generated standalone 1080p planning photo for protective filter and cleaning-kit readiness; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for dust/cold readiness, protective filter choices, blower, cloth, brush, and organized field workflow.",
    },
    {
      id: "filter-practice-05",
      parentId: "filter-practice",
      title: "Gloved step-up ring handling",
      src: "./assets/generated/gallery-hd/filter-practice-05.jpg",
      category: "Practice",
      alt:
        "Generated standalone 1080p planning photo of gloved hands handling a step-up ring before a cold Bosque del Apache field session",
      caption:
        "Generated standalone 1080p planning photo for cold-weather step-up ring handling; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Gallery", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for gloved filter handling, step-up ring dexterity, and cold predawn gear practice.",
    },
  ],
  "travel-workflow": [
    {
      id: "travel-workflow-01",
      parentId: "travel-workflow",
      title: "Hotel battery and card charging",
      src: "./assets/generated/gallery-hd/travel-workflow-01.jpg",
      category: "Travel",
      alt:
        "Generated standalone 1080p planning photo of camera batteries and memory cards organized for a Bosque del Apache hotel-room reset",
      caption:
        "Generated standalone 1080p planning photo for evening hotel-room charging and card management; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Travel", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for battery charging, memory-card organization, notebook checks, and evening reset discipline.",
    },
    {
      id: "travel-workflow-02",
      parentId: "travel-workflow",
      title: "Two bodies staged before dawn",
      src: "./assets/generated/gallery-hd/travel-workflow-02.jpg",
      category: "Travel",
      alt:
        "Generated standalone 1080p planning photo of two camera bodies staged with different lens roles before a Bosque del Apache predawn departure",
      caption:
        "Generated standalone 1080p planning photo for two-camera predawn staging; not a field photograph from Bosque.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Travel visual archive", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for two camera roles, long-lens readiness, mid-range context, and quick predawn departure.",
    },
    {
      id: "travel-workflow-03",
      parentId: "travel-workflow",
      title: "Rental SUV cargo organized",
      src: "./assets/generated/gallery-hd/travel-workflow-03.jpg",
      category: "Travel",
      alt:
        "Generated standalone 1080p planning photo of an organized rental SUV cargo setup for Bosque del Apache predawn wildlife photography",
      caption:
        "Generated standalone 1080p planning photo for rental SUV cargo organization; not an actual vehicle or rental-company recommendation.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Travel visual archive", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for safe cargo setup, long lens protection, layers, water, route notes, and predawn logistics.",
    },
    {
      id: "travel-workflow-04",
      parentId: "travel-workflow",
      title: "Predawn route check",
      src: "./assets/generated/gallery-hd/travel-workflow-04.jpg",
      category: "Travel",
      alt:
        "Generated standalone 1080p planning photo of a non-readable predawn route check before driving to Bosque del Apache",
      caption:
        "Generated standalone 1080p planning photo for predawn route and first-target checks; not a navigational map.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Travel visual archive", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for non-readable route review, first shooting target, headlamp, keys, water, and field bag.",
    },
    {
      id: "travel-workflow-05",
      parentId: "travel-workflow",
      title: "Evening backup and field notebook",
      src: "./assets/generated/gallery-hd/travel-workflow-05.jpg",
      category: "Travel",
      alt:
        "Generated standalone 1080p planning photo of an evening backup drive and field notebook workflow after a Bosque del Apache field day",
      caption:
        "Generated standalone 1080p planning photo for evening backup and field-note discipline; not a hotel or field photograph.",
      rights:
        "AI-generated project planning photo from this guide's shot descriptions. Use as expectation-setting only.",
      placement: ["Travel visual archive", "Visual Asset Manifest"],
      description:
        "Purpose-built regenerated 1080p planning photo for card backup, portable drive workflow, field notebook, batteries, and repacking discipline.",
    },
  ],
};

const regeneratedGalleryVisuals = Object.values(regeneratedGalleryImageGroups).flat();

const itineraryGeneratedVisuals = [
  {
    id: "itinerary-arrival-route-check",
    title: "Arrival route check",
    src: "./assets/generated/itinerary-hd/itinerary-01-arrival-route-check.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of a Socorro hotel-room route check and camera staging desk before Bosque del Apache",
    caption:
      "Planning image for arrival logistics, route checks, camera setup, and predawn readiness; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for Sunday arrival, hotel-room charging, card staging, route notes, layers, and two-camera dawn readiness.",
    lesson: {
      supposedLocation:
        "Socorro hotel room or staging table before the first Bosque del Apache scout.",
      lens: "24-105mm or phone/documentary camera for logistics and readiness records.",
      focalLength: "24-50mm",
      aperture: "f/4-f/5.6",
      shutterSpeed: "1/60-1/125 sec",
      technique:
        "Use the arrival evening to remove friction: charge batteries, clear cards, set two camera roles, stage water and layers, and write a non-readable route note before sleep.",
    },
  },
  {
    id: "itinerary-crane-pond-sunset-scout",
    title: "Crane pond sunset scout",
    src: "./assets/generated/itinerary-hd/itinerary-02-crane-pond-sunset-scout.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of sandhill cranes at a Bosque del Apache crane pond sunset scout",
    caption:
      "Planning image for the first sunset crane-pond scout; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for checking crane roost activity, wind, parking angle, reflections, and safe crowd position on the first sunset.",
    lesson: {
      supposedLocation:
        "North or South Crane Pond, using the first evening as a scout rather than a pressure shoot.",
      lens: "100-400mm, 200-600mm, or similar wildlife zoom.",
      focalLength: "200-400mm",
      aperture: "f/7.1-f/8",
      shutterSpeed: "1/1000-1/2000 sec",
      technique:
        "Treat the first sunset as reconnaissance: test reflection angles, note wind direction, watch how cranes enter the pool, and mark the least disruptive legal pullout.",
    },
  },
  {
    id: "itinerary-highway-one-crane-pool-sunrise",
    title: "Highway 1 crane-pool sunrise",
    src: "./assets/generated/itinerary-hd/itinerary-03-highway-one-crane-pool-sunrise.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of sandhill cranes at a Highway 1 crane pool sunrise with mist and reflections",
    caption:
      "Planning image for a Highway 1 crane-pool sunrise; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for sunrise silhouettes, cold breath, takeoff cues, low reflections, and roost context.",
    lesson: {
      supposedLocation:
        "Highway 1 crane pools or the current legal pullout with the strongest active morning roost.",
      lens: "Sony FE 200-600mm, Canon RF 200-800mm, or similar long wildlife zoom.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/500-1/1600 sec",
      technique:
        "Arrive in blue hour, compose for reflections before the birds move, watch wing stretches and crouches, and raise shutter speed before the first takeoff run.",
    },
  },
  {
    id: "itinerary-visitor-center-wetland-deck-tests",
    title: "Visitor-center wetland deck tests",
    src: "./assets/generated/itinerary-hd/itinerary-04-visitor-center-wetland-deck-tests.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of a Bosque del Apache wetland deck with reeds ducks and distant cranes",
    caption:
      "Planning image for visitor-center and deck-based wetland tests; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for translating visitor-center intel into Dabbler Deck, Eagle Scout Deck, and bright-water exposure tests.",
    lesson: {
      supposedLocation:
        "Visitor Center, Dabbler Deck, Eagle Scout Deck, or the public wetland deck with the best current bird activity.",
      lens: "100-400mm, 200-600mm, or 200-800mm depending on distance and habitat scale.",
      focalLength: "200-600mm",
      aperture: "f/8-f/11",
      shutterSpeed: "1/500-1/2000 sec",
      technique:
        "Use the deck to test bright-water exposure, build layered reed compositions, wait for clean head angles, and convert visitor-center reports into specific field checks.",
    },
  },
  {
    id: "itinerary-active-crane-pool-sunset-landings",
    title: "Active crane pool sunset landings",
    src: "./assets/generated/itinerary-hd/itinerary-05-active-crane-pool-sunset-landings.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of sandhill cranes landing in warm sunset light at an active Bosque del Apache crane pool",
    caption:
      "Planning image for active crane-pool sunset landings; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for crane landing posture, warm side light, paired birds, family groups, and reflection frames.",
    lesson: {
      supposedLocation:
        "Best active crane pool after the first scout, favoring a legal pullout with wind-aligned landing lanes.",
      lens: "Long wildlife zoom on a beanbag, monopod, or tripod/gimbal.",
      focalLength: "400-700mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1600-1/2500 sec",
      technique:
        "Read wind direction, pre-frame open landing space, focus on the head and leading shoulder, and keep reflection room below the feet during touchdown.",
    },
  },
  {
    id: "itinerary-flight-deck-snow-goose-blastoff",
    title: "Flight Deck snow-goose blastoff",
    src: "./assets/generated/itinerary-hd/itinerary-06-flight-deck-snow-goose-blastoff.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of snow geese lifting from water at Bosque del Apache Flight Deck at dawn",
    caption:
      "Planning image for a Flight Deck snow-goose blastoff; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for still roost, first flock wave, mass blastoff, overhead texture, and separated dawn groups.",
    lesson: {
      supposedLocation:
        "Flight Deck, Main Pool, or the current goose roost confirmed by the previous evening and morning scout.",
      lens: "100-400mm or 200-600mm class zoom, with a wider lens ready if the eruption is close.",
      focalLength: "100-300mm for mass lift-off; 400-600mm after groups separate.",
      aperture: "f/7.1-f/9",
      shutterSpeed: "1/2000-1/3200 sec",
      technique:
        "Pre-compose wider than instinct suggests, protect white feathers, start tracking before the first wave lifts, and tighten only after the flock opens into readable groups.",
    },
  },
  {
    id: "itinerary-north-loop-field-feeding",
    title: "North Loop field feeding",
    src: "./assets/generated/itinerary-hd/itinerary-07-north-loop-field-feeding.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of cranes and geese feeding in Bosque del Apache North Loop winter crop rows",
    caption:
      "Planning image for North Loop field feeding from a vehicle-blind position; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for feeding cranes, mixed geese, field-edge raptors, crop-row lift, and legal vehicle-blind work.",
    lesson: {
      supposedLocation:
        "North Loop fields, Farm Deck area, or another legal pullout with active winter crop-row feeding.",
      lens: "200-600mm, 200-800mm, or 100-500mm class zoom from the vehicle.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1000-1/2500 sec",
      technique:
        "Use the vehicle as a blind, include crop-row geometry when behavior is quiet, and watch field edges for raptors or flock lifts before moving position.",
    },
  },
  {
    id: "itinerary-south-crane-pond-landing-lane",
    title: "South Crane Pond landing lane",
    src: "./assets/generated/itinerary-hd/itinerary-08-south-crane-pond-landing-lane.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of cranes approaching a South Crane Pond landing lane at Bosque del Apache sunset",
    caption:
      "Planning image for South Crane Pond pullout landings; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for landing posture, wing shape, paired crane approach, reflection landings, and wide roost scale.",
    lesson: {
      supposedLocation:
        "South Crane Pond pullouts or the current active legal sunset approach lane.",
      lens: "Long wildlife zoom on a support that allows smooth panning.",
      focalLength: "400-700mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1600-1/2500 sec",
      technique:
        "Stand where the wind makes the landing lane predictable, leave space ahead of the bird, and hold a wider fallback frame as roost scale grows near dusk.",
    },
  },
  {
    id: "itinerary-learned-crane-pool-repeat",
    title: "Learned crane-pool repeat",
    src: "./assets/generated/itinerary-hd/itinerary-09-learned-crane-pool-repeat.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of sandhill crane behavior cues before takeoff at a Bosque del Apache sunrise pool",
    caption:
      "Planning image for a learned crane-pool repeat morning; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for behavior-cue sequences, head and neck focus, controlled bursts, cold air, and learned flight lanes.",
    lesson: {
      supposedLocation:
        "Best crane-pool repeat after two mornings of field notes, using the learned takeoff lane and legal position.",
      lens: "Long wildlife zoom with enough flexibility to widen if cranes shift position.",
      focalLength: "400-700mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1000-1/2000 sec",
      technique:
        "Watch posture before action: alert head angle, wing stretch, crouch, and run tension tell you when to start tracking before the bird leaves the water.",
    },
  },
  {
    id: "itinerary-willow-coyote-deck-wetland-compression",
    title: "Willow and Coyote deck wetland compression",
    src: "./assets/generated/itinerary-hd/itinerary-10-willow-coyote-deck-wetland-compression.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of compressed wetland layers through reeds at Bosque del Apache Willow and Coyote deck viewpoints",
    caption:
      "Planning image for Willow and Coyote deck wetland compression; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for duck portraits, reed layers, distant cranes, passing birds, and minimal-footprint deck composition.",
    lesson: {
      supposedLocation:
        "Willow Deck, Coyote Deck, or a similar public wetland viewpoint with layered reeds and open water.",
      lens: "100-400mm, 200-600mm, or 200-800mm depending on distance.",
      focalLength: "300-800mm",
      aperture: "f/8-f/11",
      shutterSpeed: "1/500-1/2000 sec",
      technique:
        "Compress habitat instead of chasing distance: align reeds, reflections, and clean head angles, then wait for a bird to move through the layered frame.",
    },
  },
  {
    id: "itinerary-sunset-motion-fallback-flight-deck",
    title: "Sunset motion fallback at Flight Deck",
    src: "./assets/generated/itinerary-hd/itinerary-11-sunset-motion-fallback-flight-deck.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of intentional panning blur with cranes or geese over Bosque del Apache water at sunset",
    caption:
      "Planning image for a sunset motion fallback; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for safe sharp frames, slow flock movement, 1/250 panning, 1/125 or 1/60 abstract wing blur, and flat-light fallback.",
    lesson: {
      supposedLocation:
        "Flight Deck if active, otherwise the crane pools or another legal pullout when sunset light goes flat.",
      lens: "200-600mm or 100-500mm zoom, handheld or on a support that allows smooth panning.",
      focalLength: "200-500mm",
      aperture: "f/6.3-f/9",
      shutterSpeed: "1/250, 1/125, or 1/60 sec for motion experiments after sharp safety frames.",
      technique:
        "Bank a sharp record frame first, then pan through the smoothest part of the motion and judge each file by head sharpness, wing smear, and background streak quality.",
    },
  },
  {
    id: "itinerary-south-loop-mist-and-reeds",
    title: "South Loop mist and reeds",
    src: "./assets/generated/itinerary-hd/itinerary-12-south-loop-mist-and-reeds.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of mist and reeds in a Bosque del Apache South Loop wetland before sunrise",
    caption:
      "Planning image for a South Loop mist and reeds morning; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for muted wetland weather, ducks or geese in habitat, raptor crossings, and slow layered compositions.",
    lesson: {
      supposedLocation:
        "South Loop wetland stretch or another legal pullout where mist, reeds, and gray water are strongest before full sun.",
      lens: "100-400mm or 200-600mm depending on how much habitat should stay in the frame.",
      focalLength: "100-400mm",
      aperture: "f/8",
      shutterSpeed: "1/500-1/1600 sec",
      technique:
        "When sunrise is muted, stop hunting for spectacle and make the weather visible: layer reeds, water, distant birds, and raptor movement into a slower frame.",
    },
  },
  {
    id: "itinerary-rio-viejo-desert-edge-details",
    title: "Rio Viejo desert-edge details",
    src: "./assets/generated/itinerary-hd/itinerary-13-rio-viejo-desert-edge-details.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of a roadrunner in Rio Viejo desert-edge habitat at Bosque del Apache",
    caption:
      "Planning image for Rio Viejo and Bike Trail desert-edge details; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for roadrunner or quail, sparrows and seedheads, tracks, frost, dust, cattails, and cottonwood texture.",
    lesson: {
      supposedLocation:
        "Rio Viejo Trail, Bike Trail area, visitor-center edge, or another quiet dry-margin habitat.",
      lens: "Long zoom for small wildlife, plus a normal zoom for habitat texture.",
      focalLength: "400-800mm for wildlife; 50-105mm for habitat details.",
      aperture: "f/6.3-f/8 for wildlife; f/8-f/11 for habitat details.",
      shutterSpeed: "1/1000-1/2000 sec for wildlife; 1/125-1/500 sec for still details.",
      technique:
        "Slow down after the morning spectacle, scan edges before stepping forward, and keep the background clean enough that a small subject does not disappear into brush.",
    },
  },
  {
    id: "itinerary-north-loop-field-staging-sunset",
    title: "North Loop field staging at sunset",
    src: "./assets/generated/itinerary-hd/itinerary-14-north-loop-field-staging-sunset.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of cranes staging in Bosque del Apache North Loop fields at warm sunset",
    caption:
      "Planning image for North Loop field staging at sunset; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for warm side-light field staging, feeding cranes, birds crossing crop rows, distant raptor or flock movement, and return-to-roost decisions.",
    lesson: {
      supposedLocation:
        "North Loop fields near Farm Deck or the current legal field edge with birds staging before roost return.",
      lens: "200-600mm or similar wildlife zoom from a vehicle-blind or legal pullout.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1000-1/2500 sec",
      technique:
        "Use warm side light and darker field backgrounds to separate birds from rows, then decide whether the field remains stronger than the return-to-roost route.",
    },
  },
  {
    id: "itinerary-final-learned-roost-sunrise",
    title: "Final learned roost sunrise",
    src: "./assets/generated/itinerary-hd/itinerary-15-final-learned-roost-sunrise.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of a final learned sandhill crane roost sunrise composition at Bosque del Apache",
    caption:
      "Planning image for the final learned roost sunrise; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for final learned composition, wind-aligned takeoff, clean background action, and wide roost context.",
    lesson: {
      supposedLocation:
        "Best current roost repeat, chosen from the week's actual bird movement and legal shooting position.",
      lens: "200-600mm, 200-800mm, or a similar long wildlife zoom.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1600-1/2500 sec",
      technique:
        "Use the week's notes to make one improved frame: cleaner background, better wind alignment, calmer timing, and deliberate room for water and mountain context.",
    },
  },
  {
    id: "itinerary-central-road-final-subject-gap-fill",
    title: "Central road final subject gap fill",
    src: "./assets/generated/itinerary-hd/itinerary-16-central-road-final-subject-gap-fill.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of a roadrunner-style final subject gap-fill opportunity near Bosque del Apache central road habitat",
    caption:
      "Planning image for central-road or deck-based final subject gap fill; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for missing-subject fill, quiet portrait work, environmental frames, roadside habitat details, and final checklist gaps.",
    lesson: {
      supposedLocation:
        "Visitor Center area, central road, strongest public deck, or roadside habitat where the remaining shot-list gap is plausible.",
      lens: "100-400mm, 200-600mm, or 200-800mm depending on subject distance.",
      focalLength: "300-700mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1000-1/2500 sec",
      technique:
        "Use the last mid-morning for gaps, not novelty: one clean small-subject portrait, one environmental frame, and one habitat detail before packing assumptions become memory.",
    },
  },
  {
    id: "itinerary-highway-one-crane-pool-finale",
    title: "Highway 1 crane-pool finale",
    src: "./assets/generated/itinerary-hd/itinerary-17-highway-one-crane-pool-finale.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of a final Highway 1 crane-pool sunset with cranes reflections and mountain bands",
    caption:
      "Planning image for the Highway 1 crane-pool finale; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for reflection landing finale, mountain-band silhouette, wide sky punctuation, late legal-light returns, and closing story frame.",
    lesson: {
      supposedLocation:
        "Highway 1 crane-pool finale or the current strongest legal last-light crane return.",
      lens: "Long wildlife zoom with enough range to include sky, water, and mountain bands.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1000-1/2500 sec",
      technique:
        "Make the closing frame intentional: hold a little more sky and water, protect reflection space, and let late silhouettes and mountain bands carry the trip story.",
    },
  },
  {
    id: "itinerary-departure-backup-lens-cleaning",
    title: "Departure backup and lens cleaning",
    src: "./assets/generated/itinerary-hd/itinerary-18-departure-backup-lens-cleaning.jpg",
    category: "Itinerary",
    alt:
      "Generated 1080p itinerary planning image of camera card backup lens cleaning and packed vehicle workflow after a Bosque del Apache trip",
    caption:
      "Planning image for Saturday departure backup, lens cleaning, field notes, and packed-cargo checks; not a hotel or field photograph.",
    rights:
      "AI-generated project planning image from this guide's itinerary notes. Use as expectation-setting only.",
    placement: ["Itinerary", "Visual Asset Manifest"],
    description:
      "Planning image for card backup verification, lens dust check, field notes, packed vehicle organization, and departure discipline.",
    lesson: {
      supposedLocation:
        "Socorro hotel room and vehicle staging area before departing, with any optional short loop treated as secondary to travel margin.",
      lens: "24-105mm or phone/documentary camera for workflow reference.",
      focalLength: "24-50mm",
      aperture: "f/4-f/5.6",
      shutterSpeed: "1/60-1/125 sec",
      technique:
        "Verify backups before memory fades, clean dust before travel, write final notes, hide gear in the packed vehicle, and skip the optional loop unless schedule margin is real.",
    },
  },
];

const photoWindowGeneratedVisuals = [
  {
    id: "photo-window-sunrise-roost-silhouettes",
    title: "Sunrise roost silhouettes and first movement",
    src: "./assets/generated/photo-windows-hd/window-01-sunrise-roost-silhouettes.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of sandhill crane roost silhouettes and first movement at Bosque del Apache sunrise",
    caption:
      "Planning image for sunrise roost silhouettes, first movement, and behavior cues; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for blue-hour crane roosts, cold mist, silhouettes, reflections, first movement, and the choice between quiet composition and action.",
    lesson: {
      supposedLocation:
        "Active crane roost pool, Highway 1 crane pools, or another legal pullout chosen before first light.",
      lens: "200-600mm, 200-800mm, or a similar long wildlife zoom.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/500-1/1600 sec",
      technique:
        "Arrive before first light, expose for sky and water, watch wing stretch and run cues, and decide early whether the frame is a quiet silhouette/reflection or a faster takeoff sequence.",
    },
  },
  {
    id: "photo-window-sunrise-goose-blastoff-exposure",
    title: "Sunrise snow-goose blastoff exposure",
    src: "./assets/generated/photo-windows-hd/window-02-sunrise-goose-blastoff-exposure.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of a wide snow-goose blastoff at Bosque del Apache sunrise",
    caption:
      "Planning image for sunrise snow-goose blastoff exposure control; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for wide pre-composition, white-feather highlight protection, first flock waves, and separated dawn goose groups.",
    lesson: {
      supposedLocation:
        "Flight Deck, Main Pool, or the current snow-goose roost after confirming bird position from the latest scout.",
      lens: "100-400mm or 200-600mm class zoom, with a wider camera ready if the flock erupts close.",
      focalLength: "100-300mm for the mass lift-off; 400-600mm when groups separate.",
      aperture: "f/7.1-f/9",
      shutterSpeed: "1/2000-1/3200 sec",
      technique:
        "Pre-compose wider than feels natural, protect white feathers from clipping, start tracking before the first wave lifts, and tighten only after the flock separates into readable groups.",
    },
  },
  {
    id: "photo-window-midmorning-field-behavior",
    title: "Mid-morning field behavior from the vehicle",
    src: "./assets/generated/photo-windows-hd/window-03-midmorning-field-behavior.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of cranes and geese feeding in Bosque del Apache crop rows from a vehicle-blind viewpoint",
    caption:
      "Planning image for mid-morning field behavior and vehicle-blind work; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for feeding behavior, crop-row geometry, field-edge raptors, and slower vehicle-blind decisions after peak sunrise.",
    lesson: {
      supposedLocation:
        "North Loop fields, Farm Deck area, or another legal pullout with active feeding birds.",
      lens: "200-600mm, 200-800mm, or 100-500mm class zoom from the vehicle.",
      focalLength: "300-600mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1000-1/2500 sec",
      technique:
        "Use the vehicle as a blind, include crop rows and mountains when behavior is quiet, and scan field edges for raptors or flock lift before changing position.",
    },
  },
  {
    id: "photo-window-midmorning-wetland-glare-reeds",
    title: "Mid-morning wetland glare and reed layers",
    src: "./assets/generated/photo-windows-hd/window-04-midmorning-wetland-glare-reeds.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of reeds ducks bright water and wetland deck glare at Bosque del Apache mid-morning",
    caption:
      "Planning image for mid-morning wetland glare, reeds, and deck composition; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for bright water, reed layers, duck reflections, distant cranes, clean head angles, and circular-polarizer tradeoffs.",
    lesson: {
      supposedLocation:
        "Dabbler Deck, Eagle Scout Deck, Willow Deck, Coyote Deck, or another public wetland viewpoint.",
      lens: "100-400mm, 200-600mm, or 200-800mm depending on distance and habitat scale.",
      focalLength: "200-600mm",
      aperture: "f/8-f/11",
      shutterSpeed: "1/500-1/2000 sec",
      technique:
        "Manage bright water before chasing birds: use reeds as layers, wait for clean head angles, and mount a circular polarizer only when glare control is worth the shutter-speed cost.",
    },
  },
  {
    id: "photo-window-sunset-crane-landing-lane",
    title: "Sunset crane landing lane",
    src: "./assets/generated/photo-windows-hd/window-05-sunset-crane-landing-lane.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of sandhill cranes landing into a warm Bosque del Apache sunset lane with reflections",
    caption:
      "Planning image for sunset crane landing lanes; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for wind-aligned landings, warm side light, head-and-shoulder focus, touchdown panning, and reflection space.",
    lesson: {
      supposedLocation:
        "Active crane pool, South Crane Pond, Highway 1 crane ponds, or the current legal return lane after late-day scouting.",
      lens: "Long wildlife zoom on a beanbag, monopod, or tripod/gimbal.",
      focalLength: "400-700mm",
      aperture: "f/6.3-f/8",
      shutterSpeed: "1/1600-1/2500 sec",
      technique:
        "Use wind direction to choose the landing lane, focus on the head and front shoulder, pan through touchdown, and keep enough room below the feet for reflection and splash.",
    },
  },
  {
    id: "photo-window-sunset-wide-roost-silhouette",
    title: "Sunset wide roost silhouette",
    src: "./assets/generated/photo-windows-hd/window-06-sunset-wide-roost-silhouette.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of a wide Bosque del Apache sunset roost silhouette with cranes water and mountains",
    caption:
      "Planning image for wide sunset roost silhouettes; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for wide sunset story frames, negative sky and water space, mountain bands, crane silhouettes, and closing-scene restraint.",
    lesson: {
      supposedLocation:
        "Broad crane pond, roost edge, or legal pullout where the place itself is stronger than a tight action frame.",
      lens: "100-400mm or the short end of a long wildlife zoom.",
      focalLength: "150-350mm",
      aperture: "f/7.1-f/9",
      shutterSpeed: "1/500-1/1600 sec",
      technique:
        "When action slows, widen the frame and balance sky, water, birds, and mountain bands. Let silhouettes and reflections carry the last-light story.",
    },
  },
  {
    id: "photo-window-weather-mist-high-key-water",
    title: "Weather fallback mist and high-key water",
    src: "./assets/generated/photo-windows-hd/window-07-weather-mist-high-key-water.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of mist high-key water reeds and birds in a gray Bosque del Apache weather fallback scene",
    caption:
      "Planning image for misty high-key weather fallback work; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for flat light, mist, high-key water, reeds, subtle silhouettes, and weather-driven composition.",
    lesson: {
      supposedLocation:
        "Any legal wetland pullout, deck, or roost edge where fog, mist, overcast, or pale water changes the original plan.",
      lens: "200-600mm, 100-500mm, or 100-400mm depending on how much habitat should remain visible.",
      focalLength: "200-500mm",
      aperture: "f/6.3-f/9",
      shutterSpeed: "1/500-1/1600 sec",
      technique:
        "Stop fighting flat light. Expose high-key without losing birds, use reeds and water texture as structure, and let mist simplify the frame.",
    },
  },
  {
    id: "photo-window-weather-panning-blur",
    title: "Weather fallback panning blur",
    src: "./assets/generated/photo-windows-hd/window-08-weather-panning-blur.jpg",
    category: "Photo Windows",
    alt:
      "Generated 1080p Photo Windows image of intentional panning blur with cranes over Bosque del Apache water in flat light",
    caption:
      "Planning image for slow-shutter weather fallback panning; not a field photograph from Bosque.",
    rights:
      "AI-generated project planning image from this guide's photo-window notes. Use as expectation-setting only.",
    placement: ["Photo Windows", "Visual Asset Manifest"],
    description:
      "Planning image for deliberate panning blur, slower shutter experiments, partially sharp head or body cues, and background streak quality.",
    lesson: {
      supposedLocation:
        "Crane pool, Flight Deck, or wetland edge after safe sharp frames are already captured and light turns flat.",
      lens: "200-600mm or 100-500mm zoom, handheld or on a support that allows smooth panning.",
      focalLength: "200-500mm",
      aperture: "f/6.3-f/9",
      shutterSpeed: "1/250, 1/125, or 1/60 sec after sharp safety frames.",
      technique:
        "Slow the shutter only after the safe frames are done, pan smoothly through the bird, and judge success by head sharpness, wing smear, and clean background streaks.",
    },
  },
];

const inspirationGeneratedVisuals = [
  {
    id: "inspiration-hd-dawn-crane-roost-silhouettes",
    title: "Dawn crane roost silhouettes",
    file: "inspiration-01-dawn-crane-roost-silhouettes.jpg",
    sceneType: "Dawn roost",
    description:
      "Wide predawn crane-roost scene with cold water, silhouettes, mist, and the mountain band as part of the composition.",
    location: "Highway 1 crane pools, North Loop roost pool, or the strongest legal dawn roost after scouting.",
    lens: "100-400mm or 200-600mm wildlife zoom.",
    focalLength: "150-350mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/250-1/500 sec before first movement",
    iso: "ISO 800-3200",
    technique:
      "Expose for sky and water color, let cranes read as clean silhouettes, and leave enough habitat for the image to feel like Bosque rather than a generic bird pond.",
  },
  {
    id: "inspiration-hd-cold-crane-breath",
    title: "Cold crane breath",
    file: "inspiration-02-cold-crane-breath.jpg",
    sceneType: "Cold morning behavior",
    description:
      "Medium telephoto crane group with frost, breath, and quiet first-light behavior at the water edge.",
    location: "Active crane roost or shallow wetland edge with legal roadside viewing.",
    lens: "200-600mm, 200-800mm, or similar long wildlife zoom.",
    focalLength: "400-600mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/500-1/1250 sec",
    iso: "ISO 1600-6400",
    technique:
      "Wait for calling, breath, and head-angle moments before the action starts; use the cold atmosphere as the subject instead of rushing into burst mode.",
  },
  {
    id: "inspiration-hd-crane-takeoff-splash",
    title: "Crane takeoff splash",
    file: "inspiration-03-crane-takeoff-splash.jpg",
    sceneType: "Takeoff action",
    description:
      "Sandhill crane starting its takeoff run through shallow water with wing shape, spray, and sunrise side light.",
    location: "Crane pool or roost edge where wind creates a predictable takeoff lane.",
    lens: "Long wildlife zoom with flexible framing.",
    focalLength: "500-700mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1600-1/2500 sec",
    iso: "ISO 800-3200",
    technique:
      "Track the run before the bird leaves the water, leave space in front of the motion, and avoid zooming so tight that the first wingbeat clips.",
  },
  {
    id: "inspiration-hd-crane-reflection-pair",
    title: "Crane reflection pair",
    file: "inspiration-04-crane-reflection-pair.jpg",
    sceneType: "Reflection portrait",
    description:
      "Quiet crane pair with full reflections and cottonwood/wetland habitat carrying the calm part of the story.",
    location: "Still wetland channel, crane pool edge, or deck viewpoint with clean reflective water.",
    lens: "100-400mm or 200-600mm wildlife zoom.",
    focalLength: "300-500mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/500-1/1000 sec",
    iso: "ISO 400-1600",
    technique:
      "Compose the reflection first, then wait for a small posture change. Protect the bottom edge so feet and reflected heads are not cut off.",
  },
  {
    id: "inspiration-hd-wide-predawn-roost-mountains",
    title: "Wide predawn roost and mountains",
    file: "inspiration-05-wide-predawn-roost-mountains.jpg",
    sceneType: "Environmental roost",
    description:
      "Broad blue-hour roost image that uses cranes, water, sky, and mountains as a layered place photograph.",
    location: "Any legal roost view where the mountain band and water are stronger than an individual bird.",
    lens: "70-200mm, 100-400mm, or the short end of a long zoom.",
    focalLength: "100-220mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/250-1/800 sec",
    iso: "ISO 800-3200",
    technique:
      "Resist over-tightening. Use bird bands, water color, and mountains as the design, then tighten only when behavior becomes the stronger photograph.",
  },
  {
    id: "inspiration-hd-snow-geese-pre-blastoff-roost",
    title: "Snow geese pre-blastoff roost",
    file: "inspiration-06-snow-geese-pre-blastoff-roost.jpg",
    sceneType: "Goose roost tension",
    description:
      "Dense snow-goose roost before launch, with white-flock texture, shallow water, and morning haze.",
    location: "Flight Deck, Main Pool, or current snow-goose roost confirmed by scouting.",
    lens: "100-400mm or 200-600mm wildlife zoom.",
    focalLength: "200-400mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/800-1/1600 sec before launch",
    iso: "ISO 800-3200",
    technique:
      "Frame the still flock before the eruption. Watch for raised heads and flock tension, and set exposure for white feathers before the action begins.",
  },
  {
    id: "inspiration-hd-first-wave-goose-lift",
    title: "First wave goose lift",
    file: "inspiration-07-first-wave-goose-lift.jpg",
    sceneType: "First flock wave",
    description:
      "The first low sheet of geese lifting from the roost, with water, mist, and wing rhythm still readable.",
    location: "Flight Deck, Main Pool, or a legal view of the active goose roost.",
    lens: "100-400mm or 200-600mm zoom.",
    focalLength: "150-350mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/2000-1/3200 sec",
    iso: "ISO 800-3200",
    technique:
      "Start wider than instinct suggests, pan with the first wave, and preserve enough water context for the viewer to feel the launch.",
  },
  {
    id: "inspiration-hd-mass-goose-blastoff-wide",
    title: "Mass goose blastoff wide",
    file: "inspiration-08-mass-goose-blastoff-wide.jpg",
    sceneType: "Flock spectacle",
    description:
      "Wide white-cloud blastoff with a full flock arc, refuge water, reeds, and mountains anchoring the spectacle.",
    location: "Flight Deck, Main Pool, or another active goose roost from a legal viewing position.",
    lens: "24-105mm, 70-200mm, or the wide end of a 100-400mm.",
    focalLength: "70-180mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/2000-1/3200 sec",
    iso: "ISO 800-3200",
    technique:
      "Choose the mass-shape photograph before the flock lifts. Keep the whole cloud and the refuge context rather than chasing one bird too early.",
  },
  {
    id: "inspiration-hd-overhead-goose-pattern",
    title: "Overhead goose pattern",
    file: "inspiration-09-overhead-goose-pattern.jpg",
    sceneType: "Graphic flock pattern",
    description:
      "Overhead geese against clean sky, useful for studying spacing, wing positions, and negative-space rhythm.",
    location: "Any legal pullout or deck when geese cross high overhead after a lift-off.",
    lens: "100-400mm or 200-600mm zoom.",
    focalLength: "300-500mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/2500-1/3200 sec",
    iso: "ISO 400-1600",
    technique:
      "Stop hunting for a single subject and treat the flock as pattern. Keep shutter speed high enough for wing detail and wait for clean spacing.",
  },
  {
    id: "inspiration-hd-minimal-goose-pastel-sky",
    title: "Minimal geese in pastel sky",
    file: "inspiration-10-minimal-goose-pastel-sky.jpg",
    sceneType: "Minimal sky frame",
    description:
      "Small separated group of geese in a pastel dawn sky, emphasizing restraint, timing, and clean negative space.",
    location: "Roost or field edge after the main flock separates into smaller groups.",
    lens: "100-400mm or long wildlife zoom.",
    focalLength: "350-600mm",
    aperture: "f/7.1-f/8",
    shutterSpeed: "1/2000-1/3200 sec",
    iso: "ISO 400-1600",
    technique:
      "Use small groups after the chaos. Place birds against clean sky and let the color gradient do the quiet work.",
  },
  {
    id: "inspiration-hd-evening-crane-final-approach",
    title: "Evening crane final approach",
    file: "inspiration-11-evening-crane-final-approach.jpg",
    sceneType: "Sunset fly-in",
    description:
      "Cranes descending into a warm roost lane with feet down, staggered positions, and reflective water.",
    location: "Active crane pool, South Crane Pond, or Highway 1 crane pool with legal sunset access.",
    lens: "200-600mm, 200-800mm, or similar long zoom.",
    focalLength: "400-650mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1600-1/2500 sec",
    iso: "ISO 800-3200",
    technique:
      "Pick a landing lane based on wind, pre-frame open air and water below the birds, and pan through the legs-down glide.",
  },
  {
    id: "inspiration-hd-paired-crane-landing-side-light",
    title: "Paired crane landing side light",
    file: "inspiration-12-paired-crane-landing-side-light.jpg",
    sceneType: "Paired landing",
    description:
      "Two cranes landing in warm side light, built around synchronized wing shape and waterline context.",
    location: "Wind-aligned crane landing lane at an active sunset pool.",
    lens: "Long wildlife zoom on beanbag, monopod, or gimbal.",
    focalLength: "500-700mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/2000-1/2500 sec",
    iso: "ISO 800-3200",
    technique:
      "Track the lead bird but keep enough width for the second crane. The keeper is wing shape plus spacing, not maximum subject size.",
  },
  {
    id: "inspiration-hd-crane-family-landing-group",
    title: "Crane family landing group",
    file: "inspiration-13-crane-family-landing-group.jpg",
    sceneType: "Family behavior",
    description:
      "Small crane family or group landing together, useful for behavior, spacing, and storytelling beyond single-bird action.",
    location: "Crane pool, roost edge, or field-adjacent landing zone after sunset scouting.",
    lens: "200-600mm or 100-500mm wildlife zoom.",
    focalLength: "350-550mm",
    aperture: "f/7.1-f/8",
    shutterSpeed: "1/1600-1/2500 sec",
    iso: "ISO 800-3200",
    technique:
      "Widen slightly for groups. Preserve the relationship among birds and avoid cutting off the trailing subject during the landing sequence.",
  },
  {
    id: "inspiration-hd-crane-touchdown-reflection",
    title: "Crane touchdown reflection",
    file: "inspiration-14-crane-touchdown-reflection.jpg",
    sceneType: "Touchdown reflection",
    description:
      "Single crane touching down in copper water with reflection, splash, and full wing posture.",
    location: "Calm crane-pool edge with clean sunset water and predictable landing direction.",
    lens: "Long wildlife zoom.",
    focalLength: "500-700mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/2000-1/2500 sec",
    iso: "ISO 800-3200",
    technique:
      "Keep the bird isolated and leave reflection room. The moment is the instant feet touch, not only the glide above the pool.",
  },
  {
    id: "inspiration-hd-wide-dusk-crane-return",
    title: "Wide dusk crane return",
    file: "inspiration-15-wide-dusk-crane-return.jpg",
    sceneType: "Dusk roost return",
    description:
      "Wide dusk return with crane lines, glowing water, mountains, and the end-of-day refuge mood.",
    location: "Broad crane-pool view or legal pullout where the roost and mountain bands align.",
    lens: "70-200mm, 100-400mm, or short end of a wildlife zoom.",
    focalLength: "100-250mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/500-1/1600 sec",
    iso: "ISO 800-3200",
    technique:
      "When individual action slows, widen the frame and let flock lines, water color, and mountains finish the day.",
  },
  {
    id: "inspiration-hd-farm-field-crane-feeding",
    title: "Farm-field crane feeding",
    file: "inspiration-16-farm-field-crane-feeding.jpg",
    sceneType: "Field feeding",
    description:
      "Cranes feeding in managed winter crop rows, with field geometry and mountains adding structure.",
    location: "North Loop fields, Farm Deck area, or another legal vehicle-blind field position.",
    lens: "200-600mm, 100-500mm, or 200-800mm zoom.",
    focalLength: "300-600mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1000-1/2000 sec",
    iso: "ISO 400-1600",
    technique:
      "Use rows and spacing when behavior is quiet. Stay with the vehicle-blind approach and do not walk birds off food.",
  },
  {
    id: "inspiration-hd-mixed-geese-cranes-field-mountains",
    title: "Mixed geese and cranes in fields",
    file: "inspiration-17-mixed-geese-cranes-field-mountains.jpg",
    sceneType: "Mixed flock field scene",
    description:
      "Snow geese and cranes feeding in a winter field, with mountains and cottonwoods explaining the setting.",
    location: "North Loop or managed field edge where mixed flocks are feeding from legal pullouts.",
    lens: "100-400mm or 200-600mm wildlife zoom.",
    focalLength: "200-450mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/1000-1/2000 sec",
    iso: "ISO 400-1600",
    technique:
      "Layer species, field rows, and mountains. This is a habitat-and-behavior frame, so do not crop away the place.",
  },
  {
    id: "inspiration-hd-harrier-field-edge-hunt",
    title: "Harrier field-edge hunt",
    file: "inspiration-18-harrier-field-edge-hunt.jpg",
    sceneType: "Raptor field edge",
    description:
      "Northern-harrier-style raptor low over winter field habitat, broadening the set beyond cranes and geese.",
    location: "Field margins, marsh edges, or North Loop habitat where raptors quarter low.",
    lens: "Long wildlife zoom with responsive tracking.",
    focalLength: "500-700mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/2000-1/3200 sec",
    iso: "ISO 800-3200",
    technique:
      "Pre-focus on a clean field-edge band and wait for the raptor to bank; avoid chasing it across cluttered backgrounds.",
  },
  {
    id: "inspiration-hd-field-liftoff-dust",
    title: "Field lift-off dust",
    file: "inspiration-19-field-liftoff-dust.jpg",
    sceneType: "Field movement and dust",
    description:
      "Cranes and geese lifting from crop rows with dust, warm light, and field geometry.",
    location: "Legal field pullout where feeding birds begin moving toward evening roosts.",
    lens: "100-400mm or 200-600mm zoom.",
    focalLength: "200-450mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/1600-1/2500 sec",
    iso: "ISO 400-1600",
    technique:
      "Watch the whole field, not one bird. When dust and wing movement begin, include the rows and backlight instead of zooming away the story.",
  },
  {
    id: "inspiration-hd-vehicle-blind-field-context",
    title: "Vehicle-blind field context",
    file: "inspiration-20-vehicle-blind-field-context.jpg",
    sceneType: "Fieldcraft context",
    description:
      "Legal pullout and vehicle-blind context showing how field photography often happens without disturbing feeding birds.",
    location: "Auto Tour Loop pullout beside active fields, with birds kept distant and undisturbed.",
    lens: "24-105mm or 70-200mm for fieldcraft context.",
    focalLength: "50-120mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/250-1/1000 sec",
    iso: "ISO 200-800",
    technique:
      "Use the vehicle as a blind and show safe distance. The photograph teaches behavior and ethics as much as subject matter.",
  },
  {
    id: "inspiration-hd-duck-portrait-reeds-reflection",
    title: "Duck portrait in reeds",
    file: "inspiration-21-duck-portrait-reeds-reflection.jpg",
    sceneType: "Duck portrait",
    description:
      "Quiet duck portrait with reed framing, clean reflection, and morning water color.",
    location: "Dabbler Deck, Eagle Scout Deck, Willow Deck, or another public wetland edge.",
    lens: "200-600mm, 100-500mm, or 200-800mm wildlife zoom.",
    focalLength: "500-800mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/500-1/1600 sec",
    iso: "ISO 400-1600",
    technique:
      "Use ducks to practice bright-water exposure and head-angle patience after the main sunrise action has passed.",
  },
  {
    id: "inspiration-hd-wetland-layers-through-reeds",
    title: "Wetland layers through reeds",
    file: "inspiration-22-wetland-layers-through-reeds.jpg",
    sceneType: "Layered wetland composition",
    description:
      "Compressed reeds, water, distant birds, cottonwoods, and mountains for a slower place-based wetland frame.",
    location: "Willow Deck, Coyote Deck, Dabbler Deck, or a legal wetland pullout with layered reeds.",
    lens: "100-400mm or 200-600mm zoom.",
    focalLength: "200-500mm",
    aperture: "f/8-f/11",
    shutterSpeed: "1/500-1/1600 sec",
    iso: "ISO 400-1600",
    technique:
      "Compose through habitat and wait for birds to become punctuation. This is about layering, not filling the frame.",
  },
  {
    id: "inspiration-hd-cottonwood-cattail-habitat",
    title: "Cottonwood and cattail habitat",
    file: "inspiration-23-cottonwood-cattail-habitat.jpg",
    sceneType: "Habitat detail",
    description:
      "Winter cattails, cottonwoods, reflective water, and distant birds as an environmental detail image.",
    location: "Wetland edge, boardwalk, deck, or roadside habitat where plants and water carry the scene.",
    lens: "70-200mm, 100-400mm, or 24-105mm for wider habitat.",
    focalLength: "70-180mm",
    aperture: "f/8-f/11",
    shutterSpeed: "1/125-1/500 sec",
    iso: "ISO 200-800",
    technique:
      "Make a place image when wildlife is quiet. Use repeating cattails and cottonwood structure to keep the portfolio from becoming only portraits.",
  },
  {
    id: "inspiration-hd-desert-edge-roadrunner",
    title: "Desert-edge roadrunner",
    file: "inspiration-24-desert-edge-roadrunner.jpg",
    sceneType: "Desert-edge subject",
    description:
      "Roadrunner-style desert-edge portrait with scrub, sandy ground, mountains, and dry winter texture.",
    location: "Visitor Center area, Rio Viejo Trail edge, Desert Arboretum, or another legal dry-margin habitat.",
    lens: "Long zoom for shy small wildlife.",
    focalLength: "500-800mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1000-1/2000 sec",
    iso: "ISO 400-1600",
    technique:
      "Move slowly, choose a clean background before the bird appears, and keep enough habitat to show the dry-side Bosque story.",
  },
  {
    id: "inspiration-hd-seedhead-songbird-field-edge",
    title: "Seedhead songbird field edge",
    file: "inspiration-25-seedhead-songbird-field-edge.jpg",
    sceneType: "Small-bird detail",
    description:
      "Small winter bird among seedheads with soft wetland and mountain context behind it.",
    location: "Field margins, visitor-center edges, Rio Viejo, or quiet brushy habitat after the morning spectacle.",
    lens: "Long wildlife zoom or 500mm-plus setup.",
    focalLength: "500-800mm",
    aperture: "f/6.3-f/8",
    shutterSpeed: "1/1000-1/2000 sec",
    iso: "ISO 400-1600",
    technique:
      "Treat small subjects as real targets. Wait for a clean perch, visible eye, and seedhead frame instead of forcing a busy brush photograph.",
  },
  {
    id: "inspiration-hd-high-key-mist-waterbirds",
    title: "High-key mist waterbirds",
    file: "inspiration-26-high-key-mist-waterbirds.jpg",
    sceneType: "Weather fallback",
    description:
      "High-key mist, pale water, cranes, and geese for a gray-day image where weather becomes the subject.",
    location: "Any legal wetland pullout or deck where mist, fog, or pale water simplifies the scene.",
    lens: "100-400mm or 200-600mm zoom.",
    focalLength: "200-500mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/500-1/1600 sec",
    iso: "ISO 800-3200",
    technique:
      "Expose high-key without losing bird shape, use reeds as structure, and let mist reduce the frame instead of fighting flat light.",
  },
  {
    id: "inspiration-hd-panning-crane-motion-blur",
    title: "Panning crane motion blur",
    file: "inspiration-27-panning-crane-motion-blur.jpg",
    sceneType: "Intentional motion",
    description:
      "Slow-shutter panning frame with partially sharp crane bodies, wing blur, and horizontal background streaks.",
    location: "Crane pool, Flight Deck, or wetland edge after safe sharp frames are already made.",
    lens: "200-600mm or 100-500mm zoom on a support that pans smoothly.",
    focalLength: "300-500mm",
    aperture: "f/7.1-f/11",
    shutterSpeed: "1/60-1/125 sec",
    iso: "ISO 100-800",
    technique:
      "Use this only after the safe frames. Pan through the bird, judge the result by head/body hints and background streak quality, and accept a low keeper rate.",
  },
  {
    id: "inspiration-hd-sunset-crane-silhouettes",
    title: "Sunset crane silhouettes",
    file: "inspiration-28-sunset-crane-silhouettes.jpg",
    sceneType: "Graphic silhouette",
    description:
      "Cranes crossing a warm sunset sky with low water, mountains, and reed silhouettes.",
    location: "Roost approach or legal pullout with clean birds against the sunset sky.",
    lens: "100-400mm or 200-600mm zoom.",
    focalLength: "200-450mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/1000-1/2500 sec",
    iso: "ISO 400-1600",
    technique:
      "Expose for the sky, not the bird. Make sure crane shapes separate cleanly so the silhouette remains readable.",
  },
  {
    id: "inspiration-hd-flight-formations-mountains",
    title: "Flight formations and mountains",
    file: "inspiration-29-flight-formations-mountains.jpg",
    sceneType: "Formation landscape",
    description:
      "Crane and goose formations over layered New Mexico mountains and refuge habitat.",
    location: "Open field, roost approach, or deck where flight lines cross a clean mountain background.",
    lens: "70-200mm, 100-400mm, or short end of a wildlife zoom.",
    focalLength: "100-300mm",
    aperture: "f/7.1-f/9",
    shutterSpeed: "1/1600-1/2500 sec",
    iso: "ISO 400-1600",
    technique:
      "Use formations as design. Choose a lens that preserves the mountain stack instead of isolating one bird from the place.",
  },
  {
    id: "inspiration-hd-blue-hour-moon-cranes",
    title: "Blue-hour moon cranes",
    file: "inspiration-30-blue-hour-moon-cranes.jpg",
    sceneType: "Blue-hour mood",
    description:
      "Blue-hour cranes, moon, still water, and mountain silhouettes as a quiet closing image.",
    location: "Legal roost view or wetland edge within official access hours.",
    lens: "70-200mm, 100-400mm, or normal-to-short telephoto zoom.",
    focalLength: "100-250mm",
    aperture: "f/5.6-f/8",
    shutterSpeed: "1/125-1/500 sec",
    iso: "ISO 1600-6400",
    technique:
      "Stay within legal hours and let the last image be restrained: moon placement, silhouettes, reflections, and a stable horizon matter more than action.",
  },
].map((item) => ({
  id: item.id,
  title: item.title,
  src: `./assets/generated/inspiration-hd/${item.file}`,
  category: "Inspiration",
  alt: `Generated 1080p Bosque del Apache inspiration image of ${item.title.toLowerCase()}`,
  caption: `Planning image for ${item.sceneType.toLowerCase()}; not a field photograph from Bosque.`,
  rights:
    "AI-generated project inspiration/planning photo from this guide's Bosque del Apache shot descriptions. Use as expectation-setting only.",
  placement: ["Inspiration", "Media", "Visual Asset Manifest"],
  description: item.description,
  sceneType: item.sceneType,
  lesson: {
    supposedLocation: item.location,
    lens: item.lens,
    focalLength: item.focalLength,
    aperture: item.aperture,
    shutterSpeed: item.shutterSpeed,
    iso: item.iso,
    technique: item.technique,
  },
}));

const practiceTechniqueVisuals = [
  {
    id: "practice-hd-camera-setup-baseline",
    parentLessonId: "practice-camera-setup",
    title: "Camera setup baseline",
    src: "./assets/generated/practice-hd/practice-01-camera-setup-baseline.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of cameras lenses batteries cards gloves and three setup states staged before a Bosque del Apache trip",
    caption:
      "Practice planning image for building flight, perched/static, and silhouette camera setup states; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for camera setup baseline, two camera roles, batteries, cards, gloves, layers, and reset rehearsal.",
  },
  {
    id: "practice-hd-exposure-modes",
    parentLessonId: "practice-exposure-modes",
    title: "Exposure modes in changing backgrounds",
    src: "./assets/generated/practice-hd/practice-02-exposure-modes-changing-backgrounds.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of a long-lens exposure mode drill with a bird crossing bright water dark reeds and pale sky",
    caption:
      "Practice planning image for comparing exposure modes across changing backgrounds; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for Aperture Priority, Shutter Priority, Manual with Auto ISO, and full Manual practice against changing backgrounds.",
  },
  {
    id: "practice-hd-shutter-speed-ladder",
    parentLessonId: "practice-shutter-speed",
    title: "Shutter speed ladder practice",
    src: "./assets/generated/practice-hd/practice-03-shutter-speed-ladder.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of slow-shutter bird panning with sharp head cue and motion-blurred wings over water",
    caption:
      "Practice planning image for shutter-speed ladder and panning blur practice; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for frozen action, controlled wing blur, and slow-shutter panning experiments after safe frames.",
  },
  {
    id: "practice-hd-handholding-body-mechanics",
    parentLessonId: "practice-handholding",
    title: "Handholding and body mechanics",
    src: "./assets/generated/practice-hd/practice-04-handholding-body-mechanics.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of a photographer handholding a long wildlife lens with correct stance while tracking a bird",
    caption:
      "Practice planning image for handholding stance, lens support, and smooth subject acquisition; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for feet-set stance, hip rotation, left-hand lens support, wider acquisition, and short controlled bursts.",
  },
  {
    id: "practice-hd-support-choices",
    parentLessonId: "practice-support",
    title: "Support choices for field positions",
    src: "./assets/generated/practice-hd/practice-05-support-choices.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of vehicle beanbag tripod gimbal monopod and long lens support choices near a wetland pullout",
    caption:
      "Practice planning image for choosing beanbag, tripod/gimbal, monopod, or handheld support by field position; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for matching vehicle loop, pool wait, deck footprint, and quick-pivot situations to the right support.",
  },
  {
    id: "practice-hd-white-birds-exposure",
    parentLessonId: "practice-white-birds-exposure",
    title: "White birds and exposure detail",
    src: "./assets/generated/practice-hd/practice-06-white-birds-exposure.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of white birds with preserved feather detail against dark reeds and bright Bosque-like water",
    caption:
      "Practice planning image for protecting white-bird highlight detail; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for preserving snow-goose feather texture across dark reeds, bright water, and pale sky.",
  },
  {
    id: "practice-hd-behavior-prediction",
    parentLessonId: "practice-behavior-prediction",
    title: "Behavior prediction before takeoff",
    src: "./assets/generated/practice-hd/practice-07-behavior-prediction.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of sandhill cranes showing neck stretch crouch wing tension and prelaunch behavior cues",
    caption:
      "Practice planning image for reading behavior cues before takeoff; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for recognizing neck stretch, crouch, wing tension, alert posture, wind direction, and launch-lane timing.",
  },
  {
    id: "practice-hd-cold-dust-workflow",
    parentLessonId: "practice-cold-dust-workflow",
    title: "Cold and dust predawn workflow",
    src: "./assets/generated/practice-hd/practice-08-cold-dust-workflow.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of predawn cold and dust workflow with mounted long lens gloves warm batteries blower and organized vehicle cargo",
    caption:
      "Practice planning image for predawn cold, dust, battery, glove, and cleaning workflow; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for being ready within two minutes of parking, avoiding cold lens changes, and keeping weather/cleaning tools reachable.",
  },
  {
    id: "practice-hd-readiness-checklist",
    parentLessonId: "practice-readiness-checklist",
    title: "Pre-trip readiness checklist",
    src: "./assets/generated/practice-hd/practice-09-readiness-checklist.jpg",
    category: "Practice",
    alt:
      "Generated 1080p Practice teaching image of an edited field bag two camera roles backup drive gloves water and closed notebook for pre-trip readiness",
    caption:
      "Practice planning image for final pre-trip readiness, backup workflow, and packed-bag edit; not a field photograph from Bosque.",
    rights:
      "AI-generated project training image from this guide's practice lesson notes. Use as expectation-setting only.",
    placement: ["Practice", "Visual Asset Manifest"],
    description:
      "Practice planning image for proving readiness with local bird sessions, backup discipline, two camera roles, and a final packed-bag edit.",
  },
];

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
        `${example}. Standalone training frame separated from the ${visual.title} contact sheet; not a field photograph from Bosque.`,
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
    ...regeneratedGalleryVisuals,
    ...itineraryGeneratedVisuals,
    ...photoWindowGeneratedVisuals,
    ...inspirationGeneratedVisuals,
    ...practiceTechniqueVisuals,
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

const practiceTechniqueLessons = Object.fromEntries(
  practiceTechniqueVisuals.map((visual) => [
    visual.id,
    practiceLessons[visual.parentLessonId],
  ])
);

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

const itineraryLessons = Object.fromEntries(
  itineraryGeneratedVisuals.map((visual) => [visual.id, visual.lesson])
);

const photoWindowLessons = Object.fromEntries(
  photoWindowGeneratedVisuals.map((visual) => [visual.id, visual.lesson])
);

const inspirationLessons = Object.fromEntries(
  inspirationGeneratedVisuals.map((visual) => [visual.id, visual.lesson])
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
  ...itineraryLessons,
  ...photoWindowLessons,
  ...inspirationLessons,
  ...practiceLessons,
  ...practiceTechniqueLessons,
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
    description:
      "Use this as the official starting point for refuge logistics: visitor center context, access basics, fees, hours, restrooms, and the refuge's own visitor guidance. It is the authority to recheck before relying on any older field note.",
  },
  {
    topic: "Official refuge",
    title: "USFWS Auto Tour",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/activities/auto-tour",
    checked: checkedDate,
    description:
      "This supports the driving-loop parts of the guide: road behavior, Auto Tour Loop expectations, and how photographers move between ponds, fields, decks, and pullouts without treating the map as a hiking route.",
  },
  {
    topic: "Official refuge",
    title: "USFWS Rules and Policies",
    url: "https://www.fws.gov/refuge/bosque-del-apache/visit-us/rules-policies",
    checked: checkedDate,
    description:
      "Use this for the non-negotiable field rules: closed areas, drones, harassment, off-road driving, camping, overnight parking, and other access limits. It keeps the photography plan grounded in legal and ethical refuge behavior.",
  },
  {
    topic: "Official refuge",
    title: "USFWS Species and Seasons",
    url: "https://www.fws.gov/refuge/bosque-del-apache/species",
    checked: checkedDate,
    description:
      "This is the official seasonal wildlife reference for the guide. It supports the early-winter timing logic, the expected crane and goose emphasis, and the reminder that actual bird locations still vary with water, farming, weather, and disturbance.",
  },
  {
    topic: "Field guide",
    title: "Cornell All About Birds - Bosque del Apache",
    url: "https://www.allaboutbirds.org/news/bosque-del-apache-new-mexico-a-bird-photographers-playground/",
    checked: checkedDate,
    description:
      "Cornell's photographer-oriented Bosque article is useful for stable fieldcraft: wind and light alignment, manual exposure, panning, lens variety, and why Main Pool conditions can change. It is not used as a current logistics authority.",
  },
  {
    topic: "Field guide",
    title: "The Quite Wild - Bird Photography for Beginners at Bosque del Apache",
    url: "https://thequitewild.com/bird-photography-for-beginners-bosque-del-apache/",
    checked: checkedDate,
    description:
      "This recent beginner field guide helps translate Bosque into practical camera decisions: lens classes, focus approach, exposure, settings, and approachable locations. The logistics still need to be cross-checked against official refuge pages.",
  },
  {
    topic: "Field guide",
    title: "Evie Wilder - Sandhill Crane Migration",
    url: "https://eviewilder.com/blog/sandhill-crane-migration-bosque-del-apache-winter/",
    checked: checkedDate,
    description:
      "This field report supports the crane-focused parts of the plan, especially cold-weather preparation, long-lens use, shutter speeds, autofocus, and the feel of winter migration work at Bosque.",
  },
  {
    topic: "Gear specs",
    title: "Sony support lens specifications",
    url: "https://www.sony.com/electronics/support/lenses-e-mount-lenses",
    checked: checkedDate,
    description:
      "This is the broad Sony lens specification entry point used to verify product pages and manufacturer data for E-mount lenses in the gear list. It helps keep size, weight, compatibility, and support claims tied to official sources.",
  },
  {
    topic: "Gear specs",
    title: "Sony SEL20TC 2x Teleconverter specifications",
    url: "https://www.sony.com/lr/electronics/camera-lenses/sel20tc/specifications",
    checked: gearCheckedDate,
    description:
      "This source verifies the Sony 2x teleconverter entry, including the dimensions and weight used in the Gear comparison charts. It also supports the compatibility notes around long Sony wildlife lenses.",
  },
  {
    topic: "Gear specs",
    title: "Canon RF lens specifications",
    url: "https://www.usa.canon.com/shop/cameras/lenses",
    checked: checkedDate,
    description:
      "This Canon lens catalog is the official entry point for RF lens specifications and product pages. It supports the Canon-side gear comparisons and helps separate manufacturer specs from retailer summaries.",
  },
  {
    topic: "Gear specs",
    title: "Canon Extender RF 2x specifications",
    url: "https://www.usa.canon.com/shop/p/extender-rf2x",
    checked: gearCheckedDate,
    description:
      "This official Canon product page verifies the RF 2x extender's size, weight, and compatibility context for the Gear page. It is the reference behind the teleconverter scale entry and comparison notes.",
  },
  {
    topic: "Camera body",
    title: "Sony ILCE-7RM6 / Alpha 7R VI specifications",
    url: "https://www.sony.com/electronics/support/e-mount-body-ilce-7-series/ilce-7rm6/specifications",
    checked: gearCheckedDate,
    description:
      "This is the official Sony body-spec source for the Alpha 7R VI assumptions in the guide. It supports camera-body context for resolution, handling, and system planning rather than refuge-specific field logistics.",
  },
  {
    topic: "Camera body",
    title: "Sony ILCE-1M2 / Alpha 1 II specifications",
    url: "https://www.sony.com/electronics/support/e-mount-body-ilce-1-series/ilce-1m2/specifications",
    checked: gearCheckedDate,
    description:
      "This official Sony support page verifies the Alpha 1 II body comparison, including its 50.1 MP stacked sensor, card slots, NP-FZ100 battery, weight, autofocus recognition targets, and action-oriented role.",
  },
  {
    topic: "Camera body",
    title: "Canon EOS R5 Mark II product specifications",
    url: "https://www.usa.canon.com/shop/p/eos-r5-mark-ii",
    checked: gearCheckedDate,
    description:
      "This official Canon product page verifies the R5 Mark II body comparison, including the 45 MP stacked sensor, 30 fps electronic-shutter positioning, LP-E6P battery, card-slot ecosystem, and wildlife autofocus context.",
  },
  {
    topic: "Camera body",
    title: "Canon EOS R6 Mark III product specifications",
    url: "https://www.usa.canon.com/shop/p/eos-r6-mark-iii",
    checked: gearCheckedDate,
    description:
      "This official Canon product page verifies the current R6 Mark body requested for comparison: the EOS R6 Mark III, its 32.5 MP sensor, 40 fps action claim, pre-continuous shooting note, LP-E6P battery, and card slots.",
  },
  {
    topic: "Backpack fit",
    title: "Think Tank Photo BackLight Long Lens",
    url: "https://www.thinktankphoto.com/products/backlight-long-lens",
    checked: gearCheckedDate,
    description:
      "This official product page supports the long-lens backpack recommendation, especially the claim that the bag is designed around a mounted 600mm f/4 or 800mm f/5.6-class rig with room for field accessories.",
  },
  {
    topic: "Backpack fit",
    title: "Gura Gear Kiboko V2.0 30L",
    url: "https://guragear.com/products/kiboko-v2-0-30l",
    checked: gearCheckedDate,
    description:
      "This official product page supports the lightweight wildlife-travel backpack recommendation, including super-telephoto fit language, two-body/multi-lens capacity notes, rain cover, weight, and the no-laptop-sleeve caveat.",
  },
  {
    topic: "Backpack fit",
    title: "Shimoda Action X50 V2 Backpack",
    url: "https://shimodadesigns.com/action-x50-v2-backpack-black/",
    checked: gearCheckedDate,
    description:
      "This official product page supports the modular adventure-backpack comparison. It is included for hiking comfort, core-unit flexibility, laptop/tablet carry, and mixed personal/camera packing rather than as the strongest mounted super-telephoto option.",
  },
  {
    topic: "Backpack fit",
    title: "Lowepro Pro Trekker BP 650 AW II",
    url: "https://www.lowepro.com/us-en/pro-trekker-bp-650-aw-ii-lp37481-pww/",
    checked: gearCheckedDate,
    description:
      "This official product page supports the large expedition backpack recommendation, especially its wildlife-assignment positioning, up-to-800mm fit language, modular carry, tripod attachment, and support-gear capacity.",
  },
  {
    topic: "Backpack fit",
    title: "Vanguard ALTA SKY 68",
    url: "https://www.vanguardworld.co.uk/products/alta-sky-68",
    checked: gearCheckedDate,
    description:
      "This official product page supports the maximum-capacity backpack recommendation, including the 34L volume, attached 800mm f/5.6-class super-telephoto language, additional lens capacity, and 16-inch laptop/tablet carry.",
  },
  {
    topic: "Sigma E-mount gear",
    title: "Sigma 60-600mm F4.5-6.3 DG DN OS | Sports",
    url: "https://www.sigma-global.com/en/lenses/s023_60_600_45_63/",
    checked: gearCheckedDate,
    description:
      "This official Sigma page verifies the 60-600mm Sports lens data used in the gear tables and scale charts. It supports the superzoom tradeoff discussion around reach, weight, handling, and flexibility.",
  },
  {
    topic: "Sigma E-mount gear",
    title: "Sigma 150-600mm F5-6.3 DG DN OS | Sports",
    url: "https://www.sigma-global.com/en/lenses/s021_150_600_5_63/",
    checked: gearCheckedDate,
    description:
      "This official Sigma page supports the 150-600mm Sports lens entry, including size, weight, focal range, and field handling assumptions. It is used for gear comparison rather than photography advice by itself.",
  },
  {
    topic: "Sigma E-mount gear",
    title: "Sigma 500mm F5.6 DG DN OS | Sports",
    url: "https://www.sigma-global.com/en/lenses/s024_500_56/",
    checked: gearCheckedDate,
    description:
      "This manufacturer page verifies the Sigma 500mm prime data in the comparison set. It supports the reach-versus-portability discussion for a lighter fixed wildlife lens option.",
  },
  {
    topic: "Sigma teleconverters",
    title: "Sigma TELE CONVERTER TC-1411 / TC-2011 compatibility",
    url: "https://www.sigma-global.com/en/support/download/SIGMA-TELE-CONVERTER-TC1411_TC2011_EN_240220.pdf",
    checked: gearCheckedDate,
    description:
      "This compatibility PDF is the source for Sigma teleconverter support notes. It keeps the guide from assuming teleconverter behavior across lenses where the manufacturer only supports specific combinations.",
  },
  {
    topic: "Safari lens guidance",
    title: "Digital Camera World - Best lenses for safari photography in 2026",
    url: "https://www.digitalcameraworld.com/buying-guides/best-lenses-for-safari-photography",
    checked: checkedDate,
    description:
      "This broader wildlife-lens roundup is useful as an outside comparison point for long-lens travel decisions. It helps sanity-check the Bosque/Tanzania gear discussion, but manufacturer pages remain the source for specs.",
  },
  {
    topic: "Safari lens guidance",
    title: "Drew Sproule - African photo safari gear",
    url: "https://drewsproule.com/blog/the-best-camera-gear-to-pack-for-an-african-photo-safari",
    checked: checkedDate,
    description:
      "This field-oriented safari gear article supports the travel-wildlife side of the gear conversation: how much reach to carry, when flexibility matters, and why handling may beat maximum focal length in real conditions.",
  },
  {
    topic: "Lodging photos",
    title: "Holiday Inn Express Socorro Gallery",
    url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/socorro/socnm/hoteldetail/gallery",
    checked: checkedDate,
    description:
      "This official hotel gallery is used as the visual and booking-reference link for the Socorro Holiday Inn Express option. It lets readers inspect the actual property photos without the site republishing hotel imagery.",
  },
  {
    topic: "Lodging photos",
    title: "Comfort Inn & Suites Socorro",
    url: "https://www.choicehotels.com/en-xl/new-mexico/socorro/comfort-inn-hotels/nm126",
    checked: checkedDate,
    description:
      "This direct property page supports the Comfort Inn lodging option and gives readers the authoritative place to recheck room photos, amenities, current rates, taxes, breakfast, parking, and cancellation terms.",
  },
  {
    topic: "Lodging photos",
    title: "Best Western Socorro Hotel & Suites",
    url: "https://www.bestwestern.com/en_US/book/socorro/hotel-rooms/best-western-socorro-hotel-suites/propertyCode.32105.html",
    checked: checkedDate,
    description:
      "This direct Best Western page is used for the Socorro lodging comparison and property-photo reference. It should be checked before booking because rates, room types, and cancellation details can change quickly.",
  },
  {
    topic: "Lodging photos",
    title: "Fairfield by Marriott Inn & Suites Los Lunas Photos",
    url: "https://www.marriott.com/en-gb/hotels/abqlf-fairfield-inn-and-suites-los-lunas/photos/",
    checked: checkedDate,
    description:
      "This Marriott photo page supports the Los Lunas backup lodging option, especially if a reader wants to stay closer to Albuquerque. It is included for property inspection, not as a claim that Los Lunas is the best photography base.",
  },
  {
    topic: "Travel",
    title: "ABQ Sunport facts and airlines",
    url: "https://www.abqsunport.com/facts-figures/",
    checked: checkedDate,
    description:
      "This airport source supports the recommendation to use Albuquerque International Sunport as the practical air gateway. Flight availability still needs to be checked directly with airlines for the traveler's exact dates.",
  },
  {
    topic: "Travel",
    title: "ABQ Sunport rental cars",
    url: "https://www.abqsunport.com/rental-cars/",
    checked: checkedDate,
    description:
      "This is the airport's rental-car reference for planning the pickup side of the trip. It supports the travel workflow around renting a practical vehicle for dawn departures, gear, winter roads, and refuge access.",
  },
  {
    topic: "Travel",
    title: "SFO nonstop destinations",
    url: "https://www.flysfo.org/nonstop/where-we-fly-united-states",
    checked: checkedDate,
    description:
      "This SFO route page supports the flight-planning comparison from the Bay Area to Albuquerque. It is a route-availability signal only; schedules, fares, and operating carriers should be checked before booking.",
  },
  {
    topic: "Travel",
    title: "Southwest Oakland to Albuquerque",
    url: "https://www.southwest.com/en/flights/flights-from-oakland-to-albuquerque",
    checked: checkedDate,
    description:
      "This route page is included because Oakland can be a practical Bay Area departure option for Albuquerque. It supports the travel alternatives section, with final timing and price left to current airline search.",
  },
  {
    topic: "Travel",
    title: "Southwest San Jose to Albuquerque",
    url: "https://www.southwest.com/routes/flights-from-san-jose-ca-to-albuquerque",
    checked: checkedDate,
    description:
      "This route page covers the San Jose-to-Albuquerque alternative for travelers choosing among Bay Area airports. It helps compare convenience, but the guide still treats exact flight schedules as date-specific.",
  },
  {
    topic: "Travel",
    title: "New Mexico Tourism - Bosque del Apache",
    url: "https://www.newmexico.org/places-to-visit/regions/southwest/bosque-del-apache/",
    checked: checkedDate,
    description:
      "This state tourism page provides regional context for Bosque del Apache, Socorro, San Antonio, and the broader trip setting. It is useful background, while official refuge pages remain the authority for access and rules.",
  },
  {
    topic: "Travel",
    title: "NMDOT winter travel information",
    url: "https://www.nmroads.com/",
    checked: checkedDate,
    description:
      "This road-condition source belongs in the final pre-trip and in-trip checklist. Use it close to travel for winter weather, closures, incidents, and driving conditions between Albuquerque, Socorro, and the refuge.",
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

const itineraryVisualsByKey = new Map(
  itineraryVisualPlan.map((item, index) => [
    item.key,
    {
      ...item,
      legacyVisualId: item.visualId,
      visualId: itineraryGeneratedVisuals[index]?.id || item.visualId,
    },
  ])
);

function itinerarySlotKey(day, slot) {
  return `${day.date}|${slot.window}|${slot.place}`;
}

function visualPlanForSlot(day, slot) {
  return itineraryVisualsByKey.get(itinerarySlotKey(day, slot)) || {
    visualId: "itinerary-highway-one-crane-pool-sunrise",
    expected: [
      "Purpose-built itinerary planning visual",
      "Current field decision",
      "Lens and exposure reference",
    ],
  };
}

const photoWindowPlans = {
  Sunrise: {
    eyebrow: "Before and just after first light",
    title: "Start wider than the action, then tighten after the first decision.",
    summary:
      "Sunrise is the highest-risk window because the best behavior can happen before the light feels comfortable. Arrive with a roost already chosen, protect highlights, and decide whether the morning is about still water, silhouettes, or explosive lift-off.",
    visualIds: [
      "photo-window-sunrise-roost-silhouettes",
      "photo-window-sunrise-goose-blastoff-exposure",
    ],
    decisions: [
      "Park before the first audible movement, not when the light looks pretty.",
      "Expose for water, sky, and white feathers before birds launch.",
      "Keep one frame wide enough for flock scale, sound, mountains, and water.",
    ],
    slotWindows: ["Sunrise"],
  },
  "Mid-morning": {
    eyebrow: "After peak action",
    title: "Slow down, use habitat, and make the field decision visible.",
    summary:
      "Mid-morning is where the trip can become more than blast-offs and landings. Use the vehicle as a blind in the fields, work decks carefully, and treat glare, reeds, crop rows, and small subjects as part of the photograph.",
    visualIds: [
      "photo-window-midmorning-field-behavior",
      "photo-window-midmorning-wetland-glare-reeds",
    ],
    decisions: [
      "Let bird behavior and legal pullouts determine whether you stay in the fields or move to a deck.",
      "Use rows, reeds, and reflections when the birds themselves are quiet.",
      "Mount a CPL only when glare control is worth the shutter-speed penalty.",
    ],
    slotWindows: ["Mid-morning"],
  },
  Sunset: {
    eyebrow: "Return flights and closing frames",
    title: "Read wind first, then choose tight action or a wider ending.",
    summary:
      "Sunset rewards patience if you know where the birds want to land. Use wind to predict approach lanes, make the sharp action frames first, then widen for silhouettes, water, and mountain bands when the action slows.",
    visualIds: [
      "photo-window-sunset-crane-landing-lane",
      "photo-window-sunset-wide-roost-silhouette",
    ],
    decisions: [
      "Choose position by wind direction, not only by the prettiest color.",
      "Leave room ahead of landing cranes and below them for reflections.",
      "When action fades, stop forcing tight frames and build the closing scene.",
    ],
    slotWindows: ["Sunset"],
  },
  "Weather fallback": {
    eyebrow: "Fog, gray light, wind, and low contrast",
    title: "Make the weather the subject instead of treating it as a failure.",
    summary:
      "Weather and flat light should change the assignment, not end it. Use mist, high-key water, reeds, and slow panning experiments after the safe frames are already made.",
    visualIds: [
      "photo-window-weather-mist-high-key-water",
      "photo-window-weather-panning-blur",
    ],
    decisions: [
      "Use fog and pale water to simplify the frame rather than hunting for saturated color.",
      "Bank a sharp record frame before experimenting with slow shutter speeds.",
      "Judge motion experiments by head sharpness, wing smear, and background streak quality.",
    ],
    relatedStops: [
      {
        date: "Wed Dec 9",
        label: "On-site Day 3",
        window: "Sunset",
        place: "Flight Deck if active, otherwise crane pools",
        goal:
          "Use the fallback window for safe sharp frames first, then deliberate panning and silhouette experiments.",
      },
      {
        date: "Thu Dec 10",
        label: "On-site Day 4",
        window: "Sunrise",
        place: "South Loop wetland stretch",
        goal:
          "Use mist, reeds, gray water, and quiet birds as the composition instead of chasing action in weak light.",
      },
    ],
  },
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
    system: "Sony",
    name: "SEL20TC 2x Teleconverter",
    role: "Bright-light reach extension",
    specs: {
      aperture: "Loses 2 stops",
      filter: "None",
      length: "42.7 mm",
      weight: "207 g",
      minFocus: "Lens dependent",
      teleconverter: "N/A",
      introduced: "2016",
      stabilization: "N/A; lens/body stabilization still matters",
      zoomFocus: "No zoom or focus; mounts between body and compatible lens",
      weather: "Use only with weather discipline; avoid swaps in dust, rain, or snow",
    },
    photo: "https://www.sony.com/lr/electronics/camera-lenses/sel20tc/specifications",
    photoLabel: "Sony product/spec page",
    image: "https://www.sony.jp/products/picture/SEL20TC.jpg",
    source: "https://www.sony.com/lr/electronics/camera-lenses/sel20tc/specifications",
    note:
      "Carry as a deliberate bright-light tool for distant, static, or slow subjects. For dawn flight, the 1.4x or no teleconverter remains the safer default.",
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
      "https://downloads.canon.com/nw/camera/products/lenses/rf-24-105mm-f4l-is-usm/specifications/canon-rf-24-105mm-f4l-is-usm-downloadable-specifications-chart.pdf",
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
      length: "207.6 mm retracted / 297.6 mm extended",
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
    source: "https://downloads.canon.com/nw/camera/products/lenses/rf100-500mm/RF100_500mm_USM_specifications.pdf",
    note:
      "The Canon default for Bosque and Tanzania because it balances reach, handling, and close-pass flexibility.",
  },
  {
    system: "Canon",
    name: "RF 200-800mm F6.3-9 IS USM",
    role: "Canon distant bird and long-reach wildlife lens",
    specs: {
      aperture: "f/6.3-9",
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
    source: "https://global.canon/en/c-museum/product/rf530.html",
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
      weather: "Canon describes dust- and water-resistant construction; avoid swaps in dust, rain, or snow",
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
    system: "Canon",
    name: "Extender RF 2x",
    role: "Bright-light reach extension",
    specs: {
      aperture: "Loses 2 stops",
      filter: "None",
      length: "39.3 mm",
      weight: "340 g",
      minFocus: "Lens dependent",
      teleconverter: "N/A",
      introduced: "2020",
      stabilization: "N/A; lens/body stabilization still matters",
      zoomFocus: "No zoom or focus; mounts between body and compatible lens",
      weather: "Canon describes dust- and water-resistant construction; avoid swaps in dust, rain, or snow",
    },
    photo: "https://www.usa.canon.com/shop/p/extender-rf2x",
    photoLabel: "Canon product photo",
    image:
      "https://s7d1.scene7.com/is/image/canon/4114C002_extender-rf2x_primary?fmt=webp-alpha&wid=760",
    source: "https://www.usa.canon.com/shop/p/extender-rf2x",
    note:
      "Use only when light, autofocus, and support are strong enough for the two-stop penalty. Check lens-specific compatibility before packing it as part of the Canon kit.",
  },
  {
    system: "Support",
    name: "Beanbag or window support",
    role: "Vehicle blind stability",
    specs: {
      aperture: "N/A",
      filter: "N/A",
      length: "Model dependent",
      weight: "LensCoat Pro Jr example: 9 oz empty / 5 lb 8 oz filled with sunflower seeds",
      minFocus: "N/A",
      teleconverter: "N/A",
      introduced: "Product dependent",
      stabilization: "Mechanical support",
      zoomFocus: "N/A",
      weather: "Use a rain cover; keep fabric dry before packing",
    },
    photo: "https://www.lenscoat.com/products/lenscoat-lenssack-pro-jr",
    photoLabel: "LensCoat product example",
    image: "https://www.lenscoat.com/cdn/shop/files/lspjM5b.jpg?v=1735901881",
    source: "https://www.lenscoat.com/products/lenscoat-lenssack-pro-jr",
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

const cameraBodies = [
  {
    system: "Sony",
    name: "Sony Alpha 7R VI",
    model: "ILCE-7RM6",
    role: "High-resolution crop latitude for Bosque birds and distant habitat details",
    specs: {
      sensor: "66.8 MP effective full-frame stacked Exmor RS CMOS",
      burst: "30 fps electronic / 10 fps mechanical",
      stabilization: "8.5 stops center / 7.0 stops periphery",
      autofocus: "Human, animal, bird, insect, vehicle, train, and airplane recognition",
      cards: "Dual slots: SD UHS-I/II or CFexpress Type A",
      battery: "NP-SA100",
      weight: "713 g with battery and memory card",
    },
    source:
      "https://www.sony.com/electronics/support/e-mount-body-ilce-7-series/ilce-7rm6/specifications",
    note:
      "Best if the priority is feather detail, cropping room, and one carefully chosen long zoom. It uses the NP-SA100 battery, so plan its battery pool separately from an Alpha 1 II kit.",
    verdict:
      "Bosque pick for maximum detail and crop flexibility when action speed is still strong enough.",
  },
  {
    system: "Sony",
    name: "Sony Alpha 1 II",
    model: "ILCE-1M2",
    role: "Fast flagship body for birds in flight, mixed action, and future safari overlap",
    specs: {
      sensor: "50.1 MP effective full-frame stacked Exmor RS CMOS",
      burst: "30 fps electronic / 10 fps mechanical",
      stabilization: "8.5 stops center / 7.0 stops periphery",
      autofocus: "Human, animal, bird, insect, vehicle, train, and airplane recognition",
      cards: "Dual slots: SD UHS-I/II or CFexpress Type A",
      battery: "NP-FZ100",
      weight: "743 g with battery and memory card",
    },
    source:
      "https://www.sony.com/electronics/support/e-mount-body-ilce-1-series/ilce-1m2/specifications",
    note:
      "The faster all-purpose Sony wildlife body. It gives up resolution to the A7R VI but keeps enough pixels for cropping and has the most balanced action role.",
    verdict:
      "Sony pick if flight action, future safari, and one-body versatility matter more than maximum crop resolution.",
  },
  {
    system: "Canon",
    name: "Canon EOS R5 Mark II",
    model: "R5 Mark II",
    role: "High-resolution Canon body with strong action and balanced wildlife files",
    specs: {
      sensor: "45 MP effective full-frame back-illuminated stacked CMOS",
      burst: "30 fps electronic with pre-continuous shooting",
      stabilization: "In-body IS with coordinated lens IS support",
      autofocus: "Dual Pixel CMOS AF with animal detection for birds and wildlife",
      cards: "CFexpress Type B plus UHS-II SD",
      battery: "LP-E6P",
      weight: "670 g with battery and SD card",
    },
    source: "https://www.usa.canon.com/shop/p/eos-r5-mark-ii",
    note:
      "The Canon high-resolution choice for Bosque. It pairs naturally with the RF 100-500 for flight and the RF 200-800 when distance dominates.",
    verdict:
      "Canon pick for resolution plus serious action if the budget can support the body and fast cards.",
  },
  {
    system: "Canon",
    name: "Canon EOS R6 Mark III",
    model: "R6 Mark III",
    role: "Fast lower-resolution Canon action body for flight, low light, and cost control",
    specs: {
      sensor: "32.5 MP full-frame CMOS",
      burst: "40 fps with 20 frames of pre-continuous shooting",
      stabilization: "Up to 8.5 stops center / 7.5 stops periphery",
      autofocus: "Dual Pixel CMOS AF II with people, animal, and vehicle detection",
      cards: "CFexpress Type B plus UHS-II SD",
      battery: "LP-E6P",
      weight: "699 g with battery and one card",
    },
    source: "https://www.usa.canon.com/shop/p/eos-r6-mark-iii",
    note:
      "A pragmatic Canon wildlife body if burst speed, low-light handling, and cost matter more than deep cropping. The 32.5 MP file puts more pressure on field position and focal length than the R5 Mark II.",
    verdict:
      "Canon value/action pick, especially as the second body beside an R5 Mark II.",
  },
];

const cameraBodyComparisonRows = [
  {
    category: "Bosque priority",
    sonyA7r: "Maximum crop detail for distant birds and environmental files.",
    sonyA1: "Best Sony action balance for flight and future safari.",
    canonR5: "Best Canon resolution/action balance.",
    canonR6: "Best Canon speed/value body if crop latitude is less important.",
    takeaway:
      "For one body, pick resolution if Bosque is the main trip; pick the faster flagship/action body if Tanzania and birds-in-flight dominate future use.",
  },
  {
    category: "Battery planning",
    sonyA7r: "NP-SA100",
    sonyA1: "NP-FZ100",
    canonR5: "LP-E6P",
    canonR6: "LP-E6P",
    takeaway:
      "Canon bodies can share the LP-E6P pool. The Sony A7R VI and Alpha 1 II need separate battery pools, which matters for chargers and nightly hotel workflow.",
  },
  {
    category: "Cards",
    sonyA7r: "Dual SD UHS-II / CFexpress Type A slots",
    sonyA1: "Dual SD UHS-II / CFexpress Type A slots",
    canonR5: "CFexpress Type B + UHS-II SD",
    canonR6: "CFexpress Type B + UHS-II SD",
    takeaway:
      "Buy cards by body, not by habit. Sony Type A and Canon Type B are different ecosystems, and the Canon second slot is SD.",
  },
  {
    category: "Best two-body pairing",
    sonyA7r: "A7R VI on 200-600 or 400-800",
    sonyA1: "Alpha 1 II on 70-200 or 100-400",
    canonR5: "R5 Mark II on RF 100-500 or RF 200-800",
    canonR6: "R6 Mark III on RF 24-105 or RF 70-200",
    takeaway:
      "Two bodies reduce dust-sensitive lens changes: long lens stays ready, wider or close-pass lens stays ready.",
  },
];

const backpackOptions = [
  {
    maker: "Think Tank Photo",
    name: "BackLight Long Lens",
    type: "Dedicated long-lens backpack",
    bestFor: "One mounted super-telephoto rig when the long lens is the day",
    source: "https://www.thinktankphoto.com/products/backlight-long-lens",
    photoLabel: "Think Tank product page",
    image:
      "https://www.thinktankphoto.com/cdn/shop/files/BackLight-Long-Lens-Hero-Gear-2_1200x1200.jpg?v=1750693988",
    verifiedFit:
      "Designed around a 600mm f/4 or 800mm f/5.6 attached to a gripped body, with 7L of personal-gear pocket space.",
    oneBodyThreeLenses:
      "Excellent if one large zoom or prime stays mounted and the other two lenses are smaller support/story lenses.",
    twoBodiesFourLenses:
      "Possible only if the second body and extra lenses are secondary to the mounted long lens. Less flexible than a true large-kit pack.",
    verdict:
      "Best for Bosque if the main requirement is protecting a ready-to-shoot long rig from car to deck.",
  },
  {
    maker: "Gura Gear",
    name: "Kiboko V2.0 30L",
    type: "Lightweight wildlife travel backpack",
    bestFor: "Airline-conscious wildlife kit with fast side-by-side access",
    source: "https://guragear.com/products/kiboko-v2-0-30l",
    photoLabel: "Gura Gear product page",
    image:
      "https://guragear.com/cdn/shop/products/221109_GURAGEAR_30L_U_A-V2-Final-3000.jpg?v=1762526421",
    verifiedFit:
      "Carries super-telephoto lenses as large as 800mm f/5.6, weighs 3.9 lb, and is described as holding two bodies and multiple lenses.",
    oneBodyThreeLenses:
      "Strong default for one body, a 200-600 or RF 100-500 class lens, 24-105, 70-200, cards, batteries, and rain cover.",
    twoBodiesFourLenses:
      "Strong if no laptop is needed; the maker explicitly notes no laptop sleeve on this 30L version.",
    verdict:
      "Best all-around wildlife travel pick when weight and access matter more than laptop carry.",
  },
  {
    maker: "Shimoda",
    name: "Action X50 V2",
    type: "Modular adventure camera backpack",
    bestFor: "Hiking comfort, modular camera cores, and personal gear mixed with camera gear",
    source: "https://shimodadesigns.com/action-x50-v2-backpack-black/",
    photoLabel: "Shimoda product page",
    image:
      "https://cdn11.bigcommerce.com/s-qocvgxy3yl/products/592/images/282623/hfdq34d2lvnznptd8emz__87787.1712823903.386.513.jpg?c=2",
    verifiedFit:
      "Accepts Small, Medium, and Large DSLR Core Units and has front and rear sleeves for laptops or tablets up to 16 inches.",
    oneBodyThreeLenses:
      "Good if the large zoom is packed broken down and hiking comfort matters. Not the cleanest option for a mounted 600/800mm-class rig.",
    twoBodiesFourLenses:
      "Good with the right core unit for mixed camera/personal carry, but less direct than Gura, Lowepro, or Vanguard for super-telephoto packing.",
    verdict:
      "Best modern adventure-carry option, not the first choice if the bag must swallow a mounted long wildlife lens.",
  },
  {
    maker: "Lowepro",
    name: "Pro Trekker BP 650 AW II",
    type: "Large expedition wildlife backpack",
    bestFor: "Two-body wildlife assignments, support gear, and a serious long lens",
    source: "https://www.lowepro.com/us-en/pro-trekker-bp-650-aw-ii-lp37481-pww/",
    photoLabel: "Lowepro product page",
    image:
      "https://cdn.lowepro.com/media/catalog/product/cache/0f95ebaf441f5da7295fca54fb88d543/b/a/backpack-lowepro-trekker-lp37481-pww-front-without-top-modular.jpg",
    verifiedFit:
      "The official page describes it as wildlife-assignment specific and fitting up to an 800mm lens, with modular parts and tripod attachment.",
    oneBodyThreeLenses:
      "More bag than the basic Bosque kit needs, but excellent if the long lens, support, layers, and accessories all travel together.",
    twoBodiesFourLenses:
      "One of the strongest two-body/four-lens choices because it is built for big telephoto assignments and support accessories.",
    verdict:
      "Best big-kit expedition option if size and airline carry constraints are acceptable.",
  },
  {
    maker: "Vanguard",
    name: "ALTA SKY 68",
    type: "Super-telephoto backpack",
    bestFor: "Maximum long-lens capacity with laptop/tablet carry",
    source: "https://www.vanguardworld.co.uk/products/alta-sky-68",
    photoLabel: "Vanguard product page",
    image:
      "https://www.vanguardworld.jp/cdn/shop/products/4948271763148-5.jpg?v=1646877691",
    verifiedFit:
      "The maker describes a 34L pack for a super-telephoto lens up to 800mm f/5.6 attached to a pro DSLR or mirrorless body, plus up to seven additional lenses and a 16-inch laptop.",
    oneBodyThreeLenses:
      "Very strong but larger than necessary unless laptop, layers, and support gear must be in the same backpack.",
    twoBodiesFourLenses:
      "The clearest maximum-capacity answer for two bodies, four lenses, laptop, and a mounted long lens.",
    verdict:
      "Best maximum-capacity fit answer, with the tradeoff that it is a large dedicated gear hauler.",
  },
];

const supportGearChecklist = [
  {
    category: "Body power",
    priority: "Critical",
    items: [
      "Sony Alpha 7R VI: build the kit around NP-SA100 batteries and the matching charger.",
      "Sony Alpha 1 II: build the kit around NP-FZ100 batteries and a charger that supports that pack.",
      "Canon R5 Mark II and R6 Mark III: standardize on LP-E6P batteries and LC-E6-compatible charging.",
      "Bring at least three charged batteries per active body for cold dawns, long waits, and evening return sessions.",
    ],
  },
  {
    category: "Charging workflow",
    priority: "Critical",
    items: [
      "Use one labeled charger path per battery type, plus a USB-C PD wall charger and a compact power strip for hotel nights.",
      "Carry a vehicle USB-C charger for top-ups between morning and evening windows.",
      "Pack short labeled cables and one small pouch so chargers do not migrate around the room.",
    ],
  },
  {
    category: "Cards and backup",
    priority: "Critical",
    items: [
      "Sony bodies here use CFexpress Type A or UHS-II SD; Canon bodies use CFexpress Type B plus UHS-II SD.",
      "Bring enough cards to avoid deleting in the field, plus a card reader that matches the actual card type.",
      "Back up every night to a portable SSD and keep used cards separate from blank cards.",
    ],
  },
  {
    category: "Predawn safety",
    priority: "Critical",
    items: [
      "Bring a rechargeable headlamp with a low mode, plus a second small light or backup battery.",
      "Keep gloves thin enough to operate camera controls and filters before sunrise.",
      "Add hand warmers for long, still waiting periods at decks or vehicle pullouts.",
    ],
  },
  {
    category: "Dust and weather",
    priority: "Critical",
    items: [
      "Pack blower, microfiber cloths, lens tissues, sensor swabs, and a small towel for vehicle/hotel cleanup.",
      "Carry rain covers for body/lens combinations and a dry bag or zip pouch for wet accessories.",
      "Minimize lens changes in dust; two bodies are a practical weather-control strategy, not just convenience.",
    ],
  },
  {
    category: "Support and tools",
    priority: "Recommended",
    items: [
      "Use a beanbag or window support for vehicle work, and make sure the long-lens foot is Arca-compatible before travel.",
      "Bring tripod/gimbal or monopod only when the planned field position justifies setup time and bulk.",
      "Pack the correct hex keys, lens-foot screws, spare quick-release plates, and a small multi-tool.",
    ],
  },
  {
    category: "Field comfort",
    priority: "Recommended",
    items: [
      "Carry water, snacks, sun protection, a warm layer, and a compact sitting/kneeling pad.",
      "Keep a small notebook or voice-note habit for location, wind, light, and missed-shot notes.",
      "Use a simple car staging routine: long lens ready, wide/standard lens ready, batteries/cards in the same place every morning.",
    ],
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
      "Optional reach: FE 400-800mm or a Sony teleconverter only when light is strong and subjects are distant.",
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
      "RF 1.4x and 2x extenders are bright-light reach tools, not default sunrise flight setups.",
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
      "95 mm fits Sony 200-600, Canon RF 200-800, Sigma 150-600, and Sigma 500. 105 mm fits Sony 400-800 and Sigma 60-600. Giant CPLs and NDs are expensive and cost light, so avoid them for dawn birds unless a specific water/reflection or motion-blur use justifies them.",
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
  {
    category: "2x teleconverter",
    sony: "SEL20TC 2x Teleconverter",
    canon: "Extender RF 2x",
    note: "Both add reach with a two-stop light penalty. Treat them as bright-light, supported, distant-subject tools rather than dawn flight defaults.",
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
    .replace("2x Teleconverter", "2x TC")
    .replace("Extender RF 1.4x", "RF 1.4x TC")
    .replace("Extender RF 2x", "RF 2x TC");
}

function getLensScaleTrackWidth(itemCount) {
  const axisWidth = 78;
  const columnWidth = 78;
  const columnGap = 14;
  return axisWidth + itemCount * columnWidth + Math.max(0, itemCount - 1) * columnGap;
}

const lensLengthReferenceBarsByCategory = {
  standard: { value: 304.8, label: "12-inch ruler", note: "305 mm", object: "ruler" },
  "seventy-two-hundred": { value: 304.8, label: "12-inch ruler", note: "305 mm", object: "ruler" },
  "wildlife-zooms": { value: 304.8, label: "12-inch ruler", note: "305 mm", object: "ruler" },
  "super-zooms": { value: 304.8, label: "12-inch ruler", note: "305 mm", object: "ruler" },
  "prime-reach": { value: 304.8, label: "12-inch ruler", note: "305 mm", object: "ruler" },
  teleconverters: { value: 50.5, label: "AA battery", note: "about 50 mm", object: "aa-battery" },
};

const lensWeightReferenceBarsByCategory = {
  standard: { value: 1000, label: "1 L water bottle", note: "about 1 kg", object: "water-bottle" },
  "seventy-two-hundred": { value: 1000, label: "1 L water bottle", note: "about 1 kg", object: "water-bottle" },
  "wildlife-zooms": { value: 1500, label: "1.5 L water bottle", note: "about 1.5 kg", object: "water-bottle-large" },
  "super-zooms": { value: 2100, label: "2 L soda bottle", note: "about 2.1 kg", object: "soda-bottle" },
  "prime-reach": { value: 1500, label: "1.5 L water bottle", note: "about 1.5 kg", object: "water-bottle-large" },
  teleconverters: { value: 370, label: "full soda can", note: "about 370 g", object: "soda-can" },
};

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
  if (/500mm F5\.6/i.test(name)) return "prime-reach";
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

function makeScaleReferenceItem(scaleType, categoryId) {
  const reference =
    scaleType === "weight"
      ? lensWeightReferenceBarsByCategory[categoryId]
      : lensLengthReferenceBarsByCategory[categoryId];

  if (!reference) return null;

  if (scaleType === "weight") {
    return {
      type: "reference",
      system: "Reference",
      name: reference.label,
      label: reference.label,
      referenceObject: reference.object,
      weightG: reference.value,
      weightLabel: `${reference.value.toLocaleString()} g`,
      note: reference.note,
    };
  }

  return {
    type: "reference",
    system: "Reference",
    name: reference.label,
    label: reference.label,
    referenceObject: reference.object,
    primaryMm: reference.value,
    note: reference.note,
  };
}

function scaleSortValue(item, scaleType) {
  return scaleType === "weight" ? item.weightG : item.extendedMm || item.primaryMm;
}

function compareScaleItems(a, b, scaleType) {
  const diff = scaleSortValue(b, scaleType) - scaleSortValue(a, scaleType);
  if (diff) return diff;
  if (a.type === "reference" && b.type !== "reference") return 1;
  if (b.type === "reference" && a.type !== "reference") return -1;
  return a.label.localeCompare(b.label);
}

function renderScaleCategoryCharts({ items, scaleMax, ticks, scaleType, chartClass, ariaLabel, renderItem }) {
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
        const referenceItem = makeScaleReferenceItem(scaleType, category.id);
        const chartItems = [
          referenceItem,
          ...category.items.sort((a, b) => compareScaleItems(a, b, scaleType)),
        ].filter(Boolean);
        return `<section class="gear-scale-category" data-scale-category="${category.id}">
          <div class="gear-scale-category-header">
            <h3>${category.title}</h3>
            <p>${category.description}</p>
          </div>
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
    const isReference = item.type === "reference";
    const primaryPercent = Math.min((item.primaryMm / scaleMax) * 100, 100);
    const extensionPercent = item.extendedMm ? ((item.extendedMm - item.primaryMm) / scaleMax) * 100 : 0;
    const totalMm = item.extendedMm || item.primaryMm;
    const ariaLength = item.extendedMm
      ? `${item.primaryMm} millimeters retracted, ${item.extendedMm} millimeters extended`
      : `${item.primaryMm} millimeters`;
    const systemClass = isReference ? "is-reference" : `lens-scale-${item.system.toLowerCase().replace(/\s+/g, "-")}`;
    const barMarkup = isReference
      ? `<span class="lens-scale-reference-object reference-${item.referenceObject}" title="${item.name}: ${ariaLength}"></span>`
      : `${item.extendedMm ? `<span class="lens-scale-extension" title="${item.name} extended length: ${item.extendedMm} mm"></span>` : ""}
        <span class="lens-scale-bar" title="${item.name}: ${ariaLength}"></span>`;
    return `<article class="lens-scale-column ${systemClass} ${item.type === "teleconverter" ? "is-teleconverter" : ""}" data-scale="length" data-kind="${item.type}" data-system="${item.system}" data-primary-mm="${item.primaryMm}" data-total-mm="${totalMm}"${item.extendedMm ? ` data-extended-mm="${item.extendedMm}"` : ""} aria-label="${item.name}: ${ariaLength}">
      <div class="lens-scale-bar-stack" style="--bar-height: ${primaryPercent.toFixed(2)}; --extension-height: ${extensionPercent.toFixed(2)};">
        ${barMarkup}
      </div>
      <div class="lens-scale-label">
        <strong>${item.label}</strong>
        <span>${isReference ? item.note : `${item.primaryMm}${item.extendedMm ? `-${item.extendedMm}` : ""} mm`}</span>
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
      <span><i class="legend-chip reference"></i>Real-world reference object</span>
    </div>
    ${renderScaleCategoryCharts({
      items,
      scaleMax,
      ticks,
      scaleType: "length",
      ariaLabel: "Vertical bar chart comparing physical lens length in millimeters",
      renderItem,
    })}
    <p class="muted lens-scale-note">The leftmost object is a real-world size reference. Lens columns after it are sorted by longest known physical length. Solid bars show compact listed length; striped caps show sourced full-extension measurements.</p>
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
    const isReference = item.type === "reference";
    const barPercent = Math.min((item.weightG / scaleMax) * 100, 100);
    const systemClass = isReference ? "is-reference" : `lens-scale-${item.system.toLowerCase().replace(/\s+/g, "-")}`;
    const barMarkup = isReference
      ? `<span class="lens-scale-reference-object reference-${item.referenceObject}" title="${item.name}: ${item.weightLabel}"></span>`
      : `<span class="lens-scale-bar" title="${item.name}: ${item.weightLabel}"></span>`;
    return `<article class="lens-scale-column ${systemClass} ${item.type === "teleconverter" ? "is-teleconverter" : ""}" data-scale="weight" data-kind="${item.type}" data-system="${item.system}" data-weight-g="${item.weightG}" aria-label="${item.name}: ${item.weightLabel}">
      <div class="lens-scale-bar-stack" style="--bar-height: ${barPercent.toFixed(2)}; --extension-height: 0;">
        ${barMarkup}
      </div>
      <div class="lens-scale-label">
        <strong>${item.label}</strong>
        <span>${isReference ? item.note : item.weightLabel}</span>
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
      <span><i class="legend-chip reference"></i>Real-world reference object</span>
    </div>
    ${renderScaleCategoryCharts({
      items,
      scaleMax,
      ticks,
      scaleType: "weight",
      chartClass: "weight-scale-chart",
      ariaLabel: "Vertical bar chart comparing lens and teleconverter weight in grams",
      renderItem,
    })}
    <p class="muted lens-scale-note">The leftmost object is a real-world weight reference. Gear columns after it are sorted by listed weight. Where a manufacturer lists a small weight range, the chart uses the higher listed value and keeps the range in the label.</p>
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

const mediaVisualSequence = [
  "inspiration-hd-cold-crane-breath",
  "inspiration-hd-panning-crane-motion-blur",
  "inspiration-hd-mass-goose-blastoff-wide",
  "inspiration-hd-vehicle-blind-field-context",
  "inspiration-hd-overhead-goose-pattern",
  "inspiration-hd-crane-takeoff-splash",
  "inspiration-hd-farm-field-crane-feeding",
  "inspiration-hd-minimal-goose-pastel-sky",
  "inspiration-hd-high-key-mist-waterbirds",
  "inspiration-hd-crane-family-landing-group",
  "inspiration-hd-flight-formations-mountains",
  "inspiration-hd-sunset-crane-silhouettes",
];

function visualIdForMedia(item) {
  const mediaIndex = mediaArticles.indexOf(item);
  return mediaVisualSequence[mediaIndex % mediaVisualSequence.length];
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
    visualId: "practice-hd-camera-setup-baseline",
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
    visualId: "practice-hd-exposure-modes",
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
    visualId: "practice-hd-shutter-speed-ladder",
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
    visualId: "practice-hd-handholding-body-mechanics",
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
    visualId: "practice-hd-support-choices",
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
    visualId: "practice-hd-white-birds-exposure",
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
    visualId: "practice-hd-behavior-prediction",
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
    visualId: "practice-hd-cold-dust-workflow",
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
    visualId: "practice-hd-readiness-checklist",
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
    visualId: "inspiration-hd-mass-goose-blastoff-wide",
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
    visualId: "inspiration-hd-dawn-crane-roost-silhouettes",
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
    visualId: "inspiration-hd-mixed-geese-cranes-field-mountains",
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
    visualId: "inspiration-hd-evening-crane-final-approach",
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
    visualId: "inspiration-hd-panning-crane-motion-blur",
    description: [
      "500px is best treated as a composition and mood reference, especially for polished interpretations of Bosque weather, motion, silhouettes, and graphic flock shapes. It can help identify what a finished image might feel like after the logistical plan is already sound.",
      "Browse, study, and link out, but do not cache or republish portfolio work unless usage rights are explicitly secured. Use the local planning frame here as a visual cue while the original source remains the reference.",
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
