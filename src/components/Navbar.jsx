// Navigation to pages. Probably the other other categories or Home & Favorites page.

export default function Navbar(){
    return(
        <header className="d-flex flex-row justify-content-between">
            <p id="nav-title">🧆Your Next Meal🍴</p>
            <ul className="d-flex flex-row" style={{listStyle:'none'}}>
                <li className="me-2"><a href="#">Home</a></li>
                <li className="me-2"><a href="#">Favorites</a></li>
            </ul>
        </header>
    )
}