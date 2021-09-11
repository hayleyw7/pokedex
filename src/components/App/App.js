import React, { Component } from 'react';
import Search from '../Search/Search';
import { getPokedexData } from '../../apiCalls'

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
    console.log(queriedPokemon)
    return this.validatePokemonData(queriedPokemon)
    //set state with the validated pokemon
  }


  validatePokemonData = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase()
    return console.log(lowerCaseInput, '<><>')
    // make all data.names in pokedex to lower case
    // const validatedPokemon =
    // make queiredPokemon lower case before validating
    // validating our data to make sure the queriedSearch is infact in our getPokedexData
    // compares name or id (arr.length)
    // if validated, fires addPokemon with the validatedPokemon as the argument
  }

  render() {
    return(
      <div>Hello World
        <Search addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default App
