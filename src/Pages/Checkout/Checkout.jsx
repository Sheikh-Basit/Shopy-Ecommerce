import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import PersonalDetails from './PersonalDetails';
import PaymentMethod from './PaymentMethod';
import ConfirmDetails from './ConfirmDetails';
import PlaceOrder from './PlaceOrder';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [stepCompleted, setStepCompleted] = useState(0)

  const [inputField, setInputField] = useState({
    // Personal Detail
    fullName: "",
    email: "",
    zipCode: "",
    address: "",

    // Payment Method
    payment: "bank",
    bank: "",
    accountNo: "",
    cardNo: "",
    expiryDate: "",
    cvv: "",
  })

  const bankOption = [
    { value: "abl", label: "Allied Bank Limited" },
    { value: "ubl", label: "UBL" },
    { value: "mcb", label: "MCB" }
  ]

  // Handle Change
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setInputField({ ...inputField, [name]: value });
  }

  // Move Next
  const HandleNext = (e) => {
    e.preventDefault();
    setStepCompleted(activeStep);
    setActiveStep(activeStep + 1);
  }

  // Move Back
  const HandleBack = (e) => {
    e.preventDefault();
    setActiveStep(activeStep - 1);
    setStepCompleted(activeStep - 1);
  }

  return (
    <>
      {/* Header */}
      <header className='text-2xl bg-orange-200'>
        <div className='container m-auto max-w-6xl sm:px-8 px-3 py-3 flex gap-5 items-center text-orange-800'>
          <NavLink to="/cart"><RxCross2 className='mt-1' /> </NavLink>
          <p>CheckOut</p>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl sm:px-8 px-3 py-6 bg-gray-50">
        {/* Steps Row */}
        <div className="flex items-start justify-between relative w-full max-w-3xl mx-auto mb-8">
          {["Personal Details", "Payment Method", "Confirm Details", "Place Order"].map((label, index) => {
            const step = index + 1;
            return (
              <div key={step} className="flex flex-col items-center justify-center w-full relative">
                {step > 1 && (
                  <span className="step-connector-line absolute top-3 mx-5 -left-1/2 right-1/2 h-[1px] bg-gray-400"></span>
                )}
                <span className="flex justify-center">
                  <span className={`text-white pointer-events-none rounded-full ${activeStep === step ? 'bg-orange-600' : 'bg-gray-400'} w-6 h-6 flex items-center justify-center text-sm`}>
                    {stepCompleted >= step ? <FaCheck /> : step}
                  </span>
                </span>
                <span className={`mt-4 text-sm ${activeStep === step ? '' : 'text-gray-400'}`}>{label}</span>
              </div>
            )
          })}
        </div>

        {/* Checkout Details */}
        <div className="w-2xl mx-auto flex flex-col gap-5">

          {/* Personal Detail */}
          <PersonalDetails activeStep={activeStep} inputField={inputField} HandleChange={HandleChange} HandleNext={HandleNext} />

          {/* Payment Method */}
          <PaymentMethod activeStep={activeStep} inputField={inputField} HandleChange={HandleChange} HandleNext={HandleNext} HandleBack={HandleBack} bankOption={bankOption}/>

          {/* Confirmed Details */}
          <ConfirmDetails activeStep={activeStep} inputField={inputField} HandleNext={HandleNext} HandleBack={HandleBack} bankOption={bankOption} />

          {/* Place Order */}
          <PlaceOrder activeStep={activeStep}/>

        </div>
      </div>
    </>
  );
};

export default Checkout;
