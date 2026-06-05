# Work Log

This file tracks requested project work that has not yet been implemented, verified, and published.

## 2026-06-05 - Principal Engineering Review Fixes

Status: completed and validated June 5, 2026.

Goal: fix the issues found in the principal engineering review of the Bosque del Apache website, covering SEO, maintainability, performance, publishing reliability, data maintainability, and QA guardrails.

Completion notes:

- Split research-backed site data from rendering and interaction code so content updates are easier to maintain.
- Normalized canonical production URLs to `https://crispierry.com/projects/bosque-del-apache` and kept the standalone guide discoverable.
- Added route cleanup so inactive rendered views and Leaflet maps do not keep accumulating after tab navigation.
- Expanded static QA to check script ordering, canonical metadata, missing asset references, generated-image counts, payload budgets, and data/renderer separation.
- Refreshed the main website artifact from the source repo and verified the crawlable wrapper, sitemap coverage, local build behavior, and desktop/mobile rendering.
- Validated the source repo with `node --check site/data.js`, `node --check site/app.js`, and `node scripts/qa-static.mjs`.
- Validated the website repo with `npm run lint`, `npm run typecheck`, `npm run build`, generated sitemap inspection, HTTP route checks, and in-app browser desktop/mobile audits.

## 2026-06-05 - Gear Scale Reference And 2x Teleconverter Follow-Up

Status: completed and validated June 5, 2026.

Goal: finish the missed Gear scale-chart requirements by making reference objects part of the actual charts, adding Sony and Canon 2x teleconverters, and using familiar category-appropriate references rather than abstract measurements.

Requested requirements:

- Sort length charts from longest to smallest and weight charts from heaviest to lightest.
- Put reference objects inside the charts themselves, not only in a separate reference strip.
- Use references that fit the chart category, so teleconverter charts get smaller references than wildlife zoom charts.
- Use familiar objects the reader can picture, such as a 12-inch ruler and AA battery, instead of invented references like 9-inch or 14-inch markers.
- Put the reference object as the leftmost item in every chart, then sort the actual gear after it.
- Render the reference object visually, not as a generic gray bar.
- Add Sony and Canon 2x teleconverters to the Gear list and include them in both length and weight scales.
- Preserve source links and product-photo documentation for the new gear items.

Completion notes:

- Added Sony SEL20TC 2x Teleconverter and Canon Extender RF 2x to the Gear data, cards, Compare table, length scale, and weight scale.
- Added official source records and product-photo manifest rows for the new 2x teleconverters.
- Replaced the old separate reference strips with illustrated in-chart reference objects pinned to the left of every chart.
- Added length references using a 12-inch ruler for lens categories and an AA battery for teleconverters.
- Added weight references using 1 L water bottle, 1.5 L water bottle, 2 L soda bottle, and full soda can objects where they fit the category.
- Added CSS-rendered reference illustrations in the site's restrained field-guide style: ruler, AA battery, water bottles, soda bottle, and soda can.
- Fixed the Sigma 500mm F5.6 category so it appears in Prime Reach instead of Super-Zooms.
- Bumped the site asset version to `20260605-gear-scale-v5` so the browser loads the updated Gear scripts/styles.
- Validated with static checks plus desktop and 390px mobile browser audits: reference objects are leftmost, actual gear after each reference sorts descending, teleconverters use AA-battery and soda-can references, old reference strips are gone, Sony/Canon 2x entries appear, Canon product image loads, and there is no page-level horizontal overflow.

## 2026-06-05 - Gallery True Mosaic Regeneration Correction Request

Status: completed and validated June 5, 2026.

Goal: correct the Gallery implementation. The cropped-contact-sheet approach is not acceptable. Regenerate the individual Gallery images as true standalone, high-resolution generated photos, and present them in a real clickable mosaic.

Requested requirements:

- Do not use crops split from the existing generated mosaic/contact-sheet files as the final Gallery images.
- Regenerate each individual image represented in the earlier mosaic/contact-sheet concepts as its own standalone high-resolution generated photo.
- Produce each standalone Gallery photo at true 1080p quality or better, ideally 1920x1080 for landscape frames or an equivalent high-resolution image with a minimum 1080px short edge for non-landscape framing.
- Restore the Gallery page to a mosaic-style presentation, but make it a true mosaic assembled from individual image files, not one baked-in image with multiple photos burned into it.
- Keep the visual grouping and storytelling value of the original mosaics/contact sheets.
- Make every mosaic tile independently clickable.
- Clicking any tile should open that specific standalone high-resolution image, not the whole mosaic/contact sheet.
- Preserve or improve the title, description, technique, camera settings, lens/focal length, aperture, shutter speed, and field-location metadata for every individual image.
- Keep the generated-planning-preview labeling clear so visitors understand these are planning visuals, not actual Bosque del Apache field photographs.
- Update the visual asset manifest with every regenerated standalone image, including prompt/provenance, rights note, alt text, and placement.
- Leave the current cropped assets in place only as temporary implementation artifacts until the corrected regenerated images are ready to replace them.

Acceptance criteria:

- The Gallery no longer relies on cropped pieces of prior contact sheets as final visual assets.
- The Gallery displays true mosaic layouts composed of separate image files.
- Every mosaic tile opens an individual standalone high-resolution image.
- The full-image overlay shows the correct metadata for the selected tile.
- The regenerated images look polished, intentional, and substantially better than the cropped contact-sheet frames.
- Desktop and mobile QA confirm no broken images, awkward crops, text overlap, label confusion, or horizontal overflow.

Notes:

- This correction supersedes the prior Gallery crop/split interpretation recorded below.
- The previous request was understood incorrectly: the desired outcome is regenerated standalone images plus a true clickable mosaic, not cropped frames extracted from a baked-in mosaic.
- June 5 audit found the prior completion status was incorrect: `site/assets/generated/gallery-standalone/*.jpg` files are split fragments with short edges around 247-326px, and `site/app.js` still describes them as separated from contact sheets.
- June 5 completion uses corrected assets under `site/assets/generated/gallery-hd/`; the old split fragments remain only as legacy artifacts and are not used by the active Gallery page.

Progress notes:

- Regenerated and wired all nine Gallery stories as forty-five standalone 1920x1080 generated photos under `site/assets/generated/gallery-hd/`.
- Replaced the active Gallery renderer with true clickable mosaic sections that exclude the old split `gallery-standalone` fragments until each story is regenerated.
- Increased the desktop mosaic row height after design review so non-featured tiles no longer read as thin strips while preserving the true clickable mosaic structure.
- Documented all forty-five regenerated Gallery photos in the visual asset manifest.
- Validated desktop and 390px mobile for the completed Gallery: 45 active mosaic images, nine active mosaic groups, zero pending groups, no old `gallery-standalone` sources in the active Gallery, no split-contact-sheet copy or repair-language, no broken active images, no horizontal overflow, exact 1920x1080 file dimensions, 1920x1080 active image probes, and working lightbox metadata.

## 2026-06-05 - Guide Purpose-Built Hero Illustration Correction Request

Status: completed and validated June 5, 2026.

