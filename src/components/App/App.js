import React, { Component } from "react";
import Search from "../Search/Search";
import { getPokedexData } from "../../apiCalls";
import PokedexGrid from "../PokedexGrid/PokedexGrid";
import Header from "../Header/Header";
import Help from "../Help/Help";
import "./App.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeDex: [],
      foundPokemon: [],
      error: null,
    };
  }

  componentDidMount() {
    getPokedexData().then((data) => {
      this.setState({
        pokeDex: data.results,
      });
    });
  }

  addPokemon = (queriedPokemon) => {
    const foundPokemon = this.validatePokemonData(queriedPokemon);
    this.setState({
      foundPokemon: [foundPokemon],
    });
  };

  validatePokemonData = (queriedPokemon) => {
    const lowerCaseInput = queriedPokemon.queriedPokemon.toLowerCase();

    const verifiedName = this.state.pokeDex.find((pokemon, index) => {
      let lowerCaseName = pokemon.name.toLowerCase();

      if (
        lowerCaseName.includes(lowerCaseInput) &&
        lowerCaseInput !== "" &&
        lowerCaseInput !== undefined
      ) {
        return pokemon;
      } else if (parseInt(lowerCaseInput)) {
        if (index + 1 === parseInt(lowerCaseInput)) {
          return pokemon;
        }
      }
    });

    if (verifiedName === undefined) {
      return this.setState({ error: "Not  a valid Name or id , try again" });
    } else {
      return verifiedName;
    }
  };

  getPokemonImage = (id) => {
    let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return pokemonImage;
  };

  clearErrorMessage = () => {

    return this.setState({error: null})
  }

  render() {

    // const text = 'Loading...';- think about what we want to do with the loading ( do not forget about the loadinh in the details page)
    // {(this.state.foundPokemon.length === 0 && !this.state.error) && <h2>{ text }</h2>}
    // <h1 className='call-to-action-text'>Welcome to PokeDex! Use the search bar below to find a Pokemon now!</h1>

    return (
      
      <div className="App">
        <Header />
        <Route exact path='/'  
          render={() => 
            <main className='main-content'>
              <Search addPokemon={this.addPokemon} clearErrorMessage={this.clearErrorMessage}/>
              {this.state.error && <h2> {this.state.error}</h2>}
              {this.state.foundPokemon.length !== 0 && !this.state.error && (
                <PokemonDetails
                  foundPokemon={this.state.foundPokemon}
                  getPokemonImage={this.getPokemonImage}
                />
              )}
              {this.state.foundPokemon.length === 0 && (
                <PokedexGrid
                  pokedexData={this.state.pokeDex}
                  getPokemonImage={this.getPokemonImage}
                />
              )}             
            </main>
          }
        />
        <Route 
          exact path='/help' 
          render={() => <Help />}
        />       
      </div>
    )
  }
}

export default App;