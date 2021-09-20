import React, { useEffect, useRef } from 'react'
import './Loader.css'
import { gsap } from 'gsap'

const Loader = () => {
  let loadingMessage = useRef(null)
  let pokeball = useRef(null)

  useEffect(() => {

    gsap.from([pokeball, loadingMessage], {
      delay: 0.1,
      ease: "power3.out",
      x: -1164,
      // y: -2000,
      stagger: {
        amount: 0.25
      }
    });

    gsap.to([loadingMessage, pokeball], {
      delay: 1.12,
      ease: "power3.out",
      x: 900,
      stagger: {
        amount: 0.1
      }
    });

    gsap.to([pokeball], {
      rotation: "+=900",
      ease: "power1.in",
      duration: 1.4
    });

  }, []);

  return (
    <section className='loader-container'>
      <h1 ref={el => loadingMessage = el} className='loader-text'>Just a moment please!</h1>
      <img src='Images/pokeball.png' ref={el => pokeball = el} className='loader-image' alt='pokeball loading icon'/>
    </section>
  )
};

export default Loader;
