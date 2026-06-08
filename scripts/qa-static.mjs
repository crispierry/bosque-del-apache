import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const siteDir = join(root, "site");
const checks = [];

function assert(name, passed, detail = "") {
  checks.push({ name, passed, detail });
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function collectFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    return entry.isDirectory() ? collectFiles(fullPath) : [fullPath];
  });
}

function formatKiB(bytes) {
  return `${Math.round(bytes / 1024)} KiB`;
}

function formatMiB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
}

function localAssetReferences(path) {
  const source = read(path);
  const refs = new Set();
  for (const match of source.matchAll(/(?:src|href):\s*["'`]\.\/(assets\/[^"'`?#]+)/g)) {
    if (!match[1].includes("${")) refs.add(match[1]);
  }
  for (const match of source.matchAll(/(?:src|href)=["']\.\/(assets\/[^"'?#]+)(?:[?#][^"']*)?["']/g)) {
    if (!match[1].includes("${")) refs.add(match[1]);
  }
  return [...refs].map((assetPath) => ({
    assetPath,
    fullPath: normalize(join(dirname(join(root, path)), assetPath)),
  }));
}

const data = read("site/data.js");
const app = read("site/app.js");
const appBundle = `${data}\n${app}`;
const index = read("site/index.html");
const guide = read("site/complete-photographers-guide.html");
const styles = read("site/styles.css");
const expectedNavLabels = [
  "Overview",
  "Field Guide",
  "5-Day Itinerary",
  "Best Photo Windows",
  "Map &amp; Locations",
  "Gear",
  "Photo Techniques",
  "Travel Logistics",
  "Shot Inspiration",
  "Image Disclosure",
  "Resources &amp; References",
];

function navLabels(source) {
  const nav = source.match(/<nav[^>]*class="top-tabs"[\s\S]*?<\/nav>/)?.[0] || "";
  return [...nav.matchAll(/<a\b[^>]*>([^<]+)<\/a>/g)].map((match) => match[1].trim());
}

const refs = [
  ...localAssetReferences("site/index.html"),
  ...localAssetReferences("site/data.js"),
  ...localAssetReferences("site/app.js"),
  ...localAssetReferences("site/complete-photographers-guide.html"),
];
const missing = refs.filter((ref) => !existsSync(ref.fullPath));
assert("local asset references exist", missing.length === 0, missing.map((ref) => ref.assetPath).join(", "));

const inspirationFiles = readdirSync(join(siteDir, "assets/generated/inspiration-hd")).filter((name) =>
  /^inspiration-\d{2}-.*\.jpg$/.test(name)
);
const inspirationIds = [...data.matchAll(/id:\s*"inspiration-hd-[^"]+"/g)].length;
assert("inspiration has 30 local files", inspirationFiles.length === 30, String(inspirationFiles.length));
assert("inspiration has 30 app records", inspirationIds === 30, String(inspirationIds));

assert(
  "standalone guide has no active gallery-standalone references",
  !guide.includes("gallery-standalone"),
  "site/complete-photographers-guide.html"
);

assert(
  "app uses no contact sheets for media thumbnails",
  /const mediaVisualSequence = \[/.test(data) && !/function visualIdForMedia[\s\S]*contact-sheet/.test(appBundle),
  "visualIdForMedia should use individual generated image ids"
);

const scriptOrder = [...index.matchAll(/<script src="\.\/(data|app)\.js[^"]*"/g)].map((match) => match[1]);
assert("index loads data before app", scriptOrder.join(",") === "data,app", scriptOrder.join(","));
assert(
  "index nav uses editorial labels and order",
  navLabels(index).join("|") === expectedNavLabels.join("|"),
  navLabels(index).join(" | ")
);
assert(
  "standalone guide nav uses editorial labels and order",
  navLabels(guide).join("|") === expectedNavLabels.join("|"),
  navLabels(guide).join(" | ")
);

assert("data and renderer are split", !/function el\(/.test(data) && /function el\(/.test(app), "site/data.js + site/app.js");
assert(
  "inactive views are disposed",
  /function disposeRenderedView/.test(app) && /trimRenderedViews\(viewId\)/.test(app),
  "showView should trim non-active rendered views"
);
assert(
  "guide framing copy has one source of truth",
  /const guideFraming = \{/.test(data) && /function renderGuideScopeNote/.test(app),
  "guide-scope copy should stay centralized"
);
const guideScopeUses = [...app.matchAll(/renderGuideScopeNote\(/g)].length;
assert("guide framing is reused across planning views", guideScopeUses >= 11, String(guideScopeUses));
const sourcesBlock = data.match(/const sources = \[([\s\S]*?)\];\n\nconst photoLocations/);
assert("sources data block exists", Boolean(sourcesBlock), "site/data.js");
const sourceRecordCount = [...sourcesBlock[1].matchAll(/\n  \{/g)].length;
const sourceDescriptionCount = [...sourcesBlock[1].matchAll(/\n    description:/g)].length;
assert("every source has a visitor description", sourceDescriptionCount === sourceRecordCount, `${sourceDescriptionCount}/${sourceRecordCount}`);
assert(
  "resources page includes reference descriptions",
  /function renderReferenceIndex/.test(app) && /source\.description/.test(app),
  "renderReferenceIndex + source.description"
);
assert(
  "static pages include guide framing",
  index.includes("Guide scope") &&
    guide.includes("Use this as a general Bosque del Apache photography guide"),
  "index.html and complete-photographers-guide.html"
);
const bannedReaderPhrases = [
  "Sony Alpha 7R VI is the current A7R name to use",
  "The old Sony/Sigma/Canon/Support/Compare strip",
  "Compare the thing you are choosing now",
  "Still being corrected",
  "approved rental car illustration",
  "Repetitive generic thumbnails",
  "repeated per-source date stamps",
];
const readerFacingBundle = `${index}\n${guide}\n${app}\n${data}`;
const bannedCopyHits = bannedReaderPhrases.filter((phrase) => readerFacingBundle.includes(phrase));
assert(
  "reader-facing copy avoids internal implementation language",
  bannedCopyHits.length === 0,
  bannedCopyHits.join(", ")
);
assert(
  "reader-facing copy avoids unexplained gallery acronyms",
  !/\bLRA\b/.test(readerFacingBundle),
  "Write out the Gallery concept instead of using LRA"
);
assert(
  "sources rows omit repeated checked-date column",
  !app.includes("${source.checked}"),
  "Sources keeps freshness at the page level"
);
assert(
  "resources routes resolve to combined resources page",
  /"external-resources": "media"/.test(app) &&
    /"resources-references": "media"/.test(app) &&
    !/sources: renderSources/.test(app),
  "Resources & References should remain the combined reader-facing page"
);
assert(
  "image disclosure routes resolve to disclosure page",
  /"ai-images": "disclosure"/.test(app) &&
    /"image-disclosure": "disclosure"/.test(app) &&
    /"image-notes": "disclosure"/.test(app) &&
    /disclosure: renderImageDisclosure/.test(app),
  "Image Disclosure route and aliases should stay available"
);
assert(
  "retired gallery and citation aliases stay removed",
  !/gallery: "inspiration"/.test(app) &&
    !/references: "media"/.test(app) &&
    !/source: "media"/.test(app) &&
    !/sources: "media"/.test(app),
  "Old Gallery/References/Source hashes should not land at unrelated page tops"
);
assert(
  "gallery content remains nested under shot inspiration",
  /function renderGalleryStudySection/.test(app) && !/gallery: renderGallery/.test(app),
  "Gallery should be nested under Shot Inspiration"
);
assert(
  "practice detail pages omit guide-scope note",
  !/function renderPracticeDetail[\s\S]*?renderGuideScopeNote\(\)[\s\S]*?function renderInspiration/.test(app),
  "Technique lessons should stay focused on practice"
);
assert(
  "shot inspiration gallery excludes travel workflow images",
  /shotInspirationGalleryExcludedGroups = new Set\(\["travel-workflow"\]\)/.test(app) &&
    /!shotInspirationGalleryExcludedGroups\.has\(group\.id\)/.test(app),
  "Travel workflow visuals belong on Travel Logistics"
);
assert(
  "generated image labels are explicit in app renderers",
  [
    "AI-generated planning illustration",
    "AI-generated training illustration",
    "AI-generated lodging preview",
    "Public-domain field photo",
    "Official product reference photo",
  ].every((label) => app.includes(label)) &&
    !/(Planning preview|Generated teaching preview|Generated teaching image|Reference-based generated preview|Travel planning illustration)/.test(app),
  "Use disclosure labels instead of vague preview labels"
);
const guideGeneratedFigures = [
  ...guide.matchAll(/<figure[^>]*>[\s\S]*?<img[^>]+src="\.\/assets\/generated\/[^"]+"[\s\S]*?<\/figure>/g),
].map((match) => match[0]);
const unlabeledGuideGeneratedFigures = guideGeneratedFigures.filter(
  (figure) => !/<figcaption><span>AI-generated (?:planning illustration|training illustration|lodging preview)<\/span>/.test(figure)
);
assert(
  "standalone generated guide figures disclose AI",
  guideGeneratedFigures.length > 0 && unlabeledGuideGeneratedFigures.length === 0,
  `${unlabeledGuideGeneratedFigures.length}/${guideGeneratedFigures.length}`
);
assert(
  "standalone non-generated guide figures use source labels",
  guide.includes("<span>Public-domain field photo</span>") &&
    guide.includes("<span>Official product reference photo</span>"),
  "Guide should label public-domain and official product images"
);
assert(
  "thumbnail disclosure is caption-based",
  /<figcaption><span>\$\{note \|\| visualDisclosureLabel\(visual\)\}<\/span><\/figcaption>/.test(app) &&
    /\.visual-mini figcaption/.test(styles) &&
    !/\.visual-mini span\s*\{[\s\S]*?position:\s*absolute/.test(styles),
  "Visual mini disclosure should sit in a caption, not as an image overlay"
);
assert(
  "gear uses top-level workspaces",
  /data-gear-workspace/.test(app) &&
    /\{ id: "bodies", label: "Camera Bodies" \}[\s\S]*\{ id: "lenses", label: "Lenses" \}[\s\S]*\{ id: "filters", label: "Filters" \}[\s\S]*\{ id: "support", label: "Support" \}[\s\S]*\{ id: "backpacks", label: "Backpacks" \}/.test(app) &&
    /drawWorkspace\("bodies"\)/.test(app),
  "Gear should separate different planning decisions"
);
assert(
  "lens brand filters stay inside lens workspace",
  /data-lens-system/.test(app) && !/data-system="\$\{system\}"/.test(app),
  "Lens brand controls should stay scoped to the lens workspace"
);
assert(
  "gear data includes body and backpack comparisons",
    /const cameraBodies = \[/.test(data) &&
    [...data.matchAll(/\n  \{\n    system: "(?:Sony|Canon)",\n    name: "(?:Sony|Canon)/g)].length >= 4 &&
    /const backpackOptions = \[/.test(data) &&
    [...data.matchAll(/\n  \{\n    maker: "/g)].length >= 10 &&
    /ALTA SKY 42/.test(data) &&
    /FirstLight 46L\+/.test(data) &&
    /Action X70 HD Starter Kit/.test(data) &&
    /Axis V2 32L/.test(data),
  "cameraBodies + backpackOptions"
);
assert(
  "camera body workspace compares brands in separate sections",
  /const renderBrandBodySection/.test(app) &&
    /data-camera-brand="\$\{brand\.toLowerCase\(\)\}"/.test(app) &&
    /renderBrandBodySection\("Sony"\)/.test(app) &&
    /renderBrandBodySection\("Canon"\)/.test(app) &&
    /Compare Sony bodies/.test(app) &&
    /Compare Canon bodies/.test(app),
  "Camera body comparison should keep Sony and Canon sections distinct"
);
assert(
  "expanded support checklist is present",
  /const supportGearChecklist = \[/.test(data) &&
    ["Body power", "Charging workflow", "Cards and backup", "Predawn safety", "Dust and weather"].every((label) =>
      data.includes(label)
    ),
  "supportGearChecklist"
);

assert(
  "index has canonical URL",
  /<link rel="canonical" href="https:\/\/crispierry\.com\/projects\/bosque-del-apache"\s*\/?>/.test(index)
);
assert("index has meta description", /<meta\s+name="description"/.test(index));
assert("index has Open Graph image", /property="og:image"/.test(index));
assert("index has Open Graph URL", /property="og:url" content="https:\/\/crispierry\.com\/projects\/bosque-del-apache"/.test(index));
assert(
  "index omits PDF CTA",
  !index.includes("bosque-del-apache-photo-plan.pdf") && !index.includes("Open PDF booklet"),
  "PDF publishing is deferred from the website surface"
);
assert("index has JSON-LD WebPage", /\"@type\": \"WebPage\"/.test(index));
assert(
  "standalone guide has canonical URL",
  /<link[^>]+href="https:\/\/crispierry\.com\/projects\/bosque-del-apache\/complete-photographers-guide\.html"[^>]+rel="canonical"[^>]*\/?>/.test(guide) ||
    /<link[^>]+rel="canonical"[^>]+href="https:\/\/crispierry\.com\/projects\/bosque-del-apache\/complete-photographers-guide\.html"[^>]*\/?>/.test(guide)
);

const siteFiles = collectFiles(siteDir);
const totalSiteBytes = siteFiles.reduce((sum, path) => sum + statSync(path).size, 0);
const imageFiles = siteFiles.filter((path) => [".jpg", ".jpeg", ".png", ".webp"].includes(extname(path).toLowerCase()));
const largestImage = imageFiles
  .map((path) => ({ path, size: statSync(path).size }))
  .sort((a, b) => b.size - a.size)[0];
const initialGzipBytes = gzipSync(`${data}\n${app}\n${styles}`).length;

assert("site payload stays under 90 MiB", totalSiteBytes <= 90 * 1024 * 1024, formatMiB(totalSiteBytes));
assert(
  "largest image stays under 1.25 MiB",
  largestImage && largestImage.size <= 1.25 * 1024 * 1024,
  largestImage ? `${relative(siteDir, largestImage.path)} ${formatKiB(largestImage.size)}` : "none"
);
assert("initial JS/CSS gzip stays under 180 KiB", initialGzipBytes <= 180 * 1024, formatKiB(initialGzipBytes));

const failed = checks.filter((check) => !check.passed);
for (const check of checks) {
  console.log(`${check.passed ? "PASS" : "FAIL"} ${check.name}${check.detail ? `: ${check.detail}` : ""}`);
}

if (failed.length > 0) {
  process.exitCode = 1;
}
