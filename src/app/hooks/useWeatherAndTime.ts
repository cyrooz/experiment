// hooks/useWeatherAndTime.ts
import { useState, useEffect } from 'react';
import { fetchWeatherAndTime } from '../lib/fetchWeatherAndTime';

// Define the shape of the data returned from the API
interface WeatherData {
    initialWeather: string;
    initialTimeMessage: string;
    userLocation: string;
    userEmoji: string;
}

// Define the shape of the state used within the hook
interface WeatherState {
    weather: string;
    timeMessage: string;
    location: string;
    emoji: string;
}

// Define the shape of the returned object from the hook
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
                const result = await fetchWeatherAndTime();
                setData({
                    weather: result.initialWeather,
                    timeMessage: result.initialTimeMessage,
                    location: result.userLocation,
                    emoji: result.userEmoji
                });
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { ...data, isLoading, error };
};
