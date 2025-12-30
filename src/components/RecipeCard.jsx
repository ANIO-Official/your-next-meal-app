//Show Preview of Recipe

import { Link, useParams } from "react-router-dom";


//Pass prop of the specific recipe object.
export default function RecipeCard() {
    const {category} = useParams()
    
    {/* Instead of example, it be the recipe's strMeal property to lowercase with ' ' replaced with - */}
    return (
        <Link to={`/category/${category}/example-details`}>
            <div className="recipe-card">
                <p className="recipe-name">Recipe Name</p>{/* strMeal Property */}
                <p className="recipe-area">Area of Origin</p> {/* strArea Property */}
                <p className="recipe-tag">Tag</p> {/* strTags Property. List each if it exist*/}
                <p className="recipe-video">Video Link</p>
            </div>
        </Link>

    )
}