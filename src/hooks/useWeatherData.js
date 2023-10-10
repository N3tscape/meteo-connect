import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=50.6927049&longitude=3.177847&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&daily=sunrise,sunset&daily=precipitation_sum&timezone=auto';

const fetchWeatherData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}

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