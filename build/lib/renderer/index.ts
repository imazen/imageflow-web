/**
 * Isomorphic site renderer — LiquidJS + marked.
 *
 * Renders markdown / JSON content through Liquid templates. The template
 * engine is pluggable via the TemplateEngine interface; the default impl
 * is LiquidJS (pure-JS, runs in Node and Cloudflare Workers identically).
 * A future Rust+WASM engine can drop in via the same interface.
 *
 * Frontmatter auto-detects format from delimiters: `+++` → TOML, `---` →
 * YAML, `{…}` → JSON.
 *
 * Usage:
 *   const renderer = new SiteRenderer();
 *   renderer.registerTemplate("base", baseHtml);
 *   renderer.registerPartial("header", headerHtml);
 *   renderer.registerData("site", siteData);
 *   const out = await renderer.renderMarkdown("posts/hello.md", source);
 */

import { marked } from "marked";
import { parse } from "../serialization";
import { LiquidEngine } from "./liquid-engine";
import { registerSiteFilters } from "./filters";
import type { TemplateEngine } from "./engine";

export type RenderedPage = {
  html: string;
  frontmatter: Record<string, unknown>;
  path: string;
  outputPath: string;
};

export type SiteData = Record<string, unknown>;

/**
 * A registered content item used to build derived collections
 * (site.posts, site.pages, site.categories, site.tags). Stored
 * before any rendering happens so collection globals are visible
 * in every template on the very first render.
 */
type ContentItem = {
  path: string;
  frontmatter: Record<string, unknown>;
  outputPath: string;
};

export class SiteRenderer {
  private engine: TemplateEngine;
  private templateNames = new Set<string>();
  private data: Map<string, unknown> = new Map();
  private content: ContentItem[] = [];
  /** Memoized derived collections, invalidated whenever content changes. */
  private collectionsCache: ReturnType<SiteRenderer["computeCollections"]> | null = null;

  /**
   * @param engine Optional engine override. Defaults to LiquidEngine. Tests
   *   and a future WASM engine plug in here.
   */
  constructor(engine?: TemplateEngine) {
    this.engine = engine ?? new LiquidEngine();
    registerSiteFilters(this.engine);
  }

  /** Register an HTML template by name. */
  registerTemplate(name: string, source: string): void {
    this.engine.registerTemplate(name, source);
    this.templateNames.add(name);
  }

  /** Register a partial (reusable fragment) included via `{%- include "name" -%}`. */
  registerPartial(name: string, source: string): void {
    this.engine.registerPartial(name, source);
  }

  /** Register global data (e.g. site, nav). Becomes available as `{{ name.field }}` in every template. */
  registerData(name: string, value: unknown): void {
    this.data.set(name, value);
  }

  /**
   * Register a content file's metadata so it appears in `site.posts`,
   * `site.pages`, `site.categories.<name>`, and `site.tags.<name>` during
   * render. Build scripts call this in a first pass for every content file
   * before rendering, so collections are visible to every template.
   *
   * Classification rules (Jekyll-compatible):
   *   - Path begins with `posts/` or `_posts/` → site.posts
   *   - Frontmatter `collection: posts` → site.posts (explicit)
   *   - Otherwise → site.pages
   *   - `categories: [...]` adds the entry to site.categories.<each>
   *   - `tags: [...]` adds the entry to site.tags.<each>
   */
  registerContent(filePath: string, frontmatter: Record<string, unknown>): void {
    const outputPath = filePath
      .replace(/\.(md|mdx|markdown|html?)$/i, ".html")
      .replace(/\.(json|toml)$/i, ".html");
    this.content.push({ path: filePath, frontmatter, outputPath });
    this.collectionsCache = null;
  }

  private computeCollections() {
    const posts: Record<string, unknown>[] = [];
    const pages: Record<string, unknown>[] = [];
    const categories: Record<string, Record<string, unknown>[]> = {};
    const tags: Record<string, Record<string, unknown>[]> = {};

    for (const item of this.content) {
      const url = "/" + item.outputPath;
      const entry = { ...item.frontmatter, url, path: item.path };

      const explicit = item.frontmatter.collection as string | undefined;
      const isPost =
        explicit === "posts" ||
        item.path.startsWith("posts/") ||
        item.path.startsWith("_posts/");

      if (isPost) posts.push(entry);
      else pages.push(entry);

      const cats = item.frontmatter.categories;
      if (Array.isArray(cats)) {
        for (const cat of cats) {
          const key = String(cat);
          (categories[key] ||= []).push(entry);
        }
      }
      const itemTags = item.frontmatter.tags;
      if (Array.isArray(itemTags)) {
        for (const t of itemTags) {
          const key = String(t);
          (tags[key] ||= []).push(entry);
        }
      }
    }

    return { posts, pages, categories, tags };
  }

