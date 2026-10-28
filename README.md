# Shashitha & Ashani — Wedding Invitation

A responsive wedding invitation website built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

1. Install Node.js 20 or later.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Deploy to Vercel

Push this folder to a new GitHub repository, then import that repository into Vercel. Framework preset: Next.js. No environment variables are required for this frontend prototype.

## Personalise before publishing

- Update names, date, venue and invitation wording in `app/page.tsx`.
- Replace the three `photos` URLs in `app/page.tsx` with your own approved pre-wedding images.
- Replace the background photo URL in `app/globals.css` with a photo you have permission to use.
- Confirm exact ceremony/reception times and the correct venue map link before sharing with guests.
- The music toggle is currently a visual control only; no music file is bundled.
- RSVP, private guest links and a guest dashboard are not connected in this first frontend build. Those need a backend/database and access rules.

## Notes

The countdown uses Sri Lanka time (UTC+05:30) and currently targets 4 December 2026 at 5:00 PM. Adjust the time once the ceremony schedule is confirmed. Stock photos are placeholders, not your actual wedding photos.
