# Bosque del Apache Trip Planning

This project is for planning and publishing a photography-focused trip guide for Bosque del Apache National Wildlife Refuge.

## Current Scope

- Research whether early December is the best window for photography.
- Build a five-day on-site photography itinerary.
- Research safe, comfortable, not-too-expensive places to stay near Bosque del Apache.
- Research the best photography locations for:
  - Sunrise
  - Mid-morning
  - Sunset
- Identify lens choices, photographer position, and field notes for each shoot.
- Create a pre-trip practice section with photography techniques to rehearse before departure.
- Research photography books to buy, with priority on Kindle/eBook availability.
- Design a web version for publishing on the user's personal website.

## Research Status

Core research has been refreshed as of June 3, 2026. The trip plan now uses the confirmed window of December 6-12, 2026: arrive Sunday, shoot five full on-site days from Monday through Friday, and depart Saturday. Lodging should be one hotel room for two adults; Socorro remains the photography-first base, with Marriott Bonvoy documented as a Los Lunas tradeoff option. Exact Dec 6-12 third-party hotel snapshots are captured, but direct booking totals/cancellation terms still need final verification before purchase. The gear plan keeps both Sony and Canon branches, with the Sony FE 200-600mm restored as a primary wildlife recommendation rather than a fallback, especially for Tanzania.

## Project Documents

- `AGENTS.md` - working instructions for future research and writing.
- `docs/research-plan.md` - research structure and open questions.
- `docs/research/itinerary.md` - five-day photography itinerary.
- `docs/research/festival-of-the-cranes.md` - festival timing, programming, crowd, and lodging tradeoff notes.
- `docs/research/photography-spots.md` - location notes and time-of-day recommendations.
- `docs/research/map-logistics.md` - map coordinates, parking/pullouts, one-way-road notes, restrooms, food, fuel, and lodging pins.
- `docs/research/lodging.md` - lodging shortlist and tradeoffs.
- `docs/research/lenses-and-field-setup.md` - lens, position, and field technique notes.
- `docs/research/practice-techniques.md` - pre-trip drills, technique cards, and practice cadence.
- `docs/research/books-to-buy.md` - ranked photography reading list with Kindle/eBook availability notes.
- `docs/research/inspiration-photos.md` - visual references and licensing notes.
- `docs/research/media.md` - photography article index and EXIF-backed lens evidence.
- `docs/research/sources.md` - source log.
- `docs/research/finalization-checklist.md` - requirement-by-requirement status of the remaining-work list.
- `docs/site/information-architecture.md` - website tabs, sections, and data model.
- `site/` - static website prototype.
- `site/bosque-del-apache-photo-plan.pdf` - offline iPad-readable PDF booklet generated from the website.

## Repository Map

| Surface | Location |
| --- | --- |
| Source repo | `/Users/cris/Documents/github/Bosque del Apache` |
| GitHub repo | `https://github.com/crispierry/bosque-del-apache` |
| Website repo | `/Users/cris/Documents/github/cris pierry website` |
| Website artifact | `public/projects/bosque-del-apache/` |
| Website route | `/projects/bosque-del-apache` |
| Import command | `npm run build:bosque` |
| Worktree override | `BOSQUE_DEL_APACHE_ROOT=/path/to/worktree` |

## Website Preview

The prototype is currently static and can be previewed locally:

```bash
python3 -m http.server 4173 --directory site
```

Then open:

```text
http://localhost:4173
```

## Publishing To crispierry.com

This repository is the source of truth for the Bosque static site. The personal website publishes a committed copy of `site/` under `public/projects/bosque-del-apache/`.

After changing this repo:

```bash
cd "/Users/cris/Documents/github/Bosque del Apache"
python3 -m http.server 4173 --directory site
git add .
git commit -m "Describe the Bosque change"
git push origin main
```

Then refresh the website artifact and publish the site:

```bash
cd "/Users/cris/Documents/github/cris pierry website"
npm run build:bosque
npm run build
git add public/projects/bosque-del-apache data/knowledge-graph.json data/knowledge-graph-sources.json data/ama/cris/public-content-knowledge.json
git commit -m "Update Bosque del Apache project"
git push origin main
```

If the source change lives in a worktree instead of the canonical sibling checkout, point the website importer at that worktree:

```bash
cd "/Users/cris/Documents/github/cris pierry website"
BOSQUE_DEL_APACHE_ROOT="/path/to/bosque worktree" npm run build:bosque
```

After the website push, wait for the Netlify production deploy for the pushed website commit to reach `ready`, then verify:

```text
https://crispierry.com/projects/bosque-del-apache
https://crispierry.com/projects/bosque-del-apache/index.html
https://crispierry.com/projects/bosque-del-apache/complete-photographers-guide.html
https://crispierry.com/projects/bosque-del-apache/app.js
https://crispierry.com/sitemap.xml
https://crispierry.com/robots.txt
```

## Standalone Deployment

This repository is configured for Netlify in `netlify.toml`.

- Publish directory: `site`
- Build command: leave blank
- Canonical production route: `https://crispierry.com/projects/bosque-del-apache`
- Deployment procedure: `docs/site/deployment.md`

Use standalone Netlify only for previews or fallback hosting. The canonical public production route is published through the main website repo.

## Notes

The folder name uses "Bosque del Apache." If a different destination spelling is intended, update the project title before research begins.
