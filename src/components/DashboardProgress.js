import React from "react"

export default function DashboardProgress({ amount, percentage }) {
  return (
    <>
      <p className="mb-1 text-xs">{amount}</p>
      <div className="h-2 w-full max-w-xl rounded-full bg-gray-200 border">
        <div
          className="w-full h-full bg-progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  )
}