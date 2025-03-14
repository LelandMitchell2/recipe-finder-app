import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const API_URL = `https://api.spoonacular.com/recipes/${id}/information`;
      const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
      try {
        const { data } = await axios.get(API_URL, { params: { apiKey: API_KEY } });
        setRecipe(data);
        document.title = `${data.title} - Recipe Finder`; // Update page title
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchRecipeDetails();

    return () => {
      document.title = "Recipe Finder"; // Reset title when leaving
    };
  }, [id]);

  return recipe ? (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-5xl p-8 bg-white shadow-xl rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg my-6" />

        <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          {recipe.extendedIngredients.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6">Instructions:</h3>
        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Loading...</p>
  );
};

export default RecipeDetails;
