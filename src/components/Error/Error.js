import React from 'react'
import './Error.css';

const Error = () => {

  return (
    <div className='error-container'>
      <img
        alt='Professor Oak'
        className='prof-oak'
        src='Images/prof-oak.png'
      ></img>
      <div className='error-message'>
        <h2 className='error-quote'>"Everybody makes a wrong turn once in a while!"</h2>
        <p className='error-note'>Try again. Enter a real Generation 1 Pokemon name or ID (1 to 151).</p>
      </div>
    </div>     
  )
}

export default Error;