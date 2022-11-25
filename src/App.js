import React from "react";
import Logo from "./Logo";
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
function App() {
  function logWhenClicked() {
    console.log("Click event successful");
  }
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  return (
    <div className="app-container">
      <Logo appName="Hayat's Pokedex" onClick={logWhenClicked}/>
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date}/>
    </div>
  );
}


export default App;
