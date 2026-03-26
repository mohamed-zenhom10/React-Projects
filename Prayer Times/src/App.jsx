import React, { useEffect, useState } from "react";
import CityAndDate from "./components/CityAndDate";
import PrayerTimes from "./components/PrayerTimes";
import Select from "./components/Select";

const App = () => {
  const [city, setCity] = useState("Cairo");
  const [times, setTimes] = useState();
  const [date , setDate] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrayData = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=EG`,
        );
        const data = await response.json();
        const timings = data.data.timings;
        setTimes(timings);
        const date = data.data.date;
        setDate(date);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPrayData();
  }, [city]);

  return (
    <div className="main-app">
      {loading ? <p className="loading">جاري التحميل ...</p> : <CityAndDate date={date} city={city}/>}
      {loading ? <p className="loading">جاري التحميل ...</p> : <PrayerTimes times={times} />}
      <Select city={city} setCity={setCity} />
    </div>
  );
};

export default App;
