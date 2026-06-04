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

Desktop and mobile browser QA passed on June 3, 2026. The Festival of the Cranes date-bias update, Marriott Bonvoy lodging card, Dec 6-12 dated-rate lodging order, expanded Socorro lodging map pins, and per-image license source rows were also checked on desktop and mobile. Re-run QA after any further content, source, image, or layout changes.
