import React, { useState } from "react";
import "./App.css";
import { fetchWeatherData } from "./api/fetchWeather";
import Search from "./components/Search/Search";

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
    <div className="container mx-auto  w-6/12">
      {/* Search */}
      <Search city={city} setCity={setCity} getWeather={getWeather} />
    </div>
  );
}

export default App;
