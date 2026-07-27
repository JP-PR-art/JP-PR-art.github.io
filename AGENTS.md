# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- The homepage is `public/index.html`, a single hand-written HTML file (styles, markup, and demo JS inline). There is no `src/pages/index.astro`; the Astro build copies `public/` through to `dist/` unchanged. Astro only builds `/builds`, `/notes`, and RSS from `src/pages` + `src/content`.
- In the homepage's Selected work section, cases alternate layout via the `case` / `case rev` class: non-rev cases put the `spec` dl before the `narrative` div in the DOM, rev cases the reverse. Each case's interactive demo is wired by element id (`#d1`, `#d3`, ...) to a matching IIFE at the bottom of the file; ids do not need to match the visible `case-num`.
- `/builds` index and detail pages are generated from the `src/content/builds/*.md` collection, so adding or deleting a md file updates the listing automatically.
- CI gate: `npm run check:links` (builds, then runs linkinator over `dist/`). Merging to `main` publishes to GitHub Pages, so ship via PR.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
