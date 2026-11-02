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
  const attendance = data.attendance;
  const guestCount = attendance === 'yes' ? Number(data.guests) : 0;
  const team = data.team;
  const relationship = data.relationship;

  if (
    !name || name.length > 120 ||
    (attendance !== 'yes' && attendance !== 'no') ||
    (attendance === 'yes' && (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 2)) ||
    (attendance === 'yes' &&
      ((team !== 'bride' && team !== 'groom') ||
        (relationship !== 'relative' && relationship !== 'friend')))
  ) {
    return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 });
  }

  try {
    const sql = neon(databaseUrl);
    await sql`
      INSERT INTO rsvps (name, email, attendance, guest_count, notes, team, relationship)
      VALUES (
        ${name},
        NULL,
        ${attendance === 'yes'},
        ${guestCount},
        '',
        ${attendance === 'yes' ? team : null},
        ${attendance === 'yes' ? relationship : null}
      )
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to store RSVP', error);
    return NextResponse.json({ error: 'We could not save your RSVP. Please try again later.' }, { status: 500 });
  }
}