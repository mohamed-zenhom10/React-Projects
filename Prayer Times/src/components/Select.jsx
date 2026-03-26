import React from 'react'

const cities = [
  { arName: "القاهره", enName: "Cairo" },
  { arName: "الإسكندرية", enName: "Alexandria" },
  { arName: "الجيزة", enName: "Giza" },
  { arName: "الشرقية", enName: "Sharqia" },
  { arName: "الدقهلية", enName: "Dakahlia" },
  { arName: "البحيرة", enName: "Beheira" },
  { arName: "المنيا", enName: "Minya" },
  { arName: "أسيوط", enName: "Assiut" },
  { arName: "سوهاج", enName: "Sohag" },
  { arName: "الأقصر", enName: "Luxor" },
];

const Select = ({city , setCity}) => {
  return (
    <div className="select">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map((city , index) => (
              <option key={index} value={city.enName}>{city.arName}</option>
            ))}
          </select>
        </form>
      </div>
    </div>
  )
}

export default Select
