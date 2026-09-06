---
name: Vibe & Go
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#e0bfba'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#a78a85'
  outline-variant: '#58413d'
  surface-tint: '#ffb4a7'
  primary: '#ffb4a7'
  on-primary: '#680300'
  primary-container: '#ff6f59'
  on-primary-container: '#6e0400'
  inverse-primary: '#ac3323'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#da8b00'
  on-tertiary-container: '#4c2d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a7'
  on-primary-fixed: '#400100'
  on-primary-fixed-variant: '#8a1a0e'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1.25rem
  margin-desktop: 2.5rem
---

## Brand & Style

This design system channels the spirit of spontaneous boutique escapes: effortless, sensory, and quietly luxurious. It caters to discerning weekend wanderers seeking restorative breaks from urban density. The interface evokes anticipation, serenity, and atmospheric immersion—mirroring dusk settling over a coastal hideaway or misty morning light across an alpine cabin.

The aesthetic blends high-fidelity **Glassmorphism** with deep atmospheric environmental textures. The UI prioritizes rich photography treated with gentle gradients, overlaid with frosted, ethereal planes. Glass sheets float above rich moody backgrounds, capturing luminous reflections, soft refractions, and subtle border highlights. Rather than cluttering the screen with dense utilitarian controls, surfaces feel suspended, airy, and tactile, encouraging unhurried discovery.

## Colors

The palette balances cool, brooding nocturnal depth with warm luminous highlights that evoke coastal sunsets and golden hour lantern light:

- **Primary (`#FF6F59` - Sunset Coral):** Anchors decisive conversion paths, active states, key interactive indicators, and badge alerts. It carries high thermal energy against cool backgrounds.
- **Secondary (`#14B8A6` - Oceanic Teal):** Represents tranquility, nature tags, confirmed statuses, and discovery filters.
- **Tertiary (`#F59E0B` - Amber Glow):** Reserved for ratings, curated perks, limited-availability pings, and atmospheric illumination accents.
- **Neutral Base (`#0F172A` - Midnight Slate):** Deep atmospheric backdrop providing contrast for translucent glass planes.

### Transparency & Surface Tokens
- **Glass Base (Standard):** `rgba(255, 255, 255, 0.12)` overlaid on dark layers with backdrop blur.
- **Glass Elevated:** `rgba(255, 255, 255, 0.20)` for floating overlays, modals, and navigation bars.
- **Glass Subdued:** `rgba(255, 255, 255, 0.06)` for recessed inputs, track wells, and unselected states.
- **Glass Rim Light (Borders):** `rgba(255, 255, 255, 0.25)` top-to-bottom linear gradient tapering to `rgba(255, 255, 255, 0.08)`.

## Typography

The type scale is driven entirely by **Plus Jakarta Sans**, offering geometric clarity softened with open apertures and contemporary proportions. 

Headings carry subtle negative tracking to maintain crisp discipline over translucent glass materials. Editorial body text remains airy and generous in line height to maintain high legibility against varied background images and glass blurs. Uppercase styles are strictly preserved for concise micro-metadata (`label-sm`), such as distance badges, curated tags, and date timestamps.

## Layout & Spacing

A 12-column responsive fluid grid governs desktop and tablet screens, folding into a 4-column framework for mobile viewports. Spacing is anchored to an 8-point base scale with 4-point micro increments.

- **Mobile (<768px):** 4 columns, `margin-mobile` (20px), `gutter-mobile` (16px). Bottom-anchored glass sheets and floating pill toolbars avoid hand fatigue.
- **Tablet (768px - 1024px):** 8 columns, 24px margins, 20px gutters. Content forms balanced split views (e.g., interactive map alongside scrollable retreat cards).
- **Desktop (>1024px):** 12 columns, max-width 1360px centered, `margin-desktop` (40px), `gutter-desktop` (24px). Floating navigation deck, asymmetric hero modules, and multi-pane trip dashboards.

## Elevation & Depth

Elevation is rendered not through stark opaque layers, but through optical physics: refractive glass, dual-edge rim lighting, ambient atmospheric colored halos, and backdrop diffusion.

