import React, { Component } from 'react';
import Search from '../Search/Search';
import { getPokedexData } from '../../apiCalls';
import PokedexGrid from '../PokedexGrid/PokedexGrid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeDex: [],
      foundPokemon: [],
      error: null,
      // what will we need for favoriting?
    }
  }

  componentDidMount() {
    getPokedexData()
    .then(data => {
      this.setState({
        pokeDex: data.results
      })
    })
  }

  addPokemon = (queriedPokemon) => {
    const foundPokemon = this.validatePokemonData(queriedPokemon)
    this.setState({
      foundPokemon: [foundPokemon]
    })
    //set state with the validated pokemon
  }

  validatePokemonData = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase()
    
    const verifiedName = this.state.pokeDex.find((pokemon, index) => {
      let lowerCaseName = pokemon.name.toLowerCase()

      if (lowerCaseName.includes(lowerCaseInput) && lowerCaseInput !== '' && lowerCaseInput !== undefined) {
        return pokemon
      } else if (parseInt(lowerCaseInput)){
        if (index+1 == parseInt(lowerCaseInput)){
          return pokemon
        }
      }
    });

    console.log(verifiedName)

    if (verifiedName === undefined) {
      return this.setState({ error: "Not  a valid name, try again" })
      console.log('No Good Name!')
    } else { 
      console.log(verifiedName, 'IT WORKSSSSSSS!!!!')
      return verifiedName
    }
   
  }

  // pass the validated query through addPokemon

  getPokemonImage = (id) => {
    
    let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
   
    return pokemonImage

  }

  render() {

    const text = 'Loading...';

    return(
      <div> Welcome to PoKeDeX, are you ready to catch your Pokemon?
        <Search addPokemon={this.addPokemon}/>
        {(this.state.foundPokemon.length === 0 && !this.state.error) && <h2>{ text }</h2>}
        {(this.state.error && <h2> { this.state.error }</h2>)}
        {(this.state.foundPokemon.length !== 0 && !this.state.error)&& 
        <PokedexGrid pokedexData={this.state.foundPokemon} getPokemonImage={this.getPokemonImage}/>}
        {(this.state.foundPokemon.length === 0) && 
        <PokedexGrid pokedexData={this.state.pokeDex} getPokemonImage={this.getPokemonImage}/>
        }
      </div>
    )
  }
}

export default App;

// pseudocde about how to add the images to the main page 
// let pokemon_id = verifiedName.url.replace(/\D/g, "").slice(1);- it was showing as 225 because it has 
      //  the V2 as a number as well in the url , to fix that i've used slice(1), to take away the 1 number
      // let pokemon_image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_id}.png`
      // console.log(verifiedName.url)
      // console.log(pokemon_image)