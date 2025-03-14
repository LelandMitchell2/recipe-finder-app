import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { RecipeContext } from "../context/RecipeContext";
import { fetchRecipes } from "../api";

const Home = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);

  const handleSearch = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-700">
          Recipe Finder 🍽️
        </h1>
        <SearchBar onSearch={handleSearch} />
        {recipes.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">Start by searching for a recipe!</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default Home;
