/**
 * Template engine interface — swappable across implementations.
 *
 * The current implementation is LiquidJS (pure JS, no eval, runs identically
 * in Node and Cloudflare Workers). The interface is deliberately minimal so a
 * future Rust+WASM engine (e.g. liquid-rust compiled to WebAssembly) can
 * plug in by implementing the same shape.
 *
 * Filters are the extension mechanism: pure data transforms `(input, ...args)
 * → output`. Keeping them data-only — no engine state, no rendering side
 * effects — lets the same filter set be ported verbatim across language
 * runtimes. The website filter library in ./filters.ts is the conformance
 * surface a Rust port would mirror.
 */

export type FilterFn = (input: unknown, ...args: unknown[]) => unknown;

export interface TemplateEngine {
  /** Register a named template that can later be rendered by name. */
  registerTemplate(name: string, source: string): void;

  /**
   * Register a partial. Partials are rendered via the engine's include
   * directive (Liquid: `{%- include "name" -%}`). Names are normalized so
   * callers can pass paths or bare names interchangeably.
   */
  registerPartial(name: string, source: string): void;

  /** Register a custom filter usable as `{{ value | name }}` or with args. */
  registerFilter(name: string, fn: FilterFn): void;

  /** Render a registered template against a context. */
  render(name: string, context: Record<string, unknown>): Promise<string>;

  /** Render an inline template source string (for ad-hoc rendering). */
  renderString(source: string, context: Record<string, unknown>): Promise<string>;
}

/** True if a filter map shape matches what registerSiteFilters accepts. */
export type FilterMap = Record<string, FilterFn>;
