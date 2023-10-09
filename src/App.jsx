import "./App.css";
import ForecastWeather from "./components/Weather/ForecastWeather";
import useWeatherData from "./hooks/useWeatherData";

function App() {
    const weatherData = useWeatherData();
    return (
        <div className="container">
            <h1>Météo Connect</h1>
            {weatherData ? (
                <ForecastWeather />
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
}

export default App;