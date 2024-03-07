import React from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import GamePlay from './GamePlay';
;


function GameCard({game, isFave}) {
  const [favorite, setFavorite] = useState(isFave);
  const [isSelected, setIsSelected] = useState(false);
//   const [idValue, setIdValue] = useState('')


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
// if (isSelected){
//     const GamePlayfilter = game.filter((item) => {
//         return (
//         (genre === "All Games" || game.genre === genre || game.isFavorite === true) && // Filter by genre
//           game.title.toLowerCase().includes(search.toLowerCase())// Filter by search
//         );
//       });
// }
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
              {isFave || favorite ? "Remove from Favorites ❤️" : "Add to Favorites"}
          </button>
          {/* <button><Link to={{
              pathname: `/gamecard/play-game/${game.id}`,
          }}>Go to GamePlay</Link></button> */}
          <div className='dont-display'>
            <GamePlay game={game}/>
          </div>
      </div>
);
}

export default GameCard;
// onClick={() => onClick(game.id)}
// onClick,