Goal: correct the Guide page visual treatment. The Guide should have its own high-quality, purpose-built generated image that illustrates the guide itself; reused cropped images, split contact-sheet frames, or scrapped artwork from earlier attempts are not acceptable.

Requested requirements:

- Do not use cropped pieces from existing generated mosaic/contact-sheet files as the final Guide illustration.
- Do not use the previously scrapped Gallery crop artwork as Guide artwork.
- Generate a new, polished, high-quality image specifically for the Guide page and its editorial purpose.
- The image should feel like it belongs to a serious photography field guide for Bosque del Apache: practical, beautiful, destination-specific, and aligned with the guide's long-form publishing quality.
- The image should illustrate the Guide as a whole, not merely recycle a single gallery frame.
- Use the Guide's actual subject matter as creative direction: Bosque del Apache, winter bird photography, cranes/geese, dawn or dusk light, refuge wetlands, mountains, photographer field craft, and trip-planning context.
- Make the image high-resolution and publication-ready, with no visible crop artifacts, no contact-sheet seams, no baked-in thumbnails, no awkward text, and no AI-generated labels inside the artwork.
- Place the image thoughtfully in the Guide experience, such as a hero/editorial lead image or another prominent guide-specific placement.
- Keep any generated-planning-preview or illustration labeling clear so visitors understand the image is generated editorial artwork, not an actual field photograph.
- Update the visual asset manifest with the new Guide image prompt/provenance, rights note, alt text, and placement before publication.

Acceptance criteria:

- The Guide page includes a purpose-built high-quality generated illustration created specifically for the Guide.
- The Guide no longer relies on cropped contact-sheet pieces or scrapped prior artwork for its primary visual treatment.
- The image improves the editorial quality of the Guide and feels intentional, polished, and publication-ready.
- The image has accurate alt text, caption/provenance where appropriate, and documented rights/usage notes.
- Desktop and mobile QA confirm no broken image, awkward crop, text overlap, poor scaling, or horizontal overflow.

Notes:

- This correction supersedes the earlier Guide illustration implementation where existing cropped/generated assets were reused.
- The corrected requirement is not to fill the Guide with leftover visuals; it is to create a dedicated high-quality Guide image for its own purpose.

Completion notes:

- Generated a new purpose-built Guide hero image for the long-form field guide rather than reusing cropped contact-sheet frames or scrapped gallery artwork.
- Placed the image as a prominent editorial lead figure in the standalone Complete Photographer's Guide.
- Added descriptive alt text and a generated-guide caption that clearly explains the image is editorial artwork, not an actual field photograph.
- Documented the image prompt, provenance, rights note, and placement in the visual asset manifest.
- Fixed the standalone Guide article after design/engineering review found seven stale `gallery-standalone` split-fragment figures; those active figures now use regenerated 1920x1080 `gallery-hd` images and the article modified date is June 5, 2026.
- Validated the Guide image loads cleanly with no broken image, text overlap, awkward scaling, or page-level horizontal overflow on desktop and mobile.

## 2026-06-05 - Map Label Offset And Pin Alignment Correction Request

Status: completed and validated June 5, 2026.

Goal: correct the Refuge Shooting Map label placement so labels are clearly aligned with their pins and no longer sit awkwardly over the map or visually detach from the peg/pin they describe.

Requested requirements:

- Move map labels farther away from their pins where needed so they do not cover the pin, crowd nearby labels, or obscure important map context.
- Keep every label visually aligned with its associated peg/pin.
- Bias label placement outward by map side:
  - Pins on the left side of the map should generally have labels placed farther to the left.
  - Pins on the right side of the map should generally have labels placed farther to the right.
- Maintain a clear visual relationship between each label and its exact pin, using direction, spacing, and tooltip pointer alignment.
- Review every permanent map label, not just the most obvious overlaps.
- Confirm the label strategy works on both desktop and mobile map sizes.

Acceptance criteria:

- Every map label is readable and visually connected to the correct pin.
- Labels no longer sit directly on top of pins or awkwardly over important map areas when a better outward placement is available.
- Left-side pins bias labels left, and right-side pins bias labels right.
- Label pointers/anchors line up cleanly with the corresponding pins.
- Desktop and mobile QA confirm no label collisions, bad pin-label alignment, unreadable labels, or page-level horizontal overflow.

Notes:

- The prior permanent-label implementation added the labels, but the current placement needs a dedicated alignment pass.
- Do not treat this as completed until the label offsets and anchor directions have been visually checked against the live map.

Completion notes:

- Reworked permanent map-label offsets so left-side pins bias left and right-side pins bias right.
- Added horizontal map-fit gutters for the photography map so permanent labels are not clipped at the map edges.
- Added mobile-specific short labels and offsets for dense clusters while preserving full labels on desktop.
- Validated desktop and 390px mobile: 11 labels, no label collisions, no clipped labels, no page-level horizontal overflow.

## 2026-06-05 - Itinerary Purpose-Built Regenerated Image Correction Request

Status: completed and validated June 5, 2026.

Goal: correct the Itinerary page visuals. The current implementation uses cropped images taken from prior generated mosaic/contact-sheet files, and the crops are not acceptable. Each itinerary visual should be regenerated as a high-quality standalone image that specifically suits the itinerary stop, time of day, subject, and field decision it is meant to illustrate.

Requested requirements:

- Do not use crops split from existing generated mosaic/contact-sheet files as final Itinerary visuals.
- Do not use incorrectly cropped or awkwardly framed versions of earlier generated images.
- Regenerate the images needed for the Itinerary page as purpose-built, high-quality standalone planning visuals.
- Each regenerated image should match the specific itinerary stop it illustrates, including:
  - Day or itinerary phase.
  - Sunrise, mid-morning, sunset, or travel/logistics timing.
  - Expected subjects such as cranes, geese, ducks, wetlands, farm fields, flight decks, decks, roads, or weather fallback scenes.
  - Photographer position and field-decision context.
  - Lens/focal-length intent and practical shooting goal.
- Preserve the idea of visual support for every relevant itinerary stop, but replace cropped source material with intentional regenerated artwork.
- Keep the images labeled as generated planning previews, not actual Bosque del Apache field photographs.
- Preserve or improve the image metadata used in cards and full-image overlays: title, description, location, technique, lens, focal length, aperture, shutter speed, and itinerary context.
- Update the visual asset manifest with every regenerated itinerary image, including prompt/provenance, rights note, alt text, and placement.

Acceptance criteria:

- The Itinerary page no longer relies on cropped contact-sheet fragments as final visuals.
- Every itinerary visual is a purpose-built regenerated image suited to the stop or field decision it supports.
- The images look polished, correctly framed, and intentionally composed.
- Each image opens individually with accurate full-image metadata.
- Desktop and mobile QA confirm no broken images, awkward crops, text overlap, metadata confusion, or horizontal overflow.

Notes:

- This correction supersedes the previous Itinerary implementation that reused cropped standalone frames extracted from mosaics/contact sheets.
- The corrected requirement is to regenerate imagery for the intended illustration purpose, not to crop the old mosaics more carefully.

Completion notes:

