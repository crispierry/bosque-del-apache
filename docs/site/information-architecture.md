# Website Information Architecture

## Design Direction

Build it like a compact travel-planning workspace: the first screen should answer where to go today, when to leave, what to bring, and what to photograph. The site should feel operational: map, schedule, locations, gear, and notes should always be close at hand.

## Hosting Fit

Likely host: `/Users/cris/Documents/github/cris pierry website`.

Configured publishing pattern:

- Build this as a small standalone project app in this repository first.
- Publish the canonical production version by importing `site/` into the personal website at `/projects/bosque-del-apache`.
- Use standalone Netlify only for previews or fallback hosting with `site/` as the publish directory.
- Treat the existing photography gallery as related but not the main home for this guide, because this project is an itinerary/map/planning tool rather than a single photo gallery entry.
- Reuse the personal site's project-app pattern: publish the static app into the website public asset folder, then make the main website route a crawlable project page that links to the standalone guide and embeds the static planner. The website importer publishes the planner at `/projects/bosque-del-apache/planner.html`, where relative CSS, JavaScript, and image asset paths resolve correctly, and keeps `/projects/bosque-del-apache` owned by the main website navigation shell.

Deployment details live in `docs/site/deployment.md`.

## Top-Level Navigation

Use top tabs for the major workspaces:

- Overview
- Field Guide
- 5-Day Itinerary
- Best Photo Windows
- Map & Locations
- Gear
- Photo Techniques
- Travel Logistics
- Shot Inspiration
- Image Disclosure
- Resources & References

Navigation is editorial strategy for this guide. The labels should tell a serious photographer that this is a field-planning publication with sourced logistics, not a loose gallery or generic travel blog.

Rationale:

| Label | Placement | Editorial decision |
| --- | --- | --- |
| Overview | 1 | Opens with scope, trust framing, trip assumptions, and what to read first. |
| Field Guide | 2 | Replaces generic `Guide`; the label signals a practical field publication and belongs immediately after Overview. |
| 5-Day Itinerary | 3 | Replaces `Itinerary`; the live content is one worked five-day plan, not multiple itinerary lengths, so `Itineraries` would overpromise. |
| Best Photo Windows | 4 | Replaces `Photo Windows`; this better matches the reader question: when should I shoot sunrise, mid-morning, sunset, and weather fallback work? |
| Map & Locations | 5 | Replaces `Map`; the user intent is choosing shooting locations and field positions, not only viewing a map. |
| Gear | 6 | Already clear and photographer-specific. Keep it high because lens/support decisions shape the field plan. |
| Photo Techniques | 7 | Replaces vague `Practice`; the section is a pre-trip technique workspace for autofocus, exposure, panning, support, filters, and workflow. |
| Travel Logistics | 8 | Replaces `Travel`; clarifies that the section covers airports, driving, rental car, lodging, early departures, food/fuel, and access logistics. |
| Shot Inspiration | 9 | Replaces `Inspiration` and absorbs Gallery. The label is specific to the shot-planning purpose and can carry both individual inspiration images and the larger visual study album. |
| Image Disclosure | 10 | Explains the difference between AI-generated planning illustrations, public-domain field photos, official product references, and link-only external references. It is top-level because the project uses photorealistic synthetic visuals and the reader should not have to hunt for provenance language. |
| Resources & References | 11 | Combines reader-facing outside articles, videos if added, EXIF evidence, teaching references, useful links, and the factual citation index. One page is clearer because readers should not have to guess whether a source belongs under `Media`, `External Resources`, or `References`. |

Implementation notes:

- Keep all eleven items top-level for now because each section has enough content and a distinct planning question.
- Keep existing hash IDs such as `#guide`, `#itinerary`, `#windows`, `#map`, `#practice`, and `#media` stable for compatibility.
- Retire legacy aliases such as `#gallery`, `#sources`, `#source`, and `#references`; these old labels should not redirect readers to the top of a combined page.
- Support semantic aliases such as `#field-guide`, `#best-photo-windows`, `#map-locations`, `#photo-techniques`, `#image-disclosure`, `#ai-images`, `#image-notes`, `#external-resources`, and `#resources-references`.
- Update public labels, page headings, standalone guide navigation, no-script text, deployment checks, and static QA whenever the navigation changes.
- Do not rename `5-Day Itinerary` to `Itineraries` until the site actually contains separate 3-day, 4-day, and 5-day options.

## Overview

- Five-day trip summary.
- Best shooting windows by day.
- Lodging base.
- Current planning assumptions, field gates, and close-to-travel recheck reminders.
- Today's plan card during trip dates.
- Quick links to Field Guide, 5-Day Itinerary, Best Photo Windows, Map & Locations, Gear, Photo Techniques, Travel Logistics, Image Disclosure, and Resources & References.

