//Show Preview of Recipe

import { Link, useParams } from "react-router-dom";


//Pass prop of the specific recipe object.
export default function RecipeCard({name, thumbnail, id}) {
    const {category} = useParams()
    
    {/* Instead of example, it be the recipe's strMeal property to lowercase with ' ' replaced with - */}
    return (
        <Link to={`/category/${category}/${name}`}>
            <div className="recipe-card">
                <p className="recipe-name">{`${name[0].toUpperCase() + name.slice(1)}`}</p>{/* strMeal Property */}
                
            </div>
        </Link>

    )
}