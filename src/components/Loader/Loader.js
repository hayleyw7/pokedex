import React, { useEffect, useRef } from 'react'
import './Loader.css'
import { gsap } from 'gsap'

const Loader = () => {
  let loadingMessage = useRef(null)
  let pokeball = useRef(null)

  useEffect(() => {
    gsap.from([pokeball, loadingMessage], 0.25, {
      delay: 0.15,
      ease: "power3.out",
      x: -1164,
      stagger: {
        amount: 0.15
      }
    })

  }, [loadingMessage, pokeball])

  return (
    <section className='loader-container'>
      <h1 ref={el => loadingMessage = el} className='loader-text'>Just a moment please!</h1>
      <img src='Images/pokeball.png' ref={el => pokeball = el} className='loader-image' alt='pokeball loading icon'/>
    </section>
  )
};

export default Loader;
