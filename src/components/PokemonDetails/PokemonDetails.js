import React, { useState, useEffect } from "react";
import Loader from '../Loader/Loader'
import "./PokemonDetails.css";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';


const PokemonDetails = ({ foundPokemon, getPokemonImage, clearPokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [setError] = useState("");

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

  const handleClick = (e) => {
    clearPokemon(e);
  }

  // eslint-disable-next-line 
  const filterMoves = () => {
    // eslint-disable-next-line 
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
    setTimeout(() => {getPokemonDetails()}, 1400);
    // eslint-disable-next-line 
  }, [foundPokemon]);

  useEffect(() => {
      gsap.fromTo('.single-pokemon-pic' ,
        {
          opacity: 0,
          scale: -5,
          duration: 2.5,
          ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
          y: -1000,
          rotation: 1080,
          delay: -8
        },
        {
            opacity: 1,
            duration: 2.5,
            ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
            y: 0,
            scale: 1,
            rotation: 0
        })
      if (pokemonDetails.name === "pikachu") {
            var audio  = document.getElementsByClassName("pokemon-audio")[0]
            audio.loop = false;
            audio.src  = `https://play.pokemonshowdown.com/audio/cries/${pokemonDetails.name}.ogg`;
            audio.play()
        }
  },[pokemonDetails]);

  if (pokemonDetails.types) {
    return (
      <div className="pokemon-details-page">
        <div className="pokemon-details-container">
          <audio className="pokemon-audio"></audio>
          <Link
            to={`/`}
            key={`home`}
          >
            <img
              alt='go back icon'
              className='x-icon-details'
              src='Images/x-icon.png'
              align='right'
              onClick={(e) => handleClick(e)}
            ></img>
          </Link>

          <h1 className="pokemon-details-id">{pokemonDetails.id}</h1>

          <h1 className="pokemon-details-header capitalize">
            {pokemonDetails.name}{" "}
          </h1>

          <img
            src={pokemonImage}
            className="single-pokemon-pic"
            alt={`${pokemonDetails.name}`}
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
    return <Loader />;
  }
};

export default PokemonDetails;
