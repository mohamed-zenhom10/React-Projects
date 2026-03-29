import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = ({ cityInput, setcityInput , getWeatherData }) => {
  return (
    <div className="form">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={cityInput}
          onChange={(e) => setcityInput(e.target.value)}
          type="text"
          placeholder="Search for city here ..."
        />
        <button onClick={() => getWeatherData(cityInput)}>
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
