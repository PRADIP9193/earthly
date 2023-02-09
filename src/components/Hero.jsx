import React from 'react'
import Navbar from '../hero/Navbar'; 
import Carousel from '../hero/Carousel';

const Hero = () => {
  return (
    <div className='bg-fixed' id='Home'>
     <Navbar />
     <Carousel />
    </div>
  )
}

export default Hero
