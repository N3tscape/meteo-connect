import parseWeatherData from "../../helpers/weatherDataParser";
import useWeatherData from "../../hooks/useWeatherData";
import formatDate from "../../helpers/dateFormatter";
import WeatherIcon from "../../utils/weatherIcons";
import "./ForecastWeather.css";

const ForecastWeather = () => {
  const weatherData = useWeatherData();
  const days = parseWeatherData(weatherData);

  return (
    <div className="forecastContainer">
      <h3>Prévisions de la semaine :</h3>

      <div className="forecast">
        {days.map((day, index) => (
          <div className="forecastDay" key={index}>
            <h4 className="forecastDayDate">{formatDate(day.date)}</h4>
            <p className="forecastDayIcon">
              <WeatherIcon code={day.weatherCode} />
            </p>
            <p className="forecastDayTemp">
              {((day.maxTemperature + day.minTemperature) / 2).toFixed(1)}°C
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ForecastWeather;
