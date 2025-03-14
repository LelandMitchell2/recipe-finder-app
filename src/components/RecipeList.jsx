import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No recipes found. Try different ingredients!
          </p>
        )}
      </div>
    );
  };
  
  export default RecipeList;