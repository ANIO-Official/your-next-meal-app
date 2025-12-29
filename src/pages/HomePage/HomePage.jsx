//Show All Categories. Do a grid 🤷‍♀️

export default function HomePage() {
  return (
    <>
      <main>
        <h1 id="recipe-app-title">🧆Your Next Meal🍴</h1>
        <p id="welcome-message">Hey good looking? Whatcha' cooking today?!</p>

        <div id="category-grid" className="row">
            <div id="categories-col-1" className="col d-flex flex-column">
                <button className="category-button">Category 1</button>
                <button className="category-button">Category 2</button>
                <button className="category-button">Category 3</button>
                <button className="category-button">Category 4</button>
                <button className="category-button">Category 5</button>
                <button className="category-button">Category 6</button>
                <button className="category-button">Category 7</button>
            </div>
            <div id="categories-col-2" className="col d-flex flex-column">
                <button className="category-button">Category 8</button>
                <button className="category-button">Category 9</button>
                <button className="category-button">Category 10</button>
                <button className="category-button">Category 11</button>
                <button className="category-button">Category 12</button>
                <button className="category-button">Category 13</button>
                <button className="category-button">Category 14</button>
            </div>
        </div>
      </main>
    </>
  );
}
