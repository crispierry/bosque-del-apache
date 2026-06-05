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

assert("data and renderer are split", !/function el\(/.test(data) && /function el\(/.test(app), "site/data.js + site/app.js");
assert(
  "inactive views are disposed",
  /function disposeRenderedView/.test(app) && /trimRenderedViews\(viewId\)/.test(app),
  "showView should trim non-active rendered views"
);
assert(
  "guide framing copy has one source of truth",
  /const guideFraming = \{/.test(data) && /function renderGuideScopeNote/.test(app),
  "general guide + proposed trip window copy should stay centralized"
);
const guideScopeUses = [...app.matchAll(/renderGuideScopeNote\(/g)].length;
assert("guide framing is reused across app views", guideScopeUses >= 12, String(guideScopeUses));
const sourcesBlock = data.match(/const sources = \[([\s\S]*?)\];\n\nconst photoLocations/);
assert("sources data block exists", Boolean(sourcesBlock), "site/data.js");
const sourceRecordCount = [...sourcesBlock[1].matchAll(/\n  \{/g)].length;
const sourceDescriptionCount = [...sourcesBlock[1].matchAll(/\n    description:/g)].length;
assert("every source has a visitor description", sourceDescriptionCount === sourceRecordCount, `${sourceDescriptionCount}/${sourceRecordCount}`);
assert("sources renderer prints descriptions", /source\.description/.test(app), "source.description");
assert(
  "static pages include guide framing",
  index.includes("General guide + proposed trip window") &&
    guide.includes("This is a general Bosque del Apache photography guide for any reader"),
  "index.html and complete-photographers-guide.html"
);
assert(
  "sources rows omit repeated checked-date column",
  !app.includes("${source.checked}"),
  "Sources keeps freshness at the page level"
);

assert(
  "index has canonical URL",
  /<link rel="canonical" href="https:\/\/crispierry\.com\/projects\/bosque-del-apache"\s*\/?>/.test(index)
);
assert("index has meta description", /<meta\s+name="description"/.test(index));
assert("index has Open Graph image", /property="og:image"/.test(index));
assert("index has Open Graph URL", /property="og:url" content="https:\/\/crispierry\.com\/projects\/bosque-del-apache"/.test(index));
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
