import React from 'react'
import './App.css'
import GameList from './components/GameList'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  const text = "hello"
  return(
      <div>
        <aside class="side-menu-container">
          <NavBar />
        </aside>
        < Header/>
        <main className="bottom-component">
          <Outlet context={{text}}/>
        </main>
      </div>
  )
}

export default App
