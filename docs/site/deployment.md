# Deployment Procedure

## Production Target

Production URL:

```text
https://crispierry.com/projects/bosque-del-apache
```

This project is a standalone static site in `site/`. The canonical production route on `crispierry.com` is published by the main website repo, which copies this repo's `site/` folder into its committed public artifact.

Direct Netlify hosting from this repo is useful for previews or fallback hosting, but it is not the current canonical production path.

## Current Repository Settings

- Git branch: `main`
- Canonical website repo: `/Users/cris/Documents/github/cris pierry website`
- Website import command: `npm run build:bosque`
- Website artifact: `public/projects/bosque-del-apache/`
- Website route: `/projects/bosque-del-apache`
- Optional standalone Netlify publish directory: `site`
- Optional standalone Netlify build command: leave blank
- Local preview command: `python3 -m http.server 4173 --directory site`
- Local preview URL: `http://localhost:4173/`

## Canonical Website Publish

1. Make and verify changes in `/Users/cris/Documents/github/Bosque del Apache`.
2. Commit and push this repo.
3. In `/Users/cris/Documents/github/cris pierry website`, run:

```bash
npm run build:bosque
npm run build
```

4. Commit and push the refreshed website artifact.
5. Wait for the website Netlify deploy to reach `ready`.
6. Verify:

```text
https://crispierry.com/projects/bosque-del-apache
https://crispierry.com/projects/bosque-del-apache/index.html
https://crispierry.com/projects/bosque-del-apache/complete-photographers-guide.html
https://crispierry.com/projects/bosque-del-apache/styles.css
https://crispierry.com/projects/bosque-del-apache/app.js
https://crispierry.com/sitemap.xml
https://crispierry.com/robots.txt
```

When publishing from a nonstandard checkout or Codex worktree, run:

```bash
BOSQUE_DEL_APACHE_ROOT="/path/to/bosque-worktree" npm run build:bosque
```

## Optional Standalone Netlify Site Setup

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

## Current Pattern: Publish Inside The Main Website

Use this for production.

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
https://crispierry.com/projects/bosque-del-apache/complete-photographers-guide.html
https://crispierry.com/projects/bosque-del-apache/styles.css
https://crispierry.com/projects/bosque-del-apache/app.js
```

## Fallback Pattern: Proxy This Netlify Site From The Main Website

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

- Start the local preview and check the Overview, Gallery, Guide, Map, Itinerary, Photo Windows, Travel, Gear, Practice, Inspiration, Media, and Sources tabs.
- Confirm all local assets load from `site/assets/`.
- Confirm the Leaflet map loads with the external Leaflet CSS and script.
- Confirm the canonical URL in `site/index.html` points to `https://crispierry.com/projects/bosque-del-apache`.
- Confirm the section navigation remains crawlable hash links in the static HTML and works as tabs with JavaScript enabled.
- Commit changes before pushing.

## Post-Deploy Checklist

- Open `https://crispierry.com/projects/bosque-del-apache`.
- Confirm CSS and JavaScript load from the project path.
- Confirm browser refresh works from the project path.
- Confirm `https://crispierry.com/sitemap.xml` includes `https://crispierry.com/projects/bosque-del-apache` and `https://crispierry.com/projects/bosque-del-apache/complete-photographers-guide.html`.
- Confirm `https://crispierry.com/robots.txt` does not block `/projects/bosque-del-apache`.
- Confirm the standalone Netlify URL still works for deploy previews.
- If the deploy is bad, use Netlify's Deploys page to roll back to the previous successful deploy.

## Source Links

- Netlify build configuration overview: https://docs.netlify.com/configure-builds/overview/
- Netlify create deploys: https://docs.netlify.com/deploy/create-deploys/
- Netlify redirects and rewrites: https://docs.netlify.com/routing/redirects/
- Netlify rewrites and proxies: https://docs.netlify.com/routing/redirects/rewrites-proxies/
