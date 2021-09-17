import React from 'react';
import './Help.css';
// import xIcon from '../../assets/x-icon.png'
import { Link } from 'react-router-dom';


const Help = () => {
  return (
    <div className='help-page'>
      <div className='help-container'>  

          <Link
            to={`/`}
            key={`home`}  
          >
            <img
              alt='go back icon'
              className='x-icon'
              src='Images/x-icon.png'
              align='right'
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
            From there the home page, you can the search box to access details about individual Generation 1 Pokemon by name or ID, including image, type, moves, and abilities. And if you're on desktop or a tablet, in additition, you also an image of a Pokemon to access the same details.
          </p>

        </article>

        <h2 className='help-home-header'>Return Home</h2>
        <article className='help-home-container'>

          <p>
            From either this how-to page or the Pokemon details page, you can return to the home page by clicking the "Back" button.
          </p>

        </article>
      </div>
    </div>
  )
}

export default Help;