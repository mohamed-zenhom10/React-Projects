import React from 'react'

const PrayerTimes = ({times}) => {
  return (
    <div className="times">
      <div className="container">
        <div className="time" data-prayer="fajr">
          <h1>الفجر</h1>
          <p>{times.Fajr}</p>
        </div>
        <div className="time" data-prayer="dhuhr">
          <h1>الظهر</h1>
          <p>{times.Dhuhr}</p>
        </div>
        <div className="time" data-prayer="asr">
          <h1>العصر</h1>
          <p>{times.Asr}</p>
        </div>
        <div className="time" data-prayer="maghrib">
          <h1>المغرب</h1>
          <p>{times.Maghrib}</p>
        </div>
        <div className="time" data-prayer="isha">
          <h1>العشاء</h1>
          <p>{times.Isha}</p>
        </div>
      </div>
    </div>
  )
}

export default PrayerTimes
