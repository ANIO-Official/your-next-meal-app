//Show Specific Recipe's Details
import { useNavigate, useParams} from "react-router-dom"


export default function RecipeDetailPage({id}){
    const navigate = useNavigate()
    const {category, recipename } = useParams()
    //Fetch Single Recipe using the id provided and Show it.

    return (
        <main>
            <h1>{recipename} | Recipe ID</h1>
            <img src="" alt="picture of food" />
            <p className="subtitle">Recipe Area Origin</p>
            <p className="recipe-category">{`${category[0].toUpperCase() + category.slice(1)}`}</p> {/* Make into link, use prop's category as the to in template literal */}
            {/*
                    If tags is not an empty string, create a p tag for each item separated by commas,
                     otherwise show nothing. 
                    strTags Property. List each if it exist
            */}
                {/* {tags != ''? tags.split(",").map((tag) => <p className="recipe-tag">{tag}</p>) : false} */}
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