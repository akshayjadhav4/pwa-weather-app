import React from "react";

function WeatherCard({ weatherData }) {
  return (
    <div className="my-5">
      {/* City name */}
      <h3 className="text-lg font-bold">
        {weatherData.name + " "}
        <sup className="text-sm font-light text-gray-600">
          {weatherData.sys.country}
        </sup>
      </h3>
      {/* date */}
      <h4 className="font-semibold">
        Last updated at: {new Date(weatherData.dt * 1000).toLocaleTimeString()}
      </h4>
      {/* temp and img */}
      <div className=" flex flex-col items-center">
        <div className="city-temp">
          <h1 className="text-9xl font-extrabold">
            {Math.round(weatherData.main.temp)}
            <sup>&deg;C</sup>
          </h1>
        </div>
        <div className="weather-img">
          <img
            className="city-icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      </div>
      {/* sunrise , sunset time */}
      <div className="sm:flex  sm:items-center sm:justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 text-yellow-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <p className="font-semibold">
            {new Date(weatherData.sys.sunrise * 1000).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 text-red-600"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-semibold">
            {new Date(weatherData.sys.sunset * 1000).toLocaleString()}
          </p>
        </div>
      </div>
      {/* weather condition */}
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">
          {weatherData.weather[0].description}
        </p>
        <p className="font-bold text-lg">
          {Math.round(weatherData.main.temp_min)}&deg; -{" "}
          {Math.round(weatherData.main.temp_max)}&deg;
        </p>
      </div>
      {/* speed ,Humidity, Pressure*/}
      <div className="sm:flex  sm:items-center sm:justify-between">
        <p className="font-semibold text-gray-700">
          Humidity: {weatherData.main.humidity}%
        </p>
        <p className="font-semibold text-gray-700">
          Pressure: {weatherData.main.pressure} hPa
        </p>
        <p className="font-semibold text-gray-700">
          Wind: {weatherData.wind.speed} meter/sec
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
