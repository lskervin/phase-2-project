import React from 'react'
import GenreFilter from './GenreFilter'
import Search from './Search'

function Header() {
  return (
    <nav className="menu">
    <div className='header'>Header</div>
  <button>
    <span className="profile-logo" role="img" aria-label="user">
      👤
    </span>
    <span className="profile-menu">username</span>
  </button>
</nav>
);
}
    

export default Header