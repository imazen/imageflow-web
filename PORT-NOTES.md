# Jekyll → Interleaved port notes

This site was originally a Jekyll project with the HTML5 UP "Spectral" theme.
Migrated to [Interleaved](https://interleaved.app) on 2026-04-29.

## Layout

| Old (Jekyll)                | New (Interleaved)              |
|-----------------------------|--------------------------------|
| `_layouts/`                 | `templates/` (non-prefixed)    |
| `_includes/`                | `templates/_*.html` partials   |
| `_pages/*.md`               | `content/*.md`                 |
| `_posts/*.md`               | `content/posts/*.md`           |
| `_data/*.yml`               | `data/*.toml`                  |
| `_config.yml`               | `data/site.toml`               |
| `_sass/`, `css/`, `js/` etc | `static/{sass,css,js,...}`     |
| `index.md`                  | `content/index.md`             |
| `.pages.yml`                | new — Interleaved admin config |

Files are still browseable in the original `_*` directories for reference;
they no longer feed the build. Drop them once you're confident the port is good.

## Template engine

Jekyll uses Liquid → Interleaved uses Liquid (LiquidJS). Most syntax is
identical. Three changes:

  - Layout chaining (`---layout: default---` in `post.html` referencing
    `default.html`) doesn't exist in vanilla Liquid. Each layout now inlines
    the wrapper. The duplicated head/header/footer blocks are kept DRY via
    `{% include "head" %}`-style partials.
  - Jekyll's `{% include foo.html with bar="baz" %}` argument syntax isn't
    used here — partials inherit the parent context.
  - Frontmatter format: prefer TOML (`+++…+++`) for new pages and posts.
    YAML frontmatter (`---…---`) still works on existing files; auto-detected
    by delimiter.

## Filter changes

| Jekyll filter      | Interleaved equivalent           |
|--------------------|----------------------------------|
| `markdownify`      | `markdownify` (same name)        |
| `strip_html`       | `striphtml` (rename)             |
| `escape`           | LiquidJS built-in `escape`       |
| `escape_once`      | not provided — use `escape`      |
| `strip_newlines`   | not provided — use `replace`     |
| `truncatewords`    | `excerpt` (rename + word-aware)  |
| `truncate`         | `truncate` (same)                |
| `date: "%Y"`       | `formatDate`/`year` filters      |
| `prepend`/`append` | LiquidJS built-ins (unchanged)   |
| `sort`             | LiquidJS built-in OR our `sortBy` (sortBy supports field+direction) |
| `slice: 0,2`       | LiquidJS built-in `slice`        |

## Gaps — Jekyll features not yet supported by Interleaved

These were used by the original site and dropped or stubbed during port.
Each one is a candidate enhancement to Interleaved itself.

  1. ~~**`site.posts`, `site.pages`, `site.tags.X`, `site.categories.X` as
     globals available in every render.**~~ **CLOSED** — Interleaved now
     pre-scans content frontmatter and exposes Jekyll-style collections to
     every render. Use `{{ site.posts | sortBy: 'date', 'desc' }}`,
     `{{ site.categories.works }}`, `{{ site.tags.featured }}` directly in
     templates. The landing page's "recent posts" block now uses this. Header
     menu still uses `site.nav` (curated) instead of auto-deriving from
     `site.pages` — that's a stylistic choice; either works now.

  2. **`site.time`** — current build time. Used in the footer copyright. Replaced
     here with a hard-coded `site.this_year` field in `site.toml`. A
     `now` filter or a build-time-injected `site.now` would close this gap.

  3. **`paginator`** — Jekyll's pagination object. Not used heavily here, but
     the works/topics navigation (`_includes/fn_sortednav.html`,
     `_includes/fn_groupsort_reverse.html`) does prev/next within sorted
     subcollections. Those includes weren't ported; navigation between
     works/topics is currently flat.

  4. **Categories-as-collections** — Jekyll auto-creates `site.categories.works`,
     `site.categories.topics` etc. from frontmatter. Used to organise
     content/posts/* into nested URLs. The frontmatter still has
     `categories: [works]` etc. but the directory hierarchy isn't auto-derived.

  5. **`{% capture x %}{% include foo.md %}{% endcapture %}{{ x | markdownify }}`**
     pattern — works as-is in LiquidJS. The home/platforms partials are
     ported as `templates/_home.md` and `templates/_platforms.md` and
     included this way in `templates/index.html`.

  6. **`jekyll.environment`** — production/development gate around analytics.
     Replaced with a `site.production = true` toggle in `site.toml`. Set per
     deployment.

  7. **Excerpt auto-generation** — Jekyll auto-extracts the first paragraph
     of a post as `page.excerpt`. Frontmatter `excerpt:` works as before;
     auto-extraction would need a small renderer enhancement.

  8. **`compose.rb`, `site.bat`** — local Jekyll build/compose scripts. Not
     ported. Use `npx tsx scripts/build-site.ts --src . --out _site` from
     the Interleaved repo to build, or edit through the Interleaved admin
     UI.

  9. **Disqus comments** — `_includes/disqus.html` was Jekyll-only and
     environment-gated. Not ported. Add back as a partial if comments are
     desired.

 10. **Sitemap + RSS feed generation** — `feed.xml` and `sitemap.xml` were
     copied to `static/` verbatim from the original repo. They reference
     `site.posts` and won't auto-update. Static site generators that want
     these typically use a build-time plugin; Interleaved doesn't have one
     yet.

## What works today

  - Building via `npx tsx scripts/build-site.ts --src ~/work/imageflow-web-interleaved --out _site`
  - Editing through Interleaved admin (read `.pages.yml` for the schema)
  - All static pages (`benchmarks`, `licensing`, `credits`, etc.)
  - All blog posts under `content/posts/`
  - Header navigation (curated from `site.nav`)
  - Footer with social icons (driven by `site.social`)
  - Landing page with greeting + platforms + recent posts (last block
    uses Interleaved's collection rendering)
