import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AlertBox from './AlertBox'

const Home = () => {
    const nav = useNavigate()
    const hotels = useSelector((state)=>state.hotels)
  return (
    <div className='backgroundImage min-h-screen pt-10 rounded-md shadow-md'>
      <h1 className='text-4xl pl-4 font-bold text-left text-white '>Welcome to Our Hotel Ranking App</h1>
      <div className='mt-20 flex justify-center items-center'>
        {
            hotels.length ? <div className='flex p-4 bg-white text-black rounded-md shadow-md flex-col items-center justify-center'>
            <h2 className='text-md text-black'>You have {hotels.length }{hotels.length ===1 ? " Hotel" :" Hotels"}  in the list </h2>
             <button className='bg-blue-500 px-3 py-2 rounded-md mt-3 text-white bg-blue-300' onClick={()=>nav("/hotel-list")}>View lists</button>
            </div>:
            <AlertBox onClick={()=>nav("/hotels/add")}/>
        }
      </div>
    </div>
  )
}

export default Home
