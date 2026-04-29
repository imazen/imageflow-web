/**
 * Website filter library.
 *
 * Pure data transforms — no engine state, no I/O. Each filter takes an
 * input value plus optional positional args and returns a value. The
 * Liquid engine wires them up as `{{ value | filterName: arg1, arg2 }}`.
 *
 * This file is the conformance surface for any future template-engine
 * implementation (e.g. a Rust+WASM port). Filter behavior is documented
 * inline so the spec can be ported faithfully.
 */

import { marked } from "marked";
import type { FilterFn, FilterMap, TemplateEngine } from "./engine";

// ---------- comparison ----------

/** `{{ a | eq: b }}` — strict equality. */
export const eq: FilterFn = (a, b) => a === b;
/** `{{ a | ne: b }}` — strict inequality. */
export const ne: FilterFn = (a, b) => a !== b;
/** `{{ a | gt: b }}` — greater than. */
export const gt: FilterFn = (a, b) => (a as number) > (b as number);
/** `{{ a | gte: b }}` */
export const gte: FilterFn = (a, b) => (a as number) >= (b as number);
/** `{{ a | lt: b }}` */
export const lt: FilterFn = (a, b) => (a as number) < (b as number);
/** `{{ a | lte: b }}` */
export const lte: FilterFn = (a, b) => (a as number) <= (b as number);

// ---------- logic ----------

/** `{{ a | and: b }}` — JS && semantics. */
export const and: FilterFn = (a, b) => Boolean(a) && Boolean(b);
/** `{{ a | or: b }}` */
export const or: FilterFn = (a, b) => Boolean(a) || Boolean(b);
/** `{{ a | not }}` */
export const not: FilterFn = (a) => !a;

// ---------- string ----------

/** `{{ s | lowercase }}` — Unicode-aware lowercase. */
export const lowercase: FilterFn = (s) => String(s ?? "").toLowerCase();
/** `{{ s | uppercase }}` */
export const uppercase: FilterFn = (s) => String(s ?? "").toUpperCase();
/** `{{ s | capitalize }}` — first character upper, rest unchanged. */
export const capitalize: FilterFn = (s) => {
  const v = String(s ?? "");
  return v.length ? v[0]!.toUpperCase() + v.slice(1) : v;
};

/**
 * `{{ s | slugify }}` — URL-safe slug.
 * Lowercases, NFKD-normalizes to strip diacritics, replaces non-alphanumerics
 * with `-`, collapses runs, trims edges.
 */
