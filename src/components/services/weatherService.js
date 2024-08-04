import axios from "axios";

const API_KEY = "53588a68e17f30e28862e1cbb784577e";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city, unit = "metric") => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: unit,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getForecastByCity = async (city, unit = "metric") => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: unit,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
