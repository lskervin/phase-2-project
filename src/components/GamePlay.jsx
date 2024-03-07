import React from 'react';
import { Link } from 'react-router-dom';

function GamePlay({ game }) {

    return (
        <div className="game-card" style={{
            backgroundImage: `url(${game.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className='game-container'>
                <button className='close-game'>
                    <Link to="/">Home</Link>
                </button>
                <h1>GamePlay Component</h1>
                {game && (
                <div className="game-play-window">
                <h2>{game.title}</h2>
                {/* <img src={image} alt="Game Thumbnail" /> */}
                {/* Render other properties of the game object */}
                </div>
                )}
            </div>
        </div>      
            );
    }

export default GamePlay;

        