import React from "react";
import Logo from "./Logo";
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
function App() {
  return (
    <div className="app-container">
      <Logo/>
      <BestPokemon/>
      <CaughtPokemon/>
    </div>
  );
}


export default App;
