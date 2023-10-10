import React from "react";

import wind from "../Weather/Assets/wind.png";
import sunrise from "../Weather/Assets/sunrise.png";
import sunset from "../Weather/Assets/sunset.png";
import down from "../Weather/Assets/down.png";
import up from "../Weather/Assets/up.png";
import rain from "../Weather/Assets/rain.png";
import cloudy from "../Weather/Assets/cloudy.png";

import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weatherDetailsContainer">
      <div className="info">
        <div className="date">Aujourd'hui, 9 Octobre</div>
        <img className="weatherImage" src={cloudy} alt="weather" />
        <div className="temperature">25°</div>
        <div className="weatherText">Couvert</div>
        {/* //weather Details/ */}
        <div className="grid grid-cols-2 text-white gap-x-12 gap-y-6">
          <div>
            <div>
              <img src={wind} alt="wind speed icon" />
              <p className="weatherLabel">Vitesse du vent</p>
              <div className="icon">10 km/h</div>
            </div>
          </div>
          <div>
            <div>
              <img src={rain} alt="rain icon" />
              <p className="weatherLabel">Pluie</p>
              <div className="icon">10 km/h</div>
            </div>
          </div>
          <div>
            <div>
              <img src={sunrise} alt="snrise icon" />
              <p className="weatherLabel">Lever de soleil</p>
              <div className="icon">10 km/h</div>
            </div>
          </div>
          <div>
            <div className="div">
              <img src={sunset} alt="sunset icon" />
              <p className="weatherLabel">Coucher de soleil</p>
              <div className="icon">10 km/h</div>
            </div>
          </div>
          <div>
            <div>
              <img src={up} alt="max temperature icon" />
              <p className="weatherLabel">Température Max </p>
              <div className="icon">10 km/h</div>
            </div>
          </div>
          <div>
            <div>
              <img src={down} alt="min temperature icon" />
              <p className="weatherLabel">Température Min </p>
              <div className="icon">10 km/h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
