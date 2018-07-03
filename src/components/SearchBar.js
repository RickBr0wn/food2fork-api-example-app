import React from "react"

const SearchBar = () => {
  return (
    <div className="search-bar u-margin-bottom-medium">
      <form>
        <input className="search-input" placeholder="Enter recipe name or ingredients" />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;