- Generated and integrated 18 purpose-built standalone 1920x1080 Itinerary images under `site/assets/generated/itinerary-hd/`, one for every visible itinerary stop from Sunday arrival through Saturday departure.
- Replaced the live Itinerary visual renderer so each stop now uses its own dedicated lead image instead of reused Gallery groups, cropped fragments, contact sheets, or split-frame grids.
- Added full image metadata for each Itinerary visual, including title, description, generated-planning labeling, location/scenario, lens, focal length, aperture, shutter speed, and technique notes for the full-image overlay.
- Added explicit 1920x1080 dimensions to shared visual cards so lazy Itinerary images reserve space on mobile instead of briefly collapsing into thin strips.
- Documented every regenerated Itinerary image in the visual asset manifest with local path, original generated source file, alt text, placement, prompt/provenance summary, and rights note.
- Validated desktop and 390px mobile: seven day tabs, 18 total Itinerary image references, 18 unique `itinerary-hd` sources, zero old Gallery/contact-sheet sources, no missing asset references, no browser console errors, working lightbox metadata, no page-level horizontal overflow, and exact 1920x1080 file dimensions.

## 2026-06-05 - Photo Windows High-Resolution Image And Layout Correction Request

Status: completed and validated June 5, 2026.

Goal: correct the Photo Windows page. The current implementation uses cropped/split images derived from earlier generated mosaics/contact sheets, which is not acceptable. The page also feels too crowded and needs a cleaner layout that gives the photography windows and high-quality images room to breathe.

Requested requirements:

- Do not use cropped pieces from existing generated mosaic/contact-sheet files as final Photo Windows visuals.
- Do not use scraped, split, or awkwardly cropped artwork from prior attempts.
- Generate new high-resolution images specifically for the Photo Windows page.
- Each generated image should be purpose-built for the photo window it illustrates:
  - Sunrise.
  - Mid-morning.
  - Sunset.
  - Weather or fallback scenarios where appropriate.
- Images should be publication-quality, correctly framed, and at least true 1080p quality or better.
- The images should directly support the page's teaching purpose: when to shoot, what subject behavior to expect, where to stand, what lens/focal length to consider, and what photographic decision the time window requires.
- Preserve or improve the full-image metadata for each visual: title, description, field location, technique, lens, focal length, aperture, shutter speed, and window/timing context.
- Redesign the Photo Windows page so it is less crowded and easier to scan.
- Find a better layout for comparing sunrise, mid-morning, sunset, and fallback windows without overwhelming the reader.
- Give high-resolution imagery a prominent role rather than squeezing too many small cards into one dense area.
- Keep generated-planning-preview labeling clear so visitors understand these are planning visuals, not actual Bosque del Apache field photographs.
- Update the visual asset manifest with every regenerated Photo Windows image, including prompt/provenance, rights note, alt text, and placement.

Acceptance criteria:

- The Photo Windows page no longer relies on cropped contact-sheet fragments or split mosaic images as final visuals.
- Every major photo window has one or more purpose-built high-resolution generated images.
- The page layout feels calmer, clearer, and less crowded on desktop and mobile.
- The redesigned page makes it easy to compare sunrise, mid-morning, sunset, and fallback shooting decisions.
- Each image opens individually with accurate full-image metadata.
- Desktop and mobile QA confirm no broken images, awkward crops, crowded card stacks, text overlap, metadata confusion, or horizontal overflow.

Notes:

- This correction supersedes the previous Photo Windows implementation that reused cropped standalone frames extracted from mosaics/contact sheets.
- The priority is the high-resolution regenerated images; the layout redesign should support those images instead of competing with them.

Completion notes:

- Generated and integrated eight purpose-built standalone 1920x1080 Photo Windows images under `site/assets/generated/photo-windows-hd/`.
- Rebuilt the Photo Windows layout around four calmer decision tabs: Sunrise, Mid-morning, Sunset, and Weather fallback.
- Replaced the prior reused-frame grid and repeated itinerary thumbnail cards with two large window-specific images plus text-only related itinerary moments for each tab.
- Added full lightbox metadata for every Photo Windows image, including location/scenario, lens, focal length, aperture, shutter speed, and technique guidance.
- Documented all eight regenerated Photo Windows images in the visual asset manifest with local path, original generated source file, alt text, placement, prompt/provenance summary, and rights note.
- Validated desktop and 390px mobile: four window tabs, eight total Photo Windows image references, eight unique `photo-windows-hd` sources, zero Gallery/contact-sheet/Itinerary reused image sources, no missing asset references, no browser console errors, working full-image metadata, no page-level horizontal overflow, and exact 1920x1080 file dimensions.

## 2026-06-05 - Travel Rental Car Section Layout And Label Correction Request

Status: completed and validated June 5, 2026.

Goal: improve the Travel page rental-car section. The generated rental car illustration is successful and should be kept, but the section should not be framed as a "rental workflow." It should clearly read as a rental car section, and the layout needs to be redesigned so the image and rental-car guidance work better together.

Requested requirements:

- Keep the generated rental car illustration; the image itself is approved and should not be discarded.
- Reframe the section language from "rental workflow" to "rental car" or another clear rental-car-specific label.
- Avoid implying the image is a generic workflow when it is specifically about the rental car decision and cargo/field setup.
- Redesign the rental car section layout on the Travel page.
- Find a layout where the illustration feels integrated, polished, and useful rather than awkwardly attached to the current card flow.
- Make the rental car guidance easier to scan and act on.
- Preserve the practical decision content: car type, predawn logistics, cargo setup, long-lens/tripod handling, comfort, and field-readiness.
- Confirm the section works well on both desktop and mobile.
- Update captions, labels, alt text, and visual manifest wording if needed so they accurately describe the image as a rental car illustration.

Acceptance criteria:

- The Travel page rental section clearly reads as a rental car section, not a rental workflow section.
- The approved rental car illustration remains in use.
- The layout looks intentional and balanced on desktop and mobile.
- The image, heading, caption, and guidance copy all use consistent rental-car framing.
- Desktop and mobile QA confirm no awkward image placement, text crowding, broken image, label confusion, or horizontal overflow.

Notes:

- The route/airport illustration work is approved.
- The rental car illustration is approved; the requested change is section labeling and layout, not regenerating that image.

Completion notes:

- Kept the approved rental car illustration and rebuilt the Travel rental area as a dedicated rental car setup section.
- Removed "Rental workflow" framing from the section and changed the visual caption to "Generated rental car setup illustration."
- Moved rental-car guidance into a clearer list beside the image so the practical booking/cargo decisions are easier to scan.
- Validated desktop and 390px mobile: one rental car section, no "Rental workflow" copy, no page-level horizontal overflow.

## 2026-06-05 - Gear Scale Reference Image And Category Layout Correction Request

Status: completed and validated June 5, 2026.

Goal: improve the Gear page lens scale charts so they are easier to understand at a glance. The current charts are missing clear visual references, the sort order should run from largest/heaviest to smallest/lightest, and the category descriptions are mis-positioned.

Requested requirements:

