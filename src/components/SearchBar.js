import React from 'react'

const SearchBar = props => (
  <div className="search-bar u-margin-bottom-medium">
    <form onSubmit={props.getRecipes}>
      <input className="search-input" placeholder="Enter recipe name or ingredients" name="ingredients" />
      <button className="search-button">Search</button>
    </form>
  </div>
)

export default SearchBar