/*

This is where your custom hook code goes.

This hook is used to get the data of a pokemon. It takes a pokemon name or number as a 
parameter and should make the necessary request to the API.

GET https://pokeapi.co/api/v2/pokemon/{string | number}

Documentation available here https://pokeapi.co/

*/

import { useEffect, useState } from "react";

const useGetPokemonData = query => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const json = await response.json();
        setPokemonData(json);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    if (query) fetchData();
  }, [query]);

  return { pokemonData, error };
};

export default useGetPokemonData;
