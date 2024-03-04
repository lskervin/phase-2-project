import React from 'react'
import './App.css'
import GameList from './components/GameList'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  const text = "hello"
  return(
      <div>
        <Header />
        <NavBar />
        <Outlet context={{text}}/>
      </div>
  )
}

export default App
