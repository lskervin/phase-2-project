import React from 'react'

function GenreFilter({handleClick}) {

  return (
    <div className='genre-filter-container'>
      <ul className='genre-list'>
        <li><button className="genre-button" onClick={() => handleClick("Favorites")}>Favorites</button></li>
        <li><button className="genre-button" onClick={() => handleClick("All Games")}>All Games</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Shooter")}>Shooter</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Battle Royale")}>Battle Royale</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Strategy")}>Strategy</button></li>
        <li><button className="genre-button" onClick={() => handleClick("MMORPG")}>MMORPG</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Fighting")}>Fighting</button></li>
        <li><button className="genre-button" onClick={() => handleClick("MOBA")}>MOBA</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Action Game")}>Action Game</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Card")}>Card</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Sports")}>Sports</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Racing")}>Racing</button></li>
        <li><button className="genre-button" onClick={() => handleClick("Card Game")}>Card Game</button></li>
      </ul>
    </div>
  )
}

export default GenreFilter