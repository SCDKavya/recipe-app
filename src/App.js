import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import './App.css';

const App = () => {
  const APP_ID = '3a1d2a6a';
  const APP_KEY = '1efe9ba6b50a9b0b12c89e9c2b310a09';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chocolate');
  const bg = "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg";
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    // Clear previous recipes
    setRecipes([]);
  };

  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
    <div className="bg-teal-50 min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
        <form
          onSubmit={getSearch}
          className="bg-grey p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative justify-center flex-grow w-full sm:w-1/2">
            <input
              type="text"
              value={search}
              onChange={updateSearch}
              placeholder="Search for recipes..."
              className="w-full py-3 px-4 bg-blue-100 border border-blue-300 focus:ring-blue-500 focus:border-blue-500 rounded-full text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-900 focus:bg-blue-100 focus:shadow-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-900 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-transform focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700"
          >
            Search Recipe
          </button>
        </form>
      </div>

      <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