export const slugify: FilterFn = (s) => {
  return String(s ?? "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/** `{{ s | truncate: 120 }}` — keep first N chars + ellipsis if cut. */
export const truncate: FilterFn = (s, len = 120, suffix = "…") => {
  const v = String(s ?? "");
  const n = Number(len);
  if (v.length <= n) return v;
  return v.slice(0, n) + (suffix as string);
};

/**
 * `{{ s | excerpt: 30 }}` — word-aware truncation. Stops at the last whole
 * word that fits within the byte budget.
 */
export const excerpt: FilterFn = (s, words = 30) => {
  const arr = String(s ?? "").split(/\s+/).filter(Boolean);
  const n = Number(words);
  if (arr.length <= n) return arr.join(" ");
  return arr.slice(0, n).join(" ") + "…";
};

/** `{{ s | replace: "from", "to" }}` — replaces all occurrences. */
export const replace: FilterFn = (s, from, to) => {
  return String(s ?? "").split(String(from ?? "")).join(String(to ?? ""));
};

/**
 * `{{ s | markdownify }}` — render markdown to HTML.
 * Block-level: paragraphs, lists, headings preserved.
 */
export const markdownify: FilterFn = (s) => {
  return marked.parse(String(s ?? ""));
};

/** `{{ s | markdownify_inline }}` — inline markdown (no block wrapping). */
export const markdownifyInline: FilterFn = (s) => {
  return marked.parseInline(String(s ?? ""));
};

/** `{{ html | striphtml }}` — remove all tags, return text content. */
export const striphtml: FilterFn = (s) => {
  return String(s ?? "").replace(/<[^>]*>/g, "");
};

// ---------- array ----------

/** `{{ arr | length }}` — also works on strings. */
export const length: FilterFn = (a) => {
  if (a == null) return 0;
  if (Array.isArray(a) || typeof a === "string") return a.length;
  if (typeof a === "object") return Object.keys(a).length;
  return 0;
};

/** `{{ arr | first }}` */
export const first: FilterFn = (a) => (Array.isArray(a) ? a[0] : undefined);
/** `{{ arr | last }}` */
export const last: FilterFn = (a) =>
  Array.isArray(a) ? a[a.length - 1] : undefined;
/** `{{ arr | reverse }}` — non-mutating. */
export const reverse: FilterFn = (a) =>
  Array.isArray(a) ? [...a].reverse() : a;
/** `{{ arr | limit: 5 }}` */
export const limit: FilterFn = (a, n) =>
  Array.isArray(a) ? a.slice(0, Number(n)) : a;
/** `{{ arr | offset: 5 }}` — drops the first N. */
export const offset: FilterFn = (a, n) =>
  Array.isArray(a) ? a.slice(Number(n)) : a;
/** `{{ arr | unique }}` — by strict equality. */
export const unique: FilterFn = (a) =>
  Array.isArray(a) ? Array.from(new Set(a)) : a;

/**
 * `{{ posts | where: "draft", false }}` — keep items where `item[key] === val`.
 * If only the key is given, keeps items where `item[key]` is truthy.
 */
export const where: FilterFn = (a, key, val) => {
  if (!Array.isArray(a)) return a;
  const k = String(key);
  if (val === undefined) return a.filter((item: any) => Boolean(item?.[k]));
  return a.filter((item: any) => item?.[k] === val);
};

/**
 * `{{ posts | sortBy: "date", "desc" }}` — stable sort by a field.
 * Default order is ascending. Pass "desc" to reverse.
 */
export const sortBy: FilterFn = (a, field, order) => {
  if (!Array.isArray(a)) return a;
  const k = String(field);
  const dir = order === "desc" ? -1 : 1;
  return [...a].sort((x: any, y: any) => {
    const xv = x?.[k];
    const yv = y?.[k];
    if (xv == null && yv == null) return 0;
    if (xv == null) return dir;
    if (yv == null) return -dir;
    if (xv < yv) return -dir;
    if (xv > yv) return dir;
    return 0;
  });
};

/**
 * `{{ posts | groupBy: "category" }}` — returns an array of
 * `{ key, items }` records, sorted by group key.
 */
export const groupBy: FilterFn = (a, field) => {
  if (!Array.isArray(a)) return [];
  const k = String(field);
  const map = new Map<unknown, unknown[]>();
  for (const item of a) {
    const key = (item as any)?.[k];
    const list = map.get(key);
    if (list) list.push(item);
    else map.set(key, [item]);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => {
      if (a == null && b == null) return 0;
      if (a == null) return 1;
      if (b == null) return -1;
      return a < b ? -1 : a > b ? 1 : 0;
    })
    .map(([key, items]) => ({ key, items }));
};

// ---------- date ----------

const DEFAULT_DATE_FMT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/** `{{ d | formatDate }}` — long English date by default. */
export const formatDate: FilterFn = (d) => {
  if (!d) return "";
  const dt = new Date(d as string | number);
  if (isNaN(dt.getTime())) return String(d);
  return DEFAULT_DATE_FMT.format(dt);
};

/** `{{ d | dateIso }}` — ISO 8601. */
export const dateIso: FilterFn = (d) => {
  if (!d) return "";
  const dt = new Date(d as string | number);
  if (isNaN(dt.getTime())) return "";
  return dt.toISOString();
};

/** `{{ d | year }}` */
export const year: FilterFn = (d) => {
  if (!d) return "";
  const dt = new Date(d as string | number);
  if (isNaN(dt.getTime())) return "";
  return dt.getUTCFullYear();
};

/**
 * `{{ d | relativeTime }}` — "3 days ago", "in 2 hours". Locale: en-US.
 * Uses Intl.RelativeTimeFormat (built into modern engines, no dep).
 */
export const relativeTime: FilterFn = (d) => {
  if (!d) return "";
  const dt = new Date(d as string | number);
  if (isNaN(dt.getTime())) return "";
  const diffSec = (dt.getTime() - Date.now()) / 1000;
  const fmt = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
  const abs = Math.abs(diffSec);
  if (abs < 60) return fmt.format(Math.round(diffSec), "second");
  if (abs < 3600) return fmt.format(Math.round(diffSec / 60), "minute");
  if (abs < 86400) return fmt.format(Math.round(diffSec / 3600), "hour");
  if (abs < 2592000) return fmt.format(Math.round(diffSec / 86400), "day");
  if (abs < 31536000) return fmt.format(Math.round(diffSec / 2592000), "month");
  return fmt.format(Math.round(diffSec / 31536000), "year");
};

// ---------- url ----------

/** `{{ "/about" | absoluteUrl: site.url }}` — prepend a base URL. */
export const absoluteUrl: FilterFn = (path, base) => {
  const p = String(path ?? "");
  const b = String(base ?? "").replace(/\/+$/, "");
  if (/^https?:\/\//i.test(p)) return p;
  if (!b) return p;
  return p.startsWith("/") ? b + p : b + "/" + p;
};

/** `{{ s | urlencode }}` — encodeURIComponent. */
export const urlencode: FilterFn = (s) => encodeURIComponent(String(s ?? ""));

/**
 * `{{ "/foo" | relUrl: page.url }}` — build a relative path from
 * `page.url` to a target. For sites served at non-root prefixes.
 */
export const relUrl: FilterFn = (target, _from) => {
  // Simplified: just strip a leading slash. A future Rust impl can
  // do full path-relativization if pages need cross-directory links.
  return String(target ?? "").replace(/^\//, "");
};

// ---------- math ----------

/** `{{ a | add: b }}` */
export const add: FilterFn = (a, b) => Number(a ?? 0) + Number(b ?? 0);
/** `{{ a | subtract: b }}` */
export const subtract: FilterFn = (a, b) => Number(a ?? 0) - Number(b ?? 0);
/** `{{ a | multiply: b }}` */
export const multiply: FilterFn = (a, b) => Number(a ?? 0) * Number(b ?? 0);
/** `{{ a | divide: b }}` — integer-safe; returns 0 on divide-by-zero. */
export const divide: FilterFn = (a, b) => {
  const d = Number(b ?? 0);
  return d === 0 ? 0 : Number(a ?? 0) / d;
};
/** `{{ a | mod: b }}` */
export const mod: FilterFn = (a, b) => {
  const d = Number(b ?? 0);
  return d === 0 ? 0 : Number(a ?? 0) % d;
};
/** `{{ a | min: b }}` */
export const min: FilterFn = (a, b) => Math.min(Number(a ?? 0), Number(b ?? 0));
/** `{{ a | max: b }}` */
export const max: FilterFn = (a, b) => Math.max(Number(a ?? 0), Number(b ?? 0));

// ---------- registry ----------

/** All filters in a single map, keyed by Liquid filter name. */
export const SITE_FILTERS: FilterMap = {
  eq, ne, gt, gte, lt, lte,
  and, or, not,
  lowercase, uppercase, capitalize,
  slugify, truncate, excerpt, replace,
  markdownify, markdownify_inline: markdownifyInline,
  striphtml,
  length, first, last, reverse,
  limit, offset, unique, where, sortBy, groupBy,
  formatDate, dateIso, year, relativeTime,
  absoluteUrl, urlencode, relUrl,
  add, subtract, multiply, divide, mod, min, max,
};

/** Register every site filter on an engine. */
export function registerSiteFilters(engine: TemplateEngine): void {
  for (const [name, fn] of Object.entries(SITE_FILTERS)) {
    engine.registerFilter(name, fn);
  }
}
