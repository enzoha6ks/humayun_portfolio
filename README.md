# HUMAYUN JAVAID (Portfolio) For Client

A personal portfolio built with Next.js and Tailwind CSS showcasing projects, skills, and contact functionality.

## Features

- Next.js 16 app-router structure
- Tailwind CSS for styling
- Server-side email sending endpoint (`src/app/api/send-email/route.ts`)
- Reusable UI components in `src/components`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- pnpm

## Quick Start

1. Install dependencies:

```bash
pnpm install
```

2. Run development server:

```bash
pnpm dev
```

3. Build for production:

```bash
pnpm build
pnpm start
```

## Available Scripts

The important scripts are defined in `package.json`:

- `dev` — Run Next.js in development mode (`next dev --turbopack`).
- `build` — Build the app for production (`next build`).
- `start` — Start the production server (`next start`).
- `lint` — Run ESLint (`next lint`).

## Project Structure (important paths)

- `src/app/` — App router pages and layout.
- `src/components/` — Reusable UI components.
- `src/lib/` — Helpers and utilities.
- `src/db/` — Local project and data definitions used for seeding or reference.
- `public/` — Static assets (images, companies, project images).

## Environment & Deployment

- Uses `pnpm` as the package manager (see `packageManager` in `package.json`).
- Deploy to Vercel for best compatibility with Next.js (automatic builds and Edge functions).

## Contributing

- Open an issue or submit a PR.
- Follow existing code style and run `pnpm lint`.

## License

MIT — feel free to modify and reuse.