- **Level 0 (Atmosphere Canvas):** Base background with deep slate tones `#0F172A`, integrated with subtle radial gradient light pools (`#14B8A6` and `#FF6F59` at 5-10% opacity, 120px blur).
- **Level 1 (Surface Cards & Lists):** `backdrop-filter: blur(16px)`; fill `rgba(255, 255, 255, 0.10)`; 1px border gradient `linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 100%)`; shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.25)`.
- **Level 2 (Hover & Floating Elements):** `backdrop-filter: blur(24px)`; fill `rgba(255, 255, 255, 0.16)`; 1px border `rgba(255, 255, 255, 0.35)`; shadow: `0 16px 40px 0 rgba(0, 0, 0, 0.32), 0 0 24px 0 rgba(255, 111, 89, 0.15)`.
- **Level 3 (Modals, Drawers & Bottom Bars):** `backdrop-filter: blur(32px)`; fill `rgba(15, 23, 42, 0.65)` layered over `rgba(255, 255, 255, 0.12)`; 1px border `rgba(255, 255, 255, 0.25)`; shadow: `0 24px 64px 0 rgba(0, 0, 0, 0.45)`.

## Shapes

The design system uses generous, organic radii to soften structural geometry and reflect water-smoothed river stones and architecture.

- **Standard Containers & Cards (`rounded-lg` / 16px to `rounded-xl` / 24px):** Used for destination cards, gallery tiles, and modal dialogs.
- **Micro UI (`rounded-md` / 8px):** Checkboxes, status badges, and segmented toggles.
- **Pill Geometry (9999px):** Buttons, search query capsules, floating action triggers, and filter chips.

## Components

### Buttons
- **Primary Action:** Solid Sunset Coral (`#FF6F59`) with white typography, accompanied by an underlying warm glow (`box-shadow: 0 4px 20px rgba(255, 111, 89, 0.35)`). Fully pill-shaped (`rounded-full`), scaling smoothly on hover (`scale: 1.02`).
- **Glass / Secondary Button:** Glass fill `rgba(255, 255, 255, 0.12)`, 1px border `rgba(255, 255, 255, 0.25)`, backdrop blur of 16px. Text in crisp white. On hover, background transitions to `rgba(255, 255, 255, 0.22)`.
- **Ghost / Text Action:** Transparent background with oceanic teal or white text and subtle underline animation on hover.

### Chips & Tags
- Pill-shaped elements with frosted surface `rgba(255, 255, 255, 0.08)`, 1px border `rgba(255, 255, 255, 0.15)`, and 12px blur.
- When active/selected: Background shifts to Oceanic Teal (`#14B8A6`) or Coral (`#FF6F59`) with matching tinted glow (`box-shadow: 0 0 12px rgba(20, 184, 166, 0.4)`).

### Input Fields & Search Bars
- Glass capsule containers using `rgba(255, 255, 255, 0.07)` fill, 16px blur, and 1px border `rgba(255, 255, 255, 0.15)`.
- Placeholder text in muted slate (`rgba(255, 255, 255, 0.45)`).
- On focus: Border brightens to Coral `#FF6F59` with a subtle outer aura (`0 0 0 3px rgba(255, 111, 89, 0.2)`).

### Retreat & Experience Cards
- Encased in 20px–24px rounded frosted frames with an inset 1px specular highlight at the top edge (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35)`).
- Edge-to-edge imagery softened with a downward dark gradient overlay, letting overlaid typography and price indicators remain crisp and legible.

### Checkboxes & Radios
- Selection indicators are 20px rounded-md squares (or circles for radio) with `rgba(255, 255, 255, 0.1)` glass fills and 1.5px subtle border.
- Selected state fills with Oceanic Teal (`#14B8A6`) displaying a sharp white vector glyph.

### Floating Booking & Bottom Navigation Bar
- Floats detached above the bottom screen margin (`1.5rem` offset).
- Pill or rounded-2xl geometry with intense backdrop blur (32px), `rgba(15, 23, 42, 0.7)` tinted glass, and 1px translucent border highlight, hosting essential booking CTAs and itinerary bookmarks.