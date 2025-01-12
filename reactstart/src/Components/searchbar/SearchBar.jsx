import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <input
      className="search"
      type="text"
      placeholder="search here"
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
