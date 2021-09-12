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
        name: 'STILL NO WORKING & ONE SEARCH BEHIND IF YOU SEE THIS'
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
      console.log('No Good NAME!')
    } else {
      console.log(verifiedName.name)
      return verifiedName.name
    }
  }

  pokemonApiFetch(searchTerm) {
    console.log('reaches api fetch')
    getPokemonData(searchTerm)
    .then(data => {
      this.setState({
        foundPokemon: data
      })
    })
    console.log(this.state.foundPokemon)
    return this.state.foundPokemon
  }

  validatePokemonID(queriedPokemon) {
    console.log('reaches id function')
    const parsedID = parseInt(queriedPokemon);

    if (parsedID > 0 && parsedID < 152) {
      // this.pokemonNameFetch(parsedID)
      console.log(parsedID)
      // console.log(this.state.foundPokemon)
      return parsedID;

    } else {
      console.log('No Good ID!')
      return 'No Good ID!'
    }
 }
 
  validatePokemonData = (queriedPokemon) => {
    if (!isNaN(queriedPokemon.queriedPokemon)) {
      const idValidated = this.validatePokemonID(queriedPokemon.queriedPokemon)
      this.pokemonApiFetch(idValidated)
    } else {
      const nameValidated = this.validatePokemonName(queriedPokemon.queriedPokemon)
      this.pokemonApiFetch(nameValidated)
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
