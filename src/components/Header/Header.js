import React from 'react'
import './Header.css'
import { Route, Link } from 'react-router-dom';

const Header = ( clearPokemon ) => {

  return (
    <header className='header'>

      <nav className='nav'>
        <Link
          to={`/howto`}
          key={`howto`}
        >
          <ul className='nav-links'>
            <li
              className='how-to'
            >
              How To
            </li>
          </ul>
        </Link>
      </nav>

      <article className='header-images'>

        <img className='ash' src='Images/ash1.png' alt='ash-ketchum'/>

        <img className='pokeball' src='Images/pokeball.png' alt='pokeball'/>

      </article>

      <div className="custom-shape-divider-bottom-1631589819">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </header>
  )
}

export default Header
