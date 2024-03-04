import React from 'react'

function Search({ setSearch }) {
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  
  return (
    <div>
      <input 
        style={{
          width: "200px",
          height: "20px",
          borderColor: "black",
          padding: "10px",
          color: "black",
          borderRadius: "10px",
        }}
        placeholder="Search for a game by title"
        type="text"
        onChange={handleSearch}
      ></input>
    </div>
  )
}

export default Search