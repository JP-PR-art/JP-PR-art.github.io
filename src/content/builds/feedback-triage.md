---
title: Bug-vs-change triage with pre-registered evaluations
summary: An LLM pipeline that classifies client feedback against contract scope, evaluated in blind waves before any live use.
date: 2026-07-07
stack: ["Claude", "Evals", "Jira"]
featured: false
---

## The problem

When a client reports "this is broken", someone has to decide: is it a bug covered by the
contract, or a change request to be quoted? Getting that call wrong costs money or goodwill.
Before letting an LLM near that decision, I needed proof it could make the call reliably.

## What I built

A triage pipeline that reads a feedback item plus the contractual spec and classifies it as bug,
change request, or needs-info, with the evaluation harness treated as first-class: pre-registered
test waves with held-out data, run blind before any production use.

## How it works

Wave 0 ran on historical items with known outcomes and failed the pre-set accuracy gate, a NO-GO
that was honored rather than argued away. Root-causing the failures produced concrete fixes:
file-discovery for spec manifests and a needs-info verdict class for genuinely ambiguous items.
The next gate is a pre-registered held-out wave; the pipeline does not touch live tickets until
it passes.

![Diagram: Wave 0 on historical items failed the pre-set accuracy gate, root cause analysis produced two fixes (spec-manifest file discovery and a needs-info verdict class), both feeding Wave 1, a held-out pre-registered wave, which faces a go/no-go gate before the pipeline is allowed to touch live tickets](/images/builds/feedback-triage-flow.svg)
<span class="fig-caption">Wave 0 failed its gate on purpose; Wave 1 is the pre-registered rematch before any live ticket is touched</span>

## Measured results

- Three evaluation waves run to date; the go/no-go gate is a written pre-registration, not vibes
- The needs-info class removed a whole category of confident wrong answers
- Every verdict ships with a citation to the spec passage it relied on

## What I'd do next

Pass the held-out wave, then run shadow mode on live tickets (classify but do not act) to measure
drift between historical and live data.
