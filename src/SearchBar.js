import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for your cryptocurrency..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
