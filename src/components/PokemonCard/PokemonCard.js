import React from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
    return (
        <section className="pokemon-card">
            <h2>{ props.name }</h2>
            <img src={ props.image } className="pokemon-image" alt={`Pokemon ${ props.name }`} />
        </section>
    )

}


export default PokemonCard;
