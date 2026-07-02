---
title: "A Fable 5 Tip: Let Opus Translate Your Biomedical Prompts"
date: 2026-06-27
summary: "When Fable 5 gets tripped up by biomedical wording, I have Opus rewrite the prompt into cleaner ML abstractions first. One AI helping another understand the task."
---

Fable 5 is exciting, but sometimes it feels a bit too sensitive when the task involves **biomedical datasets, class names, medical terms, biology words, or bio-med article content**. In a normal ML or manuscript-review workflow, that sensitivity can get in the way.

No worries — my workaround is simple.

## Opus as the translator

When I get routed to Opus, I ask Opus to help me write the prompt for Fable 5. I tell it three things:

1. I am using Fable 5.
2. The task is normal coding / ML / manuscript work.
3. The biomedical wording may trigger unnecessary safety filters.

Opus then translates the request into a cleaner, more abstract prompt for Fable 5 — mapping disease labels to target classes, biomarkers to feature groups, pathology labels to image patterns, patient cohorts to data groups — **while keeping the original goal exactly the same**.

![Opus acts as an AI-to-AI translation layer so Fable 5 can focus on the real engineering problem.](/essays/opus-ai-translator/infographic.webp)

## Tested in two projects

I tried this on two real workflows:

1. **Idea → codebase construction** — from idea and data to working code, ML pipeline, training, and a reproducible structure.
2. **Review → manuscript → submission** — literature synthesis, manuscript drafting and refinement, reviewer responses, and journal formatting.

So far, it works surprisingly well. **Opus becomes the translator, and Fable 5 becomes the executor.**

## The takeaway

Sometimes the best use of an AI model isn't solving the task directly — it's helping *another* AI model understand the task.

Enjoy exploring Fable 5 🚀
