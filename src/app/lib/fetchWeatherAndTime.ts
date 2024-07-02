import axios from 'axios';

const weatherDescriptions: { [key: string]: string } = {
  'clear sky': 'the sky is clear ☀️ 🌤️',
  'few clouds': "there's a few clouds in the sky",
  'scattered clouds': "there's scattered clouds ☁️",
  'broken clouds': "it's partly cloudy ☁️",
  'overcast clouds': "the sky is completely covered with clouds ☁️",
  'shower rain': "there's light rain 🌧️",
  'rain': 'raining 🌧️',
  'thunderstorm': "there's a thunderstorm ⛈️",
  'snow': "it's snowing ❄️",
  'mist': 'cloudy ☁️',
};

interface WeatherData {
  initialWeather: string;
  initialTimeMessage: string;
  userLocation: string;
  userEmoji: string;
}

export async function fetchWeatherAndTime(): Promise<WeatherData> {
  try {
    const apiKey = '3211fdc16743d4ca9eba7e3411d6ebc7'; // Replace with your weather API key
    const ipInfoResponse = await axios.get('https://ipinfo.io/json?token=9b0355627a5873'); // Replace with your IPInfo token
    const { city, country } = ipInfoResponse.data;

    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherDescription = weatherResponse.data.weather[0].description;
    const userFriendlyDescription = weatherDescriptions[weatherDescription] || weatherDescription;

    const myTimeZone = 'America/Los_Angeles'; // Pacific Time Zone
    const myTime = new Date().toLocaleString('en-US', { timeZone: myTimeZone });
    const myTimeDate = new Date(myTime);

    const userTime = new Date();
    const timeDifference = (Number(myTimeDate) - Number(userTime)) / (1000 * 60 * 60); // Difference in hours
    const aheadBehind = timeDifference > 0 ? 'ahead' : 'behind';
    const absoluteHoursDiff = Math.abs(timeDifference);

    const timeMessage = `It's ${myTimeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} for me (${absoluteHoursDiff.toFixed(0)} hours ${aheadBehind} of you) and`;

    const countryEmojis: { [key: string]: string } = {
      'US': '🇺🇸',
      'GB': '🇬🇧',
      'CA': '🇨🇦',
      'FR': '🇫🇷',
      'DE': '🇩🇪',
      'JP': '🇯🇵',
      'IN': '🇮🇳',
      // Add more as needed
    };

    const userEmoji = countryEmojis[country] || '';

    const data = {
      initialWeather: `currently ${userFriendlyDescription}`,
      initialTimeMessage: timeMessage,
      userLocation: `${city}, ${country}`,
      userEmoji: userEmoji
    };

    console.log('Fetched data:', data);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
