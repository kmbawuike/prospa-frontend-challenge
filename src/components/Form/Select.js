import React from 'react'

const Select = ({ placeholder, name, options }) => {
    return (
        <div className="relative z-0 mb-6 w-full group bg-input-bg">
            <select name={name} id={name} className="font-medium px-2 text-sm block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer custom-gradient" required>
                {options.map((opt, key) => <option className='p-4' key={key} value={opt}>{opt}</option>)}
            </select>
            <label htmlFor={name} className="px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-light peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{placeholder}</label>
        </div>
    )
}

export default Select

// gradient-to-r from-pink-light via-blue-bold to-blue-light