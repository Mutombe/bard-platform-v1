---
name: fortune500-direction
description: Owner's design goal for Bard Santner site — Fortune-500/private-bank feel, and the standing orange-restraint direction
metadata:
  type: project
---

Bard Santner Microfinance Bank site must "feel" like a six-figure Fortune-500 / private-bank institution (reference set: J.P. Morgan, Goldman, Stripe, Visa, Amex). Owner explicitly prioritizes COLOR PSYCHOLOGY and CLEAN LINES.

Brand: navy #312F4D (Pantone 2768C) + orange #EE7D36 (Pantone 172C). Type: Fraunces variable serif (display) over Onest sans (body/UI). White family: milk #fff, cloud #fbfcfd, smoke #f4f6f9, mist #eceff5. Tokens live in src/index.css (@theme + @layer components).

**Why:** Owner wants "serious, trustworthy, expensive" — the wealth/institutional register, not consumer fintech.

**How to apply:**
- Navy + neutrals carry the composition; orange is RARE punctuation (target under ~8% of colored ink). Orange belongs on: primary CTA, logo/monogram, focus ring. NOT on bullets, card top-rules, every eyebrow, generic accent rules, or rows of icons.
- "Clean lines" = fewer lines, neutral and precise (subtraction, not decoration). Colored decorative rules read as template.
- The serif-display-over-sans-body pairing is a deliberate strength (old-money private-bank voice) — keep it.
- Known cruft in index.css as of 2026-07: contradictory onum+lnum figures on display tiers (bank should use lnum/tnum); base h1-h4 use Onest while .display-* use Fraunces (inconsistent); @font-face maps Gellix-Regular to weights 500/600/700 (faux-weight risk on fallback).
