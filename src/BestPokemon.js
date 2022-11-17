import React from "react";
const BestPokemon = ({ abilities }) => {
  return (
    <div>
      <p>My Favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability, index) => {
            return (
                <li key={index}>{ability}</li>
            );
        }
        )}
      </ul>
    </div>
  );
};

export default BestPokemon;
