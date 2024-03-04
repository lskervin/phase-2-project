import React from 'react'
import GameCard from './GameCard'
import { useOutletContext } from 'react-router-dom'

function GameList() {
  
  const {text}=useOutletContext() 
  console.log(text)



  
  return (
    <div>GameList</div>
  )
}

export default GameList