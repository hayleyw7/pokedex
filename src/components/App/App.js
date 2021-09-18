import React, { useEffect, useState } from 'react'
import Search from "../Search/Search";
import PokedexGrid from "../PokedexGrid/PokedexGrid";
import Header from "../Header/Header";
import HowTo from "../HowTo/HowTo";
import "./App.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { Route } from 'react-router-dom';

const App = () => {
  const [pokeDex, setPokeDex] = useState([])
  const [foundPokemon, setFoundPokemon] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getPokeDexData()
  }, []);

  const getPokeDexData = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const pokeDexData = await res.json()
      console.log(pokeDexData)
      setPokeDex(pokeDexData.results)
    } catch (err) {
      console.log('Error: ', err)
    }
  };

  const addPokemon = (queriedPokemon) => {
    const foundPokemon = validatePokemonQuery(queriedPokemon)
    setFoundPokemon([foundPokemon])
  };

  const validatePokemonQuery = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase();

    const verifiedName = pokeDex.find((pokemon, index) => {
      let lowerCaseName = pokemon.name.toLowerCase();

      if (
        lowerCaseName.includes(lowerCaseInput) &&
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

    if (verifiedName === undefined) {
      return this.setState({ error: "Not  a valid Name or id , try again" });
    } else {
      return verifiedName;
    }
  };

  const getPokemonImage = (id) => {
    let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

    return pokemonImage;
  };

  const clearErrorMessage = () => {
    return setError(null)
  };

  const clearPokemon = (e) => {
    setFoundPokemon([])
    clearErrorMessage();
  };

  return (
    <div className="App">
      <Header />
      <Route exact path='/'
        render={() =>
          <main className='main-content'>
            <Search addPokemon={addPokemon} clearErrorMessage={clearErrorMessage}/>
            {error && <h2 className="search-error-message"> {error}</h2>}
            {foundPokemon.length !== 0 && !error && (
              <PokemonDetails
                foundPokemon={foundPokemon}
                getPokemonImage={getPokemonImage}
              />
            )}
            {foundPokemon.length === 0 && (
              <PokedexGrid
                pokedexData={pokeDex}
                getPokemonImage={getPokemonImage}
              />
            )}
          </main>
        }
      />
      <Route
        exact path='/help'
        render={() => <HowTo clearPokemon={clearPokemon}/>}
      />
    </div>
  )
};

export default App
