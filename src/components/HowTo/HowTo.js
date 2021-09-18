import React from 'react';
import './HowTo.css';
// import xIcon from '../../assets/x-icon.png'
import { Link } from 'react-router-dom';


const HowTo = (props) => {

  const handleClick = (e) => {
    props.clearPokemon(e);
  }

  return (
    <div className='help-page'>
      <div className='help-container'>  

          <Link
            to={`/`}
            key={`home`}  
          >
            <img
              alt='go back icon'
              className='x-icon-how'
              src='Images/x-icon.png'
              align='right'
              onClick={(e) => handleClick(e)}
            ></img>  
          </Link>

        <h1 className='help-header'>How To Use The PoKedeX</h1>   

        <h2 className='about-header'>About</h2>
        <article className='about-container'>

          <p>
            The PoKedeX is a Progressive Web Application that gives a user the ability to search through Generation 1 Pokemon and quickly find information on them. If you encounter a Pokemon in the wild, and you need to find quick information about it, even without internet service, this is the app for you!
          </p>

        </article>

        <h2 className='help-search-header'>Search Pokemon</h2>
        <article className='help-search-container'>

          <p>
            When you visit the app on a computer or tablet, you should be able to see a seach box and a display of all Pokemon by ID number. On a mobile device, you should just see the search box.
          <p>

          </p>
            From there the home page, you can the search box to access details about individual Generation 1 Pokemon by name or ID, including image, type, moves, and abilities.
          </p>

        </article>

        <h2 className='help-home-header'>Return Home</h2>
        <article className='help-home-container'>

          <p>
            From either this how-to page or the Pokemon details page, you can return to the home page by clicking the "Back" button.
          </p>

        </article>
        <section className='meowth-quote'>
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg" className="mew-pic" alt="meowth"/>
           
           <p>"We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what is the same, instead of looking at what is different, well, who knows?"</p>
        </section>
      </div>
    </div>
  )
}

export default HowTo;