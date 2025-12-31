// Navigation to pages. Probably the other other categories or Home & Favorites page.

import { NavLink, useNavigate, useSearchParams } from "react-router-dom"


export default function Navbar() {

    
    return (
        <header>
            <nav id="main-nav" className="d-flex flex-column justify-content-between">
                <NavLink id="nav-title" className="nav-item nav-title" to="/">🧆Your Next Meal🍴</NavLink>
                <ul className="d-flex flex-row nav-container" style={{ listStyle: 'none' }}>
                    <NavLink className="me-2 nav-item" to="/">Home🧊</NavLink>
                    <NavLink className="me-2 nav-item" to="/favorites">Favorites⭐</NavLink>
                    <NavLink className="me-2 nav-item" to="/search">Search 🔍</NavLink>
                </ul>
            </nav>
        </header>
    )
}