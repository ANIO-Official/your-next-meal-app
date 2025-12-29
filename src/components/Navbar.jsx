// Navigation to pages. Probably the other other categories or Home & Favorites page.

import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <header>
            <nav className="d-flex flex-row justify-content-between">
                <Link id="nav-title" className="nav-item" to="/">🧆Your Next Meal🍴</Link>
                <ul className="d-flex flex-row" style={{ listStyle: 'none' }}>
                    <Link className="me-2 nav-item" to="/">Home</Link>
                    <Link className="me-2 nav-item" to="/favorites">Favorites</Link>
                </ul>
            </nav>
        </header>
    )
}