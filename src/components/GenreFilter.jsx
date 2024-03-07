import React from 'react'
import { useState } from 'react'

function GenreFilter({handleClick, setGames, games}) {
  const [favFilter, setFavFilter] = useState(false)

  // function handleFavorites(){
  //   setFavFilter(!favFilter)
  //   {favFilter? fetch('http://localhost:3000/games?isFavorite=1').then((res)=>res.json()).then((data)=>setGames(data))}
  // }
//   {games.map((game) => (
//     <GameCard key={game.id} game={game} value={game} onClick={handleGameCardClick} selectedGames={selectedGames} setSelectedGames={setSelectedGames}/>
// ))}
//   const genreList = games.map((game) => (game.genre))
// console.log(genreList)
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