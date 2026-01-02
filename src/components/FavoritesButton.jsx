//For Adding Recipes to Favorites. Green or Blue
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { FavoritesContext } from "../context/FavoritesContext"


export default function FavoritesButton(){
    const [clicked, setClicked] = useState(false)
    
    const { id } = useParams();
    const {favoriteRecipes, addRecipe, deleteRecipe} = useContext(FavoritesContext)

    const toggleFavorited = () =>{
        const favorited = favoriteRecipes.filter((ID) => ID === id)

        favorited[0] === undefined? setClicked(false) : setClicked(true)
    }

    useEffect(() => {
        toggleFavorited()
    }, [favoriteRecipes]) //whenever a click event happens or favorites change
    

    const handleClick = () =>{
        if(!clicked){
            addRecipe(id)
            setClicked(true)
        }else{
            deleteRecipe(id)
            setClicked(false)
        }    
    }

    
    return (
        <button 
        onClick={handleClick}
        className={`favorites-button 
        d-flex flex-row 
        align-item-center 
        justify-content-center
        ${!clicked? '' : 'clicked'}
        `}>
            {!clicked? 'Add to Favorites ⭐': 'Remove from Favorites ⛔'}
        </button>
    )
}