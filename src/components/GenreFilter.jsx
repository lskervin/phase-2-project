import React from 'react'

function GenreFilter() {
  return (
    <div className='genre-filter-container'>
      <ul className='genre-list'>
        <li><button>Favorites</button></li>
        <li><button>Shooter</button></li>
        <li><button>Battle Royale</button></li>
        <li><button>Strategy</button></li>
        <li><button>MMORPG</button></li>
        <li><button>Fighting</button></li>
        <li><button>MOBA</button></li>
        <li><button>Action Game</button></li>
        <li><button>Card</button></li>
        <li><button>Sports</button></li>
        <li><button>Racing</button></li>
        <li><button>Card Game</button></li>
      </ul>
    </div>
  )
}

export default GenreFilter