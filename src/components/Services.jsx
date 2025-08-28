import React from 'react'
import { FaTshirt, FaLock, FaShippingFast, FaHeadset } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Premium Quality Clothing",
            icon: FaTshirt,
            description:
                "We provide premium quality men’s clothing with durable fabrics, fine stitching, and trendy styles for all occasions.",
        },
        {
            id: 2,
            title: "Wide Variety of Styles",
            icon: GiClothes,
            description:
                "Explore a wide variety of men’s fashion including shirts, pants, jackets, and casual or formal wear styles.",
        },
        {
            id: 3,
            title: "Secure Online Shopping",
            icon: FaLock,
            description:
                "Shop confidently with our secure checkout system, offering multiple payment methods and encrypted data protection for your safety.",
        },
        {
            id: 4,
            title: "Fast Delivery",
            icon: FaShippingFast,
            description:
                "Get your favorite outfits quickly with fast, reliable delivery service and real-time order tracking updates nationwide.",
        },
        {
            id: 5,
            title: "Easy Returns & Exchanges",
            icon: MdOutlinePublishedWithChanges,
            description:
                "Enjoy hassle-free returns and exchanges within days if the product doesn’t match your size, fit, or expectations.",
        },
        {
            id: 6,
            title: "Customer Support",
            icon: FaHeadset,
            description:
                "Our support team is available to assist with orders, sizing, or queries via chat, email, or phone.",
        },
    ];
    return (
        <section id="services">
            <h2 className='text-3xl text-orange-800 text-center font-bold py-8'>Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {services.map(({ id, title, icon: Icon, description }) => (
                    <div
                        key={id}
                        className="p-6 bg-white shadow-md rounded-2xl text-center hover:shadow-lg transition"
                    >
                        <Icon className="text-4xl text-orange-600 mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
