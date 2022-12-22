import React from "react";
import { useParams } from "react-router-dom";

const PokemonInfo = () => {
    const name = useParams();
    return (
        <div>
            <p>The Pokemon's name is {name.name}</p>
        </div>
    );
};
export default PokemonInfo;