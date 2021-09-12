import React from 'react';
// import '/PokedexGrid.css';


const PokedexGrid = (props) => {

    const myPokemon = props.pokedexData.map(pokemon => {
        let pokemonId = pokemon.url.replace(/\D/g, "").slice(1)
        let pokemonImage = props.getPokemonImage(pokemonId);

        return (
            <PokemonCard 
                key={pokemon.id}
                id={pokemon.id}
                image={pokemonImage}
                name={pokemon.name}
            />           
        )
    });

    return (
        <div className="all-pokemon">
            { myPokemon }
        </div>
    );
};
    
    
export default PokedexGrid;
