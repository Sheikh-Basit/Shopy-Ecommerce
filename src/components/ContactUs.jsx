import React from 'react'

// Import Social Icons
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithubSquare} from "react-icons/fa";

const ContactUs = () => {
    return (
        <section id="contactus">
            <h2 className='text-3xl text-orange-800 text-center font-bold py-8'>Contact Us</h2>

            <div className="flex md:flex-row flex-col gap-5 px-3 md:px-0">
                {/* Contact Detail */}
                <div className="contact-detail md:w-1/2 ">
                {/* Form */}
                    <form className="">
                        {/* First Name / Last Name */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    First name
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Last name
                                </label>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                type="text"
                                name="floating_message"
                                rows={5}
                                id="floating_message"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_message"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Social Icons */}
                    <div className="flex items-center mt-8 gap-5">
                        <FaWhatsapp className='text-3xl text-orange-800 hover:text-orange-500 cursor-pointer' />
                        <FaLinkedin className='text-3xl text-orange-800 hover:text-orange-500 cursor-pointer' />
                        <FaInstagram className='text-3xl text-orange-800 hover:text-orange-500 cursor-pointer' />
                        <FaGithubSquare className='text-3xl text-orange-800 hover:text-orange-500 cursor-pointer' />
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
