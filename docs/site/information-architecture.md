# Website Information Architecture

## Design Direction

Build it like a compact travel-planning workspace: the first screen should answer where to go today, when to leave, what to bring, and what to photograph. The site should feel operational: map, schedule, locations, gear, and notes should always be close at hand.

## Hosting Fit

Likely host: `/Users/cris/Documents/github/cris pierry website`.

Configured publishing pattern:

- Build this as a small standalone project app in this repository first.
- Publish this repository to Netlify with `site/` as the publish directory.
- Mount it in the personal website under `/projects/bosque-del-apache/`.
- Treat the existing photography gallery as related but not the main home for this guide, because this project is an itinerary/map/planning tool rather than a single photo gallery entry.
- Reuse the personal site's project-app pattern if appropriate: publish the static app into a website public asset folder, or proxy the standalone Netlify site from that route.
- Keep the trailing slash on `/projects/bosque-del-apache/` so relative CSS, JavaScript, and image asset paths resolve correctly.

Deployment details live in `docs/site/deployment.md`.

## Top-Level Navigation

Use top tabs for the major workspaces:

- Overview
- Map
- Itinerary
- Photo Windows
- Lodging
- Gear
- Practice
- Inspiration
- Media
- Sources

## Overview

- Five-day trip summary.
- Best shooting windows by day.
- Lodging base.
- Weather/light alerts placeholder.
- Today's plan card during trip dates.
- Quick links to Map, Day 1-5, Gear, Practice, Lodging, and Sources.

## Map

- Interactive refuge/trip map.
- Layers:
  - Sunrise spots.
  - Mid-morning spots.
  - Sunset spots.
  - Lodging.
  - Food/fuel.
  - Side trips.
  - Closures/restrictions.
- Location detail drawer:
  - Best time window.
  - Subjects.
  - Lens range.
  - Parking/access.
  - Walking distance.
  - Confidence/source status.
- Desktop: full map with side list.
- Mobile: map-first view with bottom sheet location cards.

## Itinerary

Tabs:

- Day 1
- Day 2
- Day 3
- Day 4
- Day 5

Sub-tabs inside each day:

- Timeline
- Locations
- Shot List
- Logistics

Each day should include:

- Pre-dawn departure time.
- Sunrise slot.
- Breakfast/rest/admin window.
- Mid-morning photography slot.
- Scouting or optional side trip.
- Sunset slot.
- Dinner/recharge notes.

Slot format:

- Time.
- Location.
- Goal.
- Backup option.
- Gear preset.
- Notes/source confidence.

## Photo Windows

Tabs:

- Sunrise
- Mid-Morning
- Sunset

Each tab ranks locations by suitability and captures:

- Light direction.
- Expected subjects.
- Best compositions.
- Lens recommendations.
- Seasonal dependency.
- Weather sensitivity.
- Access constraints.

## Lodging

- Shortlist table/cards:
  - Name.
  - Town/area.
  - Distance/time to refuge.
  - Early departure practicality.
  - Pros/cons.
  - Cancellation notes.
  - Price range/date checked.
  - Source link.
- Compare modes:
  - Best for convenience.
  - Best budget.
  - Best comfort.
  - Best if doing side trips.
- Base strategy section: Socorro vs San Antonio vs closer/rural options.
- Loyalty tradeoff note: Marriott Bonvoy appears regional rather than Socorro/San Antonio based; show the closest practical Bonvoy candidate separately so it does not look like a photography-first dawn base.

## Gear

Tabs:

- Birds
- Landscape
- Low Light
- Carry Plan

Lens configuration presets:

- Long wildlife kit.
- Flexible vehicle-based kit.
- Landscape/sunset kit.
- Minimal walking kit.

Add a separate Bosque + Tanzania safari section:

- Explain that Bosque prioritizes bird reach, while Tanzania prioritizes vehicle-based mammal flexibility.
- Show Sony and Canon four-lens shared kits plus 1.4x teleconverter.
- Show the three-lens Tanzania travel cut: keep 24-105mm, 70-200mm f/2.8, and 100-400mm/100-500mm; drop the 400-800mm/200-800mm unless birds or distant wildlife are a main goal.
- Note that dust and vehicle shooting favor two bodies, fewer lens changes, and beanbag/window support.

Per-slot gear suggestions:

- Camera body.
- Primary lens.
- Secondary lens.
- Support: tripod, monopod, or beanbag.
- Filters.
- Clothing/weather items.

Include a pack-tonight checklist tied to the next day.

## Practice

