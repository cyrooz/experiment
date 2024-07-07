import { useState, useEffect } from 'react';
import { fetchWeatherAndTime as fetchWeatherDataFromAPI } from '../lib/fetchWeatherAndTime';

interface WeatherData {
    initialWeather: string;
    initialTimeMessage: string;
    userLocation: string;
    userEmoji: string;
}

interface WeatherState {
    weather: string;
    timeMessage: string;
    location: string;
    emoji: string;
}

interface UseWeatherAndTimeReturn {
    weather: string;
    timeMessage: string;
    location: string;
    emoji: string;
    isLoading: boolean;
    error: Error | null;
}

export const useWeatherAndTime = (): UseWeatherAndTimeReturn => {
    const [data, setData] = useState<WeatherState>({
        weather: '',
        timeMessage: '',
        location: '',
        emoji: ''
    });
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check for cached data first
                const cachedData = localStorage.getItem('weatherData');
                if (cachedData) {
                    const parsedData: WeatherData = JSON.parse(cachedData);
                    const cacheTime = new Date(parsedData.initialTimeMessage);
                    const now = new Date();

                    // Check if cache is older than 1 hour
                    if (now.getTime() - cacheTime.getTime() < 3600000) {
                        setData({
                            weather: parsedData.initialWeather,
                            timeMessage: new Date().toLocaleTimeString(),
                            location: parsedData.userLocation,
                            emoji: parsedData.userEmoji
                        });
                        setLoading(false);
                        return;
                    }
                }

                // Fetch new data if no valid cache exists
                const result = await fetchWeatherDataFromAPI();
                setData({
                    weather: result.initialWeather,
                    timeMessage: new Date().toLocaleTimeString(),
                    location: result.userLocation,
                    emoji: result.userEmoji
                });

                // Cache the new data
                localStorage.setItem('weatherData', JSON.stringify({
                    ...result,
                    initialTimeMessage: new Date().toISOString() // Cache with current timestamp
                }));
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Update time every minute
        const timeInterval = setInterval(() => {
            setData(currentData => ({ ...currentData, timeMessage: new Date().toLocaleTimeString() }));
        }, 60000);

        return () => clearInterval(timeInterval);
    }, []);

    return { ...data, isLoading, error };
};
