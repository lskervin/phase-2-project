import React from 'react'
import GameCard from './GameCard'
import { useOutletContext } from 'react-router-dom'
import GenreFilter from './GenreFilter'

function GameList() {
  
  const {gameList}=useOutletContext() 
  console.log(gameList)



  
  return (
    <div className='game-list-container'>
      <GenreFilter/>
      <div className="game-list">
        {gameList.map((game)=>{ return <GameCard key={game.id} game={game}/>})}
      </div>
    </div>
  )
}

export default GameList