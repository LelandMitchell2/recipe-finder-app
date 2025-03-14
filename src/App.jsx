import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { RecipeProvider, RecipeContext } from "./context/RecipeContext";
import Home from "./pages/Home";
import RecipeDetails from "./components/RecipeDetails";

const Navbar = () => {
  const { setRecipes } = useContext(RecipeContext);

  const handleClearSearch = () => {
    setRecipes([]);
    document.title = "Recipe Finder"; // Set title when clicking navbar
  };

  return (
    <nav className="bg-blue-600 text-white w-full px-6 py-4 flex justify-between max-w-7xl mx-auto">
      <Link to="/" className="font-bold text-lg" onClick={handleClearSearch}>
        Recipe Finder 🍽️
      </Link>
    </nav>
  );
};

const App = () => {
  useEffect(() => {
    document.title = "Recipe Finder"; // Set default title when the app loads
  }, []);

  return (
    <RecipeProvider>
      <Router>
        <div className="w-full min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
    </RecipeProvider>
  );
};

export default App;