- Add reference images or visual reference markers to each lens length chart so the reader understands what common sizes mean, such as 100mm, 200mm, and other meaningful reference points.
- Add comparable reference images or visual reference markers to the weight charts so the reader understands what the listed gram weights feel like in practice.
- Sort physical lens length charts from the longest/tallest lenses first down to the smallest lenses.
- Sort weight charts from the heaviest lenses first down to the lightest/smallest lenses.
- Keep the sorting consistent inside each category, including 70-200mm zooms, wildlife zooms, super-zooms, primes, and teleconverters where applicable.
- Rework the category header layout so each category description sits directly under the category title.
- Fix the current indentation/alignment problem where the category description appears off to the right instead of reading as part of the category heading.
- Make the reference visuals and labels useful without making the charts feel crowded.
- Confirm the revised scale charts work on both desktop and mobile.

Acceptance criteria:

- Every lens length chart includes clear reference imagery or markers for familiar size comparisons.
- Every lens weight chart includes clear reference imagery or markers for practical weight comparisons.
- Length charts read from longest/tallest to smallest.
- Weight charts read from heaviest to lightest/smallest.
- Category descriptions appear under their category titles with clean alignment.
- The chart layout remains readable, scrollable where appropriate, and not visually crowded.
- Desktop and mobile QA confirm no broken reference images, confusing alignment, text overlap, unreadable chart labels, or page-level horizontal overflow.

Notes:

- The existing brand/category filter concept is useful, but the scale charts need better reference context and clearer hierarchy.
- Do not treat this as completed until the chart order, reference visuals, and category-description alignment have all been checked visually.

Completion notes:

- Added reference silhouette strips to every lens length and lens weight category chart.
- Length reference markers show 100mm, 200mm, 300mm, and 400mm comparisons; weight reference markers show 500g, 1kg, 2kg, and 2.5kg comparisons.
- Confirmed length charts sort longest/tallest to smallest and weight charts sort heaviest to lightest within each category.
- Reworked category headers so descriptions sit directly under category titles instead of appearing off to the right.
- Expanded and tightened the lens-scale label area after design review found compact chart labels clipping on desktop and mobile.
- Validated desktop and 390px mobile: 10 reference strips, category descriptions under titles, no page-level horizontal overflow.

## 2026-06-05 - Practice Technique Image And Teaching Layout Correction Request

Status: completed and validated June 5, 2026.

Goal: correct the Practice page so each of the nine pre-trip techniques has a meaningful, original, high-quality image and enough page space/instructional depth for a photographer to actually learn the technique.

Requested requirements:

- Create or regenerate original high-quality images for each of the nine Practice techniques.
- Do not use cropped contact-sheet fragments, mismatched generated leftovers, or visuals that do not clearly support the specific technique.
- Each technique image should make immediate visual sense for the lesson it illustrates.
- Each of the nine techniques should have its own purposeful visual direction, tied to the actual skill being taught.
- Redesign the Practice page layout so the nine technique cards are not crammed into three dense columns.
- Give each technique proper space on the page so it feels important and learnable.
- Make the Practice page feel like a teaching experience, not a compact card directory.
- Provide enough information for each technique that a person can understand what to practice, why it matters, how to practice it, and what success looks like.
- Preserve navigation into individual practice-detail pages where useful, but improve the main page so it already communicates the lesson value.
- Keep generated-planning-preview labeling clear where generated images are used.
- Update the visual asset manifest with every new Practice technique image, including prompt/provenance, rights note, alt text, and placement.

Acceptance criteria:

- All nine Practice techniques have original high-quality images created for that specific technique.
- No Practice technique relies on confusing, irrelevant, awkwardly cropped, or leftover imagery.
- The Practice page layout is roomier than the current three-column cram and gives each technique appropriate visual and instructional weight.
- Each technique includes enough teaching content for the user to learn what to do, not merely recognize the topic.
- Desktop and mobile QA confirm no broken images, awkward crops, crowded cards, text overlap, confusing hierarchy, or horizontal overflow.

Notes:

- This correction supersedes the previous Practice visual implementation that reused cropped/split or poorly matched generated images.
- The priority is a better learning experience: high-quality technique-specific images plus enough layout space and explanation for each technique to teach well.

Completion notes:

- Generated and integrated nine purpose-built standalone 1920x1080 Practice technique images under `site/assets/generated/practice-hd/`, one for each pre-trip technique.
- Replaced the active core Practice technique visuals so the main Practice page and individual practice-detail pages use the regenerated `practice-hd` images instead of `practice-standalone` split fragments or contact-sheet crops.
- Redesigned the main Practice technique area from a compact multi-column card directory into nine full-width teaching lessons with a large image, goal, all practice steps, a success check, and preserved "Open lesson" navigation.
- Added full lightbox metadata for each regenerated Practice image by linking it to the existing technique lesson metadata.
- Documented all nine regenerated Practice images in the visual asset manifest with local path, original generated source file, alt text, placement, prompt/provenance summary, and rights note; old practice contact sheets and split frames are now marked as legacy.
- Validated desktop and 390px mobile: nine active Practice lesson cards, nine unique `practice-hd` image sources, zero old split/contact-sheet/Gallery sources in the active core Practice lessons, nine step blocks, nine success checks, no missing asset references, no browser console errors, working full-image metadata, working practice-detail navigation, no page-level horizontal overflow, and exact 1920x1080 file dimensions.

## 2026-06-05 - Inspiration High-Resolution Generated Photo Set Request

Status: completed and validated June 5, 2026.

Goal: correct and expand the Inspiration page with high-resolution, purpose-built, photorealistic generated images that accurately capture the kinds of photographs people typically make at Bosque del Apache. Cropped fragments from previous mosaic/contact-sheet images are not acceptable.

Requested requirements:

- Do not use cropped pieces from existing generated mosaic/contact-sheet files as final Inspiration visuals.
- Do not use awkwardly cropped, low-quality, or leftover generated artwork from prior attempts.
- Generate a larger set of high-quality, photorealistic inspiration images for the Inspiration page.
- Target approximately 30 generated inspiration images, unless implementation discovers a better final count that still gives the page enough breadth.
- Base the images on typical Bosque del Apache photography subjects and scenes, such as:
  - Sandhill cranes at dawn roosts.
  - Snow goose blast-offs.
  - Evening crane fly-ins.
  - Birds reflected in calm wetlands.
  - Backlit mist, breath, and cold morning atmosphere.
  - Flight formations against New Mexico mountains.
  - Farm-field feeding behavior.
  - Ducks, raptors, cottonwoods, desert edges, and weather fallback subjects.
  - Wide environmental scenes, tight behavior studies, silhouettes, pans, and layered flock compositions.
- Each generated image should be high-resolution, publication-ready, and photorealistic.
- Each image should correctly capture the Bosque del Apache setting, season, light, habitat, and photographic subject.
- Each image should have complete technique metadata, including:
  - Title.
  - Description.
  - Scene or subject type.
  - Field location or likely shooting area.
  - Technique used.
  - Lens choice.
  - Focal length.
  - Aperture.
  - Shutter speed.
  - ISO if useful.
  - Photographer position or field note where useful.
- Redesign or extend the Inspiration page so the image set feels curated, inspiring, and useful rather than crowded.
- Keep generated-planning-preview labeling clear so visitors understand these are generated inspiration/planning visuals, not actual Bosque del Apache field photographs.
- Update the visual asset manifest with every generated Inspiration image, including prompt/provenance, rights note, alt text, metadata, and placement.

