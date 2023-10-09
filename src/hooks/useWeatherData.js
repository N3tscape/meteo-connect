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
  }, []);

  return weatherData;
}

export default useWeatherData;
