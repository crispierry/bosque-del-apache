# Bosque del Apache Static Prototype

This is the first static prototype for the Bosque del Apache photography planning website.

## Run Locally

From the project root:

```bash
python3 -m http.server 4173 --directory site
```

Then open:

```text
http://localhost:4173
```

## Publishing Direction

Canonical publishing path:

- Source repo: `/Users/cris/Documents/github/Bosque del Apache`
- Website repo: `/Users/cris/Documents/github/cris pierry website`
- Website import command: `npm run build:bosque`
- Website artifact: `public/projects/bosque-del-apache/`
- Public website route: `https://crispierry.com/projects/bosque-del-apache`

See `../docs/site/deployment.md` for the full procedure.

Direct Netlify publishing from this repo is optional preview or fallback hosting. The production `crispierry.com` route is published through the main website repo.

## Map Note

The visitor-center coordinate is official FWS data. Deck, pullout, restroom, food, fuel, and lodging pins are planning pins from OpenStreetMap/Overpass and should be verified against current refuge maps, posted signs, and same-day refuge intel before field use.

## QA Note

Run the static guard before browser QA:

```bash
node --check site/app.js
node --check site/data.js
node scripts/qa-static.mjs
```

Site data lives in `site/data.js`; rendering and interaction logic lives in `site/app.js`. Keep that split when adding new research-backed content.

Desktop and mobile browser QA last ran on June 5, 2026. The regenerated Gallery, Guide, Itinerary, Photo Windows, Practice, Inspiration, Media, Gear scale labels, map labels, crawlable hash navigation, and no-script summary should be checked on desktop and mobile after any further content, source, image, or layout changes. Verify the main website sitemap and robots files after publishing.
