import React from 'react';
// import './PokemonCard.css';


const PokemonCard = (props) => {
    return (
        <section className="pokemon-card">
            <h2>{ props.name }</h2>
            <img src={ props.image } className="pokemon-picture" alt={`Pokemon Image for ${ props.name }`} />
        </section>
    )

}


export default PokemonCard;