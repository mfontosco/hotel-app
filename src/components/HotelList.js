import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HotelItem from './HotelItem';
import SearchForm from './SearchForm';
import {useNavigate} from "react-router-dom"

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels); 
  const [searchQuery, setSearchQuery] = useState("")
  const nav = useNavigate()

 console.log("hotels8888888888888",hotels)
    const filteredHotels = hotels.filter((hotel) =>hotel.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("filter",filteredHotels)
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }

  return (
    <div className='px-4 rounded-md'>
      <h2 className='text-black text-2xl text-center mt-10'>Hotels List</h2>
      <SearchForm handleSearchChange={handleSearchChange} searchQuery={searchQuery}/>
      <div className="flex justify-end px-4  mt-4">
  <button className="bg-blue-500 text-white rounded-md px-4 py-2" onClick={()=>nav("/hotels/add")}>Add New</button>
</div>

 <div className='overflow-x-auto rounded-md  mt-3'>
 <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
    <tr className='bg-gray-200 text-center'>
      <th className=' py-3 px-3 '> Name</th>
      <th className=' py-3 px-3'>Country</th>
      <th className=' py-3 px-3'> Category</th>
      <th className=' py-3 px-3'>Address</th>
      <th className=' py-3 px-3'> Actions</th>
  
    </tr>
  </thead>
  <tbody className=''> 
  {searchQuery ? filteredHotels.map((hotel,index) => <HotelItem key={hotel.id} hotel={hotel} index={index} />) : hotels.map((hotel,index) => <HotelItem key={hotel.id} hotel={hotel} />)}
  </tbody>
</table>
 </div>
      
      
    </div>
  );
};

export default HotelList;
