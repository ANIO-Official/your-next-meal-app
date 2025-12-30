//When not found

import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";


export default function NotFoundPage(){
    return (
        <main className="page">
            <h2>404 Page Not Found</h2>
            <p className="subtitle">😲 You found an 'Unknown Page' 🏴‍☠️!</p>
            <p>Don't worry! We'll take you back to the kitchen 👨‍🍳👩‍🍳</p>
            <Link to='/'><button>Return to Home</button></Link>
        </main>
    )
}