#!/usr/bin/env npx tsx
/**
 * Static site generator for Interleaved.
 *
 * Reads content (markdown + JSON/TOML), templates (Liquid .html / .liquid),
 * and data (.json / .toml) from a source directory, renders everything,
 * and writes to _site/.
 *
 * Usage:
 *   npx tsx scripts/build-site.ts [--src ./my-site] [--out ./_site]
 *
 * Directory structure expected:
 *   templates/     — Liquid .html / .liquid files (base, post, index, ...)
 *   content/       — Markdown and JSON/TOML content files
 *   data/          — Global JSON/TOML data files (site.json, nav.toml, etc.)
 *   static/        — Copied as-is to output
 */

import fs from "fs";
import path from "path";
import { SiteRenderer } from "./lib/renderer";
import { parse as parseSerialization } from "./lib/serialization";

const args = process.argv.slice(2);
function getArg(name: string, fallback: string): string {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : fallback;
}

const SRC = path.resolve(getArg("src", "."));
const OUT = path.resolve(getArg("out", "./_site"));

function readDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      entries.push(...readDir(full));
    } else {
      entries.push(full);
    }
  }
  return entries;
}

function ensureDir(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDir(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      ensureDir(destPath);
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main() {
const start = Date.now();
const renderer = new SiteRenderer();

// Step 1: Load templates (.html, .liquid, and .md partials)
const templatesDir = path.join(SRC, "templates");
if (fs.existsSync(templatesDir)) {
  for (const file of readDir(templatesDir)) {
    if (!/\.(html|liquid|md|markdown)$/i.test(file)) continue;
    const name = path.relative(templatesDir, file)
      .replace(/\.(html|liquid|md|markdown)$/i, "")
      .replace(/\\/g, "/");
    const source = fs.readFileSync(file, "utf-8");

    // Files starting with _ are partials. .md/.markdown files are always
    // partials (it's unusual to use raw markdown as a top-level template).
    const isPartial =
      path.basename(file).startsWith("_") ||
      /\.(md|markdown)$/i.test(file);
    if (isPartial) {
      renderer.registerPartial(name.replace(/^_/, "").replace(/\/_/, "/"), source);
    } else {
      renderer.registerTemplate(name, source);
    }
  }
}

// Step 2: Load global data (.json or .toml)
const dataDir = path.join(SRC, "data");
if (fs.existsSync(dataDir)) {
  for (const file of readDir(dataDir)) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== ".json" && ext !== ".toml") continue;
    const name = path.basename(file).replace(/\.(json|toml)$/i, "");
    const raw = fs.readFileSync(file, "utf-8");
    const data = parseSerialization(raw, {
      format: ext === ".toml" ? "toml" : "json",
    });
    renderer.registerData(name, data);
  }
}

// Step 3a: Scan content for frontmatter so site.posts / site.pages /
// site.categories / site.tags collections are available to every render.
type Pending =
  | { kind: "md"; rel: string; content: string }
  | { kind: "data"; rel: string; content: string };
const pending: Pending[] = [];
const contentDir = path.join(SRC, "content");

if (fs.existsSync(contentDir)) {
  for (const file of readDir(contentDir)) {
    const rel = path.relative(contentDir, file).replace(/\\/g, "/");
    const ext = path.extname(file).toLowerCase();

    if (ext === ".md" || ext === ".mdx" || ext === ".markdown" || ext === ".html") {
      const content = fs.readFileSync(file, "utf-8");
      const fm = parseSerialization(content) as Record<string, unknown>;
      const frontmatter = { ...fm };
      delete frontmatter.body;
      renderer.registerContent(rel, frontmatter);
      pending.push({ kind: "md", rel, content });
    } else if (ext === ".json" || ext === ".toml") {
      const content = fs.readFileSync(file, "utf-8");
      const fm = parseSerialization(content, {
        format: ext === ".toml" ? "toml" : "json",
      }) as Record<string, unknown>;
      renderer.registerContent(rel, fm);
      pending.push({ kind: "data", rel, content });
    }
  }
}

// Step 3b: Render content with collections available.
const pages: Awaited<ReturnType<typeof renderer.renderMarkdown>>[] = [];
let fileCount = 0;
for (const item of pending) {
  const rendered = item.kind === "md"
    ? await renderer.renderMarkdown(item.rel, item.content)
    : await renderer.renderJson(item.rel, item.content);
  const outPath = path.join(OUT, rendered.outputPath);
  ensureDir(outPath);
  fs.writeFileSync(outPath, rendered.html);
  pages.push(rendered);
  fileCount++;
}

// Step 4: Render index page if there's no content/index.{md,html,json,toml}
// already producing one. When the user has their own index page, they
// own the layout — passing posts via global context is enough.
const userOwnedIndex = pages.some((p) => p.outputPath === "index.html");
if (!userOwnedIndex) {
  const indexHtml = await renderer.renderCollectionIndex("index", pages, "posts");
  if (indexHtml) {
    const outPath = path.join(OUT, "index.html");
    ensureDir(outPath);
    fs.writeFileSync(outPath, indexHtml);
    fileCount++;
  }
}

// Step 5: Copy static files
copyDir(path.join(SRC, "static"), OUT);

const elapsed = Date.now() - start;
console.log(`Built ${fileCount} pages in ${elapsed}ms → ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
