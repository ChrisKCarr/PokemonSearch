import React from "react";
import Card from "./Card";

const CardList = ({ pokemons }) => {
  const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

  return (
    <div>
      {pokemons.map((poke, i) => {
        const urlArray = poke["url"].split("/");
        const pokeId = urlArray[urlArray.length - 2];
        const pokeName = capitalize(poke.name);
        return (
          // console.log("CardList: " + poke["url"]),
          // console.log("urlArray: " + urlArray),
          // console.log("ID: " + pokeId),
          // console.log(pokeName),
          // console.log("types: " + pokeId.types),
          <Card key={pokeId} id={pokeId} name={pokeName} types={pokeId.types} />
        );
      })}
    </div>
  );
};

export default CardList;
