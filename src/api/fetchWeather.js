import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_ID = process.env.REACT_APP_API_ID;

export const fetchWeatherData = async (location) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: location,
      units: "metric",
      appid: API_ID,
    },
  });

  const weatherData = response.data;
  return weatherData;
};
