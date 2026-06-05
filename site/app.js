// Rendering and interaction logic for the Bosque del Apache static planner.
// Data is loaded first from data.js.
function el(tag, className = "", html = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
}

function externalLink(url, label = "Source") {
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderGuideScopeNote(variant = "short") {
  const message = variant === "overview" ? guideFraming.overview : guideFraming.short;
  return `<p class="guide-scope-note"><strong>${guideFraming.title}.</strong> ${message}</p>`;
}

function sourceInitials(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function standaloneFrameIdsFor(parentId) {
  const visual = visualById.get(parentId);
  if (!visual) return [];
  if (visual.parentId) return [visual.id];
  const frames = [...standaloneGalleryVisuals, ...practiceStandaloneVisuals].filter(
    (item) => item.parentId === parentId
  );
  return frames.length ? frames.map((item) => item.id) : [parentId];
}

function renderStandaloneFrameCard(id, options = {}) {
  const visual = visualById.get(id);
  const lesson = visualLessons[id];
  if (!visual || !lesson) return "";
  const label = options.label || visual.title;
  const classes = ["visual-frame-card", options.compact ? "is-compact" : "", options.className || ""]
    .filter(Boolean)
    .join(" ");
  return `<button class="${classes}" type="button" data-visual-id="${visual.id}" aria-label="Open full image: ${visual.title}">
    <img src="${visual.src}" alt="${visual.alt}" width="1920" height="1080" loading="${options.loading || "lazy"}" decoding="async" />
    <span class="visual-frame-copy">
      <b>${label}</b>
      ${options.hideDescription ? "" : `<span>${visual.description || visual.caption}</span>`}
      <em>${lesson.focalLength}; ${lesson.aperture}; ${lesson.shutterSpeed}${lesson.iso ? `; ${lesson.iso}` : ""}</em>
      ${options.showLocation ? `<small>${lesson.supposedLocation}</small>` : ""}
    </span>
  </button>`;
}

function renderStandaloneFrameGrid(parentId, options = {}) {
  const ids = standaloneFrameIdsFor(parentId).slice(0, options.limit || 5);
  const labels = options.labels || [];
  const classes = ["visual-frame-grid", options.className || "", options.compact ? "is-compact" : ""]
    .filter(Boolean)
    .join(" ");
  return `<div class="${classes}" aria-label="${options.ariaLabel || "Planning image examples"}">
    ${ids
      .map((id, index) =>
        renderStandaloneFrameCard(id, {
          label: labels[index],
          compact: options.compact,
          hideDescription: options.hideDescription,
          showLocation: options.showLocation,
          loading: options.loading,
        })
      )
      .join("")}
  </div>`;
}

function renderGeneratedPreview(id, options = {}) {
  const visual = visualById.get(id) || generatedVisuals[0];
  const classes = ["planning-preview", options.className || ""].filter(Boolean).join(" ");
  const caption = options.caption || visual.caption;
  const label = options.label || "Planning preview";
  return `<figure class="${classes}">
    <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="${options.loading || "lazy"}" decoding="async" />
    <figcaption>
      <span>${label}</span>
      ${caption}
    </figcaption>
  </figure>`;
}

function renderVisualLightbox(titleId = "visual-lightbox-title") {
  return `<div class="gallery-lightbox" hidden role="dialog" aria-modal="true" aria-labelledby="${titleId}">
    <div class="gallery-lightbox-backdrop" data-gallery-close></div>
    <article class="gallery-lightbox-panel">
      <div class="gallery-lightbox-image-wrap">
        <img class="gallery-lightbox-image" alt="" width="1536" height="1024" />
      </div>
      <aside class="gallery-lightbox-copy">
        <button class="gallery-lightbox-close" type="button" data-gallery-close aria-label="Close full image">Close</button>
        <p class="eyebrow">Generated teaching image</p>
        <h3 class="gallery-lightbox-title" id="${titleId}"></h3>
        <p class="gallery-lightbox-note"></p>
        <dl class="gallery-tech-list">
          <div><dt>Scenario / location</dt><dd data-gallery-field="supposedLocation"></dd></div>
          <div><dt>Lens</dt><dd data-gallery-field="lens"></dd></div>
          <div><dt>Focal length</dt><dd data-gallery-field="focalLength"></dd></div>
          <div><dt>Aperture</dt><dd data-gallery-field="aperture"></dd></div>
          <div><dt>Shutter speed</dt><dd data-gallery-field="shutterSpeed"></dd></div>
          <div data-gallery-optional="iso"><dt>ISO</dt><dd data-gallery-field="iso"></dd></div>
        </dl>
        <section class="gallery-technique">
          <h4>Technique</h4>
          <p data-gallery-field="technique"></p>
        </section>
        <a class="button-link gallery-open-original" href="#" target="_blank" rel="noreferrer">Open full image</a>
      </aside>
    </article>
  </div>`;
}

function renderVisualTechMeta(id, options = {}) {
  const lesson = visualLessons[id];
  if (!lesson) return "";
  const classes = ["visual-tech-meta", options.compact ? "is-compact" : ""].filter(Boolean).join(" ");
  const fields = [
    ["Lens", lesson.lens],
    ["Focal length", lesson.focalLength],
    ["Aperture", lesson.aperture],
    ["Shutter speed", lesson.shutterSpeed],
    ["ISO", lesson.iso],
    ["Technique", lesson.technique],
  ].filter(([, value]) => value);
  return `<dl class="${classes}">
    ${fields
      .map(
        ([label, value]) => `<div class="${label === "Technique" ? "is-technique" : ""}">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>`
      )
      .join("")}
  </dl>`;
}

function renderTeachingPreview(id, options = {}) {
  const visual = visualById.get(id) || generatedVisuals[0];
  const classes = ["planning-preview", "teaching-preview", options.className || ""]
    .filter(Boolean)
    .join(" ");
  const caption = options.caption || visual.caption;
  const label = options.label || "Generated teaching preview";
  return `<figure class="${classes}">
    <button class="visual-expand-button" type="button" data-visual-id="${id}" aria-label="Open full image: ${visual.title}">
      <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="${options.loading || "lazy"}" decoding="async" />
      <span class="visual-expand-cue">Open full image</span>
    </button>
    <figcaption>
      <span>${label}</span>
      ${caption}
      ${renderVisualTechMeta(id, { compact: options.compact })}
    </figcaption>
  </figure>`;
}

function renderLodgingPreview(item) {
  const visual = visualById.get(item.visualId);
  if (!visual) {
    return `<a class="hotel-photo hotel-photo-link" href="${item.galleryUrl}" target="_blank" rel="noreferrer">
      ${renderLinkOnlyVisual(item.name, item.galleryLabel, "Official gallery link")}
    </a>`;
  }

  return `<figure class="hotel-photo hotel-generated-photo">
    <a class="visual-expand-button hotel-preview-button" href="${visual.src}" target="_blank" rel="noreferrer" data-visual-id="${visual.id}" aria-label="Open generated lodging preview: ${visual.title}">
      <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="lazy" decoding="async" />
      <span class="visual-expand-cue">Open full image</span>
    </a>
    <figcaption>
      <span>Reference-based generated preview</span>
      ${visual.caption}
    </figcaption>
  </figure>`;
}

function renderAirportBadge(item) {
  return `<div class="airport-badge" aria-label="${item.airport} airport planning marker">
    <span>${item.airport}</span>
    <em>${item.airport === "ABQ" ? "Arrival and rental car" : "Bay Area option"}</em>
  </div>`;
}

function renderAirportRouteMap() {
  const visual = visualById.get("travel-airport-route-map");
  const labels = [
    { code: "SFO", name: "San Francisco", style: "--x: 7%; --y: 30%;" },
    { code: "OAK", name: "Oakland", style: "--x: 16%; --y: 18%;" },
    { code: "SJC", name: "San Jose", style: "--x: 23%; --y: 42%;" },
    { code: "ABQ", name: "Albuquerque", style: "--x: 72%; --y: 35%;" },
    { code: "Socorro", name: "Hotel base", style: "--x: 62%; --y: 62%;" },
    { code: "Bosque", name: "Refuge", style: "--x: 78%; --y: 84%;" },
  ];
  return `<figure class="planning-preview travel-route-visual">
    <button class="visual-expand-button travel-route-button" type="button" data-visual-id="${visual.id}" aria-label="Open full airport route illustration">
      <img src="${visual.src}" alt="${visual.alt}" width="1536" height="1024" loading="eager" decoding="async" />
      ${labels
        .map(
          (label) => `<span class="airport-map-label" style="${label.style}">
            <b>${label.code}</b>
            <small>${label.name}</small>
          </span>`
        )
        .join("")}
      <span class="visual-expand-cue">Open full image</span>
    </button>
    <figcaption>
      <span>Travel planning illustration</span>
      ${visual.caption} SFO, OAK, SJC, ABQ, Socorro, and Bosque labels are site-rendered for accuracy.
    </figcaption>
  </figure>`;
}

function renderVisualMini(id, note = "Planning preview") {
  const visual = visualById.get(id) || generatedVisuals[0];
  return `<div class="visual-mini">
    <img src="${visual.src}" alt="${visual.alt}" width="1920" height="1080" loading="lazy" decoding="async" />
    <span>${note}</span>
  </div>`;
}

function renderLinkOnlyVisual(title, label, note = "Link only") {
  return `<div class="link-only-visual" aria-label="${title}">
    <span>${sourceInitials(label || title)}</span>
    <strong>${label || title}</strong>
    <em>${note}</em>
  </div>`;
}

function renderGearPhoto(item) {
  if (!item.image) {
    return `<a class="gear-photo gear-photo-link" href="${item.photo}" target="_blank" rel="noreferrer">
      ${renderLinkOnlyVisual(item.name, item.photoLabel, "Product photo link")}
    </a>`;
  }

  return `<a class="gear-photo gear-photo-image" href="${item.photo}" target="_blank" rel="noreferrer" aria-label="Open official product page for ${item.name}">
    <img src="${item.image}" alt="${item.name}" width="760" height="520" loading="lazy" decoding="async" onerror="this.closest('.gear-photo-image')?.classList.add('is-broken')" />
    <span class="gear-photo-source">${item.photoLabel}</span>
    <div class="gear-photo-fallback">
      ${renderLinkOnlyVisual(item.name, item.photoLabel, "Product photo link")}
    </div>
  </a>`;
}

function loadStylesheetOnce(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.crossOrigin = "";
  document.head.append(link);
}

function ensureLeaflet() {
  if (window.L) return Promise.resolve(true);
  if (leafletLoadPromise) return leafletLoadPromise;

  loadStylesheetOnce(leafletAssets.css);
  leafletLoadPromise = new Promise((resolve) => {
    const existingScript = document.querySelector(`script[src="${leafletAssets.js}"]`);
    const script = existingScript || document.createElement("script");

    const finish = () => resolve(Boolean(window.L));
    script.addEventListener("load", finish, { once: true });
    script.addEventListener(
      "error",
      () => {
        console.warn("Leaflet failed to load; map lists will remain available.");
        resolve(false);
      },
      { once: true }
    );

    if (!existingScript) {
      script.src = leafletAssets.js;
      script.integrity = leafletAssets.integrity;
      script.crossOrigin = "";
      script.defer = true;
      document.head.append(script);
    }
  });

  return leafletLoadPromise;
}

function renderOverview() {
  const root = document.querySelector("#overview");
  root.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Field plan</p>
        <h2>Bosque del Apache <span class="hero-date">Publication date: June 5, 2026</span></h2>
        <p>A five-day photography field guide for Bosque del Apache National Wildlife Refuge, organized around sunrise, mid-morning, and sunset field decisions. Use the dated example as a field rhythm, then adjust it for water, wind, crowds, and bird movement. Have the $5 daily private vehicle entrance fee or pass ready before dawn.</p>
        <div class="hero-actions">
          <button class="button-link" data-jump="itinerary">Open itinerary</button>
          <button class="button-link secondary" data-jump="map">Check map</button>
          <a href="./complete-photographers-guide.html" class="button-link secondary">Read field guide</a>
        </div>
      </div>
      <figure class="hero-photo">
        <img src="${assets.flyout}" alt="Snow geese flying over photographers at Bosque del Apache" width="1800" height="1440" decoding="async" fetchpriority="high" />
        <figcaption>Lynne Braden / USFWS volunteer, Public Domain</figcaption>
      </figure>
    </section>
    <section class="stat-grid" aria-label="Trip facts">
      <article class="stat"><b>Dec 6</b><span>Arrival and scout</span></article>
      <article class="stat"><b>Dec 7-11</b><span>Five full photo days</span></article>
      <article class="stat"><b>Dec 12</b><span>Departure and backups</span></article>
      <article class="stat"><b>6:10 AM</b><span>Typical target parking time</span></article>
      <article class="stat"><b>3:35 PM</b><span>Typical sunset arrival time</span></article>
      <article class="stat"><b>12 mi</b><span>Auto Tour Loop distance</span></article>
      <article class="stat"><b>1 hr before</b><span>Auto loop opens before sunrise</span></article>
    </section>
    ${renderGuideScopeNote("overview")}
    <section class="dashboard">
      <article class="panel">
        <p class="eyebrow">First morning</p>
        <h3>Be parked by 6:10 AM with a roost target already chosen.</h3>
        <p>Use the arrival scout to choose between the crane ponds, Flight Deck/Main Pool, and the strongest current roost. Have the $5 daily private vehicle entrance fee or pass ready before dawn. If the birds or wind disagree with the plan, switch locations early instead of chasing during peak light.</p>
      </article>
      <article class="panel">
        <p class="eyebrow">Pack tonight</p>
        <h3>Stage two camera roles before sleep.</h3>
        <p>Mount the long wildlife zoom for crane and goose action, keep the 24-105 ready for flock scale and place, and set out layers, hand warmers, cards, batteries, lens cloth, beanbag, water, and snacks.</p>
      </article>
      <article class="panel">
        <p class="eyebrow">Field rule</p>
        <h3>Choose the photograph before choosing the lens.</h3>
        <p>Some mornings want tight 500-800mm action. Others want geese, sky, water, mountains, and sound in one frame. Keep the plan flexible enough to make both kinds of image.</p>
      </article>
    </section>`;
}

const shotInspirationGalleryExcludedGroups = new Set(["travel-workflow"]);

function renderGalleryStudySection() {
  const regeneratedGroups = generatedVisuals
    .filter((group) => !shotInspirationGalleryExcludedGroups.has(group.id))
    .map((group) => ({
      ...group,
      frames: regeneratedGalleryImageGroups[group.id] || [],
    }))
    .filter((group) => group.frames.length);
  const pendingGroups = generatedVisuals.filter(
    (group) => !shotInspirationGalleryExcludedGroups.has(group.id) && !regeneratedGalleryImageGroups[group.id]
  );

  return `<section class="inspiration-gallery-section" id="gallery-study-album">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Gallery</p>
        <h3>Visual study album</h3>
      </div>
      <p>The gallery is a visual study album for the shot plan. Use these planning examples to practice reading light, subject behavior, field positions, lens choices, and technique tradeoffs before comparing the ideas with real conditions at Bosque.</p>
    </div>
    ${regeneratedGroups
      .map(
        (group) => `<section class="gallery-mosaic-section" aria-labelledby="gallery-${group.id}">
          <div class="gallery-mosaic-header">
            <div>
              <p class="eyebrow">${group.category}</p>
              <h3 id="gallery-${group.id}">${group.title}</h3>
            </div>
            <p>${group.promptSummary}</p>
          </div>
          <div class="true-mosaic-grid" aria-label="${group.title} regenerated standalone photos">
            ${group.frames
              .map((visual, index) => {
                const lesson = visualLessons[visual.id];
                return `<button class="true-mosaic-tile ${index === 0 ? "is-featured" : ""}" type="button" data-visual-id="${visual.id}" aria-label="Open ${visual.title}">
                  <img src="${visual.src}" alt="${visual.alt}" width="1920" height="1080" loading="${index < 2 ? "eager" : "lazy"}" decoding="async" />
                  <span class="true-mosaic-caption">
                    <b>${visual.title}</b>
                    <span>${lesson.focalLength}; ${lesson.aperture}; ${lesson.shutterSpeed}</span>
                  </span>
                </button>`;
              })
              .join("")}
          </div>
        </section>`
      )
      .join("")}
    ${pendingGroups.length
      ? `<section class="panel gallery-generation-queue">
          <p class="eyebrow">Planned additions</p>
          <h3>More visual study sets</h3>
          <p class="card-copy">These story groups will join the gallery when they have complete, high-resolution planning images that match the rest of the guide.</p>
          <div class="gallery-pending-list">
            ${pendingGroups
              .map((group) => `<span>${group.title}</span>`)
              .join("")}
          </div>
        </section>`
      : ""}
  </section>`;
}

function setupVisualLightbox(root) {
  const overlay = root.querySelector(".gallery-lightbox");
  if (!overlay) return;

  root.querySelectorAll("[data-visual-id], [data-gallery-id]").forEach((trigger) => {
    if (trigger.dataset.lightboxBound === "true") return;
    trigger.dataset.lightboxBound = "true";
    trigger.addEventListener("click", (event) => {
      const visualId = trigger.getAttribute("data-visual-id") || trigger.getAttribute("data-gallery-id");
      if (visualId && openVisualLightbox(overlay, visualId)) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });

  const close = () => {
    overlay.hidden = true;
    document.body.classList.remove("gallery-lock");
  };

  if (overlay.dataset.lightboxOverlayBound !== "true") {
    overlay.dataset.lightboxOverlayBound = "true";
    overlay.querySelectorAll("[data-gallery-close]").forEach((button) => {
      button.addEventListener("click", close);
    });
    overlay.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }
}

function openVisualLightbox(overlay, id) {
  const visual = visualById.get(id);
  const lesson = visualLessons[id];
  if (!overlay || !visual || !lesson) return false;

  const image = overlay.querySelector(".gallery-lightbox-image");
  const title = overlay.querySelector(".gallery-lightbox-title");
  const note = overlay.querySelector(".gallery-lightbox-note");
  const originalLink = overlay.querySelector(".gallery-open-original");
  const fields = {
    supposedLocation: overlay.querySelector('[data-gallery-field="supposedLocation"]'),
    lens: overlay.querySelector('[data-gallery-field="lens"]'),
    focalLength: overlay.querySelector('[data-gallery-field="focalLength"]'),
    aperture: overlay.querySelector('[data-gallery-field="aperture"]'),
    shutterSpeed: overlay.querySelector('[data-gallery-field="shutterSpeed"]'),
    iso: overlay.querySelector('[data-gallery-field="iso"]'),
    technique: overlay.querySelector('[data-gallery-field="technique"]'),
  };

  image.src = visual.src;
  image.alt = visual.alt;
  title.textContent = visual.title;
  note.textContent =
    visual.category === "Travel"
      ? `${visual.caption} Use this as a planning and teaching reference, not proof of actual hotel or property conditions.`
      : `${visual.caption} Use this as inspiration and a practice target, not proof of actual December 2026 field conditions.`;
  Object.entries(fields).forEach(([key, node]) => {
    if (node) node.textContent = lesson[key];
  });
  overlay.querySelectorAll("[data-gallery-optional]").forEach((node) => {
    const key = node.getAttribute("data-gallery-optional");
    node.hidden = !lesson[key];
  });
  originalLink.href = visual.src;
  overlay.hidden = false;
  document.body.classList.add("gallery-lock");
  overlay.querySelector(".gallery-lightbox-close")?.focus();
  return true;
}

async function renderGuide() {
  const root = document.querySelector("#guide");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Field guide</p>
        <h2>Field Guide</h2>
      </div>
      <p>A long-form, practical guide to seasons, field positions, behavior, settings, gear, scouting, ethics, logistics, and shot planning.</p>
    </div>
    <section class="panel guide-loader">
      <p class="eyebrow">Loading article</p>
      <p class="card-copy">Opening the complete guide inside the Bosque field experience.</p>
    </section>`;

  try {
    const response = await fetch("./complete-photographers-guide.html", { cache: "no-store" });
    if (!response.ok) throw new Error(`Guide request failed: ${response.status}`);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const article = doc.querySelector(".guide-article");
    if (!article) throw new Error("Guide article markup missing");
    root.innerHTML = `
      <div class="guide-view-header">
        <a class="button-link secondary" href="./complete-photographers-guide.html">Open standalone guide</a>
      </div>
      ${article.outerHTML}`;
  } catch (error) {
    root.innerHTML = `
      <div class="section-title">
        <div>
          <p class="eyebrow">Field guide</p>
          <h2>Field Guide</h2>
        </div>
        <p>The guide is available as a standalone page in this Bosque project.</p>
      </div>
      ${renderGuideScopeNote()}
      <section class="panel">
        <h3>Open the guide</h3>
        <p class="card-copy">The in-page article loader could not fetch the guide content in this environment.</p>
        <a class="button-link" href="./complete-photographers-guide.html">Open standalone guide</a>
      </section>`;
  }
}

async function renderMapInto(rootId, places, options = {}) {
  const root = document.querySelector(rootId);
  const hasMap = await ensureLeaflet();
  const mapId = options.mapId || "trip-map";
  const listClass = options.listClass || "map-list";
  const showMetaTag = options.showMetaTag !== false;
  const renderPlace = (place) => {
    const tag = hasMap ? "button" : "article";
    const attr = hasMap ? ` data-location="${place.name}"` : "";
    const metaLabel = place.confidence || place.drive;
    return `<${tag} class="map-item${hasMap ? "" : " is-static"}"${attr}>
      <h3>${place.rank ? `${place.rank}. ` : ""}${place.name}</h3>
      <p>${place.note}</p>
      <div class="tag-row">
        ${(place.windows || [place.area || place.type]).map((item) => `<span class="tag">${item}</span>`).join("")}
        ${showMetaTag && metaLabel ? `<span class="tag verify">${metaLabel}</span>` : ""}
      </div>
    </${tag}>`;
  };

  root.innerHTML = `
    <div class="map-layout">
      <div id="${mapId}" class="map-canvas"></div>
      <aside class="${listClass}">
        ${places.map((place) => renderPlace(place)).join("")}
      </aside>
    </div>`;

  if (!hasMap) {
    root.querySelector(`#${mapId}`).outerHTML =
      `<div class="empty-map">Map library did not load. The location list is still available.</div>`;
    return;
  }

  const LRef = window.L;
  const map = LRef.map(mapId, { scrollWheelZoom: false }).setView(
    options.center || [33.804777, -106.890917],
    options.zoom || 12
  );
  LRef.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const markers = new Map();
  const labelMarkers = [];
  const markerPlaces = [...places];
  if (options.includeRefugeMarker) {
    markerPlaces.push({
      name: "Bosque del Apache Visitor Center",
      lat: 33.804777,
      lon: -106.890917,
      note: "Reference point for hotel distance comparison.",
      confidence: "official FWS",
    });
  }

  const getTooltipOptions = (place) => {
    const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    return {
      permanent: true,
      direction:
        isCompactMap && place.labelDirectionMobile
          ? place.labelDirectionMobile
          : place.labelDirection || "right",
      offset: isCompactMap && place.labelOffsetMobile ? place.labelOffsetMobile : place.labelOffset || [10, 0],
      className: "map-pin-label",
      opacity: 1,
      interactive: false,
    };
  };

  const getFitBoundsOptions = () => {
    if (!options.showPinLabels) return { padding: [28, 28], animate: false };
    const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    const horizontalPadding = isCompactMap ? 88 : 172;
    const verticalPadding = isCompactMap ? 38 : 44;
    return {
      paddingTopLeft: [horizontalPadding, verticalPadding],
      paddingBottomRight: [horizontalPadding, verticalPadding],
      animate: false,
    };
  };

  const getTooltipText = (place) => {
    const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    return isCompactMap && place.labelShortMobile ? place.labelShortMobile : place.name;
  };

  const bindPinLabel = (marker, place) => {
    marker.unbindTooltip();
    marker.bindTooltip(getTooltipText(place), getTooltipOptions(place));
  };

  markerPlaces.forEach((place) => {
    const marker = LRef.marker([place.lat, place.lon]).addTo(map);
    const metaLabel = place.confidence || place.drive;
    const metaMarkup = showMetaTag && metaLabel ? `<br><small>${metaLabel}</small>` : "";
    marker.bindPopup(`<b>${place.name}</b><br>${place.note}${metaMarkup}`);
    if (options.showPinLabels) {
      bindPinLabel(marker, place);
      labelMarkers.push({ marker, place });
    }
    markers.set(place.name, marker);
  });

  const bounds = LRef.latLngBounds(markerPlaces.map((place) => [place.lat, place.lon]));
  map.fitBounds(bounds, getFitBoundsOptions());

  let resizeHandler;
  let clearResizeTimer = () => {};
  if (options.showPinLabels) {
    let wasCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
    let resizeTimer;
    clearResizeTimer = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = undefined;
    };
    resizeHandler = () => {
      clearResizeTimer();
      resizeTimer = window.setTimeout(() => {
        resizeTimer = undefined;
        if (!root.isConnected || (options.globalName && window[options.globalName]?.map !== map)) return;
        map.invalidateSize({ pan: false });
        const isCompactMap = window.matchMedia?.("(max-width: 680px)")?.matches;
        if (isCompactMap !== wasCompactMap) {
          map.fitBounds(bounds, getFitBoundsOptions());
          labelMarkers.forEach(({ marker, place }) => bindPinLabel(marker, place));
          wasCompactMap = isCompactMap;
        }
      }, 160);
    };
    window.addEventListener("resize", resizeHandler, { passive: true });
  }

  root.querySelectorAll(".map-item").forEach((button) => {
    button.addEventListener("click", () => {
      const marker = markers.get(button.dataset.location);
      if (!marker) return;
      map.setView(marker.getLatLng(), options.focusZoom || 14);
      marker.openPopup();
    });
  });

  if (options.globalName) {
    window[options.globalName] = { map, bounds, resizeHandler, cleanup: clearResizeTimer };
  }
}

async function renderMap() {
  const root = document.querySelector("#map");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Photography-only map</p>
        <h2>Map &amp; Locations</h2>
      </div>
      <p>Use this map for photography decisions: sunrise starts, mid-morning resets, sunset positions, field notes, and refuge logistics. Hotel distance belongs in Travel Logistics.</p>
    </div>
    ${renderGuideScopeNote()}
    <div id="photo-map-host"></div>`;
  await renderMapInto("#photo-map-host", photoLocations, {
    mapId: "trip-map",
    globalName: "photoMapState",
    center: [33.82, -106.88],
    zoom: 12,
    showPinLabels: true,
    showMetaTag: false,
  });
}

function renderItinerary() {
  const root = document.querySelector("#itinerary");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Calendar plan</p>
        <h2>5-Day Itinerary</h2>
      </div>
      <p>This dated example arrives December 6, photographs five full days, and leaves December 12. Each day has a clear purpose so the plan can bend around water, wind, crowds, and bird movement.</p>
    </div>
    ${renderGuideScopeNote()}
    <div class="day-tabs"></div>
    <div class="timeline"></div>
    ${renderVisualLightbox("itinerary-lightbox-title")}`;

  const tabs = root.querySelector(".day-tabs");
  const timeline = root.querySelector(".timeline");
  tripDays.forEach((day, index) => {
    const button = el("button", `day-tab ${index === 0 ? "is-active" : ""}`, `${day.date}<span>${day.label}</span>`);
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      drawDay(day);
    });
    tabs.append(button);
  });

  function drawDay(day) {
    timeline.innerHTML = `
      <section class="panel day-intro">
        <p class="eyebrow">${day.date} / ${day.label}</p>
        <h3>${day.theme}</h3>
        <p>${day.detail}</p>
      </section>`;
    day.slots.forEach((slot) => {
      const visualPlan = visualPlanForSlot(day, slot);
      timeline.append(
        el(
          "article",
          "slot-card itinerary-slot-card",
          `<div class="slot-copy">
            <div class="slot-kicker">
              <span class="slot-time">${slot.window}</span>
              <span>${slot.time}</span>
            </div>
            <h3>${slot.place}</h3>
            <p class="card-copy">${slot.goal}</p>
            <div class="slot-detail-grid">
              <p><b>Gear</b>${slot.gear}</p>
              <p><b>Position</b>${slot.position}</p>
            </div>
            <div class="slot-photo-types">
              <h4>Expected photo types</h4>
              <ol class="expected-list">
                ${visualPlan.expected.map((item) => `<li>${item}</li>`).join("")}
              </ol>
            </div>
          </div>
          <div class="slot-visual">
            ${renderStandaloneFrameCard(visualPlan.visualId, {
              className: "itinerary-lead-frame",
              hideDescription: false,
              showLocation: true,
              loading: "lazy",
            })}
          </div>`
        )
      );
    });
    setupVisualLightbox(root);
  }

  drawDay(tripDays[0]);
  setupVisualLightbox(root);
}

