
import { useNavigate, useSearchParams, } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../custom-hooks/useFetch";
import RecipeCard from "../../components/RecipeCard";
import "./SearchResultPage.css"

export default function SearchResultPage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    //update value on user input of searchbar & search for recipe
    const handleChange = (event) =>{
        const input = event.target.value
        setQuery(input)
        setSearchParams({query: `${query}`}) //set the query
    }

    const handleClear = (event) =>{
        if(event.target.value === ""){
            setSearchParams({}) //remove query on clear & blur
        }
    }

    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    return (
        <main id="search-result-page" className="page">
            <div id="search-bar-container" className="nav-container">
                    <input 
                        onChange={handleChange} 
                        onBlur={handleClear}
                        id="recipe-search-bar" 
                        type='search' 
                        placeholder="Search for recipes... like pie!"/>
                </div>
            {
                data.meals && query !=='' && data.meals.length?
                <h1>Results for "{query}"</h1> :
                query ==='' ?
                <p className="subtitle">Use the searchbar above to look for recipes 🧀</p>:
                <p className="subtitle">No Results 🤷‍♀️</p>
            }
            
            {
                loading ? <p>Loading Matching Recipes...please wait🧇</p> :
                    error ? <p>Error Loading Matches! 🙇‍♀️</p> :
                    query == '' ? 
                    query :
                        <div className="row row-cols-3">
                            {data.meals && data.meals.map((meal) =>
                                <li key={meal.idMeal} style={{listStyle: 'none'}}>
                                <RecipeCard 
                                name={meal.strMeal}
                                thumbnail={meal.strMealThumb} 
                                id={meal.idMeal}
                                category={meal.strCategory} />
                                </li>)}
                        </div>
                        

            }
            <button onClick={() => navigate('/')}>Go Home</button>
        </main>
    )
}