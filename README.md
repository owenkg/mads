# Meridian at Dusk Sessions — Website

> *Where the sun meets the sound.*

The official website for **Meridian at Dusk Sessions (MADS)** — an intimate music experience in Kampala, Uganda. Deep house, afro house, soulful amapiano. Invite only.

A [Pitch Blends](https://pitchblends.com) initiative.

---

## Monorepo Structure

```
mads/
├── apps/
│   └── web/          # Main website (React + Vite + Tailwind)
├── packages/
│   └── ui/           # Shared design system (future)
└── figma design dump/ # Original Figma export
```

## Getting Started

```bash
# Install deps (from repo root)
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The dev server runs at http://localhost:5173

## Features

- **Event listings** — past and upcoming sessions
- **Event detail pages** — location, time, genre, event image
- **Mix embeds** — YouTube, Mixcloud, SoundCloud recordings for past events
- **RSVP queue system** — request a spot for upcoming events
- **Brand-true design system** — Parchment, Mahogany, Amber palette; Playfair Display + DM Sans + Courier Prime

## Design System

Components live in `apps/web/src/components/design-system/` and are ported from the Figma export. Colors, typography, and visual motifs follow the MADS brand guidelines.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- React Router 6
- TypeScript

## Adding Events

Edit `apps/web/src/data/events.ts` to add or update sessions.
