import "./ForecastWeather.css";

const ForecastWeather = () => {

    return (
        <div className="forecastContainer">
            <h3>Prévisions de la semaine :</h3>

            <div className="forecast">
                <div className="forecastDay">
                    <h4 className="forecastDayDate">Sept. 14</h4>
                    <p className="forecastDayIcon">🌩️</p>
                    <p className="forecastDayTemp">12°C</p>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default ForecastWeather;