  private getCollections() {
    return this.collectionsCache ??= this.computeCollections();
  }

  private getGlobalData(): Record<string, unknown> {
    const global: Record<string, unknown> = {};
    for (const [key, value] of this.data) global[key] = value;

    // Merge derived collections into the `site.*` namespace (Jekyll
    // convention). Templates can also access them via top-level `posts` /
    // `pages` for brevity. If user data already has a `site.posts` entry,
    // ours wins — frontmatter scanning is the source of truth.
    const { posts, pages, categories, tags } = this.getCollections();
    const userSite = (global.site as Record<string, unknown>) ?? {};
    global.site = { ...userSite, posts, pages, categories, tags };
    global.posts = posts;
    global.pages = pages;

    return global;
  }

  /**
   * Pick a layout name from frontmatter, falling back through a list of
   * defaults. Returns null when no registered template matches.
   */
  private resolveLayout(name: string | undefined, fallbacks: string[]): string | null {
    const candidates = name ? [name, ...fallbacks] : fallbacks;
    for (const c of candidates) {
      if (this.templateNames.has(c)) return c;
    }
    return null;
  }

  /**
   * Render a markdown content file.
   *
   * 1. Parses frontmatter (TOML/YAML/JSON auto-detected)
   * 2. Converts markdown body to HTML via marked
   * 3. Selects template (frontmatter.layout > "post" > "base" > raw body)
   * 4. Renders through the engine with frontmatter + global data
   */
  async renderMarkdown(filePath: string, content: string): Promise<RenderedPage> {
    const parsed = parse(content) as Record<string, unknown>;
    const frontmatter = { ...parsed };
    const body = (frontmatter.body as string) ?? "";
    delete frontmatter.body;

    // .html / .htm files have raw HTML bodies — skip the markdown pass so we
    // don't double-process. Everything else goes through marked.
    const isHtml = /\.html?$/i.test(filePath);
    const bodyHtml = isHtml ? body : (marked.parse(body) as string);

    const layout = this.resolveLayout(
      frontmatter.layout as string | undefined,
      ["post", "base"],
    );

    const context = {
      ...this.getGlobalData(),
      ...frontmatter,
      content: bodyHtml,
      body: bodyHtml,
      page: frontmatter,
    };

    const html = layout
      ? await this.engine.render(layout, context)
      : bodyHtml;

    const outputPath = filePath.replace(/\.(md|mdx|markdown)$/i, ".html");
    return { html, frontmatter, path: filePath, outputPath };
  }

  /**
   * Render a JSON or TOML data file as a page. The parsed object becomes
   * the template context.
   */
  async renderJson(filePath: string, content: string, templateName?: string): Promise<RenderedPage> {
    const data = parse(content, {
      format: filePath.endsWith(".toml") ? "toml" : "json",
    }) as Record<string, unknown>;

    const layout = this.resolveLayout(
      templateName ?? (data.layout as string | undefined),
      ["base", "index"],
    );

    const context = {
      ...this.getGlobalData(),
      ...data,
      page: data,
    };

    const html = layout
      ? await this.engine.render(layout, context)
      : JSON.stringify(data, null, 2);

    const outputPath = filePath.replace(/\.(json|toml)$/i, ".html");
    return { html, frontmatter: data, path: filePath, outputPath };
  }

  /**
   * Render a collection index page.
   * Passes all collection items as `posts` (or a custom name) to the template.
   */
  async renderCollectionIndex(
    templateName: string,
    items: RenderedPage[],
    collectionName: string = "posts",
  ): Promise<string> {
    const layout = this.resolveLayout(templateName, ["index", "base"]);
    if (!layout) return "";

    const context = {
      ...this.getGlobalData(),
      [collectionName]: items.map((item) => ({
        ...item.frontmatter,
        url: `/${item.outputPath}`,
        content: item.html,
      })),
    };

    return this.engine.render(layout, context);
  }
}
