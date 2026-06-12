# Novallect — Design Spec & Brand Guidelines

A practical, format-agnostic guide for recreating the Novallect website's look and feel in **documents, presentations, PDFs, Canva, PowerPoint, Google Slides, or Word**. Every value below is taken directly from the live website's design system (`src/index.css`).

> **Brand essence:** Modern, trustworthy, enterprise-grade but approachable. Deep navy foundations, a signature blue→teal→cyan gradient, generous whitespace, rounded corners, and crisp geometric type. Clarity over clutter.
>
> **Tagline:** Solutions. Services. Delivered.

Logos are in `images/logo/` — use the **colour** version on light/white backgrounds and the **white** version on navy/dark backgrounds.

---

## 1. Colour Palette

The palette is a single ramp pulled from the logo: **navy → blue → teal → cyan.**

### Brand ramp (core identity)

| Token | Hex | Use |
|---|---|---|
| Navy 950 | `#061226` | Deepest backgrounds, hero base |
| Navy 900 | `#0a1830` | Dark sections, footer |
| Navy 800 | `#0e2142` | Dark surface panels |
| Navy 700 | `#143058` | Dark cards / borders on dark |
| Blue 700 | `#16458a` | Gradient start, deep accents |
| **Blue 600** | **`#1b4e9b`** | **Primary brand blue (from logo)** |
| Blue 500 | `#2563b0` | Lighter blue accent |
| **Teal 500** | **`#1ba5c4`** | **Logo teal — eyebrows, icons, links** |
| Teal 400 | `#34bcd6` | Hover / soft gradient |
| **Cyan 400** | **`#4fd0e0`** | **Logo light cyan — glow, highlights** |
| Cyan 300 | `#6fe3f0` | Brightest highlight |

### Light surfaces

| Token | Hex | Use |
|---|---|---|
| White | `#ffffff` | Primary background, cards |
| Paper | `#f5f8fc` | Alternating section background |
| Paper 2 | `#eef3f9` | Slightly deeper tint |
| Line | `#e2e9f1` | Borders, dividers, hairlines |

### Text colours

| Token | Hex | Use |
|---|---|---|
| Ink 900 | `#0b1b30` | Headings (near-black navy) |
| Ink 700 | `#2c3e54` | Body text (default) |
| Ink 500 | `#5b6b7e` | Secondary text, leads, captions |
| Ink 300 | `#93a2b3` | Muted / disabled |
| On-dark | `#eaf2fb` | Body text on dark backgrounds |
| On-dark dim | `#9db4cf` | Secondary text on dark backgrounds |

### Theme color (browser / accent)
`#0b1b30` (deep navy)

---

## 2. Gradients

The gradient is the single most recognisable brand element. Use it sparingly for emphasis — primary buttons, one or two key headline words, accent shapes. **Never** for body text or large fills.

| Gradient | Definition | Use |
|---|---|---|
| **Brand** | `linear-gradient(120deg, #1b4e9b 0%, #1ba5c4 55%, #4fd0e0 100%)` | Primary buttons, accent bars, key UI |
| **Brand soft** | `linear-gradient(120deg, #2563b0 0%, #34bcd6 100%)` | Subtler accent fills |
| **Text (on dark)** | `linear-gradient(100deg, #4fd0e0 0%, #6fe3f0 40%, #ffffff 100%)` | Gradient text on dark backgrounds (cyan→white) |

**Gradient-text technique:** On the website, selected words in headings use the Brand gradient as clipped text colour (e.g. "Stronger **Decisions**", "One trusted **partner**"). In a deck or doc, approximate by colouring the emphasis word in **Teal 500 `#1ba5c4`** (solid) if true gradient text isn't available.

**3-stop gradient angle:** 120° (roughly left→right, slightly downward). For slide accent bars, run it horizontally left-to-right.

---

## 3. Typography

Two Google Fonts. Both are free and embeddable in Slides/Docs/Canva.

| Role | Font | Weights | Notes |
|---|---|---|---|
| **Display / Headings** | **Space Grotesk** | 400, 500, 600, 700 | Geometric, technical feel. All H1–H4, eyebrows, buttons, stats. |
| **Body** | **Inter** | 400, 500, 600, 700 | Highly legible. All paragraphs, lists, captions, form text. |

**System fallbacks:** `system-ui, sans-serif`. If Space Grotesk is unavailable, substitute a geometric sans (e.g. *Poppins*, *Sora*); for Inter, substitute *Helvetica Neue* / *Arial*.

