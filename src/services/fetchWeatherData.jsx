import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=50.6927049&longitude=3.177847&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto';

const fetchWeatherData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchWeatherData;