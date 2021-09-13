import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ foundPokemonH }) => {

  return (
    <div className='pokemon-details-container'>

      <h1>{foundPokemonH.id}: {foundPokemonH.name} </h1>

      <h2>Moves:</h2>
      <article className='moves-container'>
        {foundPokemonH.moves.map(move =>
          <p className='moves' key={move.move.name}>{move.move.name}</p>
        )}
      </article>

      <h2>Types:</h2>
      <article className='types-container'>
        {foundPokemonH.types.map(type =>
          <p className='types' key={type.type.name}>{type.type.name}</p>
        )}
      </article>

    </div>
  )
}

export default PokemonDetails;

      // <article className='typesList'>
      //   {foundPokemonH.types.map(type =>
      //     <p className='types' key={type.type.name}>{type.type.name}</p>
      //   )}
      // </article>

      // <article className='abilitiesList'>
      //   {foundPokemonH.abilities.map(ability =>
      //     <p className='abilities' key={ability.ability.name}>{ability.ability.name}</p>
      //   )}
      // </article>

      // <article className='movesList'>
      //   {foundPokemonH.moves.map(move =>
      //     <p className='moves' key={move.move.name}>{move.move.name}</p>
      //   )}
      // </article>