import React from 'react'

const SearchBar = props => (
  <div className="search-bar u-margin-bottom-medium">
    <form onSubmit={props.getRecipes} autoComplete="off">
      <input className="search-input" placeholder="Enter recipe name or ingredients" name="ingredients" id="search" />
      <label htmlFor="search" className="search-label">Search for image</label>
      <button className="search-button">Search</button>
    </form>
  </div>
)

export default SearchBar