Build this as a pre-trip training workspace, not a generic tutorial page. The section should answer: what technique should I rehearse next, what Bosque del Apache scenario does it prepare me for, and how will I know I am improving?

Tabs:

- Birds In Flight
- Exposure
- Long Lens Handling
- Composition
- Field Workflow
- Reading List
- Practice Log

Technique card fields:

- Technique name.
- Bosque scenario.
- Why it matters.
- Camera setup starting point.
- Practice drill.
- Success standard.
- Common failure modes.
- Suggested location at home.
- Gear to use.
- Review notes.
- Confidence level.

Core practice modules:

- Continuous autofocus tracking for cranes, geese, ducks, and raptors.
- Panning at varied shutter speeds for takeoffs, landings, and lateral flight.
- Pre-focusing on takeoff and landing zones before peak action.
- Exposure compensation for bright water, white birds, backlight, and silhouettes.
- Manual exposure discipline for stable light during fly-outs and fly-ins.
- Burst timing: short intentional bursts instead of holding the shutter through every pass.
- Long-lens stability from hand-held, monopod, tripod, and vehicle support positions.
- Fast subject acquisition with the Sony 100-400mm f/4.5, Sony 200-600mm fallback, Sony 400-800mm, Canon 100-500mm, or Canon 200-800mm.
- Environmental compositions that include wetland, cottonwood, mountain, and dawn/sunset context.
- Field workflow: batteries, cards, lens cloth, cold-weather handling, and post-shoot culling.

Practice schedule:

- Six weeks out: autofocus modes, button layout, and long-lens handling.
- Five weeks out: birds-in-flight tracking and panning.
- Four weeks out: exposure compensation and manual exposure in changing light.
- Three weeks out: composition drills for silhouettes, reflections, and environmental birds.
- Two weeks out: full sunrise simulation with cold-weather gear and fast setup.
- One week out: final camera setup, checklist rehearsal, and image-review standards.

Reading List:

- Ranked books to buy before the trip.
- Prioritize Kindle/eBook options for immediate reading and travel.
- Include a small number of print field-guide or location-specific references only when they are more useful than a Kindle substitute.
- Fields:
  - Title.
  - Author.
  - Format: Kindle/eBook, print, or both.
  - Trip relevance.
  - Best chapter or topic to read first.
  - Purchase priority.
  - Source link/date checked.

## Inspiration

Organize the moodboard by:

- Cranes/geese takeoff.
- Dawn silhouettes.
- Wetland reflections.
- Desert landscape context.
- Backlit birds.
- Abstract patterns.

Each item should include:

- Image.
- Why it matters.
- Possible location/time.
- Lens/composition note.
- Source/credit.

## Media

Use the Media section as a research archive for photography articles, teaching references, and focal-length evidence.

Article cards should be sorted newest first and include:

- Date or date note.
- Source / author.
- Title and link.
- Short summary.
- Lens or camera takeaway.
- Practical application for this trip.

The section should also include a compact EXIF/evidence table that separates auditable photo metadata from article recommendations.

## Sources

Use structured notes:

- Refuge official info.
- Maps/access/closures.
- Lodging.
- Photography references.
- Seasonal wildlife expectations.

Fields:

- Source title.
- URL.
- Date checked.
- What it supports.
- Confidence level.
- Follow-up needed.

## Core User Flows

### Plan The Trip

Start at Overview, pick lodging base, review five-day itinerary, check map coverage, and save the final daily plan.

### Plan Tomorrow

Open today or next day, review sunrise/mid-morning/sunset slots, confirm departure time, open gear checklist, and check backups.

### Train Before The Trip

Open Practice, pick the next drill by weak area or upcoming Bosque scenario, complete the exercise, log hit rate and misses, then move useful setup notes into Gear.

### Adjust For Conditions

Start in Photo Windows, choose the relevant light window, filter by access/weather/subject, and swap a location into the day schedule.

### Use In The Field

Mobile opens to Today, with next slot, departure time, map button, gear preset, and backup location prominent.

## Suggested Data Model

- `Trip`
- `Day`
- `PhotoSlot`
- `Location`
- `LodgingOption`
- `GearPreset`
- `PracticeTechnique`
- `PracticeSession`
- `ReadingRecommendation`
- `InspirationPhoto`
- `SourceNote`

## Mobile vs Desktop

Desktop should emphasize comparison: map plus side panel, itinerary table, lodging comparison, gear presets, and source review.

Mobile should emphasize field use: today's next slot, departure time, map, gear checklist, backup location, and concise access notes. Hide deep source notes behind expandable sections.
