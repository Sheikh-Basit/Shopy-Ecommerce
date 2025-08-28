import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
       {/* Header */}
            <header className='text-2xl bg-orange-200'>
                <div className='container m-auto max-w-6xl sm:px-8 px-3 py-3 flex gap-5 items-center text-orange-800'>
                    <NavLink to="/cart"><RxCross2 className='mt-1' /> </NavLink>
                    <p>CheckOut</p>
                </div>
            </header>
    </div>
  )
}

export default Checkout
