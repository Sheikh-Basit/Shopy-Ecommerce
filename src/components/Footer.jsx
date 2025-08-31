import { footer } from 'framer-motion/client'
import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='container mx-auto max-w-6xl sm:px-8 px-3 py-6 flex items-center justify-between bg-orange-200'>
            <div className="copyright text-orange-800">
                <p>&copy; 2025 All Rights Reserved</p>
                <p>Design by Sheikh Abdul Basit</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
                <FaWhatsapp className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                <FaLinkedin className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                <FaInstagram className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                <FaGithubSquare className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
            </div>
        </footer>
    )
}

export default Footer
