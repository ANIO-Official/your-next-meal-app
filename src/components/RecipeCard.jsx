//Show Preview of Recipe

import { Link, useParams } from "react-router-dom";


//Pass prop of the specific recipe object.
export default function RecipeCard({name, thumbnail, id}) {
    const {category} = useParams()
    const connectedName = name.split(' ').join('-')

    {/* Instead of example, it be the recipe's strMeal property to lowercase with ' ' replaced with - */}
    return (
        <Link to={`/category/${category}/${connectedName}/${id}`}>
            <div className="recipe-card">
                <p className="recipe-name">{name}</p>{/* strMeal Property */}
                <img className="recipe-thumbnail" src={thumbnail} />
            </div>
        </Link>

    )
}