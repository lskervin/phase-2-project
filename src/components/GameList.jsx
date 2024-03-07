import React, { useEffect } from 'react';
import GameCard from './GameCard';
import { useOutletContext } from 'react-router-dom';
import GenreFilter from './GenreFilter';
import { useState } from 'react';
import Search from './Search';
import GamePlay from './GamePlay';
import { Outlet } from 'react-router-dom'
import FavoritesList from './FavoritesList';

function GameList() {
    const [genre, setGenre] = useState('All Games');
    const [search, setSearch] = useState('');
    const [selectedGames, setSelectedGames] = useState([]); // Initialize as null

    const { games, setGames } = useOutletContext();

    const handleClick = (str) => {
        setGenre(str);
    };

    const handleGameCardClick = (id) => {
        if (!selectedGames.includes(id)) {
            setSelectedGames([...selectedGames, id]);
        } else {
            setSelectedGames(selectedGames.filter((selectedGame) => selectedGame !== id));
        }
        // You can perform any other actions related to clicking the game card here
        console.log(selectedGames);
    };

    

    const filteredGames = games.filter((game) => {
        return (
          (genre === "All Games" || game.genre === genre || game.isFavorite === true) && // Filter by genre
          game.title.toLowerCase().includes(search.toLowerCase())// Filter by search
        );
      });

    return (
        <div className='game-list-container'>
            <GenreFilter handleClick={handleClick} games={games} setGames={setGames}/>
            <span className='search-label'>
                <h3>Search</h3>
            </span>
            <Search setSearch={setSearch} search={search} />
            <header className="game-list-header">{ search.length > 0? 'Search Results:' : genre }:</header>
            <div className="game-list">
                {filteredGames.map((game) => (
                    <GameCard key={game.id} game={game} value={game} onClick={handleGameCardClick} selectedGames={selectedGames} setSelectedGames={setSelectedGames}/>
                ))}
            </div>
            {/* {selectedGames && filteredGames.map((game) => {return (
                selectedGames === game.id (<GamePlay thumbnail={game.thumbnail} />))} */}
             {/* Ensure selectedGames is not null before rendering */}
        </div>
    );
}

export default GameList;
