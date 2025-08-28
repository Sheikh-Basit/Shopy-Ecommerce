import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, clearCart, deleteFromCart } from '../Redux/CartSlice';

// Delete Icon
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // Find Total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            {/* Header */}
            <header className='text-2xl bg-orange-200'>
                <div className='container m-auto max-w-6xl sm:px-8 px-3 py-3 flex gap-5 items-center text-orange-800'>
                    <NavLink to="/"><RxCross2 className='mt-1' /> </NavLink>
                    <p>Cart</p>
                </div>
            </header>

            <div className="container m-auto max-w-6xl sm:px-8 px-3 py-3">
                <h4 className='text-2xl text-orange-600 font-bold py-3'>Cart Items</h4>

                {cart.length < 1 ? (
                    <p>No items in the cart</p>
                ) : (
                    <div className="flex my-3 gap-3">
                        {/* Cart Items */}
                        <div className='w-2/3 flex flex-col gap-3'>
                            {cart.map(item => (
                                <div key={item.id} className="overflow-hidden bg-white shadow-md rounded-xl hover:shadow-lg transition flex">
                                    {/* Image */}
                                    <div className='w-1/3 h-52 overflow-hidden bg-orange-100 p-5 flex items-center justify-center'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className='cartItemInfo mx-3 relative w-2/3'>
                                        <h3 className="text-md font-bold mb-2 my-2">{item.title}</h3>
                                        <p className="text-orange-600 text-xl font-bold">$ {item.price}</p>
                                        <p className="text-orange-600 text-xl">Quantity: {item.quantity}</p>

                                        {/* Quantity Controls */}
                                        <div className="flex gap-3 mt-5">
                                            <button
                                                className='cursor-pointer text-2xl border border-orange-500 pb-2 w-10 h-10 flex items-center justify-center'
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                            >
                                                -
                                            </button>
                                            <button
                                                className='cursor-pointer text-2xl border border-orange-500 pb-2 w-10 h-10 flex items-center justify-center'
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Delete Button */}
                                        <button
                                            className='cursor-pointer absolute bottom-3 right-0 rounded-full bg-orange-600 text-white text-2xl p-2'
                                            onClick={() => dispatch(deleteFromCart(item.id))}
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Payment Detail */}
                        <div className='w-1/3 h-fit bg-white shadow-md rounded-xl hover:shadow-lg transition px-3 py-4'>
                            <p className='text-xl text-orange-600 font-bold mb-4'>
                                TOTAL: ${total.toFixed(2)}
                            </p>

                            {/* Cart Summary */}
                            <div className="flex flex-col gap-2 mb-4">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between text-sm gap-10">
                                        <div className='flex gap-3'>
                                        <span className='bg-orange-600 p-2 text-white rounded-full w-5 h-5 flex items-center justify-center mt-1'>{item.quantity}</span>
                                        <p>{item.title}</p>
                                        </div>
                                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Clear Button */}
                            <div className="flex gap-3">

                                <button
                                    className='text-md tracking-wider font-semibold text-orange-600 uppercase border border-orange-600 px-3 py-2 w-full hover:text-white hover:bg-orange-600 cursor-pointer'
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Checkout
                                </button>
                                <button
                                    className='text-md tracking-wider font-semibold text-orange-600 uppercase border border-orange-600 px-3 py-2 w-full hover:text-white hover:bg-orange-600 cursor-pointer'
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;
