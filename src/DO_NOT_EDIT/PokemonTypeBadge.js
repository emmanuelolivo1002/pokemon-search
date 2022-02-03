const PokemonTypeBadge = ({ type }) => {
  const backgroundColor = {
    bug: "bg-green-500",
    dark: "bg-stone-700",
    dragon: "bg-indigo-700",
    electric: "bg-yellow-400",
    fairy: "bg-rose-400",
    fighting: "bg-red-800",
    fire: "bg-orange-500",
    flying: "bg-violet-400",
    ghost: "bg-purple-800",
    grass: "bg-emerald-600",
    ground: "bg-amber-500",
    ice: "bg-cyan-500",
    normal: "bg-stone-400",
    poison: "bg-fuchsia-700",
    psychic: "bg-pink-600",
    rock: "bg-yellow-600",
    steel: "bg-slate-400",
    water: "bg-sky-500",
  };

  return (
    <div className={backgroundColor[type] + " rounded-xl text-white uppercase px-3"}>{type}</div>
  );
};

export default PokemonTypeBadge;
