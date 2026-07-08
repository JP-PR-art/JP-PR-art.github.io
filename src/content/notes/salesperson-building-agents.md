---
title: What a salesperson learns building multi-agent systems
summary: The skills transfer both ways, discovery is prompting, and demos are evals your prospect runs on you.
date: 2026-07-08
---

I sell software for a living and started building agent systems on nights and weekends. Three
things surprised me.

First, discovery and prompting are the same skill. A good discovery call extracts constraints,
success criteria and hidden objections from a person. A good system prompt does the same for a
model. Vague briefs produce vague work in both cases, and the fix is identical: ask one sharp
question at a time.

Second, the hard part of multi-agent systems is not the agents, it is the handoffs. That is also
true of a sales-to-delivery handoff in any software company. The orchestrator I built got reliable
only when every handoff had a written contract: what goes in, what comes out, who decides.

Third, demos are evaluations. A prospect watching a demo is running a private eval suite: does
this thing handle my case, does it fail gracefully, do I trust the person driving. Building actual
eval harnesses for my pipelines made my demos better, because I stopped showing happy paths and
started showing how the system behaves when things go wrong. That is what buyers actually want
to see.
