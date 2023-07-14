"use client"
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';

import Image from 'next/image'
import React from 'react'
import About from '@components/About';
import Skills from '@components/Skills';


const Home = () => {
  const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Mern Stack Developer','Web developer'],
          typeSpeed: 50,
        });
        
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.current.destroy();
          };
      
      }, []);
  return (
    <div>
      <section className='flex justify-center items-center mt-16 mb-28'>
        <div className="left w-1/2 text-4xl items-center">
          
          <div>Hello, I am <div className='text-6xl my-2'>Nipun Gupta</div> and I am a <span className='lightgreen' ref={el} /></div>
        </div>
        <div className="right ">
          <Image src="/developer-image.png" width={400} height={400} alt='Developer' />
        </div>
      </section>
      <hr className='mx-auto w-5/6'/>

      <section id="about">
      <About/>
      </section>
      
      <section id="skills">
        <Skills/>
      </section>
    </div>
  )
}

export default Home