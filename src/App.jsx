import React from 'react'
import './App.css'
import GameList from './components/GameList'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState, useEffect } from 'react';

function App() {
  const [games, setGames] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then((res)=>res.json())
    .then((data)=>setGames(data))
  },[])

  const gameList = games
  return(
      <div className='container'>
        <aside className="side-menu-container">
          <NavBar />
        </aside>
        <div className='header-container'>
          < Header/>
        </div>
        <main className="bottom-component">
          <Outlet context={{gameList}} />
        </main>
      </div>
  )
}

export default App
