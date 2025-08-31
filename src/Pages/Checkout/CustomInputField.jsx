import { orange } from '@mui/material/colors'
import { textarea } from 'framer-motion/client'
import React from 'react'

const CustomInputField = ({ type, name, label, value, title, options, checked, required, onChange, ...rest }) => {
    // 🟠 TEXT, PASSWORD, EMAIL or NUMBER etc.
    if (["text", "password", "email", "number"].includes(type)) {
        return (
            <div className="relative w-full mb-3">
                <input
                    type={type}
                    id={name}
                    onChange={onChange}
                    value={value}
                    name={name}
                    
                    required={required}
                    {...rest}
                    className="peer w-full border border-gray-300 rounded-md px-3 p-3 text-gray-900 focus:outline-none focus:border-orange-500"
                />
                <label
                    htmlFor={name}
                    className={`absolute left-3 ${value ? 'top-0 text-sm' : 'top-1/2'} -translate-y-1/2 text-gray-500 transition-all peer-focus:top-0 px-1 bg-white peer-focus:text-sm peer-focus:text-orange-500`}
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            </div>
        )
    }

    // textarea
    if (type === "textarea") {
        return (
            <div className="relative w-full mb-3">

                <textarea name={name} id={name} value={value} onChange={onChange} required={required} {...rest} className="peer w-full border border-gray-300 rounded-md px-3 p-3 text-gray-900 focus:outline-none focus:border-orange-500"></textarea>
                <label
                    htmlFor={name}
                    className={`absolute left-3 ${value ? 'top-0 text-sm' : 'top-5'} -translate-y-1/2 text-gray-500 transition-all peer-focus:top-0 px-1 bg-white peer-focus:text-sm peer-focus:text-orange-500`}
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            </div>
        )
    }


    // 🟠 DROPDOWN
    if (type === "select") {
        return (
            <div className="relative w-full mb-3">
                <select
                    name={name}
                    value={value}
                    id={name}
                    required={required}
                    onChange={onChange}
                    {...rest}
                    className="peer w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:border-orange-500 bg-white cursor-pointer"
                >
                    {/* empty option for floating label logic */}
                    <option value="" disabled hidden ></option>

                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label
                    htmlFor={name}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-focus:top-0 px-1 bg-white peer-focus:text-sm peer-focus:text-orange-500 peer-valid:top-0 peer-valid:text-sm"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            </div>
        )
    }

    // Checkbox
    if (type === "checkbox") {
        return (
            <div key={value} className="flex items-center space-x-2 mb-3">
                <input
                    id={value}
                    type={type}

                    className="peer h-5 w-5 rounded border-gray-300 text-orange-500 
                    focus:ring-0 focus:outline-none"
                />
                <label
                    htmlFor={value}
                    className="text-gray-700 peer-checked:text-orange-600 cursor-pointer"
                >
                    {label}
                </label>
            </div>
        )
    }

    // Radio Button
    if (type === "radio") {
        return (

            <div className="w-fit mb-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type={type}
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        className="peer h-5 w-5 text-orange-500 border-gray-300 focus:ring-0 accent-orange-600"
                    />
                    <span className="peer-checked:text-orange-600 text-gray-700">{label}</span>
                </label>
            </div>
        )
    }
}

export default CustomInputField
