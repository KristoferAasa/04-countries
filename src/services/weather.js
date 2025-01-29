import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = (capital) => {
  const url = `${baseUrl}?q=${capital}&appid=${api_key}`;
  return axios.get(url).then((response) => response.data).catch((err) => {
    console.error("Error:", err.response?.data || err.message);
    throw err;
  });
};

export default getWeather;
