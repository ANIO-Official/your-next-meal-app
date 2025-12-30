//Show All Recipe Cards of the category

import { NavLink, useNavigate, useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard"
import './CategoryPage.css'
import useFetch from "../../custom-hooks/useFetch";

export default function CategoryPage() {
    const navigate = useNavigate()
    const { category } = useParams()
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

    return (
        <main id="category-page">
            <h2>{`${category[0].toUpperCase() + category.slice(1)}`} Recipes</h2>
            <nav className="sub-nav">
                <NavLink className='sub-nav-link' to='/'>{`Categories > `}</NavLink>
                <NavLink className='sub-nav-link' to={`/category/${category}`}>{`${category} > `}</NavLink>
            </nav>
            {/* 
                Dynamic list of Recipe Cards for all recipes of the category.
                On click will open a Detail Page for the specific recipe via ID.
                
                Fetch the recipes for the category. 
            */}
            <ul id="recipe-card-list" className="row row-cols-3" style={{listStyle: 'none'}}>
                {
                    loading? <p className="subtitle">Loading Receipes... please wait 🙇‍♀️</p> :
                    error? <p className="subtitle">Error Loading Recipes! 😭</p> :
                    data.meals.map((meal) => 
                        <li key={meal.idMeal}><RecipeCard name={meal.strMeal} thumbnail={meal.strMealThumb} id={meal.idMeal}/></li>
                    )
                }
            </ul>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </main>
    )
}