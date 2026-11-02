# Shashitha & Ashani — Wedding Invitation

A responsive wedding invitation website built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

1. Install Node.js 20 or later.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## RSVP database setup

RSVP responses are stored in Neon Postgres. To connect it to Vercel:

1. Add the Neon integration to the Vercel project and create or connect a database.
2. Ensure the project has a `DATABASE_URL` environment variable from Neon in Development, Preview and Production.
3. Run [`db/schema.sql`](db/schema.sql) once in the Neon SQL Editor to create the RSVP table.
4. Redeploy the Vercel project so the function can use the database connection.

The public form can insert responses but cannot read them back. Review submissions in the Neon SQL Editor and restrict database access to trusted project members. Names, email addresses and optional notes are personal data; configure retention and access accordingly.

## Deploy to Vercel

Push this folder to a GitHub repository, then import it into Vercel. Framework preset: Next.js. Complete the RSVP database setup above before accepting responses.

## Personalise before publishing

- Update names, date, venue and invitation wording in `app/page.tsx`.
- Replace the three `photos` URLs in `app/page.tsx` with your own approved pre-wedding images.
- Replace the background photo URL in `app/globals.css` with a photo you have permission to use.
- Confirm exact ceremony/reception times and the correct venue map link before sharing with guests.
- The music toggle is currently a visual control only; no music file is bundled.
- Private guest links and a guest dashboard are not included. RSVP responses are stored server-side in the connected Neon database.

## Notes

The countdown uses Sri Lanka time (UTC+05:30) and currently targets 4 December 2026 at 5:00 PM. Adjust the time once the ceremony schedule is confirmed. Stock photos are placeholders, not your actual wedding photos.
