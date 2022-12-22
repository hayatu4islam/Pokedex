import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./Logo";
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";
import PokemonInfo from "./PokemonInfo";
function App() {
  function logWhenClicked() {
    console.log("Click event successful");
  }
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  return (
    <BrowserRouter>
      <div className="app-container">
        <ul>
          <li>
            <Link to="/best-pokemon">Best Pokemon</Link>
          </li>
          <li>
            <Link to="/caught-pokemon">Caught Pokemon</Link>
          </li>
        </ul>

        <Logo appName="Hayat's Pokedex" onClick={logWhenClicked} />
        {/* <BestPokemon abilities={abilities} /> */}
        {/* <CaughtPokemon currentDate={date} /> */}
        <PokemonMoves />
        <Routes>
          <Route
            path="/best-pokemon"
            element={<BestPokemon abilities={abilities} />}
          ></Route>
          <Route
            path="/caught-pokemon"
            element={<CaughtPokemon currentDate={date} />}
          ></Route>
          <Route path="/pokemon/:name" element={<PokemonInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;