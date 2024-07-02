// app/api/weather/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { createWeatherKitToken } from '../../lib/weatherKit';

const WEATHERKIT_API_URL = 'https://weatherkit.apple.com/api/v1/weather';
const latitude = '34.073620';  // Latitude for Beverly Hills
const longitude = '-118.400356'; // Longitude for Beverly Hills

export async function GET(req: NextRequest) {
  try {
    const token = createWeatherKitToken();
    console.log('Generated Token:', token); // Log the token for debugging
    
    const response = await axios.get(
      `${WEATHERKIT_API_URL}/en/${latitude}/${longitude}?dataSets=currentWeather`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('WeatherKit API Response:', response.data); // Log the API response for debugging

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error fetching weather data:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Error fetching weather data' }, { status: 500 });
  }
}
