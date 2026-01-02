import { Link } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

//Preview
export default function FavoriteRecipePrev({ recipeID }) {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`
  );

  return (
    <div className="fave-preview">
      {loading ? (
        <p>Loading Favorite Recipe Preview...🍖</p>
      ) : error ? (
        <p>Error Loading Favorite Recipe Preview</p>
      ) : (
        <>
          <div>
            <p className="fave-preview-name">{data.meals[0].strMeal}</p>
            <Link 
            to={`/category/${data.meals[0].strCategory}/${data.meals[0].strMeal && data.meals[0].strMeal.split(' ').join('-')}/${recipeID}`}>
              <img
              src={data.meals[0].strMealThumb}
              className="fave-preview-img"
              />
            </Link>
          </div>
          <p className="fave-preview-category">{data.meals[0].strCategory}</p>
        </>
      )}
    </div>
  );
}
