import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');
  const priority = searchParams.get('priority');

  try {
    if (!location || !priority)
      throw new Error('Location and priority are required');
    await sql`INSERT INTO Locations (Location, Priority) VALUES (${location}, ${priority});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const locations = await sql`SELECT * FROM Locations;`;
  return NextResponse.json({ locations }, { status: 200 });
}
