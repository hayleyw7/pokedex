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
      this.props.addPokemon(queriedPokemon)
      this.resetSearch()
  }

  resetSearch = () => {
    this.setState({ queriedPokemon: '' })
  }

  render() {
      return (
        <form className='search-form' >
          <input
            className="search-bar"
            type="search"
            name="queriedPokemon"
            placeholder="Find A Pokemon..."
            onChange={(e) => this.handleChange(e)}/>
          <button
            className="catch-button"
            type="submit"
            onClick={(e) => this.handleClick(e)}>
            Catch!!!</button>
        </form>
      )

  }

}

export default Search;
