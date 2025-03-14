import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.trim()) onSearch(query);
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6">
        <input
          type="text"
          placeholder="Enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    );
  };
  
  export default SearchBar;
  