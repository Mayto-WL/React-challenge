import React from "react";
import Pokecard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>
      <Pokecard obj={mockPokemonData} />
    </div>
  );
}
