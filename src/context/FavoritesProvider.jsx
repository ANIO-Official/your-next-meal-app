import { useMemo, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export default function FavoritesProvider({children}){
    //Set Favorites
    const [favoriteRecipes, setFavoriteRecipes] = useState([])

    //Add new recipe ID to the list.
    const addRecipe = (recipeID) =>{
        setFavoriteRecipes((prevRecipes) =>
            [...prevRecipes,
                recipeID //add new recipe ID to the array
            ]
        )
    }

    //Remove Recipe from favorites
    const deleteRecipe = (recipeID) =>{
        setFavoriteRecipes(prevRecipes =>
            prevRecipes.filter((ID) => ID !== recipeID) //return all but the one to delete
        )
    }

    //Context Values

    const favoriteContextValues = useMemo(() => ({favoriteRecipes, addRecipe, deleteRecipe}), [favoriteRecipes])

    return (
        <>
            <FavoritesContext.Provider value={favoriteContextValues}>
                {children}
            </FavoritesContext.Provider>
        </>
    )
}