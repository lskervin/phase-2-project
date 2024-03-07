import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function GameForm() {
  const { games, setGames } = useOutletContext();
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    short_description: "",
    game_url: "",
    genre: "Shooter",
    platform: "",
    publisher: "",
    developer: "",
    release_date: "",
    freetogame_profile_url: ""
  });

  function handleSubmit(e) {
    e.preventDefault(); 

    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => setGames([...games,data]));
  } 

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="form">
      <header>Add New Game!</header>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Type title here"
          onChange={handleChange}
          name="title"
          value={formData.title}  
        />
        <label>Image Url:</label>
        <input
          type="text"
          placeholder="Paste image URL here"
          name="thumbnail"
          onChange={handleChange}
          value={formData.thumbnail}
        />
        <label>Description:</label>
        <textarea
          rows="10" 
          cols="58" 
          placeholder="Write your description here"
          onChange={handleChange}
          name="short_description"
          value={formData.short_description}
        ></textarea>
        <label>Genre:</label>
        <select
          placeholder="Select genre"
          value={formData.genre}
          onChange={handleChange}
          name="genre"
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
