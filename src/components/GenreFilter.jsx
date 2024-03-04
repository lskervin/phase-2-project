import React from 'react'

function GenreFilter() {
  function handleClick(e){
    console.log(e.target.value)
  }
  return (
    <div className='genre-filter-container'>
      <ul className='genre-list'>
        <li><button onClick={handleClick}>Favorites</button></li>
        <li><button onClick={handleClick}>Shooter</button></li>
        <li><button onClick={handleClick}>Battle Royale</button></li>
        <li><button onClick={handleClick}>Strategy</button></li>
        <li><button onClick={handleClick}>MMORPG</button></li>
        <li><button onClick={handleClick}>Fighting</button></li>
        <li><button onClick={handleClick}>MOBA</button></li>
        <li><button onClick={handleClick}>Action Game</button></li>
        <li><button onClick={handleClick}>Card</button></li>
        <li><button onClick={handleClick}>Sports</button></li>
        <li><button onClick={handleClick}>Racing</button></li>
        <li><button onClick={handleClick}>Card Game</button></li>
      </ul>
    </div>
  )
}

export default GenreFilter