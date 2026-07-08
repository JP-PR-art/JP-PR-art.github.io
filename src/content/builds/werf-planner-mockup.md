---
title: Replacing a crane-rental company's Excel weekplanning
summary: A clickable planner for a small Belgian crane-rental business, replacing an Excel plus printed-A4 workflow that drifted out of sync.
date: 2026-06-10
stack: ["Next.js", "Postgres", "Drizzle ORM", "SheetJS"]
cover: /images/builds/werf-planner-light.png
featured: false
status: In build
---

## The problem

A small crane-rental company ran its weekly crew and crane planning in Excel, then printed the
sheet on A4 for the crews. Pen marks on the paper (a swapped shift, a delayed site) never made it
back into the file, so the two copies of the plan quietly drifted apart during the week.

## What I built

A lightweight, single-planner web app that replaces the spreadsheet: a weekly crew grid, a
project calendar, and a crane-fleet view, with the same weekly PDF/PNG/Excel export and WhatsApp
distribution the company already uses, so the handoff to crews does not change.

## How it works

Next.js 15 (App Router) with Postgres on Neon and Drizzle ORM, SheetJS for Excel import and
export so existing spreadsheets stay a valid interchange format, and a single-password gate via
Vercel Edge Middleware rather than a full auth system, since exactly one person plans. Work is
sequenced in nine phases: auth, schema, porting the three views, Excel I/O, a conflict engine,
PDF/PNG export, backups, then beta. The image below is a redrawn, anonymized reference of the
crew-grid view, the same layout and color logic as the real planner with placeholder crews and
sites; the real data is Belgian client names and worker names and never leaves the private repo.

![Anonymized reference of the weekly crew planner grid: four crews across a five-day week, color-coded by site, with one scheduling conflict highlighted](/images/builds/werf-planner-light.png)
<span class="fig-caption">Light "vellum" theme. A conflict (two sites, one crew, one day) is flagged inline instead of found by hand later.</span>

![The same crew planner grid in the dark blueprint theme](/images/builds/werf-planner-dark.png)
<span class="fig-caption">Dark "blueprint" theme, same data</span>

## Measured results

- My estimate, not an audited figure: building and cross-checking a week's plan by hand in Excel
  plus catching double-bookings by eye likely took on the order of an hour; the planner surfaces
  a conflict the moment two sites land on the same crew and day
- Excel stays a first-class format on both sides (import and export), so the switch does not force
  the company to abandon the spreadsheet if the app is ever unavailable
- Nine phases sequenced and tracked on a public status page before a single line of production
  code, so scope was fixed before building started

## What I'd do next

Ship the conflict engine and PDF/PNG export (the remaining phases), then measure the real time
difference against a full week of hand-built plans instead of estimating it.
