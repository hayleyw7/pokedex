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
      foundPokemon: {}
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
    this.validatePokemonData(queriedPokemon)
    //set state with the validated pokemon
  }

  validatePokemonData = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase()

    const verifiedName = this.state.pokeDex.find(pokemon => {
      let lowerCaseName = pokemon.name.toLowerCase()
      if (lowerCaseName.includes(lowerCaseInput) && lowerCaseInput !== '')  {
        return pokemon
      }
    })

    if (verifiedName === undefined) {
      console.log('No Good NAMe!')
    } else {
      // let pokemon_id = verifiedName.url.replace(/\D/g, "").slice(1);
      // let pokemon_image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_id}.png`
      // console.log(verifiedName.url)
      // console.log(pokemon_image)
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
    return(
      <div> Hello World
        <Search addPokemon={this.addPokemon}/>
        <PokedexGrid pokedexData={this.state.pokeDex} getPokemonImage={this.getPokemonImage}/>
      </div>
    )
  }
}

export default App
