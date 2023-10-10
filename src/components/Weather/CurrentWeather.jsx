import useWeatherData from "../../hooks/useWeatherData";
import WeatherIcon from "../../utils/weatherIcons";

const CurrentWeather = () => {

    const weatherData = useWeatherData();
    if (weatherData === null) {
        return <div>Chargement...</div>;
    }
    return <>
        <p className="forecastDayIcon">
            <WeatherIcon code={weatherData.current_weather.weathercode} /></p>
        <p> 🌬️{weatherData.current_weather.windspeed}km/h</p>
        <p> 🌡️{weatherData.current_weather.temperature}C°</p>
        <p> 🌅 {weatherData.daily.sunrise[0]} </p>
        <p> 🌇 {weatherData.daily.sunset[0]} </p>
        <p> Min : {weatherData.daily.temperature_2m_min[0]}°C</p>
        <p> Max : {weatherData.daily.temperature_2m_max[0]}°C</p>
        <p> Précipitation : {weatherData.daily.precipitation_sum[0]}mm</p>
    </>
}

export default CurrentWeather;