Acceptance criteria:

- The Inspiration page no longer relies on cropped contact-sheet fragments as final visuals.
- The page includes a broad, high-quality generated inspiration set of around 30 Bosque del Apache scenes.
- The generated images are photorealistic, well-composed, and visually credible for Bosque del Apache.
- The image set covers a useful range of typical Bosque subjects, light windows, focal lengths, and field techniques.
- Every image opens or presents with complete technique metadata, including focal length, aperture, shutter speed, and technique.
- The page layout feels curated and inspirational on desktop and mobile.
- Desktop and mobile QA confirm no broken images, awkward crops, crowded layout, text overlap, metadata confusion, or horizontal overflow.

Notes:

- This correction supersedes the previous Inspiration implementation that reused cropped/split generated frames.
- The purpose of this page is inspiration and photographic expectation-setting, so image quality and scene credibility matter more than simply filling slots.

Completion notes:

- Generated and integrated 30 purpose-built standalone 1920x1080 Inspiration images under `site/assets/generated/inspiration-hd/`.
- Rebuilt the Inspiration page so the generated set is the primary experience, with a large feature image, explanatory planning copy, a curated 30-image grid, public-domain references, and link-only external study sources.
- Added complete image metadata for each Inspiration image: title, scene type, description, likely shooting area, lens, focal length, aperture, shutter speed, ISO, and technique notes.
- Updated the shared lightbox and image-card metadata so ISO is shown when available and lazy images reserve 16:9 layout space before loading.
- Replaced the External Inspiration cards and Media thumbnails with individual `inspiration-hd` images instead of older Gallery/contact-sheet frames.
- Documented all 30 regenerated Inspiration photos in the visual asset manifest with local path, original generated source file, alt text, placement, prompt/provenance summary, and rights note.
- Validated desktop and 390px mobile: 30 active Inspiration cards, 30 unique `inspiration-hd` sources, zero active old Gallery/contact-sheet sources on Inspiration, complete metadata with ISO, no browser console errors, no missing local asset references, no page-level horizontal overflow, exact 1920x1080 file dimensions, and visually reviewed desktop/mobile screenshots.

## 2026-06-05 - Media Disclaimer Copy Removal Request

Status: completed and validated June 5, 2026.

Goal: clean up the Media section by removing unnecessary disclaimer copy that clutters the page.

Requested requirements:

- Remove the small disclaimer text that says "Generated Preview Source Photo Not Reused" from the Media section.
- Do not replace it with another similarly distracting disclaimer in the same location.
- Keep any required source, rights, provenance, or generated-preview information in the appropriate manifest, source notes, or metadata rather than as distracting repeated card copy.
- Preserve useful source links and media context.

Acceptance criteria:

- The Media section no longer shows the "Generated Preview Source Photo Not Reused" disclaimer.
- The page remains clear about sources and generated previews without unnecessary visual clutter.
- Desktop and mobile QA confirm no layout regressions or awkward blank space after the copy is removed.

Notes:

- This is a copy/layout cleanup request only; it does not require regenerating Media images.

Completion notes:

- Removed the repeated "Generated preview; source photo not reused" card label from the Media source cards.
- Kept a shorter neutral generated-preview label where a small visual marker remains useful.
- Replaced repetitive contact-sheet Media thumbnails with individual relevant `inspiration-hd` images so Media cards no longer reuse the same old contact sheets across unrelated sources.
- Validated desktop and 390px mobile: old disclaimer phrase is absent and no page-level horizontal overflow.

## 2026-06-05 - Sources Thumbnail Relevance Cleanup Request

Status: completed and validated June 5, 2026.

Goal: clean up the Sources page thumbnails. The current thumbnails are repetitive and do not make sense for the links they represent. Either remove the thumbnails or replace them with visuals that do justice to each linked source.

Requested requirements:

- Review the Sources page thumbnail treatment.
- Remove thumbnails that are repetitive, generic, confusing, or unrelated to the linked source.
- If thumbnails remain, each one should meaningfully support the specific source it links to.
- Avoid reusing the same generated preview repeatedly across unrelated source cards.
- Prioritize source clarity and credibility over decorative imagery.
- Keep the page easy to scan and focused on source quality, date checked, source type, and relevance.
- If replacement visuals are used, document their source/provenance and rights in the visual asset manifest where needed.
- If no suitable visual exists for a source, use a cleaner text-only or icon-like treatment instead of forcing an irrelevant thumbnail.

Acceptance criteria:

- The Sources page no longer shows repetitive thumbnails that make no sense for the linked sources.
- Each source card either has no thumbnail or has a thumbnail that clearly fits the linked source.
- The page feels more credible, less noisy, and easier to scan.
- Desktop and mobile QA confirm no awkward blank spaces, broken images, confusing repeated visuals, text overlap, or horizontal overflow.

Notes:

- The likely acceptable outcome is removing many or all source thumbnails unless a source-specific visual is genuinely useful.
- Do not keep thumbnails simply because the Media or Inspiration sections have imagery.

Completion notes:

- Removed the repetitive generated thumbnails from the Sources rows.
- Reframed Sources as a source-first index focused on topic, title, URL, and date checked.
- Removed now-unused source-thumbnail mapping code and related CSS.
- Validated desktop and 390px mobile: 27 source rows, zero source thumbnails, no confusing repeated visuals, and no page-level horizontal overflow.

## 2026-06-05 - Design And Engineering Review Follow-Up

Status: completed and validated June 5, 2026.

Goal: address review findings after the June 5 work-log correction pass and make the site closer to publish-ready.

Findings fixed:

- Guide still used seven stale `gallery-standalone` split/cropped images in `site/complete-photographers-guide.html`.
- Guide SEO/article freshness metadata still said June 3, 2026 despite June 5 publication-facing updates.
- Itinerary lazy images could briefly collapse on mobile because shared visual cards did not reserve image dimensions.
- Media cards reused repetitive contact-sheet thumbnails instead of source-relevant visuals.
- Gear scale labels could clip in compact chart columns.
- Gallery desktop mosaic rows could make non-featured 16:9 images read as too thin.
- Publish-readiness checks were mostly manual.

Completion notes:

- Replaced the active Guide split-fragment figures with regenerated 1920x1080 `gallery-hd` figures and updated Guide modified metadata/date to June 5, 2026.
- Added 1920x1080 dimensions to shared visual cards and added ISO to the shared visual metadata/lightbox path.
- Replaced Media thumbnail mapping with individual `inspiration-hd` visuals.
- Expanded lens-scale label space and increased Gallery mosaic row height.
- Added `scripts/qa-static.mjs` and documented the static QA commands in `site/README.md`.
- Validated with `node --check site/app.js`, `node scripts/qa-static.mjs`, `git diff --check`, in-app browser desktop/mobile DOM audits for Inspiration, Guide, Media, Gear, Itinerary, and Gallery, plus visual screenshots for Inspiration desktop/mobile, Guide mobile, and Gallery desktop.

## 2026-06-04 - Gallery Standalone HD Image Request

Status: completed and validated June 4, 2026.

Goal: redo the Gallery so each image currently embedded inside the generated mosaic/contact-sheet assets becomes its own standalone HD image.

Requested requirements:

- Replace the current gallery mosaic/contact-sheet presentation with individual images.
- Use the existing generated gallery ideas/frames as the basis for the standalone images.
- Make each standalone image 1024 HD size.
- Keep each image separate rather than bundling about five frames into one mosaic.
- For every individual gallery image, include:
  - Title.
  - Description.
  - Technique.
  - Camera settings.
  - Field location.

Acceptance criteria:

- The Gallery tab no longer displays five-frame mosaic/contact-sheet images as the primary gallery assets.
- Each former mosaic frame is represented by a standalone 1024-size image file.
- Each gallery card and full-image view expose the required title, description, technique, camera settings, and field location.
- Generated images remain labeled as planning previews, not actual Bosque del Apache field photographs.
- The visual asset manifest is updated for every new standalone gallery image before publication.
- Desktop and mobile QA confirm the gallery has no broken images, console errors, text overlap, or horizontal overflow.

Completion notes:

- Split the nine generated Gallery contact sheets into 45 standalone Gallery frame files under `site/assets/generated/gallery-standalone/`.
- Rendered the Gallery tab from the standalone frame set, with zero contact-sheet images used as primary Gallery cards.
- Added visible title, description, technique, camera settings, and field-location metadata to every Gallery card.
- Preserved the full-image overlay and populated it with standalone image, title, description, location, lens, focal length, aperture, shutter speed, and technique.
- Updated `docs/research/visual-asset-manifest.md` with a row for every standalone Gallery frame.
- Validated desktop and 390px mobile: 45 Gallery cards, no broken images, no console errors, no page-level horizontal overflow, and no contact-sheet primary Gallery images.

## 2026-06-04 - Guide Page Editorial Illustration Request

Status: completed and validated June 4, 2026.

Goal: make the Guide page feel like an eloquently illustrated publishing-house guide by placing high-quality visuals throughout the long-form content where they naturally support the writing.

Requested requirements:

- Add illustrations throughout the Guide page, not just in the Gallery.
- Use the existing high-quality generated images where they fit the surrounding guide copy.
- When the guide discusses camera gear, include relevant gear photos already available on the website.
- When the guide discusses lodging or hotels, include relevant lodging/travel illustrations.
- Treat the Guide as an editorial publication: images should be placed with taste, context, rhythm, and visual quality.
- Keep images high quality and avoid filler visuals.

Acceptance criteria:

- Major Guide sections have relevant supporting visuals where an editor would naturally place them.
- Gear discussion includes appropriate existing gear photos.
- Lodging or hotel discussion includes appropriate lodging/travel illustrations.
- Generated visuals remain clearly labeled as planning previews where needed.
- Visual placement improves comprehension and pacing without overwhelming the text.
- Desktop and mobile QA confirm no broken images, awkward crops, text overlap, or horizontal overflow.
- The visual asset manifest is updated for any new image placements before publication.

Completion notes:

- Added 10 editorial figures throughout `site/complete-photographers-guide.html`, which also feeds the in-app `#guide` tab.
- Used a mix of existing public-domain field imagery, standalone generated Gallery frames, a local Gear product photo, and a lodging/travel preview.
- Placed visuals at major guide sections including seasonality, time of day, places, wildlife behavior, techniques, equipment, itinerary strategy, logistics, and shot list.
- Added Guide figure styling for editorial captions, source/usage labels, uncropped images, and mobile-safe layout.
- Updated the visual asset manifest with the Guide editorial placements.
- Validated the in-app Guide and standalone guide page on desktop and 390px mobile: 10 figures, no broken images, no console errors, and no page-level horizontal overflow.

## 2026-06-04 - Map Pin Label Request

Status: completed and validated June 4, 2026.

Goal: make the Map page easier to read by showing each pin's name directly on the map.

Requested requirements:

- Add the location name as an on-map label for each pin.
- Keep labels visually connected to their corresponding pins.
- Make sure labels do not overlap with one another.
- Preserve map readability on desktop and mobile.

Acceptance criteria:

- Every map pin has a visible name label on the map itself.
- Labels do not overlap each other or obscure important map information.
- Labels remain legible at the intended map size and responsive breakpoints.
- Desktop and mobile QA confirm no label collisions, text clipping, or horizontal overflow.

Completion notes:

- Added permanent on-map labels to the photography Map pins while leaving the Travel lodging map label-free.
- Added per-location label direction and offset hints for dense clusters such as the crane ponds, Willow/Coyote Deck, Farm Deck, and Visitor Center.
- Added responsive desktop/mobile label placement support where one label needed different desktop and mobile positioning.
- Added a responsive map refresh so labels stay separated after browser resize or phone rotation.
- Styled labels as compact one-line map callouts with connector arrows.
- Validated desktop and 390px mobile: 11 visible Map labels, zero label collisions, zero clipped labels, no console errors, and no page-level horizontal overflow.

## 2026-06-04 - Itinerary Layout And HD Image Request

Status: completed and validated June 4, 2026.

Goal: redesign the Itinerary page to reduce dead white space, put more emphasis on images and expected photo types, and make better use of the available layout space.

Requested requirements:

- Redesign the current table-like itinerary layout because it leaves too much dead white space.
- Maximize useful space and visual density without making the page feel crowded.
- Give more focus to the images and expected photo types for each itinerary stop.
- Use individual image assets, not embedded five-frame contact sheets, for itinerary visuals.
- The images may be arranged in a mosaic-style presentation, but each image must remain its own standalone image.
- Each image should be clickable into its HD format.
- Reuse the standalone gallery images where appropriate once those are created.

Acceptance criteria:

- The Itinerary page no longer feels dominated by empty table space.
- Expected photo types are visually prominent and easy to scan.
- Itinerary visuals are individual images, even when grouped into a mosaic-style layout.
- Every itinerary image opens to an HD view.
- Reused gallery images remain consistent with the Gallery metadata and visual asset manifest.
- Desktop and mobile QA confirm the layout has no broken images, awkward crops, text overlap, or horizontal overflow.

Completion notes:

- Reworked the Itinerary slot cards into denser planning cards with time, place, goal, gear, position, expected photo types, and visual examples grouped without the old table-like dead space.
- Replaced the former single contact-sheet preview with individual standalone Gallery frames for every itinerary stop.
- Made every itinerary visual clickable into the shared full-image view with field location, lens, focal length, aperture, shutter speed, and technique metadata.
- Updated the visual asset manifest to record reused standalone Itinerary placements.
- Validated desktop and 390px mobile: no broken images, no contact-sheet images in the active Itinerary view, no full-image cropping trap, and no page-level horizontal overflow.

## 2026-06-04 - Photo Windows Standalone Image Metadata Request

Status: completed and validated June 4, 2026.

Goal: update the Photo Windows page so every visual example is an individual clickable image with complete teaching metadata.

Requested requirements:

- Replace any mosaic/contact-sheet-style image usage with individual images.
- Make each image clickable so the full-size version can be viewed.
- For every image, include:
  - Name.
  - Description.
  - Location.
  - Photo technique used.
  - Lens.
  - Focal length.
  - Aperture.
  - Shutter speed.
