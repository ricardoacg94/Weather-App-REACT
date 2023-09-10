import React from "react";
import "./styles.css/cityWrapper.css";
import { dateTransform } from "../helpers/dateTransform";
export const CityWrapper = ({ weatherInfo }) => {
  const { location } = weatherInfo;

  const forecastTitle = dateTransform(weatherInfo.forecast);
  return (
    <div className="city-container">
      <h1>{location.name} </h1>
      <h3>{forecastTitle[0]} </h3>
    </div>
  );
};
