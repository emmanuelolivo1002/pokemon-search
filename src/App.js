//! Imports - DO NOT EDIT THESE FILES
import Header from "./DO_NOT_EDIT/Header";
import PokemonDataPanel from "./DO_NOT_EDIT/PokemonDataPanel";
import PokemonNotFound from "./DO_NOT_EDIT/PokemonNotFound";
import PokemonStatProgressBar from "./DO_NOT_EDIT/PokemonStatProgressBar";
import PokemonTypeBadge from "./DO_NOT_EDIT/PokemonTypeBadge";
import pokemonData from "./example.json";
//! Imports - DO NOT EDIT THESE FILES

/* 
    ASSESSMENT INSTRUCTIONS:
    - Your assignment is to complete the code of this simple App.
    - The Text Input at the top of the App component should be used to search for a pokemon by name or number once you click the search button.
    - The Get Random button should be used to search for a random pokemon once you click the button.
    - You need to display the following data:
        - Name
        - Number
        - Image
        - Types (Pokemon can have one or two types)
        - Stats (HP, Attack, Defense, etc.)
    - You need to display the data in the following way: 
      https://imgur.com/a/X47AYqn
    - If no pokemon is found, display the PokemonNotFound component.
    - To Fetch the data create a custom hook that makes the API request in the useGetPokemonData.js file. 
      The hook should take a pokemon name or number as a parameter and should make the necessary request to the API and return the data of the pokemon.

*/

// START YOUR CODE HERE

// import useGetPokemonData from "./useGetPokemonData";

function App() {
  return (
    <main>
      <div className="bg-blue-900 pb-8 pt-16">
        <Header />
        {/* Inputs */}
        <div className="inputs">
          {/* Search Field and Button */}
          <div className="search-input">
            {/* THE VALUE OF THIS INPUT WILL BE USED AS THE SEARCH PARAMETER */}
            <input type="text" placeholder="Type name or number (eg. Bulbasaur, 35)" />

            {/* CLICKING THIS BUTTON SHOULD FIRE THE API REQUEST WITH THE QUERY IN THE INPUT */}
            <button>Search</button>
          </div>

          <p className="text-white"> - OR - </p>

          {/* CLICKING THIS BUTTON SHOULD FIRE THE API REQUEST WITH A RANDOM POKEMON */}
          <button className="random-button">Get Random</button>
        </div>
      </div>

      <div className="data-container">
        {/* 
        
        THIS IS WHERE YOU NEED TO DISPLAY THE DATA OF THE POKEMON IN THE DIFFERENT PANELS 
        POSITIONED IN A GRID LIKE THE EXAMPLE IMAGE:

        https://imgur.com/a/X47AYqn

        To display the type badges, use the PokemonTypeBadge component, which is already imported.
        This component takes a typeName as a prop, which is a string like "fire", "water", "electric", "bug", etc.
        REMEMBER THAT POKEMON CAN HAVE ONE OR TWO TYPES.

        To display the stat progress bars, use the PokemonStatProgressBar component, which is also imported.
        This component takes a statName and baseStat as props:
        statName which is a string like "hp", "attack", "defense", etc.
        baseStat which is an integer like 50, 100, 200, etc.

         */}

        {/* Pokemon Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-6 gap-2">
          <PokemonDataPanel className="row-span-1 row-start-1 col-span-1  rounded-lg flex items-center">
            <h3 className="text-xl uppercase font-bold">{pokemonData.name}</h3>
          </PokemonDataPanel>
          <PokemonDataPanel className="row-span-1 row-start-1 col-span-1  rounded-lg flex items-center">
            <h3 className="text-lg font-bold">#{pokemonData.id}</h3>
          </PokemonDataPanel>

          <PokemonDataPanel className="row-start-2 row-span-4  col-span-2  rounded-lg flex justify-center">
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              className="object-cover w-40 md:h-full md:w-auto"
            />
          </PokemonDataPanel>

          <PokemonDataPanel className="row-start-6 row-span-1 col-start-1 col-span-2   py-2 px-4 rounded-lg flex items-center justify-center gap-2">
            {pokemonData.types.map(({ type }) => (
              <PokemonTypeBadge typeName={type.name} />
            ))}
          </PokemonDataPanel>

          <PokemonDataPanel className="col-span-2 md:row-start-2 md:row-span-full   rounded-lg ">
            <h4 className="text-lg font-bold mb-4">Stats:</h4>
            {pokemonData.stats.map(({ base_stat, stat }) => (
              <PokemonStatProgressBar statName={stat.name} baseStat={base_stat} />
            ))}
          </PokemonDataPanel>
        </div>

        {/* 

          THIS COMPONENT SHOULD BE DISPLAYED WHERE NO POKEMON DATA WAS RETURNED FROM THE QUERY

        */}
        {/* <PokemonNotFound /> */}
      </div>
    </main>
  );
}

export default App;
