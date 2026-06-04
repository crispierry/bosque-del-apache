# Project Instructions

## Scope

This project supports planning a photography-focused trip to Bosque del Apache National Wildlife Refuge.

The current configured research areas are:

- Whether early December is an ideal photography window.
- A five-day on-site photography itinerary.
- Sunrise, mid-morning, and sunset photography spots.
- Lens selection and photographer position for each shoot.
- Pre-trip photography techniques the user should practice before traveling.
- Photography book purchase recommendations, especially Kindle/eBook options.
- Safe, comfortable, not-too-expensive lodging.
- Website structure for publishing the project on the user's personal site.
- Inspiration photos and licensing notes.

## Research Standards

When research begins:

- Use current, reliable sources and include source links.
- Prefer official sources for refuge rules, roads, seasonal access, fees, closures, maps, and hours.
- Verify lodging availability, policies, and pricing from current sources before recommending anything.
- Separate confirmed facts from assumptions.
- Use concrete dates when discussing current or seasonal information.
- Track whether a location is strongest for sunrise, mid-morning, sunset, or multiple windows.
- Note practical constraints for photography, including road access, light direction, likely subjects, parking, closures, and weather sensitivity.
- For image references, distinguish between public-domain/permissively licensed material and inspiration-only material.
- Do not reuse copyrighted photos in the website unless the license clearly permits it.

## Working Files

- Keep research planning in `docs/research-plan.md`.
- Keep consolidated findings under `docs/research/`.
- Keep website structure under `docs/site/`.
- Keep pre-trip photography practice drills in `docs/research/practice-techniques.md`.
- Keep photography book purchase recommendations in `docs/research/books-to-buy.md`.
- Do not overwrite user notes without checking their purpose first.

## Website Publishing Contract

This repository is the source of truth for the Bosque del Apache project. The main website repo publishes a committed static artifact copied from `site/`.

- Source repo: `/Users/cris/Documents/github/Bosque del Apache`
- Website repo: `/Users/cris/Documents/github/cris pierry website`
- Published artifact in website repo: `public/projects/bosque-del-apache/`
- Website route: `/projects/bosque-del-apache`
- Import command in website repo: `npm run build:bosque`
- Worktree override: `BOSQUE_DEL_APACHE_ROOT=/path/to/bosque-worktree`

For a production update:

1. Make and verify source changes in this repo.
2. Commit and push this repo.
3. In the website repo, run `npm run build:bosque`.
4. Run `npm run build` in the website repo.
5. Commit and push the refreshed website artifact.
6. Wait for the website Netlify deploy to be `ready`.
7. Verify `https://crispierry.com/projects/bosque-del-apache` and the relevant static files.

If source changes live in a worktree, use `BOSQUE_DEL_APACHE_ROOT` when running the website import so the intended checkout is published.

## Naming

Use "Bosque del Apache" unless the user confirms a different intended destination.
