import React, { useState } from "react";
import "./App.css";
import { fetchWeatherData } from "./api/fetchWeather";
import Search from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const getWeather = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setCity("");
    }
  };

  return (
    <div className="container mx-auto  w-11/12">
      {/* Search */}
      <Search city={city} setCity={setCity} getWeather={getWeather} />
      {/* show weather */}
      {weatherData.main && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
