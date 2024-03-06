import React from 'react';
import GameCard from './GameCard';
import { useOutletContext } from 'react-router-dom';
import GenreFilter from './GenreFilter';
import { useState } from 'react';
import Search from './Search';
import GamePlay from './GamePlay';

function GameList() {
    const [genre, setGenre] = useState('All Games');
    const [search, setSearch] = useState('');
    const [selectedGame, setSelectedGame] = useState(''); // Initialize as null

    const { gameList } = useOutletContext();

    const handleClick = (str) => {
        setGenre(str);
    };

    const filteredGames = gameList.filter((game) => {
        return (
          (genre === "All Games" || game.genre === genre) && // Filter by genre
          game.title.toLowerCase().includes(search.toLowerCase()) // Filter by search
        );
      });

    function handleGameCardClick (e) {
        setSelectedGame(e.target.value);
        console.log(selectedGame)
    };

    return (
        <div className='game-list-container'>
            <GenreFilter handleClick={handleClick} />
            <span className='search-label'>
                <h3>Search</h3>
            </span>
            <Search setSearch={setSearch} search={search} />
            <header className="game-list-header">{ search.length > 0? 'Search Results:' : genre }:</header>
            <div className="game-list">
                {filteredGames.map((game) => (
                    <GameCard key={game.id} game={game} value={game} onClick={handleGameCardClick} />
                ))}
            </div>
            {selectedGame && <GamePlay thumbnail={thumbnail} />} {/* Ensure selectedGame is not null before rendering */}
        </div>
    );
}

export default GameList;
