import React, { useState } from "react";
import Title from "./components/Title";
import SearchInput from "./components/SearchInput";
import Weather from "./components/Weather";

const App = () => {
  const [cityInput, setcityInput] = useState("");

  const [loading, setLoading] = useState(true);

  const [weatherData, setWeatherData] = useState({
    city: "",
    main: "",
    temp: "",
    icon: "",
    humidity: "",
    windSpeed: "",
  });

  const getWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ddec5a2a79089defcb4756d78252c247`,
      );
      const data = await response.json();

      const cityName = data.name;
      const main = data.weather[0].main;
      const icon = data.weather[0].icon;
      const temp = Math.floor(data.main.temp);
      const humidity = data.main.humidity;
      const windSpeed = Math.floor(data.wind.speed);
      setWeatherData({
        cityName,
        main,
        temp,
        icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        humidity,
        windSpeed,
      });
      setcityInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <Title />
        <SearchInput
          cityInput={cityInput}
          setcityInput={setcityInput}
          getWeatherData={getWeatherData}
        />
        {loading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <Weather weatherData={weatherData} cityInput={cityInput} />
        )}
      </div>
    </>
  );
};

export default App;
