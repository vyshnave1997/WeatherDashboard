// src/components/Forecast.js
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div className="forecast-container">
      <Typography variant="h6" component="h3" className="forecast-title">
        5-Day Forecast
      </Typography>
      <Grid container spacing={2}>
        {forecast.list.slice(0, 5).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card className="forecast-card">
              <CardContent>
                <Typography variant="h6" component="h4">
                  {formatDate(item.dt)}
                </Typography>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                />
                <Typography variant="body1">
                  {item.weather[0].description}
                </Typography>
                <Typography variant="body2">
                  Temp: {item.main.temp}°C
                </Typography>
                <Typography variant="body2">
                  Humidity: {item.main.humidity}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Forecast;