### Heading treatment
- **Font:** Space Grotesk
- **Colour:** Ink 900 `#0b1b30`
- **Line-height:** 1.08 (tight)
- **Letter-spacing:** -0.02em (slightly condensed)
- **Weight:** 700 for hero/section titles

### Type scale (web → suggested print/slide equivalents)

| Element | Web size | Weight | Slide ≈ (pt) | Doc ≈ (pt) |
|---|---|---|---|---|
| Hero title (H1) | ~clamp 44–60px | 700 | 40–54 pt | — |
| Section title (H2) | clamp 30–46px | 700 | 28–40 pt | 22–26 pt |
| Card title (H3) | 19px | 600 | 18–20 pt | 14–15 pt |
| Sub-heading (H4) | ~16px | 600 | 16 pt | 13 pt |
| **Eyebrow / kicker** | 13px | 600 | 12 pt | 10–11 pt |
| Lead paragraph | 18px | 400 | 18 pt | 13–14 pt |
| Body | 15–16px | 400 | 14–16 pt | 11 pt |
| Button label | 15.5px | 600 | 14 pt | — |

### Eyebrow / kicker style (signature element)
Small label above most section titles. Recreate exactly:
- Font: Space Grotesk, 13px, weight 600
- **ALL CAPS**, letter-spacing **0.14em** (wide tracking)
- Colour: **Teal 500 `#1ba5c4`**
- Often paired with a small icon to its left
- Example: `★ WHAT WE DO`, `WHY NOVALLECT`, `OUR SERVICES`

### Headline pattern
Two-part headlines where the **second phrase is the gradient/teal accent**:
- "Smarter Systems. **Stronger Decisions.**"
- "Four pillars. **One trusted partner.**"
- "Operators first. **Advisors always.**"
- "A simple path from idea to **impact.**"

---

## 4. Spacing System

Generous, consistent rhythm. The web uses 24px gutters and ~88px section padding.

| Token | Value | Use |
|---|---|---|
| Container max-width | 1200px | Content never spans full ultra-wide |
| Container gutter | 24px | Side padding |
| Section padding (desktop) | 88px top & bottom | Vertical breathing room |
| Section padding (mobile) | 60px | Tighter on small screens |
| Card padding | ~28–30px | Inside cards |
| Common gaps | 8 / 16 / 18 / 24 / 30px | Multiples-of-8 rhythm |

**Rule of thumb for decks/docs:** keep wide margins, let content breathe. Don't crowd edges. Group related items with 8/16/24 spacing.

---

## 5. Shape, Radius & Borders

Rounded, soft, modern. Nothing sharp.

| Token | Value | Use |
|---|---|---|
| Radius sm | 10px | Small chips, inputs |
| Radius (default) | 16px | Cards |
| Radius lg | 24px | Large panels, glass cards |
| Radius xl | 32px | Hero panels, CTA blocks |
| **Pill (buttons)** | 999px | All buttons are fully rounded pills |
| Border / line | 1px solid `#e2e9f1` | Card & divider hairlines |

**Icon tiles:** small square with rounded corners (~14px radius, 50×50px), teal icon on a 10%-opacity teal background with a 20%-opacity teal border. Used throughout for feature/service icons.

---

## 6. Shadows & Effects

Soft, navy-tinted shadows (never pure black). Subtle depth, not heavy.

| Token | Value | Use |
|---|---|---|
| Shadow sm | `0 4px 14px rgba(11,27,48,0.06)` | Resting cards |
| Shadow md | `0 14px 40px rgba(11,27,48,0.10)` | Hover lift |
| Shadow lg | `0 30px 70px rgba(11,27,48,0.16)` | Floating panels |
| Shadow dark | `0 30px 80px rgba(2,8,20,0.55)` | On dark sections |
| Teal glow | `0 0 60px rgba(79,208,224,0.35)` | Accent glow around CTAs / highlights |

**Glassmorphism (for dark-section cards / overlays):**
- Background: `rgba(255,255,255,0.06)`
- Border: `1px solid rgba(159,180,207,0.18)`
- Backdrop blur: 14px
- Radius: 24px

---

## 7. Components & Patterns

### Buttons

| Type | Background | Text | Shape | Use |
|---|---|---|---|---|
| **Primary** | Brand gradient `#1b4e9b → #1ba5c4 → #4fd0e0` | White | Pill (999px), padding 14×26px | Main CTAs ("Contact Us") |
| **Ghost** | Transparent + blur, 1px translucent border | On-dark `#eaf2fb` | Pill | Secondary action on dark (hover → cyan border + glow) |
| **Light** | Ink 900 `#0b1b30` | White | Pill | Solid dark button on light bg |
| **Outline** | Transparent, 1px `#e2e9f1` border | Ink 900 | Pill | Tertiary (hover → teal border + text) |

