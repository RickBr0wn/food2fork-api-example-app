import React from "react"

const SearchResults = props => {
  const { recipes } = props
  console.log(recipes)
  return (
    <div className="search-results">
      {
        recipes.map((recipe, id) => {
          const number = recipe.social_rank.toFixed(2)
          return(
            <a href={recipe.source_url} key={id} className="card">
              <img src={recipe.image_url} className="card-image" alt="food" />
              {/* <button className="view-button">View Recipe</button> */}
              <div className="recipe-data">
                <p className="recipe-title">{recipe.title}</p>
                <p className="publisher">{recipe.publisher}</p>
                <div className="social-score-container">
                  <p className="recipe-social-text">Rating:</p>
                  <p className="recipe-social-score u-center-text">{number}%</p>
                </div>
              </div>
            </a>
          )
        })
      }
    </div>
  );
};

export default SearchResults;