function renderWindows() {
  const root = document.querySelector("#windows");
  const windowNames = Object.keys(photoWindowPlans);
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Choose by light</p>
        <h2>Best Photo Windows</h2>
      </div>
      <p>Use this when conditions override the day-by-day itinerary. Each window pairs field decisions with planning images so you can choose by light, wind, subject behavior, and access.</p>
    </div>
    ${renderGuideScopeNote()}
    <div class="window-tabs">
      ${windowNames
        .map(
          (windowName, index) =>
            `<button class="window-tab ${index === 0 ? "is-active" : ""}" data-window="${windowName}">${windowName}</button>`
        )
        .join("")}
    </div>
    <div id="window-results"></div>
    ${renderVisualLightbox("windows-lightbox-title")}`;
  const result = root.querySelector("#window-results");
  const draw = (windowName) => {
    const plan = photoWindowPlans[windowName];
    const matches = plan.relatedStops || tripDays.flatMap((day) =>
      day.slots
        .filter((slot) => (plan.slotWindows || [windowName]).includes(slot.window))
        .map((slot) => ({ ...slot, date: day.date, label: day.label, theme: day.theme }))
    );
    result.innerHTML = `
      <section class="photo-window-focus" aria-labelledby="window-focus-${slugify(windowName)}">
        <div class="photo-window-copy">
          <p class="eyebrow">${plan.eyebrow}</p>
          <h3 id="window-focus-${slugify(windowName)}">${plan.title}</h3>
          <p>${plan.summary}</p>
          <div class="window-decision-list">
            <h4>Field decisions</h4>
            <ul>
              ${plan.decisions.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="photo-window-visuals" aria-label="${windowName} planning images">
          ${plan.visualIds
            .map((visualId) =>
              renderStandaloneFrameCard(visualId, {
                className: "photo-window-frame",
                showLocation: true,
                hideDescription: false,
                loading: "lazy",
              })
            )
            .join("")}
        </div>
      </section>
      <section class="window-related">
        <div class="window-related-heading">
          <p class="eyebrow">Related itinerary moments</p>
          <h3>${windowName} decisions in the plan</h3>
        </div>
        <div class="window-stop-grid">
        ${matches
          .map(
            (slot) => `<article class="window-stop">
              <p class="eyebrow">${slot.date} / ${slot.label}</p>
              <h4>${slot.place}</h4>
              <p>${slot.goal}</p>
              ${slot.position ? `<p><b>Field note:</b> ${slot.position}</p>` : ""}
              <div class="tag-row"><span class="tag ${windowName === "Sunrise" ? "sunrise" : windowName === "Sunset" ? "sunset" : ""}">${slot.window || windowName}</span>${slot.theme ? `<span class="tag">${slot.theme}</span>` : ""}</div>
            </article>`
          )
          .join("")}
        </div>
      </section>`;
    setupVisualLightbox(root);
  };
  root.querySelectorAll(".window-tab").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll(".window-tab").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      draw(button.dataset.window);
    });
  });
  draw(windowNames[0]);
  setupVisualLightbox(root);
}

async function renderTravel() {
  const root = document.querySelector("#travel");
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Flights, car, hotels</p>
        <h2>Travel Logistics</h2>
      </div>
      <p>Use Albuquerque as the practical airport, choose a car around dawn photography logistics, and keep Socorro as the photography-first hotel base.</p>
    </div>
    ${renderGuideScopeNote()}
    <section class="panel media-decision airport-route-section">
      <div>
        <p class="eyebrow">Airport default</p>
        <h3>Fly Bay Area to ABQ, then drive south.</h3>
        <p class="card-copy">Albuquerque International Sunport is the practical airport. From ABQ, rent a car, take I-25 south toward Socorro, then follow the official FWS route via exit 139, US 380, and NM-1 to the refuge visitor center.</p>
      </div>
      ${renderAirportRouteMap()}
    </section>
    <div class="grid-4 travel-grid">
      ${flightOptions
        .map(
          (item) => `<article class="travel-card">
            ${renderAirportBadge(item)}
            <p class="eyebrow">${item.airport}</p>
            <h3>${item.route}</h3>
            <p><b>${item.recommendation}</b></p>
            <p class="card-copy">${item.detail}</p>
            ${externalLink(item.source, "Source")}
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Rental car</p>
        <h2>What to book</h2>
      </div>
      <p>The best car is not fancy; it is easy to load quietly in the dark, stable on winter highways, and practical on gravel pullouts.</p>
    </div>
    <section class="panel rental-car-section">
      ${renderTeachingPreview("travel-rental-car-cargo", {
        className: "rental-car-preview",
        label: "Rental car planning illustration",
        loading: "lazy",
      })}
      <div class="rental-car-copy">
        <p class="eyebrow">Rental car setup</p>
        <h3>Book for cargo access, not status.</h3>
        <p class="card-copy">The rental car illustration shows the practical decision: long lens protected, support reachable, water and layers visible, route notes handy, and valuables hidden when parked. Use it as a packing checklist before choosing the actual class at ABQ.</p>
        <div class="rental-car-guidance-list">
          ${rentalCarGuidance
            .map(
              (item) => `<article class="travel-card">
                <h4>${item.title}</h4>
                <p class="card-copy">${item.note}</p>
              </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Hotels and commute</p>
        <h2>Where to stay</h2>
      </div>
      <p>Socorro remains the photography-first base. The hotel-specific map stays here, separate from the main photography map.</p>
    </div>
    <section class="panel rights-callout">
      <div>
        <p class="eyebrow">Hotel visuals</p>
        <h3>Use previews for workflow, official galleries for booking.</h3>
        <p class="card-copy">The lodging cards use generated previews to show the photographer's problem: predawn departure, room setup, breakfast timing, parking, and charging space. Use the official gallery or property link on each card to inspect the actual rooms, exterior, and amenities before booking.</p>
      </div>
      ${renderStandaloneFrameCard("travel-workflow-01", {
        className: "callout-preview",
        compact: true,
        showLocation: true,
      })}
    </section>
    <div class="grid-2">
      ${lodgingLocations
        .map((item) => {
          return `<article class="lodging-card" data-rank="${item.rank}">
            <div class="rank-line">
              <span class="rank">${item.rank}</span>
              ${item.badge ? `<span class="meta-pill">${item.badge}</span>` : ""}
            </div>
            ${renderLodgingPreview(item)}
            <h3>${item.name}</h3>
            <div class="lodging-meta">
              <span class="meta-pill">${item.area}</span>
              <span class="meta-pill">${item.drive}</span>
              <span class="meta-pill">${item.price}</span>
            </div>
            <p><b>${item.best}</b></p>
            <p class="card-copy">${item.note}</p>
            <p class="muted">${item.watch}</p>
            <p class="muted">${item.galleryRights}</p>
            ${externalLink(item.galleryUrl, item.galleryLabel)}
          </article>`;
        })
        .join("")}
    </div>
    <section class="map-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Hotel distance map</p>
          <h2>Hotels vs. Bosque</h2>
        </div>
        <p>This map is intentionally lodging-only, with the refuge visitor center as the reference point.</p>
      </div>
      <div id="lodging-map-host"></div>
    </section>
    ${renderVisualLightbox("travel-lightbox-title")}`;
  setupVisualLightbox(root);
  await renderMapInto("#lodging-map-host", lodgingLocations, {
    mapId: "lodging-map",
    globalName: "lodgingMapState",
    includeRefugeMarker: true,
    center: [34.04, -106.88],
    zoom: 9,
    focusZoom: 13,
  });
}

function renderGear() {
  const root = document.querySelector("#gear");
  const workspaces = [
    { id: "lenses", label: "Lenses" },
    { id: "bodies", label: "Camera Bodies" },
    { id: "support", label: "Support" },
    { id: "filters", label: "Filters" },
    { id: "backpacks", label: "Backpacks" },
  ];
  const lensSystems = ["Sony", "Sigma E", "Canon", "Compare"];
  const gearByName = (name) => gearItems.find((item) => item.name === name);
  const lensItems = gearItems.filter((item) => item.system !== "Support");
  const supportItems = gearItems.filter((item) => item.system === "Support");
  const lensCell = (item, label) => {
    if (!item) return `<td data-label="${label}">Not configured</td>`;
    return `<td data-label="${label}">
      <strong>${item.name}</strong>
      <span>${item.specs.aperture}; ${item.specs.length}; ${item.specs.weight}; ${item.specs.filter}</span>
      <span>Min focus: ${item.specs.minFocus}; TC: ${item.specs.teleconverter}; introduced: ${item.specs.introduced}</span>
      <span>${item.specs.zoomFocus}</span>
      <span>${item.specs.weather}</span>
      ${externalLink(item.source, "Specs")}
    </td>`;
  };

  const renderGearDetailCards = (items) => `<div class="gear-detail-grid">
    ${items
      .map(
        (item) => `<article class="gear-detail-card">
          ${renderGearPhoto(item)}
          <div class="gear-detail-copy">
            <p class="eyebrow">${item.system}</p>
            <h3>${item.name}</h3>
            <p class="card-copy">${item.role}</p>
            <dl class="spec-grid">
              <div><dt>Length</dt><dd>${item.specs.length}</dd></div>
              <div><dt>Weight</dt><dd>${item.specs.weight}</dd></div>
              <div><dt>Min focus</dt><dd>${item.specs.minFocus}</dd></div>
              <div><dt>Filter</dt><dd>${item.specs.filter}</dd></div>
              <div><dt>Aperture</dt><dd>${item.specs.aperture}</dd></div>
              <div><dt>TC</dt><dd>${item.specs.teleconverter}</dd></div>
              <div><dt>Introduced</dt><dd>${item.specs.introduced}</dd></div>
              <div><dt>Stabilization</dt><dd>${item.specs.stabilization}</dd></div>
              <div><dt>Zoom / focus</dt><dd>${item.specs.zoomFocus}</dd></div>
              <div><dt>Weather</dt><dd>${item.specs.weather}</dd></div>
            </dl>
            <p>${item.note}</p>
            <div class="tag-row">
              ${externalLink(item.photo, item.photoLabel)}
              ${externalLink(item.source, "Specs")}
            </div>
          </div>
        </article>`
      )
      .join("")}
  </div>`;

  const renderLensComparison = () => `<div class="comparison-table-wrap">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Sony</th>
          <th>Canon</th>
          <th>Takeaway</th>
        </tr>
      </thead>
      <tbody>
        ${gearComparisonRows
          .map((row) => {
            const sony = gearByName(row.sony);
            const canon = gearByName(row.canon);
            return `<tr>
              <th scope="row">${row.category}</th>
              ${lensCell(sony, "Sony")}
              ${lensCell(canon, "Canon")}
              <td data-label="Takeaway">${row.note}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  </div>
  <p class="muted comparison-note">Weather sealing language is manufacturer wording, not a waterproof guarantee. For Bosque, internal-zoom lenses reduce exposed barrel movement in dust and blowing grit; extending zooms are still viable but should be wiped before retracting.</p>`;

  const renderKitCards = () => `<div class="grid-4 gear-kit-grid">
    ${kitRecommendations
      .map(
        (card) => `<article class="gear-card">
          <h3>${card.title}</h3>
          <p class="card-copy">${card.summary}</p>
          <ul class="kit-list">${card.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>`
      )
      .join("")}
  </div>`;

  const renderLensWorkspaceShell = () => `<section class="gear-workspace" data-gear-panel="lenses">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Lenses</p>
        <h2>Compare the glass first</h2>
      </div>
      <p>Start with the glass because the lenses determine reach, field position, filter sizes, backpack fit, and whether a second body is worth carrying.</p>
    </div>
    <section class="panel media-decision">
      <div>
        <p class="eyebrow">Mount compatibility</p>
        <h3>Separate lens fit from teleconverter support.</h3>
        <p class="card-copy">The Sony body in this plan is an E-mount camera, and Sigma's full-frame DG DN lenses listed here are available for Sony E-mount. Sigma's TC-1411 and TC-2011 teleconverters are L-Mount-only, so evaluate the Sony E-mount Sigma lenses without a Sigma teleconverter path.</p>
      </div>
      <div class="media-counts">
        <span><b>${lensItems.length}</b> lens and TC items</span>
        <span><b>${gearCheckedDate}</b> source review</span>
      </div>
    </section>
    <div class="filter-row lens-system-tabs">
      ${lensSystems
        .map((system, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" data-lens-system="${system}">${system}</button>`)
        .join("")}
    </div>
    <div class="lens-results"></div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Pack guidance</p>
        <h2>Lens decisions</h2>
      </div>
      <p>These recommendations start with Bosque field use, with notes where the same kit overlaps future safari travel.</p>
    </div>
    ${renderKitCards()}
    <div class="gear-scale-area">
      ${renderGearScaleControls(new Set(gearScaleBrands.map((brand) => brand.system)))}
      <div class="lens-length-scale-host"></div>
      <div class="lens-weight-scale-host"></div>
    </div>
  </section>`;

  const renderBodyWorkspace = () => `<section class="gear-workspace" data-gear-panel="bodies">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Camera body</p>
        <h2>Resolution, speed, and battery planning</h2>
      </div>
      <p>The body choice affects crop latitude, flight capture, battery packing, card buying, and whether a second body prevents dust-sensitive lens swaps.</p>
    </div>
    <div class="camera-body-grid">
      ${cameraBodies
        .map(
          (body) => `<article class="camera-body-card">
            <div class="camera-body-card-header">
              <p class="eyebrow">${body.system} / ${body.model}</p>
              <h3>${body.name}</h3>
              <p class="card-copy">${body.role}</p>
            </div>
            <dl class="spec-grid">
              ${Object.entries(body.specs)
                .map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`)
                .join("")}
            </dl>
            <p>${body.note}</p>
            <p class="gear-verdict"><b>Verdict:</b> ${body.verdict}</p>
            <div class="tag-row">${externalLink(body.source, "Official specs")}</div>
          </article>`
        )
        .join("")}
    </div>
    <div class="comparison-table-wrap camera-comparison-table">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Decision</th>
            <th>Sony A7R VI</th>
            <th>Sony Alpha 1 II</th>
            <th>Canon R5 Mark II</th>
            <th>Canon R6 Mark III</th>
            <th>Takeaway</th>
          </tr>
        </thead>
        <tbody>
          ${cameraBodyComparisonRows
            .map(
              (row) => `<tr>
                <th scope="row">${row.category}</th>
                <td data-label="Sony A7R VI">${row.sonyA7r}</td>
                <td data-label="Sony Alpha 1 II">${row.sonyA1}</td>
                <td data-label="Canon R5 Mark II">${row.canonR5}</td>
                <td data-label="Canon R6 Mark III">${row.canonR6}</td>
                <td data-label="Takeaway">${row.takeaway}</td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
  </section>`;

  const renderSupportWorkspace = () => `<section class="gear-workspace" data-gear-panel="support">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Support</p>
        <h2>Everything that keeps the kit working</h2>
      </div>
      <p>Power, cards, light, cleaning, cold-weather comfort, and mechanical support are field success gear, not afterthoughts.</p>
    </div>
    ${renderGearDetailCards(supportItems)}
    <div class="support-checklist-grid">
      ${supportGearChecklist
        .map(
          (group) => `<article class="support-checklist-card">
            <p class="eyebrow">${group.priority}</p>
            <h3>${group.category}</h3>
            <ul class="kit-list">${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>`
        )
        .join("")}
    </div>
  </section>`;

  const renderFiltersWorkspace = () => `<section class="gear-workspace" data-gear-panel="filters">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Filters</p>
        <h2>Sizes, use cases, and restraint</h2>
      </div>
      <p>Filters are handling tools for glare, weather, and intentional blur. For fast dawn bird action, the default remains hood on and no filter unless conditions justify it.</p>
    </div>
    <div class="grid-4 filter-guidance">
      ${filterGuidance
        .map(
          (item) => `<article class="evidence-card">
            <h3>${item.title}</h3>
            <p class="card-copy">${item.note}</p>
          </article>`
        )
        .join("")}
    </div>
    <div class="filter-drill-grid gear-filter-drills">
      ${filterPracticePlan
        .map(
          (item) => `<article class="filter-drill-card">
            <h3>${item.title}</h3>
            <p><b>Bring:</b> ${item.bring}</p>
            <p><b>Rehearse:</b> ${item.rehearse}</p>
            <p class="muted"><b>Avoid:</b> ${item.avoid}</p>
          </article>`
        )
        .join("")}
    </div>
  </section>`;

  const renderBackpackWorkspace = () => `<section class="gear-workspace" data-gear-panel="backpacks">
    <div class="section-title compact-title">
      <div>
        <p class="eyebrow">Backpacks</p>
        <h2>Carry the actual long-lens kit</h2>
      </div>
      <p>Each option below answers a real carry problem: a mounted long lens, a disciplined travel kit, a two-body wildlife kit, or maximum capacity with laptop and support gear.</p>
    </div>
    <section class="panel media-decision backpack-decision">
      <div>
        <p class="eyebrow">Buying decision</p>
        <h3>Match the bag to the body/lens budget.</h3>
        <p class="card-copy"><b>One body and three lenses:</b> Gura Gear Kiboko 30L is the cleanest travel default; Think Tank wins if the mounted long lens is the whole point. <b>Two bodies and four lenses:</b> Vanguard ALTA SKY 68 and Lowepro Pro Trekker BP 650 AW II are the strongest capacity answers.</p>
      </div>
      <div class="media-counts">
        <span><b>${backpackOptions.length}</b> backpacks</span>
        <span><b>${gearCheckedDate}</b> fit review</span>
      </div>
    </section>
    <div class="backpack-grid">
      ${backpackOptions
        .map(
          (pack) => `<article class="backpack-card">
            ${renderGearPhoto({
              name: `${pack.maker} ${pack.name}`,
              photo: pack.source,
              photoLabel: pack.photoLabel,
              image: pack.image,
            })}
            <div class="backpack-card-copy">
              <p class="eyebrow">${pack.maker} / ${pack.type}</p>
              <h3>${pack.name}</h3>
              <p class="card-copy">${pack.bestFor}</p>
              <dl class="backpack-fit-grid">
                <div><dt>Verified fit</dt><dd>${pack.verifiedFit}</dd></div>
                <div><dt>1 body / 3 lenses</dt><dd>${pack.oneBodyThreeLenses}</dd></div>
                <div><dt>2 bodies / 4 lenses</dt><dd>${pack.twoBodiesFourLenses}</dd></div>
              </dl>
              <p class="gear-verdict"><b>Verdict:</b> ${pack.verdict}</p>
              <div class="tag-row">${externalLink(pack.source, "Official product page")}</div>
            </div>
          </article>`
        )
        .join("")}
    </div>
  </section>`;

  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Camera kit</p>
        <h2>Gear</h2>
      </div>
      <p>Build the kit in the same order you would pack for the field: lenses, camera body, support, filters, and backpack capacity.</p>
    </div>
    ${renderGuideScopeNote()}
    <section class="panel media-decision">
      <div>
        <p class="eyebrow">Field kit strategy</p>
        <h3>Make one gear decision at a time.</h3>
        <p class="card-copy">A Bosque kit succeeds when each part has a job: the long lens handles birds, the wider lens protects scale and place, support keeps the setup stable, filters stay selective, and the backpack fits the actual body/lens budget.</p>
      </div>
      <div class="media-counts">
        <span><b>${lensItems.length}</b> optical items</span>
        <span><b>${cameraBodies.length}</b> bodies</span>
        <span><b>${backpackOptions.length}</b> backpacks</span>
        <span><b>${gearCheckedDate}</b> source review</span>
      </div>
    </section>
    <div class="filter-row gear-workspace-tabs">
      ${workspaces
        .map((workspace, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" data-gear-workspace="${workspace.id}">${workspace.label}</button>`)
        .join("")}
    </div>
    <div class="gear-results"></div>`;

  const results = root.querySelector(".gear-results");

  const attachLensWorkspace = () => {
    results.innerHTML = renderLensWorkspaceShell();
    const lensResults = results.querySelector(".lens-results");
    const drawLensSystem = (system) => {
      lensResults.innerHTML =
        system === "Compare" ? renderLensComparison() : renderGearDetailCards(gearItems.filter((item) => item.system === system));
    };

    results.querySelectorAll("[data-lens-system]").forEach((button) => {
      button.addEventListener("click", () => {
        results.querySelectorAll("[data-lens-system]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        drawLensSystem(button.dataset.lensSystem);
      });
    });

    const scaleState = new Set(gearScaleBrands.map((brand) => brand.system));
    const lengthHost = results.querySelector(".lens-length-scale-host");
    const weightHost = results.querySelector(".lens-weight-scale-host");
    const drawScales = () => {
      lengthHost.innerHTML = renderLensLengthScale(scaleState);
      weightHost.innerHTML = renderLensWeightScale(scaleState);
    };
    results.querySelectorAll("[data-scale-brand]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          scaleState.add(checkbox.dataset.scaleBrand);
        } else {
          scaleState.delete(checkbox.dataset.scaleBrand);
        }
        drawScales();
      });
    });
    drawLensSystem("Sony");
    drawScales();
  };

  const drawWorkspace = (workspaceId) => {
    if (workspaceId === "lenses") {
      attachLensWorkspace();
      return;
    }
    const workspaceRenderers = {
      bodies: renderBodyWorkspace,
      support: renderSupportWorkspace,
      filters: renderFiltersWorkspace,
      backpacks: renderBackpackWorkspace,
    };
    results.innerHTML = (workspaceRenderers[workspaceId] || renderBodyWorkspace)();
  };

  root.querySelectorAll("[data-gear-workspace]").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll("[data-gear-workspace]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      drawWorkspace(button.dataset.gearWorkspace);
    });
  });

  drawWorkspace("lenses");
}

function renderPractice() {
  const root = document.querySelector("#practice");
  const filterTypeGuidance = filterGuidance.slice(3);
  const filterSizeGuidance = filterGuidance.slice(0, 3);
  root.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Beginning to end</p>
        <h2>Photo Techniques</h2>
      </div>
      <p>A teaching hub for the nine skills to rehearse before travel. Open any lesson for practice steps, field checks, and a full-size planning image with camera-setting notes.</p>
    </div>
    ${renderGuideScopeNote()}
    <section class="panel">
      <p class="eyebrow">Reading stack</p>
      <div class="tag-row">
        ${bookStack.map((book) => `<span class="tag">${book}</span>`).join("")}
      </div>
    </section>
    <section class="filter-learning-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Filter concepts first</p>
          <h2>What each filter is for</h2>
        </div>
        <p>Start with the photographic decision. Filters are handling tools for specific light, glare, weather, and motion problems, not default glass for every bird frame.</p>
      </div>
      <div class="filter-concept-grid">
        ${filterTypeGuidance
          .map(
            (item) => `<article class="filter-kit-card">
              <h3>${item.title}</h3>
              <p class="card-copy">${item.note}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>
    <section class="filter-size-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Then sizes</p>
          <h2>Which filter sizes matter</h2>
        </div>
        <p>Buy and pack around shared sizes first. The larger telephoto filters are special-purpose tools because they cost money, light, and field speed.</p>
      </div>
      <div class="filter-size-grid">
        ${filterSizeGuidance
          .map(
            (item) => `<article class="filter-kit-card">
              <h3>${item.title}</h3>
              <p class="card-copy">${item.note}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>
    <div class="section-title compact-title practice-technique-title">
      <div>
        <p class="eyebrow">1 to 9</p>
        <h2>Nine Technique Lessons</h2>
      </div>
      <p>Each lesson connects a field problem with a concrete drill, success check, and planning image.</p>
    </div>
    <div class="practice-list practice-lesson-list">
      ${practiceModules
        .map(
          (practiceModule, index) => `<article class="practice-card practice-teaching-card">
            ${practiceModule.visualId ? `<div class="practice-visual-wrap">${renderStandaloneFrameCard(practiceModule.visualId, {
              className: "practice-lead-frame",
              hideDescription: false,
              showLocation: false,
              loading: index < 2 ? "eager" : "lazy",
            })}</div>` : ""}
            <div class="practice-card-copy">
              <div class="practice-card-header">
                <div class="practice-number">${index + 1}</div>
                <div>
                  <p class="eyebrow">Technique ${index + 1}</p>
                  <h3>${practiceModule.title}</h3>
                </div>
              </div>
              <p class="card-copy">${practiceModule.goal}</p>
              <div class="practice-steps">
                <h4>How to practice</h4>
                <ol>
                  ${practiceModule.steps.map((step) => `<li>${step}</li>`).join("")}
                </ol>
              </div>
              <p class="practice-homework"><b>Success check:</b> ${practiceModule.homework}</p>
              <button class="button-link practice-open-button" type="button" data-jump="practice-${index + 1}">Open lesson</button>
            </div>
          </article>`
        )
        .join("")}
    </div>
    <section class="filter-practice-section dedicated-filter-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">End with kit and drills</p>
          <h2>Filter Kit And Drills</h2>
        </div>
        <p>Practice filters after the concepts and sizes are clear. The default for fast bird action is hood on and no filter unless weather protection is genuinely needed.</p>
      </div>
      <div class="filter-practice-layout">
        ${renderStandaloneFrameGrid("filter-practice", {
          className: "filter-frame-grid",
          compact: true,
          hideDescription: true,
          loading: "lazy",
          ariaLabel: "Filter practice standalone training frames",
        })}
        <div class="filter-drill-grid">
          ${filterPracticePlan
            .map(
              (item) => `<article class="filter-drill-card">
                <h3>${item.title}</h3>
                <p><b>Bring:</b> ${item.bring}</p>
                <p><b>Rehearse:</b> ${item.rehearse}</p>
                <p class="muted"><b>Avoid:</b> ${item.avoid}</p>
              </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
    ${renderVisualLightbox("practice-lightbox-title")}`;
  setupVisualLightbox(root);
}

function renderPracticeDetail(index) {
  const practiceModule = practiceModules[index];
  const root = document.querySelector(`#practice-${index + 1}`);
  if (!root || !practiceModule) return;

  const lesson = visualLessons[practiceModule.visualId];
  root.innerHTML = `
    <button class="button-link secondary practice-back-button" type="button" data-jump="practice">Back to Photo Techniques</button>
    <section class="practice-detail-hero">
      <div class="practice-detail-copy">
        <p class="eyebrow">Technique ${index + 1} of ${practiceModules.length}</p>
        <h2>${practiceModule.title}</h2>
        <p>${practiceModule.goal}</p>
        <dl class="visual-tech-meta practice-detail-meta">
          <div><dt>Lens</dt><dd>${lesson.lens}</dd></div>
          <div><dt>Focal length</dt><dd>${lesson.focalLength}</dd></div>
          <div><dt>Aperture</dt><dd>${lesson.aperture}</dd></div>
          <div><dt>Shutter speed</dt><dd>${lesson.shutterSpeed}</dd></div>
          <div class="is-technique"><dt>Technique</dt><dd>${lesson.technique}</dd></div>
        </dl>
      </div>
      <div class="practice-detail-visual">
        ${renderStandaloneFrameGrid(practiceModule.visualId, {
          className: "practice-detail-frame-grid",
          compact: false,
          hideDescription: false,
          showLocation: true,
          loading: "eager",
          ariaLabel: `${practiceModule.title} full standalone training frames`,
        })}
      </div>
    </section>
    <section class="practice-detail-grid">
      <article class="panel">
        <p class="eyebrow">Field steps</p>
        <h3>What to rehearse</h3>
        <ol class="kit-list practice-step-list">${practiceModule.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </article>
      <article class="panel">
        <p class="eyebrow">Homework</p>
        <h3>Proof before travel</h3>
        <p class="card-copy">${practiceModule.homework}</p>
      </article>
      <article class="panel">
        <p class="eyebrow">How to read the image</p>
        <h3>Read the image as a field checklist.</h3>
        <p class="card-copy">${lesson.supposedLocation}</p>
        <p class="homework"><b>Look for:</b> whether the image gives you a repeatable target for stance, timing, exposure, motion, or workflow. The goal is not to copy the generated frame; it is to know what decision you are practicing.</p>
      </article>
    </section>
    ${renderVisualLightbox(`practice-${index + 1}-lightbox-title`)}`;
  setupVisualLightbox(root);
}

function renderInspiration() {
  const root = document.querySelector("#inspiration");
  root.innerHTML = `
    <section class="inspiration-hero-section">
      <div class="section-title">
        <div>
          <p class="eyebrow">Visual references</p>
          <h2>Shot Inspiration</h2>
        </div>
        <p>Thirty planning images show the kinds of Bosque del Apache photographs to plan for: roosts, blast-offs, fly-ins, fields, wetlands, small subjects, weather, motion, and blue hour.</p>
      </div>
      ${renderGuideScopeNote()}
      <div class="inspiration-feature-row">
        ${renderStandaloneFrameCard("inspiration-hd-dawn-crane-roost-silhouettes", {
          className: "inspiration-feature-frame",
          hideDescription: false,
          showLocation: true,
          loading: "eager",
        })}
        <aside class="inspiration-feature-copy">
          <p class="eyebrow">Planning image set</p>
          <h3>Use these as shot targets, not as proof of conditions.</h3>
        <p class="card-copy">The images are planning visuals created for this guide. Each one opens with scene notes, likely field position, technique, lens, focal length, aperture, shutter speed, and ISO.</p>
          <p class="card-copy">The set is intentionally broad: spectacle frames sit beside quiet habitat, fieldcraft, small birds, weather fallback, and motion studies so the page teaches a portfolio, not a single postcard.</p>
        </aside>
      </div>
    </section>
    <section class="inspiration-generated-section">
      <div class="section-title compact-title">
        <div>
          <p class="eyebrow">Bosque shot targets</p>
          <h3>Thirty high-resolution inspiration images</h3>
        </div>
        <p>Open any image for full-size review and camera-setting notes.</p>
      </div>
      <div class="inspiration-generated-grid">
        ${inspirationGeneratedVisuals
          .map((visual, index) =>
            renderStandaloneFrameCard(visual.id, {
              className: "inspiration-generated-card",
              hideDescription: false,
              showLocation: index < 6,
              loading: index < 4 ? "eager" : "lazy",
            })
          )
          .join("")}
      </div>
    </section>
    <section class="panel rights-callout inspiration-policy">
      <div>
        <p class="eyebrow">Image rights boundary</p>
        <h3>Study broadly, publish carefully.</h3>
        <p class="card-copy">The planning images above are shot targets rather than field photos made on location. External article, portfolio, product, and hotel images stay linked unless their reuse rights are documented.</p>
      </div>
      ${renderStandaloneFrameCard("inspiration-hd-overhead-goose-pattern", {
        className: "callout-preview inspiration-callout-frame",
        compact: true,
        hideDescription: true,
      })}
    </section>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">Public-domain reference photos</p>
        <h3>Reusable source images</h3>
      </div>
      <p>Use public-domain images directly only when the source license supports it.</p>
    </div>
    <div class="grid-3">
      ${inspiration
        .map(
          (item) => `<article class="photo-card">
            <figure>
              <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async" />
              <figcaption>
                <h3>${item.title}</h3>
                <p class="card-copy">${item.idea}</p>
                <p class="muted">${item.credit}</p>
                <p class="muted">${item.license}</p>
                ${externalLink(item.source, "Source")}
              </figcaption>
            </figure>
          </article>`
        )
        .join("")}
    </div>
    <div class="section-title compact-title support-title">
      <div>
        <p class="eyebrow">More places to look</p>
        <h2>External Inspiration</h2>
      </div>
      <p>These are linked for study, not reused as site assets.</p>
    </div>
    <div class="grid-2">
      ${inspirationLinks
        .map(
          (item) => `<article class="evidence-card link-reference-card external-inspiration-card">
            ${renderStandaloneFrameCard(item.visualId, {
              compact: true,
              hideDescription: true,
              className: "external-inspiration-visual",
            })}
            <h3>${item.title}</h3>
            ${(item.description || [item.note]).map((paragraph) => `<p class="card-copy">${paragraph}</p>`).join("")}
            <p class="muted">${item.note}</p>
            ${externalLink(item.url, "Open reference")}
          </article>`
        )
        .join("")}
    </div>
    ${renderGalleryStudySection()}
    ${renderVisualLightbox("inspiration-lightbox-title")}`;
  setupVisualLightbox(root);
}

function renderReferenceIndex() {
  return `<section class="media-section reference-index-section" id="reference-index">
    <div class="media-section-header">
      <div>
        <p class="eyebrow">Checked ${checkedDate}</p>
        <h3>Reference index</h3>
      </div>
      <p>Use these source notes to understand the guide's evidence. Recheck access, lodging, pricing, road conditions, and bird locations after booking and again during the final travel week.</p>
    </div>
    <section class="panel source-policy">
      <p class="eyebrow">How to use the references</p>
      <p class="card-copy">Start with official refuge sources for rules and access, then use photographer reports, EXIF examples, product pages, lodging pages, and weather links for the decisions they are best suited to support.</p>
    </section>
    <div class="timeline reference-timeline">
      ${sources
        .map(
          (source) => `<article class="source-row">
            <div><span class="tag">${source.topic}</span></div>
            <div>
              <h3><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a></h3>
              <p class="source-description">${source.description}</p>
              <p class="muted">${source.url}</p>
            </div>
          </article>`
        )
        .join("")}
    </div>
  </section>`;
}

function renderMedia() {
  const root = document.querySelector("#media");
  const kinds = ["All", ...Array.from(new Set(mediaArticles.map((item) => item.kind)))];
  const evidenceGroups = Array.from(new Set(exifEvidence.map((item) => item.group)));
  const primarySources = mediaArticles.slice(0, 3);
  root.innerHTML = `
    <div class="media-editorial">
      <section class="media-hero-section">
        <div class="media-hero-copy">
          <p class="eyebrow">Articles, EXIF, sources, and field guidance</p>
          <h2>Resources &amp; References</h2>
          <p>The library is organized as a field decision tool: the recommendation first, then source guidance, EXIF evidence, practical implications, reader-facing links, and the factual reference index.</p>
        </div>
        <aside class="recommendation-summary">
          <p class="eyebrow">Primary takeaway</p>
          <h3>Carry reach, but do not let reach make every decision.</h3>
          <p>The Sony 200-600 is a primary wildlife recommendation. The 24-105 stays ready for flock scale and place. The 100-400 and 400-800 are situational choices for handling or bright-light reach.</p>
        </aside>
      </section>
      ${renderGuideScopeNote()}

      <section class="media-brief-grid" aria-label="Research summary">
        <article class="brief-card is-primary">
          <span>01</span>
          <h3>Resource guidance</h3>
          <p>Use Cornell, The Quite Wild, and Thom Hogan as the decision anchors: location behavior, practical settings, and restraint against pure gear obsession.</p>
        </article>
        <article class="brief-card">
          <span>02</span>
          <h3>EXIF evidence</h3>
          <p>The evidence supports a full range from 24-105mm environmental frames to 800mm tight action, with 400-600mm-equivalent work as the recurring center.</p>
        </article>
        <article class="brief-card">
          <span>03</span>
          <h3>References</h3>
          <p>The source index stays on this same page so outside reading and factual citations support one planning workflow.</p>
        </article>
      </section>

      <section class="media-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Resource and article guidance</p>
            <h3>What to read first</h3>
          </div>
          <p>Each article keeps its three-paragraph summary, but the layout gives stronger weight to the most actionable sources.</p>
        </div>
        <div class="source-priority">
          ${primarySources
            .map(
              (item, index) => `<article class="priority-source-card ${index === 0 ? "is-lead" : ""}">
                ${renderVisualMini(visualIdForMedia(item), "Planning preview")}
                <div class="media-meta">
                  <span>${item.date}</span>
                  <span>${item.kind}</span>
                </div>
                <h4><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h4>
                <p class="source-name">${item.source}</p>
                <p>${item.apply}</p>
              </article>`
            )
            .join("")}
        </div>
        <div class="filter-row media-filters">
          ${kinds.map((kind, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" data-filter="${kind}">${kind}</button>`).join("")}
        </div>
        <div class="article-results" id="media-results"></div>
      </section>

      <section class="media-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Supporting proof</p>
            <h3>EXIF evidence by focal-length role</h3>
          </div>
          <p>Grouped by what the data proves in the field, not by source chronology.</p>
        </div>
        <div class="evidence-board">
          ${evidenceGroups
            .map((group) => {
              const items = exifEvidence.filter((item) => item.group === group);
              return `<article class="evidence-group">
                <header>
                  <p class="eyebrow">${group}</p>
                  <strong>${items.length} evidence ${items.length === 1 ? "note" : "notes"}</strong>
                </header>
                <div class="evidence-list">
                  ${items
                    .map(
                      (item) => `<a class="evidence-note" href="${item.url}" target="_blank" rel="noreferrer">
                        <span>${item.source}</span>
                        <h4>${item.subject}</h4>
                        <p class="evidence-data">${item.evidence}</p>
                        <p>${item.implication}</p>
                      </a>`
                    )
                    .join("")}
                </div>
              </article>`;
            })
            .join("")}
        </div>
      </section>

      <section class="media-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Practical field implications</p>
            <h3>Field implications</h3>
          </div>
          <p>These are the operational decisions supported by the source set.</p>
        </div>
        <div class="implication-grid">
          ${fieldImplications
            .map(
              (item) => `<article class="implication-card">
                <h4>${item.title}</h4>
                <p>${item.note}</p>
              </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="media-section citation-section">
        <div class="media-section-header">
          <div>
            <p class="eyebrow">Links and citations</p>
            <h3>Reader-facing links</h3>
          </div>
          <p>Use these links to study technique, fieldcraft, EXIF examples, and scouting habits. Any visuals in this section are planning previews or source cards, not article images.</p>
        </div>
        <div class="citation-list">
          ${mediaArticles
            .map(
              (item) => `<a href="${item.url}" target="_blank" rel="noreferrer">
                <span>${item.kind}</span>
                <strong>${item.title}</strong>
                <em>${item.source}</em>
              </a>`
            )
            .join("")}
        </div>
      </section>
      ${renderReferenceIndex()}
    </div>`;

  const results = root.querySelector("#media-results");
  const draw = (filter) => {
    const articles = filter === "All" ? mediaArticles : mediaArticles.filter((item) => item.kind === filter);
    results.innerHTML = articles
      .map(
        (item, index) => `<article class="media-card article-card ${index === 0 && filter === "All" ? "is-featured" : ""}">
          <div class="article-kicker">
            ${renderVisualMini(visualIdForMedia(item), "Planning preview")}
            <div class="media-meta">
              <span>${item.date}</span>
              <span>${item.kind}</span>
            </div>
            <p class="source-name">${item.source}</p>
          </div>
          <div class="article-body">
            <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h3>
            ${item.summary.map((paragraph) => `<p class="card-copy">${paragraph}</p>`).join("")}
            <p class="article-apply"><b>Use it for:</b> ${item.apply}</p>
          </div>
        </article>`
      )
      .join("");
  };

  root.querySelectorAll(".media-filters .chip").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll(".media-filters .chip").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      draw(button.dataset.filter);
    });
  });

  draw("All");
}

const defaultView = "overview";
const viewAliases = {
  "5-day-itinerary": "itinerary",
  "best-photo-windows": "windows",
  "complete-guide": "guide",
  "external-resources": "media",
  "field-guide": "guide",
  "field-techniques": "practice",
  "itineraries": "itinerary",
  "light-timing": "windows",
  lodging: "travel",
  locations: "map",
  "map-locations": "map",
  "photo-techniques": "practice",
  "resources-references": "media",
  shot: "inspiration",
  "shot-inspiration": "inspiration",
  "travel-logistics": "travel",
  "when-to-shoot": "windows",
};

const viewRenderers = {
  overview: renderOverview,
  guide: renderGuide,
  map: renderMap,
  itinerary: renderItinerary,
  windows: renderWindows,
  travel: renderTravel,
  gear: renderGear,
  practice: renderPractice,
  inspiration: renderInspiration,
  media: renderMedia,
};

practiceModules.forEach((_, index) => {
  viewRenderers[`practice-${index + 1}`] = () => renderPracticeDetail(index);
});

const renderedViews = new Map();
const persistentViews = new Set(["overview"]);

function disposeMapState(name) {
  const state = window[name];
  state?.cleanup?.();
  if (state?.resizeHandler) {
    window.removeEventListener("resize", state.resizeHandler);
  }
  state?.map?.stop?.();
  if (state?.map?.remove) {
    state.map.remove();
  }
  delete window[name];
}

function disposeRenderedView(viewId) {
  if (persistentViews.has(viewId) || !renderedViews.has(viewId)) return;

  if (viewId === "map") disposeMapState("photoMapState");
  if (viewId === "travel") disposeMapState("lodgingMapState");

  const view = document.getElementById(viewId);
  if (view) view.innerHTML = "";
  renderedViews.delete(viewId);
}

function trimRenderedViews(activeViewId) {
  document.querySelectorAll(".view").forEach((view) => {
    if (view.id !== activeViewId) disposeRenderedView(view.id);
  });
}

function normalizeViewId(id) {
  const resolvedId = viewAliases[id] || id;
  const view = document.getElementById(resolvedId || "");
  return view?.classList.contains("view") ? resolvedId : defaultView;
}

function ensureViewRendered(viewId) {
  if (renderedViews.has(viewId)) return renderedViews.get(viewId);
  const renderer = viewRenderers[viewId];
  if (!renderer) return Promise.resolve();

  const renderPromise = Promise.resolve(renderer()).catch((error) => {
    renderedViews.delete(viewId);
    throw error;
  });
  renderedViews.set(viewId, renderPromise);
  return renderPromise;
}

function getParentWindow() {
  try {
    return window.parent && window.parent !== window ? window.parent : null;
  } catch {
    return null;
  }
}

function viewFromHash(targetWindow) {
  const raw = targetWindow.location.hash.replace(/^#/, "");
  if (!raw) return "";
  try {
    return normalizeViewId(decodeURIComponent(raw));
  } catch {
    return normalizeViewId(raw);
  }
}

function requestedView() {
  const parentWindow = getParentWindow();
  const parentView = parentWindow ? viewFromHash(parentWindow) : "";
  const ownView = viewFromHash(window);
  const queryView = new URLSearchParams(window.location.search).get("view");
  return normalizeViewId(parentView || ownView || queryView || defaultView);
}

function writeViewUrl(targetWindow, id, mode) {
  const url = new URL(targetWindow.location.href);
  url.hash = id;
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  if (targetWindow.location.hash === `#${id}`) return;
  targetWindow.history[mode === "replace" ? "replaceState" : "pushState"]({ view: id }, "", nextUrl);
}

function syncViewUrls(id, mode = "push") {
  writeViewUrl(window, id, mode);
  const parentWindow = getParentWindow();
  if (parentWindow) {
    writeViewUrl(parentWindow, id, mode);
  }
}

async function showView(id, options = {}) {
  const viewId = normalizeViewId(id);
  const activeTabId = viewId.startsWith("practice-") ? "practice" : viewId;
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.view === activeTabId;
    tab.classList.toggle("is-active", active);
    if (active) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });
  document.querySelector(`.tab[data-view="${activeTabId}"]`)?.scrollIntoView({
    block: "nearest",
    inline: "center",
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
  if (options.updateUrl) {
    syncViewUrls(viewId, options.replace ? "replace" : "push");
  }

  try {
    await ensureViewRendered(viewId);
  } catch (error) {
    console.error(`Could not render ${viewId} view`, error);
  }

  trimRenderedViews(viewId);
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
    if (viewId === "map" && window.photoMapState) {
      window.photoMapState.map.invalidateSize({ pan: false });
      window.photoMapState.map.fitBounds(window.photoMapState.bounds, { padding: [28, 28], animate: false });
    }
    if (viewId === "travel" && window.lodgingMapState) {
      window.lodgingMapState.map.invalidateSize({ pan: false });
      window.lodgingMapState.map.fitBounds(window.lodgingMapState.bounds, { padding: [28, 28], animate: false });
    }
  }, 80);
}

