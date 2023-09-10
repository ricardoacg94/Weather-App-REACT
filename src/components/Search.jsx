import React, { useState } from "react";
import "./styles.css/search.css";
export const Search = ({ searchCity }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchCity(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="search-container" action="">
        <input
          type="text"
          placeholder="  Type..."
          onChange={onInputChange}
          value={inputValue}
        />
        <button className="btn">Search</button>
      </form>
    </>
  );
};
