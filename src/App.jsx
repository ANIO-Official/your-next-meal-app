import './App.css'

//Routing
import { Routes, Route } from 'react-router-dom'

//Page Components
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import RecipeDetailPage from './pages/RecipeDetailPage/RecipeDetailPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/category' element={<CategoryPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/recipe-details' element={<RecipeDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
