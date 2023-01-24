import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

import "./App.css";

function App() {
  const APP_ID = "eddeed0e";
  const APP_KEY = "f322794e7cdc2d1743ad0e967fd1d568";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (event) => {
    event.preventDefault();

    setSearch(event.target.value);
    console.log(search);
  };
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Search for recipes..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthLabels={recipe.recipe.healthLabels}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
