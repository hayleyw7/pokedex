import React, { Component } from 'react';
import Search from '../Search/Search';
import { getPokedexData, getPokemonData } from '../../apiCalls';
import PokedexGrid from '../PokedexGrid/PokedexGrid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeDex: [],
      foundPokemonJ: [],
      foundPokemonH: {},
      foundPokemon: {},
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

  // addPokemon = (queriedPokemon) => {
  //   const foundPokemonH = this.validatePokemonDataJ(queriedPokemon)
  //   this.setState({
  //     foundPokemonH: [foundPokemonH]
  //   })
  //   //set state with the validated pokemon
  // }

  addPokemonH = (queriedPokemon) => {
   this.validatePokemonDataH(queriedPokemon)
  }  

   addPokemonJ = (queriedPokemon) => {
    const foundPokemonJ = this.validatePokemonDataJ(queriedPokemon)
    this.setState({
      foundPokemonJ: [foundPokemonJ]
    })
  } 

  validatePokemonDataJ = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase()
    
    const verifiedName = this.state.pokeDex.find((pokemon, index) => {
      let lowerCaseName = pokemon.name.toLowerCase()

      if (lowerCaseName.includes(lowerCaseInput) && lowerCaseInput !== '' && lowerCaseInput !== undefined) {
        return pokemon
      } else if (parseInt(lowerCaseInput)){
        if (index+1 === parseInt(lowerCaseInput)){
          return pokemon
        }
      }
    });

    // console.log(verifiedName)

    if (verifiedName === undefined) {
      // console.log('No Good Name!')
      return this.setState({ error: "Not  a valid name, try again" })
    } else { 
      // console.log(verifiedName, 'IT WORKSSSSSSS!!!!')
      return verifiedName
    }
   
  }

/////// h code


  validatePokemonID(queriedPokemon) {
    console.log('reaches id function')
    const parsedID = parseInt(queriedPokemon);

    if (parsedID > 0 && parsedID < 152) {
      // this.pokemonNameFetch(parsedID)
      // console.log(parsedID)
      // console.log(this.state.foundPokemon)
      return parsedID;
    } else {
      console.log('No Good ID!')
      return 'No Good ID!'
    }
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
      // console.log(verifiedName.name)
      return verifiedName.name
    }
  }






  validatePokemonDataH = (queriedPokemon) => {
    if (!isNaN(queriedPokemon.queriedPokemon)) {
      const idValidated = this.validatePokemonID(queriedPokemon.queriedPokemon)
      this.pokemonApiFetch(idValidated)
    } else {
      const nameValidated = this.validatePokemonName(queriedPokemon.queriedPokemon)
      this.pokemonApiFetch(nameValidated)
    }
  }








  pokemonApiFetch(searchTerm) {
    console.log('reaches api fetch')
    getPokemonData(searchTerm)
    .then(data => {
      this.setState({
        foundPokemonH: data
      })
    })
    console.log(this.state.foundPokemonH)
    return this.state.foundPokemonH
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
        <Search addPokemonJ={this.addPokemonJ} addPokemonH={this.addPokemonH}/>
        {(this.state.foundPokemonJ.length === 0 && !this.state.error) && <h2>{ text }</h2>}
        {(this.state.error && <h2> { this.state.error }</h2>)}
        {(this.state.foundPokemonJ.length !== 0 && !this.state.error)&& 
        <PokedexGrid pokedexData={this.state.foundPokemonJ} getPokemonImage={this.getPokemonImage}/>}
        {(this.state.foundPokemonJ.length === 0) && 
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