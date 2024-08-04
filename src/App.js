import React, { useState } from "react";
import {
  getWeatherByCity,
  getForecastByCity,
} from "./components/services/weatherService";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import { Button, Typography, Container, CircularProgress } from "@mui/material";
import { WbSunny, NightsStay } from "@mui/icons-material";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState({ message: null, type: null });
  const [unit, setUnit] = useState("metric");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleSearch = async (city) => {
    setIsLoading(true);
    try {
      const [weatherData, forecastData] = await Promise.all([
        getWeatherByCity(city, unit),
        getForecastByCity(city, unit),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      setError({ message: null, type: null });
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError({ message: "City not found", type: "not-found" });
        } else if (err.response.status === 401) {
          setError({ message: "Invalid API Key", type: "api-key" });
        } else {
          setError({
            message: "Error: " + err.response.data.message,
            type: "api-error",
          });
        }
      } else if (err.request) {
        setError({ message: "Network error", type: "network" });
      } else {
        setError({ message: "Something went wrong", type: "unknown" });
      }
      setWeather(null);
      setForecast(null);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = `${newTheme}-theme`;
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weather Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={theme === "light" ? <NightsStay /> : <WbSunny />}
        onClick={toggleTheme}
        style={{ marginBottom: "16px" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
      <SearchBar onSearch={handleSearch} />
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleUnit}
        style={{ marginTop: "16px", marginBottom: "16px" }}
      >
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </Button>
      {isLoading && <CircularProgress />}
      {error.message && (
        <Typography variant="body1" color="error" align="center">
          {error.message}
        </Typography>
      )}
      {weather && <WeatherCard weather={weather} unit={unit} />}
      {forecast && <Forecast forecast={forecast} />}
    </Container>
  );
}

export default App;
