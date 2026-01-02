//Show All Fave Categories

import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import FavoriteRecipePrev from "../../components/FavoriteRecipePrev";
import './FavoritesPage.css'

export default function FavoritesPage() {
  const { favoriteRecipes } = useContext(FavoritesContext);

  return (
    <main className="text-center">
      <h1>🥣 Your Cookbook 📖</h1>
      <p className="subtitle">
        <i>⭐Favorite Recipes⭐</i>
      </p>
      {/* Access the Favorites Context to display all favorite recipes as recipe cards. */}
      {favoriteRecipes.length === 0 ? (
        <p>No Favorites Yet? Go Explore, and try something new!</p>
      ) : (
        favoriteRecipes.map((recipeID) => (
          <FavoriteRecipePrev recipeID={recipeID}></FavoriteRecipePrev>
        ))
      )}
    </main>
  );
}
