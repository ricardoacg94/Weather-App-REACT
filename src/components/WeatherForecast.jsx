import React, { useEffect, useState } from "react";
import "./styles.css/weatherForecast.css";
import { dateTransform } from "../helpers/dateTransform";
import { UseWeather } from "../hooks/UseWeather";
export const WeatherForecast = ({ weatherInfo, fahrenheit }) => {
  const forecastTitle = dateTransform(weatherInfo.forecast);
  const { sixDayForecast } = UseWeather();

  if (!sixDayForecast) return <div>cargando...</div>;

  return (
    <div className="forecast-container">
      {sixDayForecast.map((day, i) => {
        const avgTemp = fahrenheit ? day.day.avgtemp_f : day.day.avgtemp_c;
        return (
          <>
            <div className="forecast-day-container">
              <h2>{forecastTitle[i + 1]} </h2>
              <div className="icon-container">
                {<img src={day.day.condition.icon} alt="" />}
              </div>
              <h2 className="day-temp">{avgTemp}° </h2>
              <h4>{day.day.condition.text} </h4>
            </div>
          </>
        );
      })}
    </div>
  );
};
