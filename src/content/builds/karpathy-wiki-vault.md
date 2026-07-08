---
title: A personal wiki that only grows from finished work
summary: An Obsidian vault run on Andrej Karpathy's concept-organized wiki pattern, with a custom Claude Code command that harvests wiki articles from shipped projects, never drafts them directly.
date: 2026-07-07
stack: ["Obsidian", "Claude Code", "Markdown"]
featured: false
---

## The problem

Most personal note systems fail the same way: notes organized by time (daily logs, meeting notes)
get archived and never revisited, and notes organized by project die the moment the project ends.
I wanted a wiki that survives both, and I wanted a mechanical guarantee that it stays honest, no
article for an idea that never actually shipped.

## What I built

A four-stage pipeline in an Obsidian vault: `inbox` for zero-friction capture, `projects` for
active work with a `status` field, `output` for shipped artifacts, and `wiki` for evergreen,
concept-organized articles. The wiki is built on what my own notes cite as "Karpathy's note-taking
method, a personal Wikipedia, not a journal": one file per concept, atomic, append rather than
fork, linked densely, plain markdown only. A custom `/harvest` Claude Code command is the only
door into `wiki/`.

![Diagram: inbox feeds projects, projects with status done pass through a harvest gate, the harvest gate produces a wiki article and, where relevant, an output artifact](/images/builds/vault-pipeline-flow.svg)
<span class="fig-caption">Inbox to projects to a harvest gate to wiki; nothing reaches wiki/ except through that gate</span>

## How it works

`/harvest` takes a finished project note, refuses to run if its status is not `done`, reads the
project file plus anything it links to, then distills the transferable pattern rather than
summarizing the narrative: dates, ticket numbers and who-said-what are stripped unless they carry
a lesson. The article is cross-linked into the existing graph, and the source project note gets a
closing `Harvested to [[Article]]` line, so the loop between project and article is never silent.
Every stage folder keeps its own index; `Atlas.md` is the single root every note should reach
within two hops.

## Measured results

- As of this writing: 7 notes in `inbox`, 15 active `projects`, 2 shipped `output` artifacts, and
  17 distilled `wiki` articles, including a dedicated article on the method itself
- 15 active projects are tracked through the same pipeline right now, including this personal
  site and a separate life-ops dashboard app
- The hard constraint held since day one: plain markdown only, no Obsidian plugin dependency, no
  Dataview or Templater syntax, so the vault opens correctly in any markdown reader

## What I'd do next

Harvest more of the 15 active projects as they cross into `done`, and see whether the two-hop
rule from Atlas still holds once the wiki passes 30 or 40 articles.
