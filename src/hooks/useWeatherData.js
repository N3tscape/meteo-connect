import { useEffect, useState } from 'react';
import fetchWeatherData from '../services/fetchWeatherData';

function useWeatherData() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchWeatherData();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        }
        fetchData();
        const interval = setInterval(fetchData, 3600000);

        return () => clearInterval(interval);
    }, []);

    return weatherData;
}

export default useWeatherData;