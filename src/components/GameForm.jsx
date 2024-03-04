import React, { useState } from 'react'

function GameForm() {
  const [title, setTitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    let newGame = {
      title, thumbnail, description, genre
    }
    console.log(newGame)

  //   fetch("http://localhost:3000", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newGame),
  //   })
  //   .then(response=>response.json())
  //   .then(data=>setGames([...games, data]))  -> commented out until code is merged. need to import both games and setGames in order to make this happen. 
  } 

  return (
    <div className = "form">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Type title here"
          onChange={(e)=>{setTitle(e.target.value)}}
          value={title}  
        />
        <input
          type="text"
          placeholder="Paste image URL here"
          onChange={(e)=>{setThumbnail(e.target.value)}}
          value={thumbnail}
        />
        <textarea
          rows="10" 
          cols="20" 
          placeholder="Write your description here"
          onChange={(e)=>{setDescription(e.target.value)}}
          value={description}
        ></textarea>
        <select
          placeholder="Select genre"
          value={genre}
          onChange={(e)=>setGenre(e.target.value)}
        >
          <option>Shooter</option>
          <option>Battle Royale</option>
          <option>Strategy</option>
          <option>MMORPG</option>
          <option>Fighting</option>
          <option>MOBA</option>
          <option>Action Game</option>
          <option>Card</option>
          <option>Sports</option>
          <option>Racing</option>
          <option>Card Game</option>
        </select>
        <input
          className="submit-button"
          type="submit"
        ></input>
      </form>
      
    </div>
  )
}

export default GameForm