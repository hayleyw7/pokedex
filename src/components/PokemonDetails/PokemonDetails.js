import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ foundPokemonH, getPokemonImage }) => {

  let pokemonImage = getPokemonImage(foundPokemonH.id);

  return (
    <div className='pokemon-details-page'>
      <div className='pokemon-details-container'>  

        <h1 className='pokemon-details-id'>{foundPokemonH.id}</h1>

        <h1 className='pokemon-details-header capitalize'>{foundPokemonH.name} </h1>

        <img
          src={pokemonImage}      className='single-pokemon-pic'
          alt={`${foundPokemonH.name} image`}
          id={foundPokemonH.id}
        />        

        <h2 className='types-header'>Type</h2>
        <article className='features-container'>
          {foundPokemonH.types.map(type =>
            <p className='features' key={type.type.name}>{type.type.name.split('-').join(' ')}</p>
          ).sort((elementA, elementB) => elementA - elementB)}
        </article>

        <h2 className='abilities-header'>Abilities</h2>

        <article className='features-container'>
          {foundPokemonH.abilities.map(ability =>
            <p className='features' key={ability.ability.name}>{ability.ability.name.split('-').join(' ')}</p>
          )}
        </article>   

        <h2 className='moves-header'>Moves</h2>
        <article className='features-container'>
          {foundPokemonH.moves.map(move =>
            <p className='features' key={move.move.name}>{move.move.name.split('-').join(' ')}</p>
          )}
        </article>        
   

      </div>
    </div>  
  )
}

export default PokemonDetails;