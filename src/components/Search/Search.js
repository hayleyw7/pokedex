import React, { useState } from 'react'
import './Search.css'

const Search = ({ addPokemon, clearErrorMessage, hideSearch }) => {
  const [queriedPokemon, setQueriedPokemon] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    clearErrorMessage()
    addPokemon(queriedPokemon)
    hideSearch()
  }

  return (
    <form className='search-form' >
      <input
        className="search-bar"
        type="search"
        name="queriedPokemon"
        placeholder="Find A Pokemon"
        onChange={(e) => setQueriedPokemon(e.target.value)}/>
      <button
        className="catch-button"
        type="submit"
        onClick={(e) => handleClick(e)}>
        Catch</button>
    </form>
  )
};

export default Search;
