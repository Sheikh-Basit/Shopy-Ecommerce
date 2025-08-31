import React from 'react'
import CustomInputField from './CustomInputField'

const PersonalDetails = ({activeStep,inputField,HandleChange,HandleNext}) => {
  return (
    <>
      {/* Personal Detail */}
          {activeStep === 1 && (
            <div className="personal-detail bg-white p-6 shadow-md">
              <h2 className='text-xl font-semibold mb-5'>Personal Detail</h2>
              <form onSubmit={HandleNext}>
                <CustomInputField type='text' name='fullName' label='Full Name' value={inputField.fullName} onChange={HandleChange} />

                <div className="flex gap-3">
                  <CustomInputField type='email' name='email' label='Email' required value={inputField.email} onChange={HandleChange} />

                  {/* zipCode as text to handle length */}
                  <CustomInputField type='text' name='zipCode' label='Zip Code' maxLength="8" value={inputField.zipCode} onChange={HandleChange} />
                </div>

                <CustomInputField type='textarea' name='address' label='Address' rows='5' required value={inputField.address} onChange={HandleChange} />

                <button type="submit" className='px-3 py-2 bg-orange-500 text-white rounded-md block ml-auto cursor-pointer'>Next</button>
              </form>
            </div>
          )}
    </>
  )
}

export default PersonalDetails
