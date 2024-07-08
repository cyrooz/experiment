// app/api/weather-and-time/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { fetchWeatherAndTime } from '../../lib/fetchWeatherAndTime';

export async function GET(request: NextRequest) {
  try {
    const data = await fetchWeatherAndTime();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
