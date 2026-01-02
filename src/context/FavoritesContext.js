import React from "react";

//Should be filled with Recipe/Meal Objects that are favorited.
export const FavoritesContext = React.createContext([

  {
    favoriteRecipes: [], //array of recipe IDs
    addRecipe: (recipeID) => //add recipe by ID
      console.warn("No recipe ID has been provided to add."),
    deleteRecipe: (recipeID) => //remove recipe by ID
      console.warn("No recipe ID has been provided to delete."),
  },
]);
