//When not found

import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";


export default function NotFoundPage(){
    return (
        <main>
            <h2>404 Page Note Found</h2>
            <p>Don't worry! We'll take you back home buddy 🙂</p>
            <Link to={<HomePage/>}><button>Return to Home</button></Link>
        </main>
    )
}