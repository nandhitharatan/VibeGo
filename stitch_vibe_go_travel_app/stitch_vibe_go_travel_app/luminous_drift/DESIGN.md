---
name: Luminous Drift
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#59413d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#8d706b'
  outline-variant: '#e1bfb9'
  surface-tint: '#af301d'
  primary: '#ab2d1b'
  on-primary: '#ffffff'
  primary-container: '#cd4630'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a6'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a6'
  on-primary-fixed: '#3f0300'
  on-primary-fixed-variant: '#8d1607'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
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
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
---

## Brand & Style

This design system establishes an airy, luminous, and refined aesthetic tailored for modern travelers seeking curated, low-friction experiences. The interface evokes feelings of warm sunlight, calm coastal horizons, and effortless wanderlust. It moves away from overly dense utility-driven booking engines in favor of an editorial, boutique hospitality feel that breathes room into content and photography.

The visual style blends refined contemporary minimalism with sunlit frosted glassmorphism specifically calibrated for light mode. Translucent milky surfaces (`rgba(255, 255, 255, 0.65 - 0.85)`) gently filter ambient background textures, supported by hairline white or slate boundaries. The tone is sophisticated yet warm, prioritizing crisp typographic hierarchy, pristine atmospheric depth, and purposeful restraint over loud novelty.

## Colors

The palette is engineered around high-clarity sun-drenched environments:

- **Primary Accent (`#E0533C`)**: A terracotta-infused warm coral that draws immediate, vibrant focus to core calls-to-action, active trip states, and badges without visual fatigue.
- **Secondary Accent (`#0D9488`)**: A deep oceanic teal used for travel status indicators, discovery filters, wellness itineraries, and secondary visual landmarks.
- **Tertiary Accent (`#F59E0B`)**: An amber sun ray used sparingly for review stars, departure alerts, and curated insider tips.
- **Backgrounds**: Root surfaces rely on clean, airy slates—canvas base `#F8FAFC`, stepping to soft section tint `#F1F5F9`.
- **Surfaces & Glass**: Translucent milky overlays spanning `rgba(255, 255, 255, 0.45)` for decorative layers, `rgba(255, 255, 255, 0.72)` for standard card surfaces, and `rgba(255, 255, 255, 0.90)` for floating navigation panels and popovers.
- **Text & Borders**: High-contrast slate typography guarantees readability across blur layers—headline primary `#0F172A`, body secondary `#334155`, and supporting tertiary `#64748B`. Structural glass borders utilize `rgba(255, 255, 255, 0.8)` or subtle slate hairline `rgba(226, 232, 240, 0.7)`.

## Typography

Plus Jakarta Sans powers the entire typographic scale, giving editorial personality while maintaining structural geometric proportions and clear open counters.

Headings adopt tighter tracking and bold or heavy weights to capture the distinct punch of modern luxury travel guides. Body text stays comfortable and readable with relaxed line heights that prevent optical crowding when placed atop translucent frosted cards. Microcopy, airport IATA codes, pricing descriptors, and pill badges use medium to bold label styles with subtle positive letter spacing to keep legibility pristine over background imagery.

## Layout & Spacing

The layout is built on an 8pt base grid with a 4pt subgrid for micro-alignments (chips, badge icons, flight legs). 

- **Desktop (1024px and up)**: 12-column fluid grid, max container width of 1280px, 24px gutters, and 48px outer margins. Content utilizes asymmetric, masonry-inspired split spans (e.g., 7-column trip photo story alongside a 5-column sticky booking module).
- **Tablet (768px – 1023px)**: 8-column fluid grid, 20px gutters, and 32px margins. Modules reflow naturally into stacked pairs.
- **Mobile (under 768px)**: 4-column fluid layout with 16px gutters and 20px outer margin, extending cards edge-to-edge horizontally with inner container safe paddings (`space-md`). Horizontal carousel tracks peek 24px into the next slide to encourage swiping.

## Elevation & Depth

Visual hierarchy uses frosted optical depth rather than heavy physical drops:

