"use client"
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';

import Image from 'next/image'
import React from 'react'
import About from '@components/About';
import Skills from '@components/Skills';
import Certificate from '@components/Certificate';


const Home = () => {
  const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Web developer'],
          typeSpeed: 50,
        });
        
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.current.destroy();
          };
      
      }, []);
  return (
    <div>
      <section className='flex flex-col lg:flex-row lg:justify-around items-center md:mx-10'>
        <div className="left w-full text-center lg:text-left lg:w-2/3 text-2xl lg:text-4xl items-center lg:pl-10">
          
          <div>Hello, I am <div className='text-4xl lg:text-6xl my-2'>Nipun Gupta</div> and I am a <span className='lightgreen' ref={el} /></div>
          <div className='mt-5 space-x-4 text-center lg:text-left'>
            <a target="_blank" href="mailto:nipungupta593@gmail.com"><i className="fa-solid fa-envelope border border-[#0ed9df] rounded-lg p-1.5" style={{color:"#0ed9df"}}></i></a>
            <a target="_blank" href="https://github.com/nipungupta06"><i className="fa-brands fa-github border border-[#0ed9df] rounded-lg p-1.5" style={{color:"#0ed9df"}}></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/nipun-gupta-318a61237"><i className="fa-brands fa-linkedin border border-[#0ed9df] rounded-lg p-1.5 " style={{color:"#0ed9df"}}></i></a>
          </div>
        </div>
        <div className="right w-1/2 md:w-1/3 text-center">
          <img src="/2.png" alt='Developer' />
        </div>
      </section>
      <hr className='mx-auto w-5/6'/>

      <section id="about">
      <About/>
      </section>
      
      <section id="skills">
        <Skills/>
      </section>

      <section id="certificates">
        <Certificate/>
      </section>
    </div>
  )
}

export default Home