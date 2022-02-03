const PokemonStatProgressBar = ({ statName, baseStat }) => {
  const statNameKeys = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Attack",
    "special-defense": "Sp. Defense",
    speed: "Speed",
  };
  const statColorClasses = {
    hp: "bg-red-400",
    attack: "bg-orange-400",
    defense: "bg-yellow-400",
    "special-attack": "bg-blue-400",
    "special-defense": "bg-green-400",
    speed: "bg-pink-400",
  };
  return (
    <div className="flex items-center gap-1 py-1">
      <p className="w-2/6  font-bold">{statNameKeys[statName]}</p>
      <div className="w-4/6 bg-slate-300 rounded-full h-2.5">
        <div
          className={statColorClasses[statName] + " h-2.5 rounded-full delay-250 w-0"}
          style={{ width: `${(baseStat / 255) * 100}%`, transition: "width 2s" }}
        ></div>
      </div>
    </div>
  );
};
export default PokemonStatProgressBar;
