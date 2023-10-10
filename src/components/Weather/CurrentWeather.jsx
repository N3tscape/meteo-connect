import useWeatherData from "../../hooks/useWeatherData";
import formateSunSetRi from "../../helpers/timeFormatter";
import WeatherIcon from "../../utils/weatherIcons";
import sunrise from "../Weather/Assets/sunrise.png";
import sunset from "../Weather/Assets/sunset.png";
import wind from "../Weather/Assets/wind.png";
import rain from "../Weather/Assets/rain.png";
import up from "../Weather/Assets/up.png";
import down from "../Weather/Assets/down.png";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  const weatherData = useWeatherData();

  if (weatherData === null) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="weatherDetailsContainer">
      <div className="info">
        <div className="date">Aujourd'hui</div>
        <div className="weatherIcon">
          <WeatherIcon code={weatherData.current_weather.weathercode} />
        </div>
        <div className="temperature">
          {weatherData.current_weather.temperature}C°
        </div>
        <div className="grid grid-cols-2 text-white gap-x-12 gap-y-6">
          <div>
            <div>
              <img src={wind} alt="wind speed icon" />
              <p className="weatherLabel">Vitesse du vent</p>
              <div className="icon">
                {weatherData.current_weather.windspeed}km/h
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={rain} alt="rain icon" />
              <p className="weatherLabel">Pluie</p>
              <div className="icon">
                {weatherData.daily.precipitation_sum[0]}mm
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={sunrise} alt="sunrise icon" />
              <p className="weatherLabel">Lever de soleil</p>
              <div className="icon">
                {formateSunSetRi(weatherData.daily.sunrise[0])}
              </div>
            </div>
          </div>
          <div>
            <div className="div">
              <img src={sunset} alt="sunset icon" />
              <p className="weatherLabel">Coucher de soleil</p>
              <div className="icon">
                {formateSunSetRi(weatherData.daily.sunset[0])}
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={up} alt="max temperature icon" />
              <p className="weatherLabel">Température Max </p>
              <div className="icon">
                {weatherData.daily.temperature_2m_max[0]}°C
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={down} alt="min temperature icon" />
              <p className="weatherLabel">Température Min </p>
              <div className="icon">
                {weatherData.daily.temperature_2m_min[0]}°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
