import React, { useState } from 'react'
// Cart Icon
import { IoCartOutline } from "react-icons/io5";

// Hamburger
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const cart = useSelector(state => state.cart);
  return (
    <header className='bg-orange-200 fixed top-0 left-0 w-full z-100'>
        <div className="container m-auto max-w-6xl flex flex-wrap items-center justify-between sm:px-8 px-3 py-3 relative">
            {/* logo */}
            <div className="logo order-2 sm:order-1">
                <Link to="/"><p className='text-xl text-orange-800 cursor-pointer font-bold'>Shopy</p></Link>
            </div>

            {/* Hamburger Icon */}
            <GiHamburgerMenu className="text-orange-800 text-2xl sm:hidden block order-1" onClick={()=> setOpenNav(!openNav)} />

            {/* nav items */}
            <nav className={`sm:flex flex-col items-start justify-center order-4 w-full overflow-hidden border border-orange-800 rounded-md ${openNav ? 'mt-3 flex' : 'hidden'} sm:rounded-none sm:border-0 sm:static sm:p-0 sm:mt-0 sm:order-2 sm:w-auto sm:items-center sm:flex-row`}>
                <Link to="banner" smooth={true} duration={500} spy={true} className='text-orange-800 font-semibold hover:bg-orange-300 sm:rounded px-3 py-2 cursor-pointer w-full sm:w-auto'>Home</Link>
                <Link to="aboutus" smooth={true} duration={500} spy={true} offset={-70} className='text-orange-800 font-semibold hover:bg-orange-300 sm:rounded px-3 py-2 cursor-pointer w-full sm:w-auto'>About Us</Link>
                <Link to="services" smooth={true} duration={500} spy={true} offset={-70} className='text-orange-800 font-semibold hover:bg-orange-300 sm:rounded px-3 py-2 cursor-pointer w-full sm:w-auto'>Services</Link>
                <Link to="products" smooth={true} duration={500} spy={true} offset={-70} className='text-orange-800 font-semibold hover:bg-orange-300 sm:rounded px-3 py-2 cursor-pointer w-full sm:w-auto'>Products</Link>
                <Link to="contactus" smooth={true} duration={500} spy={true} offset={-70} className='text-orange-800 font-semibold hover:bg-orange-300 sm:rounded px-3 py-2 cursor-pointer w-full sm:w-auto'>Contact Us</Link>
            </nav>

            {/* Cart Icon */}
            <NavLink to="/cart" className="relative order-3">
            <IoCartOutline className="text-orange-800 text-3xl "/>
            <span className='countCartItem absolute top-0 -right-1 rounded-full w-4 h-4 flex items-center justify-center bg-orange-400 text-[10px] text-orange-50'>{cart.length}</span>
            </NavLink>

        </div>
    </header>
  )
}

export default Navbar
