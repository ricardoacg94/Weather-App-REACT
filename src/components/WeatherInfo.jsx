import React, { useState } from "react";
import "./styles.css/weatherInfo.css";
import {
  WiThermometer,
  WiSunrise,
  WiHumidity,
  WiSunset,
  WiStrongWind,
  WiBarometer,
} from "react-icons/wi";
export const WeatherInfo = ({ weatherInfo, fahrenheit }) => {
  const { current } = weatherInfo;
  const { forecast } = weatherInfo;
  const currentTemp = fahrenheit ? current.temp_f : current.temp_c;
  const feelsLike = fahrenheit ? current.feelslike_f : current.feelslike_c;
  return (
    <div className="weather-info-container">
      <div className="weather-general-info">
        <div>
          <img className="icon" src={current.condition.icon} alt="" />
        </div>
        <div>
          <h1> {currentTemp}° </h1>
          <h3 id="current-condition">{current.condition.text} </h3>
        </div>
      </div>

      <div className="weather-specifications-container">
        <div className="weather-specifications">
          <h4>
            <WiThermometer fontSize={30} /> Feels Like
            <span>: {feelsLike}°</span>
          </h4>
          <h4>
            <WiHumidity fontSize={30} /> Humidity
            <span>: {current.humidity} % </span>
          </h4>
          <h4>
            <WiSunrise fontSize={30} /> Sunrise
            <span>: {forecast.forecastday[0].astro.sunrise} </span>
          </h4>
          <h4>
            <WiStrongWind fontSize={30} /> Wind Speed
            <span>: {current.wind_kph} km/h </span>
          </h4>
          <h4>
            <WiSunset fontSize={30} /> Sunset
            <span>: {forecast.forecastday[0].astro.sunset}</span>
          </h4>
          <h4>
            <WiBarometer fontSize={30} /> Pressure
            <span> : {current.pressure_mb} hPa </span>
          </h4>
        </div>
      </div>
    </div>
  );
};
