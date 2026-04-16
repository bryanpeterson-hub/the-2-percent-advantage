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

Suggested config var for absolute URLs in metadata (include `https://`; empty values are ignored so the app does not crash on `new URL`):

```bash
heroku config:set NEXT_PUBLIC_APP_URL=https://<your-app>.herokuapp.com
```

Optional override if the ACT curriculum record moves (defaults are in `lib/site.ts`):

```bash
heroku config:set NEXT_PUBLIC_READINESS_CURRICULUM_URL=https://readiness.my.site.com/...
```

**Heroku runtime note:** After a successful build, Heroku **prunes `devDependencies`**. `next start` still loads your Next config from disk: **`next.config.ts` requires the `typescript` package at runtime**, so it will crash after prune unless you move `typescript` to `dependencies` or use a **JS config** instead. This repo uses **`next.config.mjs`** so production boot does not need TypeScript. Anything the config imports (for example `@ducanh2912/next-pwa`) must still be in **`dependencies`** if it was previously under `devDependencies`. The start script uses **`-H 0.0.0.0`** so the server accepts traffic from Heroku’s router.

Optional: set `NODE_ENV=production` (Heroku does this automatically for Node apps).

## GitHub

Remote: **https://github.com/bryanpeterson-hub/the-2-percent-advantage.git**

An initial commit is already present locally. Publish it:

```bash
cd /Users/bryan.peterson/Projects/the-2-percent-advantage
git push -u origin main
```

If HTTPS prompts for credentials in a headless environment, use either **GitHub CLI** (`gh auth login` then push again) or switch the remote to SSH:

```bash
git remote set-url origin git@github.com:bryanpeterson-hub/the-2-percent-advantage.git
git push -u origin main
```

### Git directory layout (this checkout)

Git metadata for this clone lives in a sibling folder **`../the-2-percent-advantage.git`** (see the `gitdir:` pointer in the `.git` file). That avoids environments that block creating `.git/hooks` inside the project directory. To use a normal in-project `.git` folder instead, run `git clone` into a fresh directory once push works, or consult Git’s `git worktree` / `git clone --separate-git-dir` docs.

### Build note

The PWA plugin emits service worker assets into `public/` during production builds. Those generated files are gitignored.

## Content

Mock data lives in:

- `src/data/stories.ts` — Story Bank source of truth (98% / 2% narratives + talk-tracks)
- `lib/content/arena.ts` — next live session label + archive cards

Replace with your real sources when ready.