function initTabs() {
  document.querySelectorAll(".tab[data-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      showView(button.dataset.view, { updateUrl: true });
    });
  });
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const visualTrigger = event.target.closest("[data-visual-id], [data-gallery-id]");
    if (visualTrigger) {
      const root = visualTrigger.closest(".view");
      const overlay = root?.querySelector(".gallery-lightbox");
      const visualId = visualTrigger.getAttribute("data-visual-id") || visualTrigger.getAttribute("data-gallery-id");
      if (overlay && visualId && openVisualLightbox(overlay, visualId)) {
        event.preventDefault();
        return;
      }
    }
    const trigger = event.target.closest("[data-jump]");
    if (!trigger) return;
    event.preventDefault();
    showView(trigger.dataset.jump, { updateUrl: true });
  });
  const syncFromUrl = () => {
    const viewId = requestedView();
    showView(viewId, { updateUrl: false });
    writeViewUrl(window, viewId, "replace");
  };
  window.addEventListener("hashchange", syncFromUrl);
  window.addEventListener("popstate", syncFromUrl);
  const parentWindow = getParentWindow();
  if (parentWindow) {
    parentWindow.addEventListener("hashchange", syncFromUrl);
    parentWindow.addEventListener("popstate", syncFromUrl);
  }
  showView(requestedView(), { updateUrl: Boolean(window.location.hash || parentWindow?.location.hash), replace: true });
}

ensureViewRendered("overview").then(initTabs);
