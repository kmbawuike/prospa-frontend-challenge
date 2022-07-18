import React from 'react'

const Input = ({ placeholder, name, type = "text", onChange }) => {
    return (
        <div className="relative z-0 mb-6 w-full group bg-input-bg">
            <input onChange={onChange} type={type} name={name} id={name} className="focus:outline-none font-medium text-sm block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer custom-gradient" placeholder=" " />
            <label htmlFor={name} className="px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-light peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeholder}</label>
        </div>
    )
}

export default Input

// gradient-to-r from-pink-light via-blue-bold to-blue-light