import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=897&offset=0")
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemons(pokemon.results);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const urlArray = pokemon["url"].split("/");
    const pokeId = urlArray[urlArray.length - 2];
    return (
      pokemon.name.toLowerCase().includes(searchfield.toLowerCase()) ||
      pokeId === searchfield
    );
  });

  return !pokemons.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Pokédex Search</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList pokemons={filteredPokemons} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
