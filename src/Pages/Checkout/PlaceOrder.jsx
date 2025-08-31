import React, { useEffect } from 'react'
import { FaCheck } from "react-icons/fa";

import { clearCart } from '../../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
const PlaceOrder = ({ activeStep }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeStep === 4) {
            dispatch(clearCart());  // ✅ clear only once when step is 4
        }
    }, [activeStep, dispatch]);

    return (
        <>
            {activeStep === 4 && (
                <div className='flex flex-col gap-5 items-center justify-center bg-white p-6 shadow-md'>
                    <FaCheck className='text-5xl p-2 rounded-full bg-orange-600 text-white' />
                    <h2 className='text-2xl font-bold text-orange-500 text-center'>Your Order has been placed</h2>
                    <NavLink to="/" className='px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md cursor-pointer uppercase tracking-wider'>Continue Shopping</NavLink>

                </div>

            )}
        </>
    )
}

export default PlaceOrder
