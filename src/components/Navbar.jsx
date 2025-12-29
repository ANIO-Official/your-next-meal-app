// Navigation to pages. Probably the other other categories or Home & Favorites page.

import { NavLink } from "react-router-dom"


export default function Navbar() {
    return (
        <header>
            <nav className="d-flex flex-row justify-content-between">
                <NavLink id="nav-title" className="nav-item" to="/">🧆Your Next Meal🍴</NavLink>
                <ul className="d-flex flex-row" style={{ listStyle: 'none' }}>
                    <NavLink className="me-2 nav-item" to="/">Home</NavLink>
                    <NavLink className="me-2 nav-item" to="/favorites">Favorites</NavLink>
                </ul>
            </nav>
        </header>
    )
}