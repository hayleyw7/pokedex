import React, { useState, useEffect} from 'react'
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokedexGrid.css";

const PokedexGrid = (props) => {
  const [queriedPokemon, setQueriedPokemon] = useState('')

  const handleClick = (e) => {
    setQueriedPokemon()
    e.preventDefault()
    this.props.clearErrorMessage()
    this.props.addPokemon(queriedPokemon)
  }

  const myPokemon = props.pokedexData.map((pokemon) => {
    let pokemonId = pokemon.url.replace(/\D/g, "").slice(1);
    let pokemonImage = props.getPokemonImage(pokemonId);

    return (
      <PokemonCard
        key={pokemonId}
        id={pokemonId}
        image={pokemonImage}
        name={pokemon.name}
        onClick={()=> handleClick({pokemonId})}
      />
    );
  });

  return <div className="all-pokemon">{myPokemon}</div>;
};

export default PokedexGrid;
