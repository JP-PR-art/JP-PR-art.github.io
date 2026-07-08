---
title: An agentic sales ops system where the issue tracker is the CRM
summary: Cron-driven AI agents sourcing prospects, classifying replies and drafting outreach on top of Jira, run in production for weeks.
date: 2026-07-01
stack: ["Claude", "Jira API", "Cron agents", "MCP connectors"]
featured: true
---

## The problem

A one-person sales operation drowns in mechanical work: sourcing prospects, deduplicating them,
drafting outreach, triaging replies, keeping the pipeline board honest. CRMs help you record work;
they do not do the work.

## What I built

A sales ops system where Jira is the CRM and scheduled AI agents do the mechanical work: a daily
prospect sourcer, a CRM writer with a dedup registry, and an inbound reply classifier. Connected
through MCP connectors to Jira and Microsoft 365.

## How it works

Each agent is a scheduled job with a narrow contract and writes its results as structured Jira
cards with audit comments. A contacted-registry enforces deduplication rules across tiers.
Operating protocols live in markdown runbooks the agents read, so changing behavior is editing
a document, not redeploying code.

![Flow diagram: daily prospect sourcer feeds a contacted registry dedup check, new prospects go to the CRM writer which files a Jira card with an audit comment, duplicates are skipped, and inbound email replies via Microsoft 365 go through a reply classifier to the same Jira card](/images/builds/sales-ops-brain-flow.svg)
<span class="fig-caption">Sourcer and inbound replies both write through the dedup registry to the same Jira card</span>

## Measured results

- The daily sourcing agent ran 25 consecutive days without a missed run
- Intake pipeline produced roughly a hundred graded prospect cards with full audit trails
- An adversarial six-auditor review of the whole system produced 24 deduplicated findings, which
  became the improvement backlog

## What I'd do next

The honest lesson: agent-side automation outpaced human-side adoption. The intake thrived while
send-execution stalled, because no agent owned the final "send" decision. Next iteration gives
the human a single daily decision surface instead of a queue of drafts.
