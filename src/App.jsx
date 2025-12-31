import "./App.css";

//Routing
import { Routes, Route } from "react-router-dom";

//Page Components
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/category/:category/:recipename/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
