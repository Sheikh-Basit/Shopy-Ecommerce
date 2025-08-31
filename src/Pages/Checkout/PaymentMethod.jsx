import React from 'react'
import CustomInputField from './CustomInputField'

const PaymentMethod = ({ activeStep, inputField, HandleChange, HandleNext, HandleBack, bankOption }) => {
  return (
    <>
      {activeStep === 2 && (
        <div className="personal-detail bg-white p-6 shadow-md">
          <h2 className='text-xl font-semibold mb-5'>Payment Method</h2>
          <form onSubmit={HandleNext} className='flex flex-col'>
            <CustomInputField
              type='radio'
              name='payment'
              label='Bank Account'
              value="bank"
              checked={inputField.payment === "bank"}
              onChange={HandleChange}
            />

            {inputField.payment === "bank" && (
              <div className="flex sm:flex-row flex-col gap-x-3 ml-8">
                <CustomInputField
                  type='select'
                  name='bank'
                  label='Select Bank'
                  options={bankOption}
                  value={inputField.bank}
                  required
                  onChange={HandleChange}
                />

                <CustomInputField type='text' name='accountNo' label='Account Number' required value={inputField.accountNo} onChange={HandleChange} />
              </div>
            )}

            <CustomInputField
              type='radio'
              name='payment'
              label='Credit / Debit Card'
              value="card"
              checked={inputField.payment === "card"}
              onChange={HandleChange}
            />

            {inputField.payment === "card" && (
              <div className="ml-8">
                <CustomInputField type='text' name='cardNo' label='Card Number' required value={inputField.cardNo} onChange={HandleChange} />

                <div className="flex sm:flex-row flex-col gap-x-3">
                  <CustomInputField type='text' name='expiryDate' label='Expiry Date' required value={inputField.expiryDate} onChange={HandleChange} />
                  <CustomInputField type='text' name='cvv' label='CVV' required value={inputField.cvv} onChange={HandleChange} />

                </div>
              </div>
            )}

            <CustomInputField
              type='radio'
              name='payment'
              label='Cash on Delivery'
              value="cash"
              checked={inputField.payment === "cash"}
              onChange={HandleChange}
            />

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <span onClick={HandleBack} className='text-orange-600 cursor-pointer'>Back</span>
              <button type="submit" className='px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md block ml-auto cursor-pointer'>Next</button>
            </div>

          </form>
        </div>
      )}
    </>
  )
}

export default PaymentMethod
