import React from 'react';
const Logo = () => {
    const appName = "Hayat's Pokedex";
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex image"
      />
    </header>
  );
};
 export default Logo;