import React from 'react'

function Main({ children }) {
  return (

    <main className="overflow-auto h-screen bg-input-bg w-full">
      <div className='w-full max-w-7xl m-auto py-6 px-6 md:px-10'>
        {children}
      </div>
    </main>
  )
}

export default Main
