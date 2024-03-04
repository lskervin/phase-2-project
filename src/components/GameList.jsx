import React from 'react'
import GameCard from './GameCard'
import { useOutletContext } from 'react-router-dom'

function GameList() {
  
  const {text}=useOutletContext() 
  console.log(text)

  return (
    <main className="body">
      <div className="game-list">GameList</div>
    </main>
  )
}

export default GameList