import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";
import Home from "./pages/Home";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <RecipeProvider>
      <Router>
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <Link to="/" className="font-bold text-lg">Recipe Finder 🍽️</Link>
          <Link to="/favorites" className="hover:underline">❤️ Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </RecipeProvider>
  );
};

export default App;
