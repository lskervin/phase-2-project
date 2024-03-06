import React from 'react';
import { Link } from 'react-router-dom';

function GamePlay({ thumbnail }) {

    return (
        <div className='game-container'>
            <button className='close-game'>
                <Link to="/">Home</Link>
            </button>
            <div className="game-play-window">
                <img src={thumbnail} alt="Game Thumbnail" />
            </div>
        </div>
    );
}

export default GamePlay;