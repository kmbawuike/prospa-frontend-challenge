import React from 'react'

const Button = ({ title, onClick, disable, className }) => {
    return (
        <>
            <button onClick={onClick} disabled={disable} className={`block w-100  ${disable ? 'bg-disable' : 'bg-pink-bold'}  border px-5 py-4 text-center font-bold rounded-lg text-white ${className}`}>
                {title}
            </button>
        </>

    )
}

export default Button