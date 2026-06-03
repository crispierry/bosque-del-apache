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

Configured publishing path:

- Netlify publish directory: `site`
- Public website route: `/projects/bosque-del-apache/`
- Keep this as a standalone project app until research and layout stabilize.
- Mount it through the main personal website by either copying the static output into the website's project area or proxying the standalone Netlify site from the main website.

See `../docs/site/deployment.md` for the full procedure.

## Map Note

The visitor-center coordinate is official FWS data. Deck, pullout, restroom, food, fuel, and lodging pins are planning pins from OpenStreetMap/Overpass and should be verified against current refuge maps, posted signs, and same-day refuge intel before field use.

## QA Note

Desktop and mobile browser QA passed on June 3, 2026. The Festival of the Cranes date-bias update, Marriott Bonvoy lodging card, Dec 6-12 dated-rate lodging order, expanded Socorro lodging map pins, and per-image license source rows were also checked on desktop and mobile. Re-run QA after any further content, source, image, or layout changes.
