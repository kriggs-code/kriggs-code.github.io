# Ignite MVP

A cinematic Catholic evangelization platform for spiritually curious teenagers.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth + Database
- Vercel deployment

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Supabase

1. Create a Supabase project.
2. Copy your project URL and anon key into `.env.local`.
3. Run `supabase-schema.sql` in Supabase SQL editor.
4. Enable email auth / magic links.

## Deploy

Push this repo to GitHub and import it into Vercel. Add these env vars:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## MVP Pages

- `/` cinematic landing page
- `/about` mission/formation page
- `/onboarding` quiz flow
- `/pathways/[type]` worldview-specific sections
- `/dashboard` prayer, scripture, reflection, streak
- `/sign-in` Supabase magic link sign-in
