import React from 'react'
import { useState } from 'react';

function GameCard({game}) {
  const [isSelected, setIsSelected] = useState(false);
  function handleSelect() {

    setIsSelected(!isSelected);
  }
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${game.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={isSelected ? "game-card selected" : "game-card"}
    >
      {/* <img src={superhero.image} /> */}
      <h3>{game.title}</h3>
      {/* <p>{superhero.group}</p> */}
      <p id="description">{game.short_description}</p>
      <button onClick={handleSelect}>
        {isSelected ? "Added ❤️" : "Add to favorite"}
      </button>
    </div>
  );
}

export default GameCard