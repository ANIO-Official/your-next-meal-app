//Show All Categories. Do a grid 🤷‍♀️
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import useFetch from "../../custom-hooks/useFetch";

export default function HomePage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  //Filter out the categories for organizing under headers.
  const meatCategories = data.categories.filter(
    (category) =>
      (category.strCategoryDescription.includes("meat") ||
        category.strCategoryDescription.includes("seafood")) &&
      !category.strCategory.includes("Vegan") &&
      !category.strCategory.includes("Vegetarian")
  );
  const nonMeatCategories = data.categories.filter((category) =>
    category.strCategory.includes("Vegan") ||
    category.strCategory.includes( "Vegetarian")
  );

  const mealTimeCategories = data.categories.filter((category) =>
    category.strCategoryDescription.includes("pasta") ||
    category.strCategoryDescription.includes("meal")
  );

  const otherCategories = data.categories.filter(
    (category) =>
      category.strCategory.includes("Miscellaneous")
  );

  return (
    <main className="text-center">
      <h1 id="recipe-app-title">WorldWide Cookbook 📚</h1>
      <p id="welcome-message" className="subtitle">
        <i>Hey good looking? Whatcha' cooking?</i>
      </p>

      {/* Dynamically make a Nav Link for Each Category using fetched Data */}
      {
        //Loading
        loading ? (
          <p className="subtitle">Loading Categories..Please Wait 🍖</p>
        ) : //An Error
        error ? (
          <p className="subtitle">Error Loading Categories ⛔</p>
        ) : (
          //Show Nav when not loading or not with error
          <nav id="category-nav">
            <h2>Meat Based</h2>
            <div className="category-row">
              {meatCategories.map((category) => (
                <li key={category.idCategory}>
                  <NavLink to={`category/${category.strCategory}`}>
                    <button className="category-button">
                      {category.strCategory[0].toUpperCase() +
                        category.strCategory.slice(1)}
                        <img className="category-image" src={`${category.strCategoryThumb}`}/>
                    </button>
                  </NavLink>
                </li>
              ))}
            </div>
            <h2>Meal Based</h2>
            <div className="category-row">
              {mealTimeCategories.map((category) => (
                <li key={category.idCategory}>
                  <NavLink to={`category/${category.strCategory}`}>
                    <button className="category-button">
                      {category.strCategory[0].toUpperCase() +
                        category.strCategory.slice(1)}
                        <img className="category-image" src={`${category.strCategoryThumb}`}/>
                    </button>
                  </NavLink>
                </li>
              ))}
            </div>
            <h2>Vegan & Vegetarian Based</h2>
            <div className="category-row">
              {nonMeatCategories.map((category) => (
                <li key={category.idCategory}>
                  <NavLink to={`category/${category.strCategory}`}>
                    <button className="category-button">
                      {category.strCategory[0].toUpperCase() +
                        category.strCategory.slice(1)}
                        <img className="category-image" src={`${category.strCategoryThumb}`}/>
                    </button>
                  </NavLink>
                </li>
              ))}
            </div>
            <h2>Other</h2>
            <div className="category-row">
              {otherCategories.map((category) => (
                <li key={category.idCategory}>
                  <NavLink to={`category/${category.strCategory}`}>
                    <button className="category-button">
                      {category.strCategory[0].toUpperCase() +
                        category.strCategory.slice(1)}
                        <img className="category-image" src={`${category.strCategoryThumb}`}/>
                    </button>
                  </NavLink>
                </li>
              ))}
            </div>
          </nav>
        )
      }
    </main>
  );
}
