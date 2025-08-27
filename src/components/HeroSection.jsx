import React from 'react'
import banner from '../assets/banner.jpg'
const HeroSection = () => {
  return (
    <div className='sm:h-screen'>
      <img src={banner} alt="banner" className='object-cover h-auto sm:h-screen w-full mt-12 sm:mt-0'  />
    </div>
  )
}

export default HeroSection
