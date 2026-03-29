import React from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const Weather = ({ weatherData}) => {
  return (
    <div className="weather">
      <div className="weather-data">
        <h1 className="city">{weatherData.cityName}</h1>
        <h4 className="weather-main">{weatherData.main}</h4>
        <h1 className="temp">{weatherData.temp} °C</h1>
        <div className="extra-info">
          <div className="humidity ext-info">
            <div className="icon">
              <WiHumidity />
            </div>
            <p>Humidity: </p>
            <div className="data">{weatherData.humidity}</div>
          </div>
          <div className="wind ext-info">
            <div className="icon">
              <FaWind />
            </div>
            <p>Wind Speed: </p>
            <div className="data">{weatherData.windSpeed} Km/h</div>
          </div>
        </div>
      </div>
      <div className="img">
        {weatherData.icon && (
          <img src={weatherData.icon} alt={weatherData.main} />
        )}
      </div>
    </div>
  );
};

export default Weather;
