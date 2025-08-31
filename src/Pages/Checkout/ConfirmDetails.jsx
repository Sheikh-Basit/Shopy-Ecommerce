import React from 'react'
import { useSelector } from 'react-redux';

const ConfirmDetails = ({ activeStep, inputField, HandleNext, HandleBack, bankOption }) => {
  // Fetch Cart Items
  const cart = useSelector(state => state.cart);

  // Get Payment Label

  let selectedBankLabel;

  if (inputField.payment === "bank") {
  
    const label = bankOption.find(
      (opt) => opt.value === inputField.bank
    )?.label;

    selectedBankLabel = label + '( ' + inputField.accountNo + ' )'
    
  }else if(inputField.payment === "card"){
    selectedBankLabel = 'Debit/Credit' + '( ' +inputField.cardNo + ' )'
  }
  else{ 
    selectedBankLabel = inputField.payment;
  }
  
  // Find Total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <>
      {activeStep === 3 && (
        <div className="personal-detail bg-white p-6 shadow-md">
          <h2 className='text-xl font-semibold mb-5'>Confirm Details</h2>
          <div className="flex flex-col justify-between">
            {/* Name */}
            <div className="flex items-start ">
              <span className='font-semibold w-1/7'>Name:</span>
              <span className='font-semibold w-6/7'>{inputField.fullName}</span>

            </div>
            {/* Email */}
            <div className="flex items-start ">
              <span className='font-semibold w-1/7'>Email:</span>
              <span className='font-semibold w-6/7'>{inputField.email}</span>

            </div>
            {/* Address */}
            <div className="flex items-start ">
              <span className='font-semibold w-1/7'>Address:</span>
              <span className='font-semibold w-6/7'>{inputField.address}</span>

            </div>
            {/* Zip Code */}
            <div className="flex items-start ">
              <span className='font-semibold w-1/7'>Zip Code:</span>
              <span className='font-semibold w-6/7'>{inputField.zipCode}</span>

            </div>
            {/* Payment Method */}
            <div className="flex items-start ">
              <span className='font-semibold w-1/7'>Payment:</span>
              <span className='font-semibold w-6/7'>{selectedBankLabel}</span>

            </div>



          </div>
          <hr className='text-gray-300 my-4' />

          {/* Oder Summary */}
          <div className="Order-Summary">
            <h4 className='font-semibold'>Order Summary</h4>

            {cart.map(item => (
              <div key={item.id} className="flex justify-between my-2">
                <span>{item.title}</span>
                <span>${item.price}</span>

              </div>
            ))}


          </div>

          <hr className='text-gray-300 my-4' />

          <div className="flex justify-between mt-2">
            <span><b>Total</b></span>
            <span>${total}</span>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <span onClick={HandleBack} className='text-orange-500 cursor-pointer'>Back</span>
            <button onClick={HandleNext} className='px-3 py-2 bg-orange-500 text-white rounded-md block ml-auto cursor-pointer'>Confirmed & Place Order</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ConfirmDetails