- **Base Ground**: Clean solid `#F8FAFC` accented with soft ambient radial gradients (`#E0533C` at 6% opacity, `#0D9488` at 6% opacity) that float behind card arrays.
- **Glass Tier 1 (Standard Cards & Tiles)**: `backdrop-filter: blur(16px) saturate(180%)`, background `rgba(255, 255, 255, 0.72)`, bounded by a 1px border `rgba(255, 255, 255, 0.85)` and soft diffused shadow `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05)`.
- **Glass Tier 2 (Floating Modals, Drawers & Search Bars)**: `backdrop-filter: blur(24px) saturate(190%)`, background `rgba(255, 255, 255, 0.88)`, rimmed with 1px border `rgba(255, 255, 255, 0.95)`, elevated via `box-shadow: 0 12px 36px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)`.
- **Overlays**: Dark dismissible underlays use `rgba(15, 23, 42, 0.25)` paired with `backdrop-filter: blur(8px)`.
- **No Neon Glows**: Never use saturated or tinted outer box-shadow glows. Shadows are strictly neutral, diffused slate tones.

## Shapes

The design system employs an inviting, contemporary rounded geometry (`roundedness: 2` base of 0.5rem / 8px):

- **Inputs, Buttons, and Chips**: Medium radii (8px – 12px) for structured elements, with interactive pill shapes (`9999px`) reserved for categories, tag filters, and booking date indicators.
- **Cards & Sheets**: Large radii (16px – 24px / `rounded-2xl`) creating smooth, welcoming contours that soften dense trip itineraries and hotel image grids.
- **Bottom Navigation & Floating Island Bars**: Fully pill-shaped (`9999px`) with inner padding ensuring internal elements maintain proportional concentric curves.

## Components

### Buttons
- **Primary**: Solid warm coral (`#E0533C`), white bold label (`#FFFFFF`), no outer glow. Hover brings a subtle brightness lift and a standard crisp shadow: `0 4px 12px rgba(15, 23, 42, 0.12)`. Active state triggers `scale(0.98)`.
- **Secondary (Glass)**: Milky frosted background `rgba(255, 255, 255, 0.8)`, border 1px `rgba(226, 232, 240, 0.8)`, label `#0F172A`. Hover: background `rgba(255, 255, 255, 0.95)`, border `#CBD5E1`.
- **Tertiary / Ghost**: Transparent fill, text `#334155`, hover `rgba(241, 245, 249, 0.7)`.

### Chips & Filter Pills
- **Unselected**: Frosted translucent pill (`rgba(255, 255, 255, 0.6)`), 1px hairline border `rgba(226, 232, 240, 0.7)`, text `#475569`.
- **Selected**: Solid dark slate (`#0F172A`) with crisp white text, or deep oceanic teal (`#0D9488`) for destination mood filters, accompanied by an icon.

### Form Inputs & Search Fields
- **Floating Search Dock**: Translucent pill or rounded bar `rgba(255, 255, 255, 0.85)`, `backdrop-blur(20px)`, border `1px solid rgba(255, 255, 255, 0.9)`, resting shadow `0 6px 24px rgba(15, 23, 42, 0.06)`.
- **Text Inputs**: Flat clean white fill with 1px neutral border (`#E2E8F0`). On focus, crisp 1.5px border in `#0D9488` with clean neutral offset ring (no colored neon spreads).

### Cards & Itinerary Modules
- **Destination & Stay Cards**: Frosted white card (`rgba(255, 255, 255, 0.75)`), backdrop blur `16px`, delicate border `rgba(255, 255, 255, 0.7)`. Imagery features a 12px inset or flush top border with `rounded-t-2xl`. Badge tags float atop the photo with frosted pill containers (`rgba(15, 23, 42, 0.45)` with pure white text).
- **Price & Detail Modules**: Sub-containers within cards feature subtle `#F8FAFC` fills with 8px radius to segment flight legs, check-in times, and cancellation policies.

### Checkboxes & Radios
- 20px size with 6px rounded corners (checkbox) or circular (radio). Unchecked: border 1.5px `#CBD5E1`, white background. Checked: `#0D9488` solid fill with crisp white vector checkmark.

### Travel-Specific Components
- **Flight & Route Bar**: Horizontal timeline with hairline slate line (`#E2E8F0`), coral midpoint destination pin, and micro IATA tags (`#64748B`, `label-sm`).
- **Floating Vibe Selector**: Fixed bottom glass pill hosting quick vibe tags ("Sun & Surf", "Café Culture", "Mountain Calm") with blur-behind isolation.