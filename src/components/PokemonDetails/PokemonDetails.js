import React, { useState, useEffect } from "react";
import "./PokemonDetails.css";

const PokemonDetails = ({ foundPokemon, getPokemonImage }) => {
console.log(foundPokemon, 'foundOne<><>')

  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [error, setError] = useState("");

  let pokemonId = foundPokemon[0].url.replace(/\D/g, "").slice(1)
  const pokemonImage = getPokemonImage(pokemonId);

  const getPokemonDetails = async () => {

    let pokemonName = foundPokemon[0].name
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
      const res = await fetch(url);
      const pokemonDetails = await res.json();
      setPokemonDetails(pokemonDetails);
    } catch (error) {
      setError(error.message);
    }
  };

  const filterMoves = () => {
    const result = pokemonDetails.moves.map((move) => {
      const version = move.version_group_details[0].version_group.name
      const name = move.move.name.split("-").join(" ");

      if (version === 'red-blue') {
        return name;
      }
    }).filter(move => {
      return move !== undefined
    }).sort((elementA, elementB) => elementA - elementB)
    return result;
  }

  useEffect(() => {
    getPokemonDetails();
  }, [foundPokemon]);

  if (pokemonDetails.types) {
    return (
      <div className="pokemon-details-page">
        <div className="pokemon-details-container">
          <h1 className="pokemon-details-id">{pokemonDetails.id}</h1>

          <h1 className="pokemon-details-header capitalize">
            {pokemonDetails.name}{" "}
          </h1>

          <img
            src={pokemonImage}
            className="single-pokemon-pic"
            alt={`${pokemonDetails.name} image`}
            id={pokemonDetails.id}
          />

          <h2 className="types-header">Type</h2>
          <article className="features-container">
            {pokemonDetails.types
              .map((type) => (
                <p className="features" key={type.type.name}>
                  {type.type.name.split("-").join(" ")}
                </p>
              ))
              .sort((elementA, elementB) => elementA - elementB)}
          </article>

          <h2 className="abilities-header">Abilities</h2>

          <article className="features-container">
            {pokemonDetails.abilities.map((ability) => (
              <p className="features" key={ability.ability.name}>
                {ability.ability.name.split("-").join(" ")}
              </p>
            ))}
          </article>

          <h2 className="moves-header">Moves</h2>
          <article className="features-container move-scroll">
            {filterMoves().map((move) => (
              <p className="features" key={move}>
                {move}
              </p>
            ))}
          </article>
        </div>
      </div>
    );
  } else {
    return <h2 className="moves-header">Loading...</h2>;
  }
};

export default PokemonDetails;
