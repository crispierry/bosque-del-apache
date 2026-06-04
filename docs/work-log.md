# Work Log

This file tracks requested project work that has not yet been implemented, verified, and published.

## 2026-06-04 - Code Review Follow-Up Fixes

Status: completed and validated June 4, 2026.

Goal: fix review findings discovered after the visual teaching, lodging, and Gear scale updates.

Completion notes:

- Replaced the hard-coded Gear scale track width with an item-count-driven calculation so both Lens Length Scale and Lens Weight Scale remain aligned if the comparison set changes.
- Renamed a Practice renderer local variable that collided with the main website's Next.js lint rules when the static artifact is imported.
- Preserved the 18-column lens/teleconverter/reference comparison and existing horizontal chart scrolling behavior.
- Rebuilt and revalidated the website artifact after the fix.

## 2026-06-04 - Gear Lens Weight Scale

Status: completed and validated June 4, 2026.

Goal: add a companion bottom-of-Gear chart that compares lens and teleconverter weight using the same teaching format as the physical length scale.

Completion notes:

- Added a Lens Weight Scale section directly after the Lens Length Scale.
- Rendered the same optical comparison set: 15 lenses, 2 teleconverters, and a 1-liter / 1,000 g water reference.
- Sorted the chart by listed weight, led by Sigma 60-600mm at 2,485 g, Sony FE 400-800mm at 2,475 g, Sony FE 200-600mm at 2,115 g, Sigma 150-600mm at 2,100 g, and Canon RF 200-800mm at 2,050 g.
- Excluded support gear from the weight chart so it matches the lens/teleconverter comparison scope.
- Added a weight parser that handles gram values and small manufacturer weight ranges, using the high end for chart height while preserving the range label.
- Validated the source preview at `http://localhost:4173/#gear`: both length and weight charts render, the weight chart has 18 columns, one water reference, no support items, sorted weights, zero console errors, and no horizontal page overflow.
- Rebuilt and validated the website-served artifact at `http://localhost:3000/projects/bosque-del-apache/index.html#gear`: matching chart metrics, desktop/mobile/right-scroll screenshots, zero console errors, and no horizontal page overflow.

## 2026-06-04 - Gear Physical Lens Length Scale

Status: completed and validated June 4, 2026.

Goal: add a bottom-of-Gear visual comparison that shows the physical vertical length of every configured lens/teleconverter at a shared millimeter scale.

Completion notes:

- Added a Lens Length Scale section at the bottom of the Gear page, after lens/filter decision guidance.
- Rendered every optical item vertically from a shared baseline: 15 lenses, 2 teleconverters, and a 12-inch / 305 mm ruler reference.
- Sorted the chart by longest known physical length, including sourced full-extension measurements for externally extending zooms.
- Corrected the compact RF 70-200mm F2.8 L IS USM to show 146 mm retracted and 211.9 mm extended, instead of only the compact length.
- Used system colors for Sony, Sigma E, and Canon, with the gray reference ruler and striped extension caps for externally extending zoom barrels.
- Kept support gear out of the chart because the request was specifically about lens length.
- Added chart data attributes for count/order validation and cache-busted the shared stylesheet/script references.
- Validated the source preview at `http://localhost:4173/#gear`: 18 chart columns, no support items, one ruler reference, 10 extension markers, sorted physical lengths, zero console errors, and no horizontal page overflow.
- Rebuilt and validated the website-served artifact at `http://localhost:3000/projects/bosque-del-apache/index.html#gear`: matching chart metrics, desktop/mobile screenshots, RF 70-200mm expanded-length inspection, zero console errors, and no horizontal page overflow.

## 2026-06-04 - Travel Lodging Real-Reference Preview Correction

Status: completed and validated June 4, 2026.

Goal: regenerate the Travel section lodging previews so they are based on actual hotel/property photo references instead of generic hotel scenes.

Completion notes:

- Rechecked official or public property-photo references for the six lodging cards.
- Regenerated the six lodging previews as multi-frame, reference-based hotel/property previews showing exterior, room, amenity, and field-workflow cues.
- Kept literal hotel/property photos linked through official gallery/property pages rather than cached or republished.
- Updated Travel copy, lightbox metadata, lodging notes, and the visual asset manifest to stop describing the images as generic.
- Validated at `http://localhost:4173/#travel`: six reference-based generated lodging previews, six official gallery/property links, no generic wording in the Travel section, no old link-only hotel panels, populated lightbox teaching metadata, no console errors, and no horizontal overflow.
- Rebuilt and validated the website artifact at `http://localhost:3000/projects/bosque-del-apache/index.html#travel`: six loaded reference-based lodging previews, six official gallery/property links, no old placeholder cards, no console errors, and no horizontal overflow on desktop or 390px mobile.

## 2026-06-04 - Gear Local Product Photo Correction

Status: completed and validated June 4, 2026.

Goal: restore real Gear product photos in the local build so the locally hosted Bosque project matches the public-site behavior.

Completion notes:

