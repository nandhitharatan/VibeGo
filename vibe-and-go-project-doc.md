# Vibe & Go — Project Documentation

A weekend-trip discovery app built for a 1-hour, frontend-only hackathon warmup challenge.

---

## 01 · PRD — Product Requirements Document

**One-line purpose:** Help a user quickly discover and pick a destination for a short weekend trip through a fast, glassy, mood-based filtering experience.

### Problem
People planning a spontaneous weekend trip don't want a booking form — they want inspiration that matches how they're feeling, filtered down to a couple of good options in seconds.

### Target user
Someone with a free weekend, no fixed destination in mind, browsing on desktop or mobile, expecting a fast and delightful experience (this is a demo/portfolio piece, not a production booking tool).

### Core user story
"As a user, I want to pick a vibe and a budget so I can see a short list of matching destinations, then view details and confirm a pick — without any sign-up, forms, or backend."

### Scope (in)
- Landing hero with headline + vibe chips (Chill / Adventure / Culture / Beach) + budget toggle (Budget / Mid / Splurge)
- Filtering logic: **AND** — selecting a vibe *and* a budget narrows to cards matching both (simpler to implement correctly than fuzzy relevance sorting under a time limit)
- Responsive destination grid (mock/static data, ~8 destinations)
- Accessible details modal per destination
- "Pick this trip" confirmation state — an inline glass banner at the top of the grid (chosen over a toast because banners don't have auto-dismiss timing issues for screen reader users)
- "Start over" control resetting all filters and selection

### Scope (out)
- Real booking, payments, accounts, or backend of any kind
- Real map/geolocation
- Persisted state across page reloads

### Success criteria
- Loads fast, looks premium, works end-to-end with keyboard only, passes the rubric (code quality, security, efficiency, accessibility).

---

## 02 · TRD — Technical Requirements Document

| Layer | Choice | Why |
|---|---|---|
| Build tool | **Vite** | Fastest scaffold + smallest output bundle |
| Framework | **React 18 + TypeScript (strict mode)** | Typed component tree, directly satisfies "TypeScript strictness" rubric line |
| Styling | **Plain CSS / CSS Modules**, no UI kit | Zero extra runtime dependencies → smaller bundle, better FCP, smaller security surface |
| Visual style | **Glassmorphism**: `backdrop-filter: blur()`, translucent white/charcoal panels, 1px low-opacity borders, 16–20px radius | Modern/premium look achievable with pure CSS, no JS cost |
| Images | **Local, pre-compressed photos** (not hotlinked CDN images) with explicit `width`/`height` | Avoids CLS, avoids external network dependency/security flag |
| Linting | **ESLint + typescript-eslint (strict) + eslint-plugin-jsx-a11y** | Directly targets "zero ESLint errors" + accessibility rubric |
| Data | **Static local JSON/TS module** — no fetch, no API | Frontend-only rule; also removes an entire class of security concerns (no untrusted input from network) |
| Hosting | **Vercel or Netlify** | Instant free HTTPS, zero-config, satisfies "live HTTPS" rule |
| Version control | **Public GitHub repo**, meaningful commit history | Satisfies "public repo" rule and shows clean process for code-quality grading |

### Security checklist
- No `dangerouslySetInnerHTML` anywhere
- No `eval`, no dynamic script injection
- If a search/text input is added, sanitize/validate before rendering (avoid raw interpolation into the DOM)
- Dependencies kept to a minimum (React + Vite tooling only) → smaller supply-chain surface
- No secrets/keys in the repo (none needed — fully static)

### Performance checklist
- Static data, no network calls → no loading spinners needed
- Images sized with explicit `width`/`height` attributes → zero layout shift
- CSS-only transitions (no animation libraries)
- Single page, no router overhead
- Production build checked with `vite build` + a quick Lighthouse pass

### Accessibility checklist
- Semantic tags: `<main>`, `<section>`, `<button>` (never clickable `<div>`s)
- `aria-pressed` on vibe/budget toggle chips
- Modal: `role="dialog"`, `aria-modal="true"`, focus moves in on open, focus trapped inside, `Escape` closes and returns focus to the triggering card
- Visible focus rings on every interactive element
- Alt text on every image

---

## 03 · App Flow

Every screen and navigation path, start to finish:

1. **Landing / Hero** — Loads instantly, no images block first paint of the filter UI. Headline + vibe chips + budget toggle, both defaulted to "All" so results are visible with zero clicks.
2. **User selects a vibe and/or budget** — Instant client-side filter (AND logic). Grid fades/re-renders. Selected chip gets `aria-pressed="true"` + visual highlight.
3. **Destination grid** — Cards are real `<button>` elements: local optimized photo (fixed dimensions), city name, one-line hook, vibe + budget tag pills. Fully keyboard-tabbable.
4. **Card activated → Details modal opens** — Focus moves into the modal, trapped inside; bigger photo, longer description, "best for" tags, "Pick this trip" button. `Escape`/backdrop click closes, focus returns to the originating card.
5. **"Pick this trip" clicked** — Modal closes; a glass confirmation banner appears at the top of the grid ("Great choice — [City] it is!"); the chosen card gets a "Selected" badge.
6. **"Start over"** — Resets vibe, budget, and selection back to the landing state (step 1).

*(Diagram of this flow was shared earlier in this conversation.)*

---

## 04 · Data Schema (mock — no real backend)

Since this is frontend-only, there's no database or auth. Data lives as a static typed array shipped with the app.

```ts
// src/data/destinations.ts

export type Vibe = "chill" | "adventure" | "culture" | "beach";
export type Budget = "budget" | "mid" | "splurge";

export interface Destination {
  id: string;            // stable unique key, e.g. "lisbon-pt"
  name: string;           // "Lisbon, Portugal"
  vibe: Vibe;
  budget: Budget;
  tagline: string;        // one-liner shown on the card
  description: string;    // longer copy shown in the modal
  bestFor: string[];      // e.g. ["Coastal walks", "Food markets"]
  imageSrc: string;       // local path, e.g. "/images/lisbon.jpg"
  imageAlt: string;       // required accessible alt text
  imageWidth: number;     // explicit dimensions to prevent CLS
  imageHeight: number;
}

export const destinations: Destination[] = [
  // ~8 entries covering all 4 vibes × mixed budgets
];
```

**"Auth" / relationships:** none — there are no users, no accounts, no persisted state. Selection state (`selectedVibe`, `selectedBudget`, `pickedDestinationId`) lives entirely in React state (`useState`), reset on "Start over" or page reload. This keeps the security surface minimal and satisfies the frontend-only constraint.

---

## 05 · Implementation Plan (60-minute build sequence)

| Time | Task |
|---|---|
| 0–5 min | `npm create vite@latest` (React + TS strict template), `git init`, push empty **public** repo to GitHub |
| 5–15 min | Write `data/destinations.ts` mock data (~8 entries), build component skeletons: `App`, `Hero`, `FilterBar`, `DestinationGrid`, `DestinationCard`, `DetailsModal`, `ConfirmationBanner` |
| 15–35 min | Core interaction: vibe/budget state + AND-filter logic, grid render, modal open/close with focus trap |
| 35–45 min | Glassmorphism styling pass: hero background photo + overlay gradient, glass chips/cards/modal, hover states |
| 45–52 min | Accessibility pass: aria attributes, keyboard nav check, run ESLint and fix all warnings |
| 52–57 min | `vite build`, quick Lighthouse check, fix any CLS/FCP issues found |
| 57–60 min | Deploy to Vercel/Netlify, verify live HTTPS URL, final commit + push, submit both links |

### Pre-submission checklist
- [ ] Repo is public, no auth required to view
- [ ] Deployed URL loads over HTTPS
- [ ] `npm run lint` → zero errors
- [ ] Full flow works with mouse **and** keyboard-only
- [ ] No console errors in production build
- [ ] Images have explicit dimensions + alt text
- [ ] README briefly explains the concept and how to run locally