- Button font: Space Grotesk 600, ~15.5px
- Usually paired with a small arrow icon (→ or ↗) on the right
- Hover: lift up 2px + brighten/glow

### Cards (the core building block)
- White background, 1px `#e2e9f1` border, 16px radius, ~28–30px padding
- Icon tile at top (teal on teal-tint), then title (19px/600), then body (Ink 500)
- Hover: lift 6px, shadow-md, border shifts to translucent teal `rgba(27,165,196,0.35)`
- Lay out in responsive grids (2-up, 3-up, or 4-up)

### Stats band
Big gradient/navy numbers (Space Grotesk 700) with small Ink-500 labels beneath. Example set: **30+** Years combined experience · **10+** Projects delivered · **15+** Businesses supported · **8+** Industries served.

### Section header pattern (reuse on every slide/section)
1. **Eyebrow** (teal, all-caps, tracked) + small icon
2. **Section title** (two-part, second phrase accented)
3. **Lead paragraph** (Ink 500, max ~620px wide, 18px)

### Process / steps
Numbered steps `01 02 03 04` (Discover · Design · Deliver · Support), each with an icon, connected by a horizontal line. Numbers in light/ghosted Space Grotesk.

---

## 8. Iconography

- **Style:** Thin-stroke, geometric line icons (single colour, ~1.5–2px stroke). Outline, not filled.
- **Colour:** Teal 500 `#1ba5c4` on light; cyan/white on dark.
- **Container:** Often inside a rounded-square teal-tint tile (see §5).
- Common icons used: spark/star, rocket, handshake, users, shield, chart, cloud, ERP grid, check, arrow, arrow-up-right, phone, mail, pin, clock.
- For decks, use any consistent line-icon set (e.g. Lucide, Feather, Phosphor) in teal.

---

## 9. Motion (for animated/interactive contexts)

If recreating in an animated medium (web, video, animated slides):
- **Signature easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — a smooth ease-out with a gentle settle.
- **Reveal-on-scroll:** elements fade in + rise 24px over ~0.7s, staggered ~0.08–0.12s between siblings.
- **Hover:** 2–6px lift, 0.25–0.35s.
- **Ambient:** slow floating blobs, rotating orbits, pulsing glows in hero/CTA backgrounds.
- Always respect *reduced-motion* — provide a static fallback.

---

## 10. Layout Backgrounds & Section Rhythm

- **Default sections:** white `#ffffff`.
- **Alternating sections:** Paper `#f5f8fc` tint to separate bands.
- **Hero & CTA panels:** deep navy (`#0a1830`–`#061226`) with animated gradient blobs, a faint grid overlay, and teal glow. White text, gradient accents.
- **Footer:** navy `#0a1830`, white logo, on-dark text.
- Alternate light → tint → light to create rhythm down a long page or deck.

---

## 11. Quick "Do / Don't"

**Do**
- Use white space generously; let content breathe.
- Reserve the gradient for accents — buttons, one headline word, a thin bar.
- Pair every section title with a teal all-caps eyebrow.
- Keep corners rounded (16–32px; pills for buttons).
- Use navy-tinted soft shadows, never harsh black.
- Keep headings tight (Space Grotesk, -0.02em tracking, 1.08 line-height).

**Don't**
- Don't run the gradient behind body text or across large fills.
- Don't use pure black (`#000`) — use Ink 900 `#0b1b30`.
- Don't mix in unrelated accent colours; the palette is blue→teal→cyan only.
- Don't use sharp corners or heavy drop shadows.
- Don't crowd elements — maintain the 8/16/24 spacing rhythm.

---

## 12. Copy-Paste Cheat Sheet

```
PRIMARY BLUE   #1b4e9b
TEAL           #1ba5c4
CYAN           #4fd0e0
NAVY (dark bg) #0a1830
INK (headings) #0b1b30
BODY TEXT      #2c3e54
MUTED TEXT     #5b6b7e
PAPER (tint)   #f5f8fc
BORDER         #e2e9f1

GRADIENT       120deg  #1b4e9b → #1ba5c4 → #4fd0e0

HEADING FONT   Space Grotesk (700/600)
BODY FONT      Inter (400/500/600)

EYEBROW        Space Grotesk 600, ALL CAPS, +0.14em tracking, teal #1ba5c4
RADIUS         cards 16px · panels 24–32px · buttons 999px (pill)
SHADOW         0 14px 40px rgba(11,27,48,0.10)   (soft navy)

TAGLINE        Solutions. Services. Delivered.
```
