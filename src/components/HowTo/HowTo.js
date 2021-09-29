import React from 'react';
import './HowTo.css';
import { Link } from 'react-router-dom';


const HowTo = (props) => {

  const handleClick = (e) => {
    props.clearPokemon(e);
    props.showHowToBtn()
  }

  return (
    <div className='howto-page'>
      <div className='howto-container'>  

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

        <h1 className='howto-header'>How To Use The PoKedeX</h1>   

        <h2 className='about-header'>About Application</h2>
        <article className='about-container'>

          <p>
            The PoKedeX is a Progressive Web Application that gives a user the ability to quickly search and access information about any Generation 1 Pokemon. They will then then have that information saved for offline reference.
          </p>
          <p>                      
            If one encounters a Pokemon in the wild, and they need to find quick information about it, this is the application for them!
          </p>

        </article>

        <h2 className='howto-search-header'>Access Pokemon</h2>
        <article className='howto-search-container'>

          <p>
            When a user visits the application on a desktop computer, laptop, or tablet, they should see a Search box and a grid of cards that contain all Generation 1 Pokemon images and names, which are sorted by ID number.
          </p>
          <p>  
            When one visits the application on a mobile device, they should only see the Search box, even if offline.
          <p>

          </p>
            From the Home or Pokemon Details pages, one can type either a name or ID number in the Search box. After pressing the "Catch!!!" button, they can access the respective Pokemon's image, type, moves, and abilities.
          </p>
          <p>
            Once viewed on a device, that Pokemon Details page will then be available offline for future access.
          </p>

        </article>

        <h2 className='howto-home-header'>Return Home</h2>
        <article className='howto-home-container'>

          <p>
            From either the How-To page or the Pokemon Details page, a user can return to the Home page by clicking the "x" icon.
          </p>

        </article>
      </div>
    </div>
  )
}

export default HowTo;