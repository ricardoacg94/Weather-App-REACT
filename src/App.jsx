import "./App.css";
import { Search } from "./components/Search";
import { CityWrapper } from "./components/cityWrapper";
import { WeatherInfo } from "./components/WeatherInfo";
import { WeatherForecast } from "./components/WeatherForecast";
import { UseWeather } from "./hooks/UseWeather";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { ThemeBackground } from "./components/ThemeBackground";
import { WiFahrenheit } from "react-icons/wi";
import { WiCelsius } from "react-icons/wi";

function App() {
  const { weatherInfo, setCity } = UseWeather();
  const [darkMode, setDarkMode] = useState(false);
  const [fahrenheit, setFarenheit] = useState(true);
  const searchCity = (search) => {
    setCity(search);
  };

  const changeTemp = () => {
    setFarenheit(!fahrenheit);
  };

  if (!weatherInfo) return <div>cargando</div>;

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <div className="toggles-container">
        <ThemeBackground darkMode={darkMode} setDarkMode={setDarkMode} />

        <Switch
          color="primary"
          size="medium"
          onChange={changeTemp}
          checkedIcon={<WiCelsius size={22.5} />}
          icon={<WiFahrenheit size={22.5} />}
        />
      </div>
      <div>
        <Search searchCity={searchCity} />
        <CityWrapper weatherInfo={weatherInfo} />
        <WeatherInfo weatherInfo={weatherInfo} fahrenheit={fahrenheit} />
        <WeatherForecast weatherInfo={weatherInfo} fahrenheit={fahrenheit} />
      </div>
    </div>
  );
}

export default App;
