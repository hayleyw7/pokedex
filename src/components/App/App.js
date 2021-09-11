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

  validatePokemonData = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase()

    let nameCheck = this.state.pokeDex.find(pokemon => {
      let lowerCaseName = pokemon.name.toLowerCase()
      if (lowerCaseName.includes(lowerCaseInput) && lowerCaseInput !== '')  {
        return pokemon
      }
    })

    if (nameCheck === undefined) {
      console.log('No Good!')
    } else {
      console.log(nameCheck) 
    }
  }

  addPokemon = (queriedPokemon) => {
    this.validatePokemonData(queriedPokemon)
    //set state with the validated pokemon
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
