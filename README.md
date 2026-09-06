# Vibe & Go — Weekend Trip Destination Picker

**Vibe & Go** is a fast, glassy, mood-based weekend destination discovery application built for a 1-hour frontend hackathon challenge. It helps users discover and select spontaneous 48-hour boutique escapes tailored to their mood (vibe) and budget.

---

## ✨ Features & Architecture

- **Glassmorphism UI/UX**: Custom CSS glass panels (`backdrop-filter: blur()`), glowing sunset gradients, and an atmospheric mountain hero background inspired by Google Stitch designs.
- **AND Filtering Logic**: Combines Vibe chips (*Chill*, *Adventure*, *Culture*, *Beach*) and Budget levels (*Budget*, *Mid*, *Splurge*).
- **Inline Confirmation Banner**: Accessible inline banner (`role="status"`, `aria-live="polite"`) rendered at the top of the destination grid upon confirming a trip.
- **Strict Accessibility**:
  - Semantic HTML (`<button>`, `<main>`, `<section>`, `<header>`)
  - `aria-pressed` toggle states for filter chips
  - Accessible modal dialog (`role="dialog"`, `aria-modal="true"`) with focus trap, `Escape` key handler, backdrop click dismissal, and focus restoration to triggering card
  - Visible focus rings (`:focus-visible`) across all interactive elements
  - Local SVG images with explicit `width`/`height` attributes to eliminate Content Layout Shift (CLS)
- **Zero Third-Party UI Libraries**: Pure React + TypeScript + CSS Modules / Plain CSS. No Tailwind, no UI frameworks.
- **Pure React State**: All application state managed with standard `useState` (no `localStorage`/`sessionStorage`).

---

## 🛠️ Stack

- **Build Tool**: Vite 5
- **Framework**: React 18 + TypeScript (Strict Mode)
- **Styling**: Plain CSS / CSS Modules
- **Linting**: ESLint + `@typescript-eslint` + `eslint-plugin-jsx-a11y`

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Execution

1. Clone or navigate to the repository directory:
   ```bash
   cd frontend_warmup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Run type checking & production build:
   ```bash
   npm run build
   ```

5. Run ESLint audit (0 errors, 0 warnings):
   ```bash
   npm run lint
   ```

---

## ✅ Pre-Submission Rubric Checklist

- [x] **TypeScript Strict Mode**: Zero `any` types across codebase.
- [x] **Zero ESLint Errors**: `npm run lint` runs with `--max-warnings 0`.
- [x] **Semantic HTML**: All interactive controls are real `<button>` elements with keyboard focus states.
- [x] **Focus Management**: Modal traps focus and restores focus to triggering element upon closing.
- [x] **No Hotlinked Images**: All images are local SVG assets with explicit dimensions.
- [x] **Inline Confirmation Banner**: Glass banner at top of grid on trip pick, not a auto-dismissing toast.
- [x] **Start Over Control**: Clears all filters and selection back to initial state.
