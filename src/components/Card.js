import React from "react";

const Card = ({ name, types, id }) => {
  return (
    // console.log("Card: " + id, name, types),
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robots"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png?200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Card;
