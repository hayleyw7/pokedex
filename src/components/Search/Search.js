import React, { useState, useEffect} from 'react'
import './Search.css'

const Search = ({ addPokemon, clearErrorMessage }) => {
  const [queriedPokemon, setQueriedPokemon] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    addPokemon(queriedPokemon)
    clearErrorMessage()
  }

  return (
    <form className='search-form' >
      <input
        className="search-bar"
        type="search"
        name="queriedPokemon"
        placeholder="Find A Pokemon..."
        onChange={(e) => setQueriedPokemon(e.target.value)}/>
      <button
        className="catch-button"
        type="submit"
        onClick={(e) => handleClick(e)}>
        Catch!!!</button>
    </form>
  )

};

export default Search;








// import React, { Component } from 'react';
// import './Search.css'
//
//
// class Search  extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {
//         queriedPokemon: ''
//     }
//   }
//
//   handleChange = (e) => {
//     this.setState({[e.target.name]: e.target.value})
//   }
//
//   handleClick = (e) => {
//     e.preventDefault();
//     const queriedPokemon = {
//         key: Date.now(),
//         ...this.state
//     }
//     this.props.clearErrorMessage()
//     this.props.addPokemon(queriedPokemon)
//     this.resetSearch()
//   }
//
//   resetSearch = () => {
//     this.setState({ queriedPokemon: '' })
//   }
//
//   render() {
//     return (
//       <form className='search-form' >
//         <input
//           className="search-bar"
//           type="search"
//           name="queriedPokemon"
//           placeholder="Find A Pokemon..."
//           onChange={(e) => this.handleChange(e)}/>
//         <button
//           className="catch-button"
//           type="submit"
//           onClick={(e) => this.handleClick(e)}>
//           Catch!!!</button>
//       </form>
//     )
//   }
//
// }
//
// export default Search;
