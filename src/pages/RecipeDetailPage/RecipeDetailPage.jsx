//Show Specific Recipe's Details
import { useNavigate, useParams} from "react-router-dom"


export default function RecipeDetailPage(){
    const navigate = useNavigate()
    const {category} = useParams()
    //Fetch Single Recipe and Show it.
    return (
        <main>
            <h1>Recipe Name | Recipe ID</h1>
            <img src="" alt="picture of food" />
            <p className="subtitle">Recipe Area Origin</p>
            <p className="recipe-category">{`${category[0].toUpperCase() + category.slice(1)}`}</p> {/* Make into link, use prop's category as the to in template literal */}
            <p className="recipe-video">Video Link</p>
            <h2>Ingredients</h2>
            <ul>
               <li className="recipe-ingredient">Recipe Ingredient here with Measure</li>
            </ul>
            <h3>Let's Get Cooking!</h3>
            <ol>
                Ordered steps here
            </ol>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </main>
    )
}