- Added real manufacturer/product image URLs for all Sony, Sigma E, Canon, and support cards in the Gear section.
- Restored the Gear card renderer to show contained product images instead of the initials-style link-only panels.
- Kept each Gear image linked to the official product/spec page and added a fallback if a manufacturer image source fails.
- Preserved the rule that hotel, article, portfolio, search-result, and inspiration imagery stays link-only or generated unless rights are recorded.
- Validated the source preview at `http://localhost:4173/#gear`: Sony, Sigma E, Canon, and Support tabs render 19 loaded Gear images, zero broken fallbacks, and zero old visible link-only Gear cards.
- Rebuilt the website artifact with `BOSQUE_DEL_APACHE_ROOT` pinned to this worktree.
- Validated the website-served local route at `http://localhost:3000/projects/bosque-del-apache/index.html#gear`: 19 loaded Gear images, zero broken fallbacks, zero browser console errors, and no desktop image/copy overlap.
- Checked the 390px mobile viewport for no horizontal overflow and clean stacked Gear image/copy layout.

## 2026-06-04 - Travel Lodging Visual Correction

Status: completed and validated June 4, 2026.

Goal: replace the Travel section lodging cards' link-only placeholder panels with real visual previews while preserving the rule that actual hotel/brand photos are not republished.

Completion notes:

- Generated six lodging/travel expectation previews for the recommended hotel cards and stored them in `site/assets/generated/`.
- Replaced the initials-style hotel placeholder panels with clickable generated lodging previews.
- Kept each official hotel/property gallery link on the card for actual room, exterior, and amenity inspection.
- Added lightbox teaching metadata for each lodging preview: scenario/location, lens, focal length, aperture, shutter speed, and technique.
- Updated lodging and visual-asset documentation to distinguish generated lodging previews from official hotel photos.
- Validated at `http://localhost:4173/#travel`: six generated lodging previews, six local full-image preview links, six official hotel/property links, no old link-only hotel panels, no horizontal overflow, and intact 3:2 preview rendering.
- Rebuilt and validated the website artifact at `http://localhost:3000/projects/bosque-del-apache/index.html#travel` with the same checks and no browser console errors.

## 2026-06-04 - Practice Teaching Layout Correction

Status: completed and validated June 4, 2026.

Goal: restructure the Practice section as a teaching area with uncropped generated images, a dedicated filters section, expandable photos, and detailed pages for techniques 1-9.

Completion notes:

- Reworked Practice into a teaching hub with a dedicated Filter Kit And Drills section.
- Removed cropped practice-image presentation by rendering generated contact sheets at their natural aspect ratio.
- Added lens, focal length, aperture, shutter speed, and technique notes to the filter image and all nine practice-technique images.
- Made every Practice teaching image clickable into a full-image overlay with localhost full-image links.
- Converted techniques 1-9 into clickable cards and added internal lesson pages `#practice-1` through `#practice-9`.
- Added delegated image expansion so Practice and Gallery visuals remain clickable after hash navigation.
- Validated at `http://localhost:4173/#practice`: 10 loaded teaching images, 9 technique cards, 8 filter-kit cards, 4 filter drills, no crop suspects, no horizontal overflow, no console errors, working full-image overlay, and working `#practice-1` lesson page.
- Validated the website-served artifact at `http://localhost:3000/projects/bosque-del-apache/index.html#practice` and `#practice-1` with a clean browser run: all teaching images loaded, zero crop suspects, and lesson-page image expansion opened with localhost full-image links and populated settings.

## 2026-06-04 - Gallery Teaching View Correction

Status: completed and validated June 4, 2026.

Goal: make the Gallery tab a generated-photo gallery only, with clickable full-view images and teaching metadata.

Completion notes:

- Removed the rights-summary/explainer treatment from the Gallery tab.
- Presented the generated planning images as a photo-first masonry gallery.
- Added a full-view overlay for each generated image.
- Added supposed location, lens, focal length, aperture, shutter speed, and technique notes for each generated image.
- Validated at `http://localhost:4173/#gallery`: nine generated cards, nine loaded images, no old gallery grid/note/rights summary, localhost full-image links, no console errors, and clean open/close behavior.

## 2026-06-04 - Global Website Navigation Correction

Status: completed and validated June 4, 2026.

Goal: correct the navigation layer boundary for the Bosque project. The Cristiano Pierry global navigation belongs to the main website wrapper, not inside the Bosque static artifact.

Completion notes:

- Removed the temporary `Home / Projects / Writing` placeholder from the Bosque artifact.
- Removed the attempted in-artifact Cristiano Pierry global navigation and logo asset.
- Kept the Bosque-specific section tabs inside the project experience; when hosted, they sit below the website wrapper navigation.
- Verified the main website route owns the global nav context, matching the WBD Celebration iframe pattern.

## 2026-06-04 - Practice Section Illustration Request

Status: completed and validated June 4, 2026.

Goal: illustrate the numbered Practice section items 1-9 where applicable.

Completion notes:

