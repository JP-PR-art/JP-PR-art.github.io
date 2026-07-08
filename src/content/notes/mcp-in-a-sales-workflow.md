---
title: MCP connectors in a real sales workflow
summary: What changed when my agents could touch Jira and email through MCP, and what I keep out of their hands.
date: 2026-07-08
---

Most MCP write-ups show a toy connector. Here is what it looks like when agents touch the systems
a sales team actually runs on: the issue tracker and the mailbox.

The unlock is not that the model can read Jira. It is that structured writes become cheap. My
sourcing agent files prospect cards with consistent fields and an audit comment; a classifier
files inbound replies against the right card. Nobody re-types anything, and the board stays
honest because agents never forget to log.

The discipline that matters is deciding what agents may not do. Mine draft outreach but do not
send it; they classify replies but do not close cards. Every irreversible action stays with a
human, and every agent action leaves an audit trail. That split, reversible-automated versus
irreversible-human, has survived contact with reality better than any prompt engineering trick
I know.

If you are adding MCP to a workflow, start from the audit trail backwards: what record would you
want to read when something goes wrong at 9pm on a Friday? Make the agent write that record first,
and only then give it more tools.
