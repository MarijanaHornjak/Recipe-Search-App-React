import React from "react";

const Recipe = ({ title, calories, image, ingredients, healthLabels }) => {
  return (
    <div
      className={
        typeof healthLabels !== "undefined"
          ? healthLabels.includes("Vegan")
            ? "recipe vegan"
            : "recipe"
          : "recipe"
      }
    >
      <h1 className="title">{title}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient) => (
          <li className="ingredient">{ingredient.text}</li>
        ))}
      </ul>
      <p
        className={
          typeof calories !== "undefined"
            ? calories.toFixed() < 2000
              ? "calories low-calories"
              : "calories"
            : "calories"
        }
      >
        {calories.toFixed()} calories
      </p>
      <img src={image} alt={title} className="image" />
    </div>
  );
};

export default Recipe;
