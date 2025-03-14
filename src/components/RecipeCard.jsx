import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {


  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-full">
      <img src={recipe.image} alt={recipe.title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <Link to={`/recipe/${recipe.id}`} className="mt-2 inline-block text-blue-500 hover:underline font-medium">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
