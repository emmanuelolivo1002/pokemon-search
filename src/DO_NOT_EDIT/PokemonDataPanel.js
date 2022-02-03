import React from "react";

const PokemonDataPanel = ({ children, className }) => {
  return (
    <div
      className={
        "bg-white border-4 border-blue-400 shadow shadow-blue-300 py-2 px-4 rounded-lg " + className
      }
    >
      {children}
    </div>
  );
};

export default PokemonDataPanel;
