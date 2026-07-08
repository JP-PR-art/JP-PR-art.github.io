---
title: Multi-agent dev pipeline with human approval gates
summary: A planner, coder, tester and reviewer agent pipeline on the Claude Agent SDK, with restart-safe human-in-the-loop approval.
date: 2026-07-07
stack: ["Claude Agent SDK", "TypeScript", "Fastify"]
featured: true
---

## The problem

Agentic coding demos usually stop at "the model wrote some code". For real delivery work you need
a pipeline: plan first, implement, test, review, and a human decision point before anything ships.
I wanted to know, hands-on, what it takes to run that loop reliably.

## What I built

A TypeScript orchestrator on the Claude Agent SDK that chains four specialized agents (planner,
coder, tester, reviewer) behind a Fastify API, with a human-in-the-loop approval step between
plan and execution.

## How it works

Each agent runs with its own system prompt and toolset; the orchestrator owns state. The approval
step is restart-safe: pending approvals persist to disk, so killing and restarting the server does
not lose or double-run work. A demo script drives the whole loop end to end with a single command.

![Flow diagram: planner agent drafts a plan, a human approval gate either approves it forward to the coder agent or sends changes requested back to the planner, then coder to tester to reviewer to shipped](/images/builds/agent-orchestrator-flow.svg)
<span class="fig-caption">Planner → human approval gate → coder → tester → reviewer → shipped</span>

## Measured results

- 12 automated tests covering the pipeline and the restart-safe approval path
- End-to-end demo reproducible from a clean clone with one environment variable (an API key)
- Hardened after review: dependency pinning, model id fixes, git hygiene

## What I'd do next

Per-stage evaluation metrics (plan quality, test pass rate at first attempt) instead of a single
end-to-end pass/fail, and a cost budget per run.
