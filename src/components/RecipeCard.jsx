//Show Preview of Recipe

import { Link, useParams } from "react-router-dom";


//Pass prop of the recipe information. Use in the areas within the div
export default function RecipeCard() {
    const {category} = useParams()
    return (
        <Link to={`/recipe-details`}>
            <div className="recipe-card">
                <p className="recipe-name">Recipe Name</p>
                <p className="recipe-area">Area of Origin</p>
                <p className="recipe-tag">Tag</p>
            </div>
        </Link>

    )
}