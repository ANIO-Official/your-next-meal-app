//Show All Recipe Cards of the category

import { useNavigate } from "react-router-dom"


export default function CategoryPage(){
    const navigate = useNavigate()

    return (
        <main>
            <h2>Category Name</h2>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </main>
    )
}