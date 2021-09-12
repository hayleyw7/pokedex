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
      console.log(verifiedName, 'IT WORKSSSSSSS!!!!')
      return verifiedName
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
