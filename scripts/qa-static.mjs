import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const siteDir = join(root, "site");
const checks = [];

function assert(name, passed, detail = "") {
  checks.push({ name, passed, detail });
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
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

const app = read("site/app.js");
const index = read("site/index.html");
const guide = read("site/complete-photographers-guide.html");

const refs = [
  ...localAssetReferences("site/index.html"),
  ...localAssetReferences("site/app.js"),
  ...localAssetReferences("site/complete-photographers-guide.html"),
];
const missing = refs.filter((ref) => !existsSync(ref.fullPath));
assert("local asset references exist", missing.length === 0, missing.map((ref) => ref.assetPath).join(", "));

const inspirationFiles = readdirSync(join(siteDir, "assets/generated/inspiration-hd")).filter((name) =>
  /^inspiration-\d{2}-.*\.jpg$/.test(name)
);
const inspirationIds = [...app.matchAll(/id:\s*"inspiration-hd-[^"]+"/g)].length;
assert("inspiration has 30 local files", inspirationFiles.length === 30, String(inspirationFiles.length));
assert("inspiration has 30 app records", inspirationIds === 30, String(inspirationIds));

assert(
  "standalone guide has no active gallery-standalone references",
  !guide.includes("gallery-standalone"),
  "site/complete-photographers-guide.html"
);

assert(
  "app uses no contact sheets for media thumbnails",
  /const mediaVisualSequence = \[/.test(app) && !/function visualIdForMedia[\s\S]*contact-sheet/.test(app),
  "visualIdForMedia should use individual generated image ids"
);

assert("index has canonical URL", /<link rel="canonical" href="https:\/\/crispierry\.com\/projects\/bosque-del-apache"/.test(index));
assert("index has meta description", /<meta\s+name="description"/.test(index));
assert("index has Open Graph image", /property="og:image"/.test(index));
assert("index has JSON-LD WebPage", /\"@type\": \"WebPage\"/.test(index));

const failed = checks.filter((check) => !check.passed);
for (const check of checks) {
  console.log(`${check.passed ? "PASS" : "FAIL"} ${check.name}${check.detail ? `: ${check.detail}` : ""}`);
}

if (failed.length > 0) {
  process.exitCode = 1;
}
