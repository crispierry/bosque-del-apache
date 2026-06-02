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

Research is being split into dedicated workstreams, then consolidated into the documents under `docs/`.

## Project Documents

- `AGENTS.md` - working instructions for future research and writing.
- `docs/research-plan.md` - research structure and open questions.
- `docs/research/itinerary.md` - five-day photography itinerary.
- `docs/research/photography-spots.md` - location notes and time-of-day recommendations.
- `docs/research/lodging.md` - lodging shortlist and tradeoffs.
- `docs/research/lenses-and-field-setup.md` - lens, position, and field technique notes.
- `docs/research/practice-techniques.md` - pre-trip drills, technique cards, and practice cadence.
- `docs/research/books-to-buy.md` - ranked photography reading list with Kindle/eBook availability notes.
- `docs/research/inspiration-photos.md` - visual references and licensing notes.
- `docs/research/sources.md` - source log.
- `docs/site/information-architecture.md` - website tabs, sections, and data model.
- `site/` - static website prototype.

## Website Preview

The prototype is currently static and can be previewed locally:

```bash
python3 -m http.server 4173 --directory site
```

Then open:

```text
http://localhost:4173
```

## Deployment

This repository is configured for Netlify in `netlify.toml`.

- Publish directory: `site`
- Build command: leave blank
- Production route: `https://crispierry.com/projects/bosque-del-apache/`
- Deployment procedure: `docs/site/deployment.md`

## Notes

The folder name uses "Bosque del Apache." If a different destination spelling is intended, update the project title before research begins.
