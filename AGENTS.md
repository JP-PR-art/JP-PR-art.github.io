# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- The homepage is `public/index.html`, a single hand-written HTML file (styles, markup, and demo JS inline). There is no `src/pages/index.astro`; the Astro build copies `public/` through to `dist/` unchanged. Astro only builds `/builds`, `/notes`, and RSS from `src/pages` + `src/content`.
- In the homepage's Selected work section, cases alternate layout via the `case` / `case rev` class: non-rev cases put the `spec` dl before the `narrative` div in the DOM, rev cases the reverse. Each case's interactive demo is wired by element id (`#d1`, `#d3`, ...) to a matching IIFE at the bottom of the file; ids do not need to match the visible `case-num`.
- `/builds` index and detail pages are generated from the `src/content/builds/*.md` collection, so adding or deleting a md file updates the listing automatically.
- CI gate: `npm run check:links` (builds, then runs linkinator over `dist/`). Merging to `main` publishes to GitHub Pages, so ship via PR. Note the gate currently reports "scanned 0 links", so treat it as a build check, not link coverage.
- `public/index.html` is one long unlayered stylesheet, so **source order is the only cascade control**. Several base rules use the `font` shorthand (which resets `font-size`), so any media-query override of those properties must come *after* the base rule or it is silently dead. The `.site-header` narrow-width block sits after `.theme-toggle` for exactly this reason.
- `.section-head` is a two-column grid and its inner `div` wrapper is `display: contents`, so the eyebrow, `h2`, blurb and `.section-index` are all direct grid items. Adding markup inside that wrapper places it on the grid; do not give the wrapper its own box or the whole head collapses to one column.
- `.band` (the proof section) is dark in **both** themes, so it locally overrides `--accent`/`--accent-2` to a light blue. Anything placed in the band inherits that; do not reintroduce theme-following accents there.

## Verifying the homepage visually

- `chrome-devtools-axi resize` clamps to a ~500px minimum window. For real phone widths use `chrome-devtools-axi emulate --viewport "375x812x2"` and *omit* the `mobile` keyword, which snaps to a device preset (414px).
- Before measuring computed colours, remove the `theme-anim` class and disable transitions. The theme crossfade is a 0.45s `background-color` transition, so `getComputedStyle` during it returns blended mid-animation values and every contrast number comes out wrong.
- Sections use `.reveal` (opacity/blur until an IntersectionObserver adds `.in`), so add `.in` to all `.reveal` elements before screenshotting or content shows up blank.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
