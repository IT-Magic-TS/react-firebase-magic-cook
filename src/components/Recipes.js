import "./Recipes.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Recipes({ data: recipes }) {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return (
      <div className="w3-panel w3-red w3-padding w3-margin">
        No recipes to load....
      </div>
    );
  }
  return (
    <div className="recipes">
      {recipes.map(item => (
        <div
          className={
            mode == "dark"
              ? "w3-card-4 w3-sand w3-margin w3-padding card"
              : "w3-card-4 w3-dark-grey w3-margin w3-padding card"
          }
          key={item.id}
        >
          <div className="w3-container">
            <h2 className="w3-center">{item.title}</h2>
            <p className="w3-yellow w3-padding">{item.cookingTime} to make.</p>
          </div>

          <div className="w3-container">{item.method.substring(0, 100)}...</div>
          <footer className="w3-container">
            <Link
              className="w3-btn w3-block w3-white w3-center"
              to={`/recipes/${item.id}`}
            >
              Cook This
            </Link>
          </footer>
        </div>
      ))}
    </div>
  );
}
