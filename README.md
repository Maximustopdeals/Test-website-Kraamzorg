# Aura Boutique Kraamzorg

Ultra high-end Next.js site for boutique maternity care (kraamzorg). Quiet luxury, editorial typography, concierge-level conversion flow.

## Stack

- Next.js 15 App Router · React 19 · TypeScript
- Tailwind CSS v4 · Framer Motion
- Formspree · Google Tag Manager (`@next/third-parties`)

## Setup

```bash
npm install
npm run dev
```

Fill IDs in `src/lib/config.ts`:

- `formspreeFormId`
- `googleTagManagerId`
- `whatsapp` number
- domain / email as needed

## Routes

| Path | Page |
|------|------|
| `/` | Cinematic home |
| `/kraamzorg` | Services |
| `/over-mij` | About |
| `/reviews` | Testimonials |
| `/contact` | Private intake form |

## Design

- Serif: Cormorant Garamond (light)
- Sans: Plus Jakarta Sans
- Surfaces: alabaster `#FDFBF7`, cream `#F9F6F0`
- Accent: muted sage `#606C38`
