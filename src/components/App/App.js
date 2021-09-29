import React, { useEffect, useState } from 'react'
import Search from "../Search/Search";
// import PokedexGrid from "../PokedexGrid/PokedexGrid";
import Header from "../Header/Header";
import Error from "../Error/Error";
import HowTo from "../HowTo/HowTo";
import Loader from '../Loader/Loader'
import "./App.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { Route } from 'react-router-dom';

const App = () => {
  const [pokeDex, setPokeDex] = useState([])
  const [foundPokemon, setFoundPokemon] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    setTimeout(() => {getPokeDexData()}, 1450)  // setTimeout is for animations
  }, []);

  const getPokeDexData = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const pokeDexData = await res.json()
      setPokeDex(pokeDexData.results)
    } catch (err) {
      console.log('Error: ', err)
    }
  };

  // eslint-disable-next-line    
  const addPokemon = (queriedPokemon) => {
    const foundPokemon = validatePokemonQuery(queriedPokemon)
    if(foundPokemon === undefined) {
      setError('error')
    } else {
      setFoundPokemon([foundPokemon])
    }
  };

  const validatePokemonQuery = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.toLowerCase();

    // eslint-disable-next-line
     return pokeDex.find((pokemon, index) => {
      let lowerCaseName = pokemon.name.toLowerCase();

      if (
        lowerCaseName === lowerCaseInput &&
        lowerCaseInput !== "" &&
        lowerCaseInput !== undefined
      ) {
        return pokemon;
      } else if (parseInt(lowerCaseInput)) {
        if (index + 1 === parseInt(lowerCaseInput)) {
          return pokemon;
        }
      }
    })
  };

  const getPokemonImage = (id) => {
    let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return pokemonImage;
  };

  const clearErrorMessage = () => {
    return setError('')
  };

  const clearPokemon = (e) => {
    setFoundPokemon([])
    clearErrorMessage();
  };

  const hideHowToBtn = (e) => {
    document.querySelector(".how-to").classList.add("hidden");
  }

  const showHowToBtn = (e) => {
    document.querySelector(".how-to").classList.remove("hidden");
  }

  const hideSearch = (e) => {
    document.querySelector(".search-form").classList.add("hidden");
  }  

  return (
    <div className="App">
      <Header hideHowToBtn={hideHowToBtn} foundPokemon={foundPokemon}/>
      <Route exact path='/'
        render={() =>

          <main className='main-content'>
            {!pokeDex.length && <Loader />}
            {pokeDex.length > 0 && <Search addPokemon={addPokemon} clearErrorMessage={clearErrorMessage} hideSearch={hideSearch} />}
            {error && <Error />}
            {foundPokemon.length !== 0 && !error && (
              <PokemonDetails
                foundPokemon={foundPokemon}
                getPokemonImage={getPokemonImage}
                clearPokemon={clearPokemon}
              />
            )}

          </main>
        }
      />
      <Route
        exact path='/howto'
        render={() => <HowTo clearPokemon={clearPokemon} showHowToBtn={showHowToBtn}/>}
      />
    </div>
  )
};

export default App
