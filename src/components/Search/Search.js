import React, { Component } from 'react';
import './Search.css'

class Search  extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            queriedPokemon: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault();
        const queriedPokemon = {
            key: Date.now(),
            ...this.state
        }
        // console.log(queriedPokemon)
        this.props.addPokemonH(queriedPokemon)
        this.props.addPokemonJ(queriedPokemon)
        // if(props.addPokemon(queriedPokemon)
        // then addPokemon(queriedPokemon)
        // else show error
    }

    render() {
        return (
            <form>
                <input
                    type="search"
                    name="queriedPokemon"
                    className="search-bar"
                    placeholder="Choose your Pokemon"
                    onChange={(e) => this.handleChange(e)}/>
                <button
                    type="submit"
                    onClick={(e) => this.handleClick(e)}>
                Catch
                </button>
            </form>
        )

}

}

export default Search;
