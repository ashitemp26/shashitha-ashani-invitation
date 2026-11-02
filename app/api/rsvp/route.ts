import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json({ error: 'RSVP storage is not configured. Please contact the couple.' }, { status: 503 });
  }

  const payload = await request.json().catch(() => null);
  const data = payload && typeof payload === 'object' && !Array.isArray(payload)
    ? payload as Record<string, unknown>
    : null;

  if (!data) {
    return NextResponse.json({ error: 'Please submit a valid RSVP.' }, { status: 400 });
  }

  if (typeof data.website === 'string' && data.website.trim()) {
    return NextResponse.json({ success: true }, { status: 201 });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
  const attendance = data.attendance;
  const notes = typeof data.notes === 'string' ? data.notes.trim() : '';
  const guestCount = attendance === 'yes' ? Number(data.guests) : 0;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (
    !name || name.length > 120 ||
    !validEmail || email.length > 254 ||
    (attendance !== 'yes' && attendance !== 'no') ||
    (attendance === 'yes' && (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 4)) ||
    notes.length > 1000
  ) {
    return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 });
  }

  try {
    const sql = neon(databaseUrl);
    await sql`
      INSERT INTO rsvps (name, email, attendance, guest_count, notes)
      VALUES (${name}, ${email}, ${attendance === 'yes'}, ${guestCount}, ${notes})
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to store RSVP', error);
    return NextResponse.json({ error: 'We could not save your RSVP. Please try again later.' }, { status: 500 });
  }
}