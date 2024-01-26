import React from 'react'

const AlertBox = ({onClick}) => {
  return (
    <div className='shadow-md flex p-4 justify-center items-center flex-col w-[350px] bg-white rounded-lg'>
      <p className='mb-4 text-md text-black'>You have no record in your list</p>
      <button onClick={onClick} className='text-md bg-blue-500 rounded-md  px-3 py-2 text-white'>Add Hotel</button>
    </div>
  )
}

export default AlertBox
