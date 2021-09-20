import React from 'react'
import './Error.css';
import { gsap, Power3 } from 'gsap';

const Error = () => {

  return (
    <div className='error-container'>
      <img
        alt='Jigglypuff Error'
        className='jigglypuff-error'
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg'
      ></img>
      <div className='error-message'>
        <h2 className='error-quote'>"Everybody makes a wrong turn once in a while!"</h2>
        <p className='error-note'>Please enter a valid Generation 1 Pokemon name or ID (1 to 152).</p>
      </div>
    </div> 
  )
}

export default Error;