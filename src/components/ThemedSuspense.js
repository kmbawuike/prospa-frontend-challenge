import React from 'react'
import Loader from './Loader'

function ThemedSuspense() {
  return (
    <div className="w-full h-screen p-6 text-lg font-medium text-gray-600">
      <Loader />
    </div>
  )
}

export default ThemedSuspense
