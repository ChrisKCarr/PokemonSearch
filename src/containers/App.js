import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=897&offset=0")
      .then((response) => response.json())
      .then((pokemon) => {
        // console
        //   .log
        //   pokemon["name"],
        //   pokemon["types"][0]["type"]["name"],
        //   pokemon
        //   ();
        this.setState({ pokemons: pokemon.results });
        // console.log(this.state);
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { pokemons, searchfield } = this.state;
    console.log("render total pokemon: " + pokemons.length);
    const filteredPokemons = pokemons.filter((pokemon) => {
      const urlArray = pokemon["url"].split("/");
      const pokeId = urlArray[urlArray.length - 2];
      return (
        pokemon.name.toLowerCase().includes(searchfield.toLowerCase()) ||
        pokeId === searchfield
      );
    });
    return !this.state.pokemons.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Pokédex Search</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList pokemons={filteredPokemons} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
