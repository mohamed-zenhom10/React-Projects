import React, { useEffect, useState } from "react";

const CityAndDate = ({ date, city }) => {
  const [displayedCity, setDisplayedCity] = useState("");

  useEffect(() => {
    const setArabicCityName = async () => {
      try {
        switch (city) {
          case "Cairo":
            setDisplayedCity("القاهره");
            break;
          case "Alexandria":
            setDisplayedCity("الإسكندرية");
            break;
          case "Giza":
            setDisplayedCity("الجيزة");
            break;
          case "Sharqia":
            setDisplayedCity("الشرقية");
            break;
          case "Dakahlia":
            setDisplayedCity("الدقهلية");
            break;
          case "Beheira":
            setDisplayedCity("البحيرة");
            break;
          case "Minya":
            setDisplayedCity("المنيا");
            break;
          case "Assiut":
            setDisplayedCity("أسيوط");
            break;
          case "Sohag":
            setDisplayedCity("سوهاج");
            break;
          case "Luxor":
            setDisplayedCity("الأقصر");
            break;
          default:
            setDisplayedCity(city);
        }
      } catch (error) {
        console.log(error);
      }
    };

    setArabicCityName();
  }, [city]);

  return (
    <div>
      <div className="container">
        <h1 className="city">{displayedCity}</h1>
        <p className="date">
          {date.hijri.weekday.ar} | {date.readable}
        </p>
      </div>
    </div>
  );
};

export default CityAndDate;
