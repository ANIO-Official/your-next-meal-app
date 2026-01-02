import { useMemo, useState, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";
import useLocalStorage from "../custom-hooks/useLocalStorage";

export default function FavoritesProvider({children}){
    //Set Favorites
    const [savedFavorites, setSavedFavorites] = useLocalStorage('favoriteRecipes', "[]")

    const [favoriteRecipes, setFavoriteRecipes] = useState(
        savedFavorites && savedFavorites.length > 0? savedFavorites : []
    )

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

    useEffect(() => {
        setSavedFavorites(favoriteRecipes) //whenever favorites change, update the stored value

    }, [favoriteRecipes])
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