- Reuse the standalone gallery images where appropriate once those are created.

Acceptance criteria:

- The Photo Windows page uses individual image assets for each visual example.
- Every image opens into a full-size view.
- Every image has the requested name, description, location, technique, lens, focal length, aperture, and shutter-speed metadata.
- Sunrise, mid-morning, sunset, and fallback windows remain easy to compare.
- Reused images stay consistent with the Gallery and Itinerary metadata where they overlap.
- Desktop and mobile QA confirm no broken images, awkward crops, text overlap, metadata clipping, or horizontal overflow.
- The visual asset manifest is updated for any new or reused image placements before publication.

Completion notes:

- Replaced Photo Windows contact-sheet previews with individual standalone frames for sunrise, mid-morning, sunset, and fallback scenarios.
- Made each Photo Windows visual clickable into the full-image view.
- Populated the full-image view for each visual with name, description, field location, technique, lens, focal length, aperture, and shutter speed.
- Kept sunrise, mid-morning, and sunset comparisons separated by window tabs while adding standalone image grids to each window.
- Updated the visual asset manifest with reused standalone Photo Windows placements.
- Validated desktop and 390px mobile: no broken images, no contact-sheet images in the active Photo Windows views, no metadata clipping in tested overlays, and no page-level horizontal overflow.

## 2026-06-04 - Travel Airport Map And Rental Illustration Request

Status: completed and validated June 4, 2026.

Goal: improve the Travel page visuals so the airport and rental-car planning sections are easier to understand at a glance.

Requested requirements:

- Add a U.S. map at the top of the airport information section.
- The map should show SFO, Oakland, SJC, and ABQ so the user can quickly understand the travel geography.
- Add a small logo or illustration for each airport listed.
- Generate airport visuals if needed, while keeping rights and provenance clear.
- Add a polished illustration for the rental-car card or rental-car planning piece.
- Use the same editorial illustration design pattern used and preferred for the user's website articles.
- Keep all new visuals high quality and aligned with the Travel page's practical planning tone.

Acceptance criteria:

- The Travel page airport section includes a clear U.S. map with SFO, Oakland/OAK, SJC, and ABQ labeled.
- Airport labels and visual markers do not overlap or become unreadable on desktop or mobile.
- Each airport has an accompanying logo or illustration.
- The rental-car section includes an illustration that matches the established website article illustration style.
- Any generated or third-party visual assets are documented in the visual asset manifest before publication.
- Desktop and mobile QA confirm no broken images, awkward crops, text overlap, label collisions, or horizontal overflow.

Completion notes:

- Generated and integrated a rights-safe editorial route-map illustration for the Travel airport section.
- Rendered exact site-controlled labels for SFO, OAK, SJC, ABQ, Socorro, and Bosque so the map does not rely on AI-generated text.
- Added a small code-based airport badge/illustration to each airport card.
- Generated and integrated a rental SUV cargo-workflow illustration for the rental-car section.
- Moved the route-map full-image control below the map artwork so it does not sit on top of mobile route labels.
- Added both new generated travel illustrations to the visual asset manifest with original generated file IDs, prompts/provenance, and rights notes.
- Validated desktop and 390px mobile: one route visual, one rental visual, four airport badges, six airport labels, zero label collisions, zero broken images, zero contact-sheet images in the active Travel view, and no page-level horizontal overflow.

## 2026-06-04 - Gear Scale Category And Brand Toggle Request

Status: completed and validated June 4, 2026.

Goal: make the Lens Length Scale and Lens Weight Scale easier to compare by grouping lenses into useful categories and allowing brand-level filtering.

Requested requirements:

- Redesign both the Lens Length Scale and Lens Weight Scale so they are easier to read without relying on one long horizontal scroll.
- Break the lens comparisons into categories, such as:
  - Super-zooms.
  - Zooms.
  - 105mm and lower.
- Refine category names during implementation if a clearer taxonomy fits the actual gear list better.
- Add checkbox controls that let the user enable or disable brands.
- Brand filters should include Sony, Sigma, and Canon.
- Brand enable/disable controls should affect both the length and weight scales.
- Preserve the ability to compare equivalent options across brands.

Acceptance criteria:

- Lens Length Scale is grouped into readable categories.
- Lens Weight Scale is grouped into readable categories.
- Sony, Sigma, and Canon checkboxes filter the visible items in both scales.
- Filtering updates the comparison clearly without leaving confusing gaps or empty chart states.
- The charts remain legible on desktop and mobile.
- Desktop and mobile QA confirm no text overlap, broken layout, inaccessible controls, or horizontal overflow beyond intentional local chart scrolling if still needed.

Completion notes:

- Reworked Lens Length Scale and Lens Weight Scale into grouped category charts rather than one long undifferentiated horizontal scale.
- Added shared Sony, Sigma, and Canon checkbox controls that update both the length and weight scales together.
- Grouped lenses into practical comparison categories including 105mm and lower, 70-200mm zooms, wildlife zooms, super-zooms/long reach, and teleconverters.
- Added empty-state handling when all brands are disabled.
- Preserved local chart scrolling inside category charts while preventing page-level horizontal overflow.
- Validated desktop and 390px mobile: three checkboxes, five populated category groups, brand filtering removes and restores the correct systems across both scales, all-brands-off state renders empty notices, and no page-level horizontal overflow.

## 2026-06-04 - Practice Filter Section Reorder Request

Status: completed and validated June 4, 2026.

Goal: reorganize the Practice page so the filter material teaches concepts first, then sizes, with the filter kit and drills moved to the end.

Requested requirements:

- Move the Filter Kit and Drills section to the end of the Practice page.
- Do not lead with the filter kit/drill material because it is not the most important part.
- Move the explanation of what each filter type is higher on the page.
- Make the filter-type explanations their own clear section.
- Present filter sizes after the conceptual explanation of filter types.
- Move the current filter-area details lower, after the core explanations and size guidance.
- Focus first on explaining what each type of filter is.
- Focus second on telling the user which filter sizes matter.

Acceptance criteria:

- Practice page filter content starts with clear explanations of filter types.
- Filter-size guidance appears after filter-type explanations.
- Filter Kit and Drills appears near the end of the Practice page.
- The reordered section reads as a coherent learning sequence.
- Desktop and mobile QA confirm the section order is clear and no layout/text overlap or horizontal overflow was introduced.

Completion notes:

- Reordered Practice so the filter material starts with filter-type concepts, then filter-size guidance, then the nine practice techniques, with Filter Kit And Drills moved near the end.
- Split the existing shared filter guidance into Practice-specific concept and size sections without changing the Gear guidance data.
- Kept the filter drills as hands-on homework after the core explanations and technique cards.
- Validated desktop and 390px mobile: the Practice page renders in the requested learning order, with no broken images, no text overlap found in browser QA, and no page-level horizontal overflow.

## 2026-06-04 - Practice Standalone Image And Full-View Request

Status: completed and validated June 4, 2026.

Goal: fix the Practice page image experience so each visual is a standalone image that opens fully, without cropping, and includes complete teaching metadata.

