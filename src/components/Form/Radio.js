import React from 'react'

export default function Radio({ name, value, checked, handleChange }) {
  return (
    <input id={value} type="radio" name={name} value={value} className="w-16px h-16px form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-pink-light checked:bg-pink-light focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" checked={checked} onChange={handleChange} />
  )
}
