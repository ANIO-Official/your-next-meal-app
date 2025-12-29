//Show Specific Recipe's Details
import { useNavigate } from "react-router-dom"


export default function RecipeDetailPage(){
    const navigate = useNavigate()

    
    return (
        <main>
            <h1>Recipe Name | Recipe ID</h1>
            <img src="" alt="picture of food" />
            <p className="subtitle">Recipe Area Origin</p>
            <p>Recipe Category</p> {/* Make into link, use prop's category as the to in template literal */}
            <h2>Ingredients</h2>
            <ul>
                All Ingredients here dynamically with their measure pair
            </ul>
            <h3>Let's Get Cooking!</h3>
            <ol>
                Ordered steps here
            </ol>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </main>
    )
}