import React from 'react'
import banner from '../assets/banner.jpg'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'

const Main = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section Banner */}
        <div id='banner' className='sm:h-screen'>
          <img src={banner} alt="banner" className='object-cover h-auto sm:h-screen w-full mt-12 sm:mt-0' />
        </div>

        <div className="container m-auto max-w-6xl sm:px-8 px-3 py-3">

          {/* About Us */}
          <AboutUs />

          {/* Services */}
          <Services />

          {/* Products */}
          <Products />

          {/* Contact Us */}
          <ContactUs/>
        </div>
      </main>
    </>
  )
}

export default Main
