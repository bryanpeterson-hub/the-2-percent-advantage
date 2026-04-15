# The 2% Advantage

Internal hub for Salesforce Solution Engineers: **Story Bank**, **Arena** (deal surgery intake + archive), and a **command center** home experience. Video curriculum is intentionally **not** hosted here.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn-style Radix primitives
- Framer Motion, Lucide, cmdk (Spotlight-style palette)
- PWA via `@ducanh2912/next-pwa` (service worker disabled in development)

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Press **⌘K** (macOS) or **Ctrl+K** (Windows/Linux) to open the command palette.

## Heroku

1. Create a Heroku app on the **Node.js** stack.
2. Set the buildpack to the official Node buildpack (default).
3. Deploy this repository.
4. Heroku sets `PORT`; `npm run start` uses `next start -p ${PORT:-3000}`.

Suggested config var for absolute URLs in metadata:

```bash
heroku config:set NEXT_PUBLIC_APP_URL=https://<your-app>.herokuapp.com
```

Optional: set `NODE_ENV=production` (Heroku does this automatically for Node apps).

## Git

If `git init` did not complete in your environment, run it locally in this folder before your first commit.

### Build note

The PWA plugin emits service worker assets into `public/` during production builds. Those generated files are gitignored.

## Content

Mock data lives in:

- `lib/content/stories.ts` — Story Bank templates
- `lib/content/arena.ts` — next live session label + archive cards

Replace with your real sources when ready.
