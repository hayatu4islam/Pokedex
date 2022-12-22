import React, { useState, useEffect } from "react";
const url = "https://pokeapi.co/api/v2/pokemon/1/";

function PokemonMoves() {
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setPokemonData(data);
            });
    },[]);
    console.log(pokemonData);
    //
        // if (pokemonData) {
        //   return (
        //     <div>
        //       <p>{pokemonData.name}'s moves:</p>
        //       <ul>
        //         {pokemonData.moves.map((move, index) => {
        //           return <li key={index}>{move.move.name}</li>;
        //         })}
        //       </ul>
        //     </div>
        //   );
        // } else {
        //   return null;
        // }
        return (
          <div>
            {pokemonData ? (
              <div>
                <p>{pokemonData.name}'s moves:</p>
                <ul>
                  {pokemonData.moves.map((move, index) => {
                    return <li key={index}>{move.move.name}</li>;
                  })}
                </ul>
              </div>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        );
    }
export default PokemonMoves;