## Field Guide

- Long-form guide to seasonality, field positions, behavior, settings, gear, scouting, ethics, logistics, and shot planning.
- Establish why the publication is trustworthy: official sources, date checks, rights boundaries, and assumptions.
- Link back into the planning workspaces so the article does not become an isolated essay.

## 5-Day Itinerary

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

## Best Photo Windows

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

## Map & Locations

- Interactive refuge/trip map.
- Layers:
  - Sunrise spots.
  - Mid-morning spots.
  - Sunset spots.
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

Lodging has its own hotel-distance map in the Travel Logistics section so the refuge shooting map stays photography-first.

## Gear

Workspaces:

- Lenses.
- Camera Bodies.
- Support.
- Filters.
- Backpacks.

Lens workspace:

- Compare Sony, Sigma E-mount, Canon, and Sony/Canon lens categories.
- Keep lens/filter-size guidance out of non-lens workspaces.
- Include trip-kit recommendations for Bosque and Tanzania.
- Include physical length and weight scale charts with brand controls.

Camera Bodies workspace:

- Evaluate Sony Alpha 7R VI, Sony Alpha 1 II, Canon EOS R5 Mark II, and Canon EOS R6 Mark III.
- Compare resolution, burst, autofocus, card type, battery type, weight, and practical Bosque/Tanzania role.
- Make battery/card incompatibilities visible before purchase.

Support workspace:

- Separate mechanical support from power, charging, cards, backup, headlamp, cleaning, weather, tools, and cold-weather comfort.
- Treat two bodies as a dust-control strategy, not merely a convenience upgrade.

Filters workspace:

- Explain 77 mm, 82 mm, 95 mm, and 105 mm buying implications.
- Separate CPL, ND, protective/clear, and step-up ring use cases.
- Keep the no-filter default for fast dawn bird action.

Backpacks workspace:

- Compare one-body/three-lens and two-body/four-lens budgets.
- Include source-linked official product images only when the source is documented in the visual asset manifest.
- Treat "Stink Gear" as likely Think Tank Photo unless corrected.
- Include Gura Gear plus three other modern backpack options that can be checked against current official sources.

Include a pack-tonight checklist tied to the next day once the Gear page has enough route/date state to support it.

## Photo Techniques

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
- Fast subject acquisition with the Sony 200-600mm, Sony 100-400mm f/4.5-5.6, Sony 400-800mm, Canon 100-500mm, or Canon 200-800mm.
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

## Travel Logistics

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

## Shot Inspiration

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

At the bottom of the page, include the former Gallery as a visual study album:

- True mosaic groups for the major shot-list ideas.
- Planning images labeled as AI-generated planning illustrations, not actual Bosque field photographs.
- Five-frame story groups with prompt/provenance summary, field-reading purpose, lens/settings notes, and lightbox access.
- Public-domain and generated assets kept visually separate from link-only external references.

## Image Disclosure

Explain the visual provenance system in plain editorial language:

- AI-generated planning illustrations support shot planning, field-position thinking, technique tradeoffs, and logistics, but are not documentary photographs or evidence of current refuge conditions.
- AI-generated training illustrations support pre-trip practice drills and should not be presented as completed Bosque field photos.
- AI-generated lodging previews summarize photographer workflow concerns and are not actual hotel/property photographs.
- Public-domain USFWS field photos and official product reference photos get their own source labels.
- External article, portfolio, hotel, and checklist photos stay link-only unless reuse rights are documented.

Use caption chips rather than permanent image-overlay badges. Preferred labels: `AI-generated planning illustration`, `AI-generated training illustration`, `AI-generated lodging preview`, `Public-domain field photo`, `Official product reference photo`, and `Link-only external reference`.

## Resources & References

Use the Resources & References section as a combined research archive for photography articles, teaching references, videos if added, maps if reader-facing, focal-length evidence, and factual citations.

Article cards should be sorted newest first and include:

- Date or date note.
- Source / author.
- Title and link.
- Short summary.
- Lens or camera takeaway.
- Practical application for this trip.

The section should also include a compact EXIF/evidence table that separates auditable photo metadata from article recommendations.

The same page should include a reference index with structured source notes:

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

Open Photo Techniques, pick the next drill by weak area or upcoming Bosque scenario, complete the exercise, log hit rate and misses, then move useful setup notes into Gear.

### Adjust For Conditions

Start in Best Photo Windows, choose the relevant light window, filter by access/weather/subject, and swap a location into the day schedule.

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
