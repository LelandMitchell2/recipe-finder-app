// import axios from "axios";

// const API_URL = "https://api.spoonacular.com/recipes/findByIngredients";
// const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

// export const fetchRecipes = async (ingredients) => {
//   try {
//     const response = await axios.get(API_URL, {
//       params: { ingredients, apiKey: API_KEY, number: 10 },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//     return [];
//   }
// };


import axios from "axios";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export const fetchRecipes = async (ingredients) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        includeIngredients: ingredients,
        number: 10,  // Get 10 random recipes that include the ingredient
        sort: "random",  // Get random results instead of ranked matches
        apiKey: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
