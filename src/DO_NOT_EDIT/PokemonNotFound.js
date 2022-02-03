import React from "react";

const PokemonNotFound = () => {
  return (
    <div className="bg-white border-4 border-red-400 shadow shadow-red-300 py-2 px-4 rounded-lg h-32 flex items-center">
      <p className="text-3xl">No Pokémon Found. Try a different query.</p>
    </div>
  );
};

export default PokemonNotFound;
