import React, { useState } from 'react'
import './App.css'
import GameList from './components/GameList'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  const [search, setSearch] = useState("")
  console.log(search)


  const text = "hello"
  return(
      <div>
        <aside className="side-menu-container">
          <NavBar />
        </aside>
        < Header setSearch={setSearch}/>
        <main className="bottom-component">
          <Outlet context={{text}}/>
        </main>
      </div>
  )
}

export default App
