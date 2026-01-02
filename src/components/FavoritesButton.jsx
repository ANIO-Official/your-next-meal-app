//For Adding Recipes to Favorites. Green or Blue
import { useParams } from "react-router-dom";
import { useContext, useState } from "react"
import { FavoritesContext } from "../context/FavoritesContext"


export default function FavoritesButton(){
    const [clicked, setClicked] = useState(false)
    const { id } = useParams();
    const {favoriteRecipes, addRecipe, deleteRecipe} = useContext(FavoritesContext)

    const handleClick = () =>{
        if(!clicked){
            addRecipe(id)
            setClicked(true)
            console.log(favoriteRecipes)

        }else{
            deleteRecipe(id)
            setClicked(false)
                    console.log(favoriteRecipes)

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