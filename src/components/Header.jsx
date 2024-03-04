import React from 'react'
import GenreFilter from './GenreFilter'
import Search from './Search'
import Logo from './Logo'

function Header({ setSearch }) {
  return (
<nav className="menu">
  <div className='header'><Logo/></div>
    <Search setSearch={setSearch}/>
  <div className="user-container">
    <div className="button-container">
      <button>
        <span className="profile-logo" role="img" aria-label="user">
          👤
        </span>
        <span className="profile-menu">username</span>
      </button>
    </div>
  </div>
</nav>
);
}
    

export default Header