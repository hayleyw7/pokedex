import React, { Component } from 'react';
import './Search.css'


class Search  extends Component  {
    constructor() {
        super();
        this.state = {
            queriedPokemon:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault();
        const queriedPokemon = {
            id:Date.now(),
            ...this.state
        }
        console.log(queriedPokemon)
        // foundPokemon will be = data.name
    }

    render() {
        return (
            <form>
                <input
                    type="search"
                    name="foundPokemon"
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
