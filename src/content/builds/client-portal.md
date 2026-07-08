---
title: Client delivery portal in production
summary: A Next.js portal where clients submit requests, an LLM classifies them, and admins sign off, deployed on Vercel with Postgres.
date: 2026-07-07
stack: ["Next.js", "Neon Postgres", "Vercel", "Claude API"]
featured: true
---

## The problem

Client requests arrive by email and meetings, get re-typed into trackers, and nobody can see
status. I wanted a portal that captures requests at the source, classifies them automatically,
and gives an admin a clean sign-off flow.

## What I built

A Next.js application on Vercel production with Neon Postgres: client request intake, LLM-based
request classification, an admin sign-off inbox, and scheduled status-sync jobs.

## How it works

Migrations run at build time (idempotent, unpooled connection for DDL), an admin account
bootstraps from an environment variable, and cron endpoints are protected by bearer tokens.
Classifier failures are logged and fall back to a needs-review state instead of guessing.

## Measured results

- 500+ automated tests passing at deploy
- Production security verification: dev routes return 404, cron endpoints reject unauthenticated
  calls, data endpoints require a session
- A stored-XSS vector found in review was closed before launch

## What I'd do next

Replace the daily status-sync (a hosting-plan constraint) with event-driven updates, and add
per-tenant usage analytics.
