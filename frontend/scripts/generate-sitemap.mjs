// Build-time sitemap + robots.txt generator.
//
// Reads PRODUCTS, INSIGHTS, LEADERSHIP, GROUP_ENTITIES from /src/data and
// emits dist/sitemap.xml + dist/robots.txt. Runs as a postbuild step.
//
// Carries over the regex-based slug parser pattern used on bitstudio.co.zw
// so we don't have to evaluate React/JSX from a Node build script.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SRC = path.join(ROOT, "src");

const SITE = "https://bardsantnerbank.com";
const TODAY = new Date().toISOString().slice(0, 10);

// ─── Static routes ──────────────────────────────────────────────────
const STATIC_ROUTES = [
  // Top of site
  { path: "/",                priority: "1.0", changefreq: "weekly"  },

  // Institution + reach
  { path: "/about",           priority: "0.8", changefreq: "monthly" },
  { path: "/careers",         priority: "0.7", changefreq: "monthly" },
  { path: "/contact",         priority: "0.7", changefreq: "monthly" },

  // Trust + legal
  { path: "/security",        priority: "0.4", changefreq: "yearly"  },
  { path: "/legal",           priority: "0.3", changefreq: "yearly"  },
  { path: "/privacy",         priority: "0.4", changefreq: "yearly"  },
  { path: "/cookies",         priority: "0.3", changefreq: "yearly"  },
  { path: "/terms",           priority: "0.3", changefreq: "yearly"  },
  { path: "/regulatory",      priority: "0.4", changefreq: "yearly"  },
  { path: "/accessibility",   priority: "0.3", changefreq: "yearly"  },
  { path: "/complaints",      priority: "0.3", changefreq: "yearly"  },
];

async function extractSlugs(filePath) {
  const src = await fs.readFile(filePath, "utf8");
  const slugs = [];
  const re = /slug:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) slugs.push(m[1]);
  return slugs;
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlElement({ path: p, priority = "0.5", changefreq = "monthly" }) {
  return `  <url>
    <loc>${xmlEscape(SITE + p)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  await fs.mkdir(DIST, { recursive: true });

  const [solutionSlugs, segmentSlugs] = await Promise.all([
    extractSlugs(path.join(SRC, "data/solutions.js")),
    extractSlugs(path.join(SRC, "data/whoWeServe.js")),
  ]);

  // Capability detail routes, derived from the solutions data.
  const blockRoutes = [];
  try {
    const solMod = await import(pathToFileURL(path.join(SRC, "data/solutions.js")).href);
    for (const s of solMod.SOLUTIONS) {
      for (const b of s.blocks) {
        blockRoutes.push({ path: `/solutions/${s.slug}/${solMod.blockSlug(b.heading)}`, priority: "0.6", changefreq: "monthly" });
      }
    }
  } catch { /* non-critical */ }

  const dynamic = [
    ...solutionSlugs.map((s) => ({ path: `/solutions/${s}`,    priority: "0.8", changefreq: "monthly" })),
    ...segmentSlugs.map((s)  => ({ path: `/who-we-serve/${s}`, priority: "0.8", changefreq: "monthly" })),
    ...blockRoutes,
  ];

  const all = [...STATIC_ROUTES, ...dynamic];
  const seen = new Set();
  const unique = all.filter((r) => seen.has(r.path) ? false : (seen.add(r.path), true));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map(urlElement).join("\n")}
</urlset>
`;
  await fs.writeFile(path.join(DIST, "sitemap.xml"), xml, "utf8");

  const robots = `# Bard Santner Markets Inc robots.txt
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml

# Pre-empt aggressive social unfurlers
Crawl-delay: 0
`;
  await fs.writeFile(path.join(DIST, "robots.txt"), robots, "utf8");

  // Also drop into /public so vite dev and previewers see them.
  const PUB = path.join(ROOT, "public");
  await fs.mkdir(PUB, { recursive: true });
  await fs.writeFile(path.join(PUB, "sitemap.xml"), xml, "utf8");
  await fs.writeFile(path.join(PUB, "robots.txt"), robots, "utf8");

  console.log(
    `[sitemap] wrote ${unique.length} routes (${solutionSlugs.length} solutions, ${segmentSlugs.length} segments + ${STATIC_ROUTES.length} static)`
  );
}

main().catch((e) => { console.error("[sitemap] failed:", e); process.exit(1); });
