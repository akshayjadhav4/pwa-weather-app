import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchWeatherData } from "./api/fetchWeather";
import Search from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

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

  useEffect(() => {
    document.body.style = "background: #F9FAFB;";
  }, []);

  return (
    <div className="container mx-auto  w-11/12">
      <ThemeToggle />
      {/* Search */}
      <Search city={city} setCity={setCity} getWeather={getWeather} />
      {/* show weather */}
      {weatherData.main && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
