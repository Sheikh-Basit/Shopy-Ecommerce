import React, { useState } from 'react'

// Import Social Icons
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithubSquare} from "react-icons/fa";
import CustomInputField from '../Pages/Checkout/CustomInputField';

const ContactUs = () => {
    const [contact, setContact] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    })

    const HandleChange = (e) =>{
        setContact({...contact, [e.target.name]: e.target.value});
    }
    return (
        <section id="contactus">
            <h2 className='text-3xl text-orange-800 text-center font-bold py-8'>Contact Us</h2>

            <div className="flex md:flex-row flex-col gap-5 px-3 md:px-0">
                {/* Contact Detail */}
                <div className="contact-detail md:w-1/2 ">
                {/* Form */}
                    <form className="">
                        {/* First Name / Last Name */}
                        <div className="grid md:grid-cols-2 md:gap-3">
                            <CustomInputField type='text' name='firstName' value={contact.firstName} label='First Name' required onChange={HandleChange}/>

                            <CustomInputField type='text' name='lastName' value={contact.lastName} label='Last Name' required onChange={HandleChange}/>
                            
                        </div>

                        {/* Email */}
                            <CustomInputField type='email' name='email' value={contact.email} label='Email' required onChange={HandleChange}/>

                        {/* Message */}
                            <CustomInputField type='textarea' name='message' value={contact.message} label='Message' rows='5' required onChange={HandleChange}/>

                        <button
                            type="submit"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Social Icons */}
                    <div className="flex items-center mt-8 gap-5">
                        <FaWhatsapp className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                        <FaLinkedin className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                        <FaInstagram className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                        <FaGithubSquare className='text-3xl text-orange-600 hover:text-orange-700 cursor-pointer' />
                    </div>
                </div>


                {/* Map */}
                <div className="location md:w-1/2 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159906.420505702!2d58.354631987460344!3d29.950436907162754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1756391377169!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full min-h-72'></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
