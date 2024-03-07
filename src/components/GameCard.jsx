import React from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom';
;


function GameCard({game, onClick , selectedGames, setSelectedGames}) {
  const [favorite, setFavorite] = useState(game.isFavorite);

  const handleSelect = () => {
    setFavorite(!favorite);
    onClick(game.id); // Call the onClick function with the game id
    fetch(`http://localhost:3000/games/${game.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFavorite: !favorite }), // Toggle the favorite status
    })
    .then((res)=> res.json())
    .then((data)=>console.log(data))
};
return (
      
      <div
          style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${game.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
          }}
          className="game-card"
      >
        <h3 className='game-card-title'>{game.title}</h3>
          <button onClick={handleSelect}>
              {game.isFavorite && favorite ? "Remove from Favorites ❤️" : "Add to Favorites"}
          </button>
          <button onClick={() => onClick(game.id)}><Link to={{
              pathname: `/play-game/${game.id}`,
          }}>Go to GamePlay</Link></button>
      </div>
);
}

export default GameCard;