---
title: When CPQ meets LLMs, configurators are an AI use case hiding in plain sight
summary: Rule-driven product configuration and LLM agents solve the same problem from opposite ends.
date: 2026-07-08
---

I sell rule-driven CPQ software: systems that encode how a complex product may be configured,
priced and quoted. After two years of also building LLM systems, the overlap is striking.

A configurator is a constraint engine with a human driving it. An LLM agent is a human-intent
engine with constraints bolted on. Enterprise buyers need both: the deterministic core that
guarantees a valid quote, and a natural-language layer that gets a salesperson or dealer to that
quote in minutes instead of a training course.

The naive version, "let the LLM configure the product", fails for the same reason you would not
let it compute taxes: hallucinated validity is worse than no answer. The version that works keeps
the rule engine as the source of truth and uses the model for the fuzzy edges: interpreting messy
requirements into configurator inputs, explaining why a combination is invalid, drafting the quote
narrative, and triaging change requests against what was actually sold.

That last one is where I have spent my energy, because it is where deals quietly lose money. The
interesting products in this space will not be "AI CPQ". They will be boring, reliable rule
engines with a well-designed conversational skin and honest evaluation numbers behind it.
