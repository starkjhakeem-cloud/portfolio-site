import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const base = process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:3000";
const paths = [
  "/",
  "/robots.txt",
  "/sitemap.xml",
  "/icon.svg",
  "/favicon.ico",
  "/social-preview.png",
  "/projects/finance-dashboard.webp",
  "/projects/job-tracker.webp",
  "/Jhakeem_Moultrie_Software_Engineer_Resume.pdf",
];
const results = await Promise.all(
  paths.map(async (path) => {
    const r = await fetch(base + path);
    assert.equal(r.status, 200, path);
    return {
      path,
      type: r.headers.get("content-type"),
      bytes: Buffer.from(await r.arrayBuffer()),
    };
  }),
);
const html = results[0].bytes.toString();
assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
const structured = JSON.parse(
  html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
);
assert.equal(structured["@type"], "Person");
assert.equal(structured.name, "Jhakeem Moultrie");
assert.ok(
  html.includes(
    'rel="canonical" href="https://portfolio-site-mu-sage.vercel.app"',
  ),
);
assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
assert.ok(html.includes('property="og:image"'));
assert.ok(!/codex|openai|chatgpt/i.test(html));
assert.ok(
  !html.includes('href="https://github.com/starkjhakeem-cloud/link-notes-app"'),
);
for (const id of ["top", "projects", "about", "skills", "resume", "contact"])
  assert.ok(html.includes(`id="${id}" tabindex="-1"`));
const pdf = results.at(-1).bytes;
assert.ok(pdf.subarray(0, 5).toString() === "%PDF-");
const latest = await readFile(
  new URL(
    "../public/Jhakeem_Moultrie_Software_Engineer_Resume.pdf",
    import.meta.url,
  ),
);
const sha = (b) => createHash("sha256").update(b).digest("hex");
assert.equal(sha(pdf), sha(latest));
const links = [...html.matchAll(/<a[^>]+href="([^"]+\.pdf)"[^>]*>/g)].map(
  (m) => m[0],
);
assert.ok(links.length >= 2);
assert.ok(links.every((x) => x.includes("download=")));
const cssPaths = [
  ...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g),
].map((m) => m[1]);
const css = (
  await Promise.all(cssPaths.map((p) => fetch(base + p).then((r) => r.text())))
).join("");
assert.ok(css.includes("prefers-reduced-motion"));
assert.ok(css.includes(".mobile-navigation-dialog"));
assert.equal(
  (
    await fetch(
      base + "/_next/image?url=%2Fprojects%2Fjob-tracker.webp&w=384&q=75",
    )
  ).status,
  200,
);
const fonts = [
  ...new Set([...html.matchAll(/href="([^"]+\.woff2)"/g)].map((m) => m[1])),
];
assert.equal(fonts.length, 2);
for (const f of fonts) assert.equal((await fetch(base + f)).status, 200);
const bytes = results.map((x) => ({
  path: x.path,
  type: x.type,
  bytes: x.bytes.length,
}));
console.log(
  JSON.stringify(
    {
      checks:
        "routes, structured data, headings, metadata, exact resume, optimized image, local fonts, reduced-motion and modal styles passed",
      routes: bytes,
    },
    null,
    2,
  ),
);
