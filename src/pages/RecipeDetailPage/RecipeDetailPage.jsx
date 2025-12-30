//Show Specific Recipe's Details
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../custom-hooks/useFetch";
import "./RecipeDetailPage.css";

export default function RecipeDetailPage() {
  const navigate = useNavigate();
  const { category, recipename, id } = useParams();
  //Fetch Single Recipe using the id provided and Show it.
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  return (
    <main id="recipe-detail-page" className="page">
      <h1>
        {recipename} | {id}
      </h1>

      {loading ? (
        <p>Loading Recipe Data...Please Wait 🙇‍♀️🥣</p>
      ) : error ? (
        <p>Error Loading Recipe Data! ⛔</p>
      ) : (
        <>
          <p className="recipe-area-category subtitle">{`${
            data.meals[0].strArea
          } ${category[0].toUpperCase() + category.slice(1)} Recipe`}</p>

          {data.meals[0].strYoutube !== '' && <iframe
            id="recipe-video"
            src={
              data.meals[0].strYoutube &&
              data.meals[0].strYoutube.replace("watch?v=", "embed/")
            }
          />}

          <h2>Ingredients</h2>
          <ul id="recipe-ingredients" className="d-flex flex-row">
            <div id="ingredient-name" className="ingredient-column">
              {Object.keys(data.meals[0])
                .filter(
                  (key) =>
                    key.includes("strIngredient") &&
                    data.meals[0][`${key}`] !== ""
                )
                .map((keyIngredient) => (
                  <li key={keyIngredient}>{data.meals[0][keyIngredient]}</li>
                ))}
            </div>
            <div id="ingredient-measurement" className="ingredient-column">
              {Object.keys(data.meals[0])
                .filter(
                  (key) =>
                    key.includes("strMeasure") &&
                    data.meals[0][`${key}`] !== " "
                )
                .map((keyMeasurement) => (
                  <li key={keyMeasurement}>{data.meals[0][keyMeasurement]}</li>
                ))}
            </div>
          </ul>
          <h3>Let's Get Cooking!</h3>
          <ol className="recipe-instructions">{
            data.meals[0].strInstructions && data.meals[0].strInstructions.split('. ').map((sentence) => 
                <li className="instruction-step" key={`${data.meals[0].idMeal}${sentence}`}>{` ${sentence}`}</li>
            )
            }</ol>
        </>
      )}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </main>
  );
}
