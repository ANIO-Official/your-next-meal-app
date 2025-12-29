//Show All Recipe Cards of the category

import { NavLink, useNavigate, useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard"
import './CategoryPage.css'


export default function CategoryPage() {
    const navigate = useNavigate()
    const { category } = useParams()

    return (
        <main>
            <h2>{`${category[0].toUpperCase() + category.slice(1)}`} Recipes</h2>
            <nav className="sub-nav">
                <NavLink to='/'>{`Recipes > `}</NavLink>
                <NavLink to={`/category/${category}`}>{`${category} > `}</NavLink>
            </nav>
            {/* Use Relative Paths for each list recipe item created. */}
            <ul id="recipe-card-list">
                <RecipeCard />
                <RecipeCard />
            </ul>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </main>
    )
}