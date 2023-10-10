import "./App.css";
import CurrentWeather from "./components/Weather/CurrentWeather";
import ForecastWeather from "./components/Weather/ForecastWeather";
import useWeatherData from "./hooks/useWeatherData";

function App() {
    const weatherData = useWeatherData();
    return (
        <div className="container">
            <h1>Météo Connect</h1>
            {weatherData ? (
                <><CurrentWeather /> <ForecastWeather /></>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
}

export default App;