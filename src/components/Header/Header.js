import React from 'react'
// import ash from '/Images/ash1.png
import './Header.css'
//Assets/Images/ash1.png
const Header = () => {
  return (
    <header className='header'>

      <img className='header-image' src='/Images/ash1.png' alt='ash-ketchum'/>
      <div class="custom-shape-divider-bottom-1631572219">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>
    </header>
  )
}

export default Header
