//! Imports - DO NOT EDIT THIS FILES
import Header from "./DO_NOT_EDIT/Header";
import PokemonNotFound from "./DO_NOT_EDIT/PokemonNotFound";
import PokemonStatProgressBar from "./DO_NOT_EDIT/PokemonStatProgressBar";
import PokemonTypeBadge from "./DO_NOT_EDIT/PokemonTypeBadge";
import pokemonData from "./example.json";

function App() {
  return (
    <main>
      <div className="bg-blue-900 pb-8 pt-16">
        <Header />
        {/* Inputs */}
        <div className="inputs">
          {/* Search Field and Button */}
          <div className="search-input">
            <input type="text" placeholder="Type name or number (eg. Bulbasaur, 35)" />
            <button>Search</button>
          </div>

          <p className="text-white"> - OR - </p>

          {/* Get Random Pokemon Button */}
          <button className="random-button">Get Random</button>
        </div>
      </div>

      <div className="data-container">
        {/* Pokemon Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-6 gap-2">
          <div className="row-span-1 row-start-1 col-span-1 bg-white border-4 border-blue-400 shadow shadow-blue-300 py-2 px-4 rounded-lg flex items-center">
            <h3 className="text-xl uppercase font-bold">{pokemonData.name}</h3>
          </div>
          <div className="row-span-1 row-start-1 col-span-1 bg-white border-4 border-blue-400 shadow shadow-blue-300  py-2 px-4 rounded-lg flex items-center">
            <h3 className="text-lg font-bold">#{pokemonData.id}</h3>
          </div>

          <div className="row-start-2 row-span-4  col-span-2 bg-white border-4 border-blue-400 shadow shadow-blue-300 py-2 px-4 rounded-lg flex justify-center">
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              className="object-cover w-40 md:h-full md:w-auto"
            />
          </div>

          <div className="row-start-6 row-span-1 col-start-1 col-span-2 bg-white border-4 border-blue-400 shadow shadow-blue-300  py-2 px-4 rounded-lg flex items-center justify-center gap-2">
            {pokemonData.types.map(({ type }) => (
              <PokemonTypeBadge typeName={type.name} />
            ))}
          </div>

          <div className="col-span-2 md:row-start-2 md:row-span-full bg-white border-4 border-blue-400 shadow shadow-blue-300 py-2 px-4  rounded-lg ">
            <h4 className="text-lg font-bold mb-4">Stats:</h4>
            {pokemonData.stats.map(({ base_stat, stat }) => (
              <PokemonStatProgressBar statName={stat.name} baseStat={base_stat} />
            ))}
          </div>
        </div>

        {/* Pokemon Not Found */}
        <PokemonNotFound />
      </div>
    </main>
  );
}

export default App;
