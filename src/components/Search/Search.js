import React from "react";

const Search = ({ city, setCity, getWeather }) => {
  return (
    <div className="search mt-2">
      <div className="flex items-center justify-between">
        {/* only for UI  */}
        <div>
          <div className="border-b-2 w-20 my-3 border-black dark:border-white"></div>
          <div className="border-b-2 w-20 my-3 border-black dark:border-white"></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {/* Input field */}
      <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={getWeather}
        className="w-full border-b-2 border-black dark:border-white outline-none"
      />
    </div>
  );
};

export default Search;