Requested requirements:

- Fix the "Open full image" behavior so the whole image is visible.
- If the image is taller or larger than the viewport, provide a way to navigate or scroll up and down inside the full-image view.
- Do not crop the full-image view in a way that hides part of the image.
- Replace any mosaic/contact-sheet-style image usage with individual images.
- Each Practice image must be individually clickable and open separately.
- For every image, include:
  - Description.
  - Technique used.
  - Focal length.
  - Shutter speed.
  - Aperture.
  - Any other useful technical information.
- Reuse the standalone generated image set where appropriate once those assets are created.

Acceptance criteria:

- Practice page visuals are individual image assets, not bundled five-frame contact sheets.
- Every Practice image opens separately.
- The full-image view shows the entire image or allows scrolling/panning so the full image can be inspected.
- Every image includes description, technique, focal length, shutter speed, aperture, and relevant technical notes.
- The same full-view fix is checked anywhere else the same overlay pattern is used.
- Desktop and mobile QA confirm no full-view cropping trap, broken images, missing metadata, text overlap, or horizontal overflow.
- The visual asset manifest is updated for any new standalone Practice images before publication.

Completion notes:

- Split the nine generated Practice contact sheets into 45 standalone Practice frame files under `site/assets/generated/practice-standalone/`.
- Replaced Practice card and Practice detail visuals with individual clickable standalone frames.
- Reused the already split `filter-practice-01` through `filter-practice-05` frames for the filter-practice section.
- Hardened the shared full-image overlay so the image area contains the whole frame and the metadata side can scroll independently.
- Added complete full-image metadata for every Practice frame by inheriting the parent lesson's description, technique, focal length, shutter speed, aperture, lens, and location notes.
- Updated the visual asset manifest with every standalone Practice frame.
- Validated desktop and 390px mobile: 50 Practice-page standalone frames, 5 Practice-detail frames, no contact-sheet images in active Practice views, no broken images, tested overlays with six populated metadata fields, and no page-level horizontal overflow.

## 2026-06-04 - Inspiration Page Cleanup And Standalone Image Request

Status: completed and validated June 4, 2026.

Goal: simplify the Inspiration page and replace mosaic-style generated previews with individually clickable images.

Requested requirements:

- Review the section currently called "Thumbnail discipline."
- Decide whether the "Thumbnail discipline" section is necessary; remove or redesign it if it does not serve the user.
- Replace any generated planning preview mosaic/contact sheet with independent images.
- Each independent image should be clickable and expandable.
- Keep image-rights and licensing notes available where needed, but avoid making the page feel dominated by process language.

Acceptance criteria:

- The Inspiration page no longer includes a confusing or unnecessary "Thumbnail discipline" section.
- Generated planning previews on the Inspiration page are individual image assets rather than five-frame mosaics.
- Each image can be clicked and expanded.
- Public-domain, generated, and inspiration-only image usage remains clearly distinguished.
- Desktop and mobile QA confirm no broken images, awkward crops, text overlap, confusing image-rights presentation, or horizontal overflow.
- The visual asset manifest is updated for any new standalone Inspiration images before publication.

Completion notes:

- Removed the confusing "Thumbnail discipline" presentation from the Inspiration renderer and replaced it with a clearer image-rights boundary callout.
- Replaced generated Inspiration visual treatment with standalone Gallery frames instead of five-frame contact sheets.
- Made generated Inspiration visuals clickable and expandable through the shared full-image view.
- Preserved public-domain, generated, and inspiration-only distinctions in the page copy.
- Updated the visual asset manifest with the reused standalone Inspiration placements.
- Validated desktop and 390px mobile: five external Inspiration visual cards plus the rights-boundary visual treatment, no contact-sheet images in the active Inspiration view, no broken images, and no page-level horizontal overflow.

## 2026-06-04 - Inspiration External Links Illustration And Description Request

Status: completed and validated June 4, 2026.

Goal: enrich the External Inspiration section with meaningful visuals and fuller editorial descriptions for each external inspiration link.

Requested requirements:

- Add an illustration or visual treatment for each of the five external inspiration links.
- Consider using the same image shown in Google Search only if rights and reuse are appropriate.
- If image reuse is not clearly allowed, generate a new illustration using the user's established website article illustration design pattern.
- Add two paragraphs of description for each external inspiration link.
- Make the descriptions useful for understanding why each external source matters for the Bosque del Apache photography plan.
- Keep the page visually polished and editorial rather than link-list-like.

Acceptance criteria:

- Each of the five External Inspiration items has a visual treatment.
- Any reused external image has documented rights, source, and usage rationale before publication.
- Any generated illustration is documented in the visual asset manifest before publication.
- Each External Inspiration item includes two clear descriptive paragraphs.
- Descriptions explain the source's relevance, visual lessons, or field-planning value.
- Desktop and mobile QA confirm the section has no broken images, awkward crops, text overlap, or horizontal overflow.

Completion notes:

- Added a rights-safe standalone generated visual treatment to each of the five External Inspiration items.
- Kept third-party article, portfolio, search-result, and checklist photos link-only unless a future license or permission is recorded.
- Added two descriptive paragraphs to every External Inspiration item, explaining field-planning value, visual lessons, and reuse boundaries.
- Updated the visual asset manifest with the exact standalone frames reused for External Inspiration.
- Validated desktop and 390px mobile: five external Inspiration cards, no broken images, no contact-sheet images in the active Inspiration view, no page-level horizontal overflow, and tested full-image overlay metadata for the generated visual treatment.

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

## 2026-06-05 - Gear Page Verification Audit

Status: completed June 5, 2026.

Goal: independently verify Gear page links, focal lengths, f-stops, internal/external zoom notes, and filter sizes before publishing.

Completion notes:

- Asked three independent sub-agents to audit `site/app.js` Gear data against current official or reliable product/spec sources.
- All three confirmed the core lens names, focal lengths, filter sizes, major aperture values, and internal/extending zoom classifications for Sony, Sigma E, Canon, and the filter-size guidance.
- Rechecked the Canon RF 200-800 aperture display after the previous stopped-down wording missed the intended Gear-page convention; updated it to the variable maximum aperture `f/6.3-9`.
- Corrected Canon RF 100-500 official extended length from `304.7 mm` to `297.6 mm`.
- Updated Canon Extender RF 1.4x weather wording to reflect Canon's dust- and water-resistant construction claim.
- Updated the LensCoat LensSack Pro Jr example weight from generic empty-weight wording to the linked product's 9 oz empty / 5 lb 8 oz filled specification.
- Switched visible Canon RF 24-105 and RF 100-500 Specs links to direct Canon spec PDFs; switched the RF 200-800 Specs link to Canon Camera Museum for the official lens name, filter size, dimensions, and supporting aperture details.
- Noted that some displayed full-extension measurements for extending zooms are not always published on manufacturer pages; no broader site change was made because the core user-requested fields verified cleanly.

Acceptance criteria:

- Gear links resolve to official product/spec pages or official product images.
- Published focal lengths, f-stops, internal/external zoom notes, and filter sizes are checked against source links.
- Any verified mismatches are either corrected or documented as lower-priority source limitations.
