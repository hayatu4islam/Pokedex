import React, { useState } from "react";
const CaughtPokemon = ({ date }) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    const pokemonspecies = ["Squirtle", "Charizard", "Wartotle", "Blastoise", "Caterpie", "Metapod"];
    const random = Math.floor(Math.random() * pokemonspecies.length);
    setCaught(caught.concat(pokemonspecies[random]).concat(" "));
  }
  return (
    <div>
      <p>
        Caught {caught} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>{caught.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}</ul>
    </div>
  );
};
export default CaughtPokemon;
