import React, { useEffect, useState } from 'react'
import './Loader.css'

const Loader = () => {

  return (
    <section className='loader-container'>
      <h1 className='loader-text'>Just a moment please!</h1>
      <img src='Images/pokeball.png' className='loader-image' alt='pokeball loading icon'/>
    </section>
  )
};

export default Loader;
