import React, { Component } from 'react';
import Search from '../Search/Search';
import { getPokedexData, getPokemonData } from '../../apiCalls'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeDex: [],
      foundPokemon: {
        name: 'test'
      }
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
 
  validatePokemonName = (queriedPokemon) => {
    console.log('reaches name function') 
    const lowerCaseInput = queriedPokemon.toLowerCase()
    const verifiedName = this.state.pokeDex.find(pokemon => {
      let lowerCaseName = pokemon.name.toLowerCase()
      if (lowerCaseName.includes(lowerCaseInput) && lowerCaseInput !== '')  {
        return pokemon
      }
    })
    if (verifiedName === undefined) {
      console.log('No Good NAMe!')
    } else {
      console.log(verifiedName.name)
      return verifiedName.name
    }
  }

  pokemonNameFetch(num) {
    getPokemonData(num)
    .then(data => {
      this.setState({
        foundPokemon: data.name
      })
    })
  }

  validatePokemonID(queriedPokemon) {
    console.log('reaches id function')
    const parsedID = parseInt(queriedPokemon);
    
    if (parsedID > 0 && parsedID < 152) {
      this.pokemonNameFetch(parsedID)
      console.log(parsedID)
      console.log(this.state.foundPokemon)
      return this.state.foundPokemon
    
    } else {
      console.log('No Good ID!')
      return 'No Good ID!'
    }
  }
 
  validatePokemonData = (queriedPokemon) => {
    if (!isNaN(queriedPokemon.queriedPokemon)) {
      this.validatePokemonID(queriedPokemon.queriedPokemon)
    } else {
      this.validatePokemonName(queriedPokemon.queriedPokemon)
    }
  }

  // pass the validated query through addPokemon

  render() {
    return(
      <div>Hello World
        <Search addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default App
