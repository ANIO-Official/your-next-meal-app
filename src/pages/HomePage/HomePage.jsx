//Show All Categories. Do a grid 🤷‍♀️
import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className='text-center'>
        <h1 id="recipe-app-title">WorldWide Cookbook 📚</h1>
        <p id="welcome-message" className='subtitle'><i>Hey good looking? Whatcha' cooking?</i></p>

        <div id="category-grid">
            <h2>Meat Based</h2>
            <div  className='category-row'>
                <Link to='/category/beef'><button className="category-button">Beef</button></Link>
                <Link to='/category/chicken'><button className="category-button">Chicken</button></Link>
                <Link to='/category/pork'><button className="category-button">Pork</button></Link>
           </div>
            <div className='category-row'>
                <Link to='/category/lamb'><button className="category-button">Lamb</button></Link>
                <Link to='/category/goat'><button className="category-button">Goat</button></Link>
                <Link to='/category/seafood'><button className="category-button">Seafood</button></Link>
            </div>
            <h2>Meal Based</h2>
            <div className='category-row'>
                <Link to='/category/pasta'><button className="category-button">Pasta</button></Link>
                <Link to='/category/side'><button className="category-button">Side</button></Link>
                <Link to='/category/starter'><button className="category-button">Starter</button></Link>
            </div>
            <div className='category-row'>
                <Link to='/category/breakfast'><button className="category-button">Breakfast</button></Link>
                <Link to='/category/dessert'><button className="category-button">Dessert</button></Link> 
            </div>    
            <h2>Vegan & Vegetarian Based</h2>           
            <div className='category-row'>
                <Link to='/category/vegan'><button className="category-button">Vegan</button></Link>
                <Link to='/category/vegetarian'><button className="category-button">Vegetarian</button></Link>  
            </div>
            <h2>Other</h2>
            <div className='category-row'>
                <Link to='/category/miscellaneous'><button className="category-button">Miscellaneous</button></Link>
            </div>
        </div>
    </main>
  );
}
