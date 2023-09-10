import { dateTransform } from "../helpers/dateTransform";
import { useState, useEffect } from "react";
export const UseWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState("London");
  const [sixDayForecast, setSixDayForecast] = useState();

  const getData = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=e2663c776910495a9f3154945230709&q=${city}&days=7`;

    const response = await fetch(url);
    const data = await response.json();

    if (Object.keys(data).length === 1) {
      alert("Ciudad no encontrada");
      setCity("London");
    } else {
      setWeatherInfo(data);
    }
  };

  useEffect(() => {
    getData();
  }, [city]);

  useEffect(() => {
    if (weatherInfo != null) {
      const sixDays = weatherInfo.forecast.forecastday.slice(1, 7);
      setSixDayForecast(sixDays);
    }
  }, [weatherInfo]);

  return {
    weatherInfo,
    setCity,
    sixDayForecast,
  };
};
