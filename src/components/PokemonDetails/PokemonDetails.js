import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ foundPokemonH }) => {

  return (
    <div className='pokemon-details-container'>

      <h1 className='pokemon-details-header capitalize'>{foundPokemonH.id}: {foundPokemonH.name} </h1>

      <h2>Moves:</h2>
      <article className='features-container'>
        {foundPokemonH.moves.map(move =>
          <p className='features' key={move.move.name}>{move.move.name.split('-').join(' ')}</p>
        )}
      </article>

      <h2>Types:</h2>
      <article className='features-container'>
        {foundPokemonH.types.map(type =>
          <p className='features' key={type.type.name}>{type.type.name.split('-').join(' ')}</p>
        )}
      </article>

      <h2>Abilities:</h2>

      <article className='features-container'>
        {foundPokemonH.abilities.map(ability =>
          <p className='features' key={ability.ability.name}>{ability.ability.name.split('-').join(' ')}</p>
        )}
      </article>      

    </div>
  )
}

export default PokemonDetails;