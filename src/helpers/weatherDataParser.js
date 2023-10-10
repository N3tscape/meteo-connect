function parseWeatherData(weatherData) {
  if (!weatherData || !weatherData.daily) return [];

  return weatherData.daily.time.map((date, index) => ({
    date,
    weatherCode: weatherData.daily.weathercode[index],
    maxTemperature: weatherData.daily.temperature_2m_max[index],
    minTemperature: weatherData.daily.temperature_2m_min[index],
    sunrise: weatherData.daily.sunrise[index],
    sunset: weatherData.daily.sunset[index],
    precipitationSum: weatherData.daily.precipitation_sum[index],
  }));
}

export default parseWeatherData;
