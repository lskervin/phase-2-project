import React from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom';


function GameCard({game, handleGameCardClick}) {
  const { id, title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date, freetogame_profile_url } = game
  const [isSelected, setIsSelected] = useState(false);  

  function handleSelect() {

    setIsSelected(!isSelected);
  }


  return (
  <div className='game-card-title'><h3>{title}</h3>
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="game-card"
    >
      
      {/* <p id="description">{short_description}</p> */}
      <button onClick={handleSelect}>
        {isSelected ? "Added ❤️" : "Add to favorite"}
      </button>
      <button onClick={handleGameCardClick}><Link to={{
        pathname: `/play-game/${id}`,
      }}>Go to GamePlay</Link></button>
    </div>
    </div>
  );
}

export default GameCard

    // // Extract the current path from location object
    // const currentPath = location.pathname;

    // // Concatenate with the desired path to navigate to
    // const desiredPath = currentPath + '/play-game';

    // // Navigate to the desired path
    // window.location.href = desiredPath;