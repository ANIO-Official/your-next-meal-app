//Show All Categories. Do a grid 🤷‍♀️
import './HomePage.css'
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className='text-center'>
        <h1 id="recipe-app-title">WorldWide Cookbook 📚</h1>
        <p id="welcome-message" className='subtitle'><i>Hey good looking? Whatcha' cooking?</i></p>

        <nav id="category-nav">
            <h2>Meat Based</h2>
            <div  className='category-row'>
                <NavLink to='category/beef'><button className="category-button">Beef</button></NavLink>
                <NavLink to='category/chicken'><button className="category-button">Chicken</button></NavLink>
                <NavLink to='category/pork'><button className="category-button">Pork</button></NavLink>
           </div>
            <div className='category-row'>
                <NavLink to='category/lamb'><button className="category-button">Lamb</button></NavLink>
                <NavLink to='category/goat'><button className="category-button">Goat</button></NavLink>
                <NavLink to='category/seafood'><button className="category-button">Seafood</button></NavLink>
            </div>
            <h2>Meal Based</h2>
            <div className='category-row'>
                <NavLink to='category/pasta'><button className="category-button">Pasta</button></NavLink>
                <NavLink to='category/side'><button className="category-button">Side</button></NavLink>
                <NavLink to='category/starter'><button className="category-button">Starter</button></NavLink>
            </div>
            <div className='category-row'>
                <NavLink to='category/breakfast'><button className="category-button">Breakfast</button></NavLink>
                <NavLink to='category/dessert'><button className="category-button">Dessert</button></NavLink>
            </div>    
            <h2>Vegan & Vegetarian Based</h2>           
            <div className='category-row'>
                <NavLink to='category/vegan'><button className="category-button">Vegan</button></NavLink>
                <NavLink to='category/vegetarian'><button className="category-button">Vegetarian</button></NavLink>
            </div>
            <h2>Other</h2>
            <div className='category-row'>
                <NavLink to='category/miscellaneous'><button className="category-button">Miscellaneous</button></NavLink>
            </div>
        </nav>
    </main>
  );
}
