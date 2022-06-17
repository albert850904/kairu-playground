import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Weather.scss";

function Weather(props) {
  const cityRef = useRef();
  const [cityWeather, setCityWeather] = useState();
  const [cityTemp, setCityTemp] = useState(0);

  // Fetch weather data from API
  const fetchWeather = useCallback(async (city) => {
    const url = `http://localhost:5000/api?q=${city}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    if (data.cod === 401) {
      alert("Invalid API Key");
      return;
    }

    setCityWeather(data.name);
    setCityTemp(kelvinToCelsius(data.main.temp));
  }, []);

  const kelvinToFahrenheit = (temp) => {
    return Math.ceil(((temp - 273.15) * 9) / 5 + 32);
  };

  const kelvinToCelsius = (temp) => {
    return Math.ceil(temp - 273.15);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cityRef.value === "") {
      alert("Please enter a city");
      return;
    }

    setCityWeather(cityRef.current.value);
    fetchWeather(cityRef.current.value);
  };

  useEffect(() => {
    fetchWeather("Taipei");
  }, [fetchWeather]);

  return (
    <div className="weather">
      <div className="weather__container">
        <div className="weather__container__result">
          <h1>Weather in {cityWeather}</h1>
          <h2>{cityTemp} &deg;C</h2>
        </div>
        <form id="weather-form" onSubmit={handleSubmit}>
          <input
            ref={cityRef}
            type="text"
            id="city-input"
            placeholder="Enter a city"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

Weather.propTypes = {};

export default Weather;