- Generated nine practice-specific training-preview contact sheets and stored them in `site/assets/generated/`.
- Added each generated preview to its matching numbered practice module in the website Practice section.
- Labeled the images as generated training previews, not actual Bosque field photographs.
- Added prompt/provenance, alt text, placement, and rights notes to `docs/research/visual-asset-manifest.md`.

## 2026-06-04 - Visual Expansion Request

Status: completed and validated June 4, 2026.

Goal: make the Bosque del Apache trip guide much more visual while keeping image rights, provenance, and expectations explicit.

| Area | Requested Work | Implementation Notes |
|---|---|---|
| Gallery section | Add a dedicated website gallery section. Generate five photorealistic planning images for each shot-list idea already represented in the project. | Images should be generated from the project's own shot descriptions, season, light, subject, lens, and field-position notes. Label them as generated planning previews, not actual Bosque field photos. Store prompts/provenance alongside the assets. |
| Itinerary visuals | For every itinerary stop across the Sunday arrival, Monday-Friday shooting days, and Saturday departure window, add five expected photo types and generate photorealistic examples of what the user may be trying to make at that location. | Each stop should connect visual examples to expected subject, light window, lens, photographer position, and practical constraints. Avoid fantasy scenes: birds, light, habitat, crowds, roads, and weather should stay plausible for Bosque del Apache in early December. |
| Photo windows | Add generated visual examples to the Photo Windows section. | Cover sunrise, mid-morning, and sunset decisions with realistic examples: roost silhouettes, goose blast-off, crane landings, feeding fields, wetland reflections, raptors, desert-edge subjects, and weather fallback frames. |
| Practice filters | Add a practice-area section explaining the major filters to bring and how to rehearse with them before travel. | Include when to use and when to avoid circular polarizers, neutral-density filters, protective/clear filters, step-up rings, filter sizes for both Sony/Canon branches, glare/reflection practice, shutter-drag practice, and cold-weather handling. |
| Travel hotel photos | Add official photos or official photo-gallery links for every hotel still recommended in the travel/lodging section. | Completed with generated lodging previews for visual context plus official gallery/property links for actual hotel photos. Do not cache or republish copyrighted hotel images unless terms clearly allow it. Recheck hotel pages before publishing. |
| External inspiration thumbnails | Add search-result-style thumbnails to the External Inspiration section where legally defensible. | Treat non-public-domain images as inspiration-only. Use small thumbnails, clear source labels, links back to the original page, no full-resolution reuse, and a documented fair-use rationale. Remove or replace any image where reuse looks risky. |
| Media thumbnails | Add thumbnails to the Media section for articles, videos, and external references. | Use the same thumbnail discipline as inspiration links: small preview, source label, direct link, no implication that the project owns the image, and no full-size cached copy unless the license permits it. |
| Sources thumbnails | Add visual thumbnails to source cards/log sections where useful. | Keep source credibility first. Thumbnails should help recognition only; each source still needs date checked, source URL, and rights/usage note when an image is involved. |
| Visual asset manifest | Create or extend a manifest that tracks every generated image, official image, public-domain image, thumbnail, prompt, source URL, license/rights note, alt text, and section placement. | This becomes the publishing guardrail before copying assets into the main website repo. |

## Acceptance Criteria

- A gallery section exists in the website prototype. Completed in `site/index.html` and `site/app.js`.
- Shot-list, itinerary, and photo-window visuals are present and section-specific. Completed with nine generated contact sheets and per-stop expected photo types.
- Generated images are labeled as generated planning previews. Completed in Gallery, Itinerary, Photo Windows, Travel, Practice, Inspiration, Media, and Sources.
- Official/public-domain/licensed images are separated from fair-use thumbnails and inspiration-only references. Completed with cached USFWS public-domain images, generated previews, generated lodging previews, and link-only cards for hotel galleries/products/articles/external references.
- Every visual asset has alt text, source/provenance, rights notes, and intended placement. Completed in `docs/research/visual-asset-manifest.md`.
- The practice section includes a practical filter kit and drills. Completed in `site/app.js` and `docs/research/practice-techniques.md`.
- The website is visually checked on desktop and mobile after the visual expansion. Completed with in-app browser QA on desktop and 390px mobile; no broken images, no console errors, no horizontal overflow.

## Completion Notes

- Generated nine photorealistic planning-preview contact sheets, each containing five frames, from the project's own shot descriptions and constraints.
- Added Gallery tab plus generated previews to itinerary stops, photo windows, travel workflow, filter practice, media cards, and source-topic cards.
- Added five expected photo types for every itinerary stop from Sunday arrival through Saturday departure.
- Replaced hotel placeholder panels with generated lodging previews while keeping official hotel galleries link-only.
- Restored Gear as the product-photo exception: Gear cards may show recorded official product images while keeping product/spec links visible.
- Added `docs/research/visual-asset-manifest.md` as the visual publishing guardrail.
- Validation: `wt bootstrap`, `node --check site/app.js`, local preview at `http://localhost:4173/`, desktop/mobile in-app browser QA, itinerary day-tab QA, broken-image checks, console-error checks, and mobile overflow checks.
