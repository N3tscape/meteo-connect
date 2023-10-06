import axios from 'axios';

const meteoURL = "https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours,windspeed_10m_max&timezone=auto";

function OpenMeteoAPI() {
    axios.get(meteoURL)

        .then(function (response) {
            console.log(response)
        })

        .catch(function (error) {
            console.log(error)
        })
}

export default OpenMeteoAPI;