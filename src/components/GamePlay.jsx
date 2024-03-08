import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

function GamePlay({ game }) {

    return (
        <div className="game-card">
            <div className='game-container'>
                <button className='close-game'>
                    <Link to="/">Home</Link>
                </button>
                <h1>GamePlay Component</h1>
                <div className="game-play-window">
                <h2>{game.title}</h2>
                {/* <img src={image} alt="Game Thumbnail" /> */}
                {/* Render other properties of the game object */}
                <Iframe
                    url="http://www.youtube.com/embed/1-xGerv5FOk"
                    width="550px"
                    height="550px"
                    position="absolute"
                    display="block"
                    showLoading={true}
                    loadingPattern='spokes'
                    showBorder={true}
                />
                </div>
            </div>
        </div>      
            );
    }

export default GamePlay;

// style={{
//     backgroundImage: `url(${game.thumbnail})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
// }}