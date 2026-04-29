/**
 * LiquidJS implementation of TemplateEngine.
 *
 * Pure-JS, no eval/Function — works in Cloudflare Workers and Node identically.
 * Templates and partials are stored as source strings and parsed on first use;
 * results are cached by name internally by LiquidJS.
 */

import { Liquid, type Template } from "liquidjs";
import type { FilterFn, TemplateEngine } from "./engine";

export class LiquidEngine implements TemplateEngine {
  private liquid: Liquid;
  private templates = new Map<string, Template[]>();
  private partials = new Map<string, string>();

  constructor() {
    this.liquid = new Liquid({
      cache: true,
      // Resolve `{% include "name" %}` from our partials map. LiquidJS's
      // built-in resolver expects a filesystem; we override it to look up
      // by name in the in-memory partial map.
      fs: {
        readFileSync: (p: string) => {
          const v = this.partials.get(this.normalizePartialKey(p));
          if (v == null) throw new Error(`Partial not found: ${p}`);
          return v;
        },
        readFile: async (p: string) => {
          const v = this.partials.get(this.normalizePartialKey(p));
          if (v == null) throw new Error(`Partial not found: ${p}`);
          return v;
        },
        existsSync: (p: string) => this.partials.has(this.normalizePartialKey(p)),
        exists: async (p: string) => this.partials.has(this.normalizePartialKey(p)),
        contains: async () => true,
        resolve: (_root: string, file: string) => file,
        fallback: () => undefined,
        sep: "/",
        dirname: (p: string) => p.split("/").slice(0, -1).join("/"),
      },
    });
  }

  private normalizePartialKey(name: string): string {
    // Strip extension and leading slashes so callers can reference partials
    // by bare name regardless of how they were originally named on disk.
    return name
      .replace(/\.(liquid|html|hbs|md|markdown)$/i, "")
      .replace(/^\/+/, "");
  }

  registerTemplate(name: string, source: string): void {
    this.templates.set(name, this.liquid.parse(source));
  }

  registerPartial(name: string, source: string): void {
    this.partials.set(this.normalizePartialKey(name), source);
  }

  registerFilter(name: string, fn: FilterFn): void {
    this.liquid.registerFilter(name, fn as (input: unknown, ...args: unknown[]) => unknown);
  }

  async render(name: string, context: Record<string, unknown>): Promise<string> {
    const tmpl = this.templates.get(name);
    if (!tmpl) throw new Error(`Template not registered: ${name}`);
    return this.liquid.render(tmpl, context);
  }

  async renderString(source: string, context: Record<string, unknown>): Promise<string> {
    return this.liquid.parseAndRender(source, context);
  }
}
