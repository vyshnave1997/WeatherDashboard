// src/components/WeatherCard.js
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  WbSunny,
  Opacity,
  AcUnit,
  Cloud,
  Visibility,
} from "@mui/icons-material";
import "./WeatherCard.css";

const WeatherCard = ({ weather, unit }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <Card style={{ marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {weather.name}, {weather.sys.country}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <Typography variant="body1" className="weather-description">
              {weather.weather[0].description}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <WbSunny /> Temperature: {weather.main.temp}°
              {unit === "metric" ? "C" : "F"}
            </Typography>
            <Typography variant="body1">
              <Opacity /> Humidity: {weather.main.humidity}%
            </Typography>
            <Typography variant="body1">
              <AcUnit /> Wind Speed: {weather.wind.speed}{" "}
              {unit === "metric" ? "m/s" : "mph"}
            </Typography>
            <Typography variant="body1">
              <Cloud /> Pressure: {weather.main.pressure} hPa
            </Typography>
            <Typography variant="body1">
              <Visibility /> Visibility: {weather.visibility / 1000} km
            </Typography>
            <Typography variant="body1" className="sunrise-sunset">
              <WbSunny /> Sunrise: {formatTime(weather.sys.sunrise)}
            </Typography>
            <Typography variant="body1" className="sunrise-sunset">
              <WbSunny /> Sunset: {formatTime(weather.sys.sunset)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
