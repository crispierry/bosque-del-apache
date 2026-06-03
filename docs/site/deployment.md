# Deployment Procedure

## Production Target

Production URL:

```text
https://crispierry.com/projects/bosque-del-apache
```

This project is a standalone static site in `site/`. The Netlify configuration in the repository root publishes that directory directly.

## Current Repository Settings

- Git branch: `main`
- Netlify publish directory: `site`
- Netlify build command: leave blank
- Local preview command: `python3 -m http.server 4173 --directory site`
- Local preview URL: `http://localhost:4173/`

## Netlify Site Setup

1. Push this repository to the chosen Git provider.
2. In Netlify, create a new site from that Git repository.
3. Use these build settings:
   - Base directory: leave blank
   - Build command: leave blank
   - Publish directory: `site`
   - Production branch: `main`
4. Deploy once and note the generated Netlify subdomain, such as:

```text
https://bosque-del-apache.netlify.app/
```

Netlify's current docs confirm that Git deploys connect a repository to a site and redeploy when commits are pushed, and that a site's publish directory is the deploy-ready folder.

## Main Website Route

The public route belongs to the main `crispierry.com` website, not DNS. A URL path like `/projects/bosque-del-apache` must be handled by the main site's routing or by a Netlify rewrite.

Use one of these patterns.

## Option A: Publish Inside The Main Website

Use this if the main website repository should own the project page directly.

1. Copy or build the files from this repository's `site/` folder into the main website's public/static output at:

```text
/projects/bosque-del-apache/
```

2. Add or keep the main website route at `app/projects/bosque-del-apache/page.tsx` so `/projects/bosque-del-apache` embeds `/projects/bosque-del-apache/index.html`.
3. Deploy the main website normally.
4. Confirm these URLs load:

```text
https://crispierry.com/projects/bosque-del-apache
https://crispierry.com/projects/bosque-del-apache/index.html
https://crispierry.com/projects/bosque-del-apache/styles.css
https://crispierry.com/projects/bosque-del-apache/app.js
```

## Option B: Proxy This Netlify Site From The Main Website

Use this only if this repository remains a separate Netlify site and the main website only exposes it under the project path. This is not the current production pattern when the main website embeds `/projects/bosque-del-apache/index.html` through a Next.js route.

Add this to the main `crispierry.com` site's `netlify.toml`, replacing the Netlify subdomain with the real one:

```toml
[[redirects]]
  from = "/projects/bosque-del-apache"
  to = "/projects/bosque-del-apache/"
  status = 301
  force = true

[[redirects]]
  from = "/projects/bosque-del-apache/*"
  to = "https://bosque-del-apache.netlify.app/:splat"
  status = 200
  force = true
```

This proxy fallback uses a trailing-slash redirect because directly serving the static app at `/projects/bosque-del-apache` would make its relative CSS, JavaScript, and image URLs resolve from the wrong parent path.

Netlify's rewrite/proxy docs also note that proxied content can have asset-path issues when using relative paths. The trailing-slash redirect avoids that for this static site.

## Manual Deploy Fallback

Use this only when Git deploys are unavailable:

```bash
netlify deploy --dir=site
netlify deploy --prod --dir=site
```

## Pre-Deploy Checklist

- Start the local preview and check the Overview, Map, Itinerary, Lodging, Gear, Practice, Inspiration, and Sources tabs.
- Confirm all local assets load from `site/assets/`.
- Confirm the Leaflet map loads with the external Leaflet CSS and script.
- Confirm the canonical URL in `site/index.html` points to `https://crispierry.com/projects/bosque-del-apache`.
- Commit changes before pushing.

## Post-Deploy Checklist

- Open `https://crispierry.com/projects/bosque-del-apache`.
- Confirm CSS and JavaScript load from the project path.
- Confirm browser refresh works from the project path.
- Confirm the standalone Netlify URL still works for deploy previews.
- If the deploy is bad, use Netlify's Deploys page to roll back to the previous successful deploy.

## Source Links

- Netlify build configuration overview: https://docs.netlify.com/configure-builds/overview/
- Netlify create deploys: https://docs.netlify.com/deploy/create-deploys/
- Netlify redirects and rewrites: https://docs.netlify.com/routing/redirects/
- Netlify rewrites and proxies: https://docs.netlify.com/routing/redirects/rewrites-proxies/
