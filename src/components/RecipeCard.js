import React from 'react';

const RecipeCard = ({ recipe }) => {
  const { label, image, ingredients, url } = recipe;

  return (
    <div className="recipe-card bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={label} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{label}</h2>
        <ul className="mt-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">{ingredient.text}</li>
          ))}
        </ul>
        <button
          onClick={() => window.open(url, '_blank')}
          className="mt-4 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-900 text-white font-semibold py-2 px-4 rounded-full transform hover:scale-105 transition-transform focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-700"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
