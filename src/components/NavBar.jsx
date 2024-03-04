import React, { useState } from 'react'
import GameForm from './GameForm'
import { Link } from 'react-router-dom';


function NavBar() {
  const [showForm, setShowForm] = useState()

  function handleHide() {
    setShowForm(!showForm)
  }

  return (
    <div className="side-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <button className = "show-form" onClick={handleHide}>{showForm ? "Hide Form" : "Show Form"}</button>
        {showForm ? <GameForm/> : null}
      </ul>
    </div>
  );
};

export default NavBar