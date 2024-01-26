import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HotelItem from './HotelItem';
import SearchForm from './SearchForm';

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels); 
  const [searchQuery, setSearchQuery] = useState("")

 console.log("hotels",hotels)
    const filteredHotels = hotels.filter((hotel) =>hotel.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("filter",filteredHotels)
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }

  return (
    <div className='px-4 '>
      <h2 className='text-black text-2xl text-center mt-10'>Hotels List</h2>
      <SearchForm handleSearchChange={handleSearchChange} searchQuery={searchQuery}/>
      {
 <div className='overflow-x-auto'>
 <table class="w-full table-auto mt-10 ">
  <thead>
    <tr className=''>
      <th className='border border-black py-3 px-3'> Name</th>
      <th className='border border-black py-3 px-3'>Country</th>
      <th className='border border-black py-3 px-3'> Category</th>
      <th className='border border-black py-3 px-3'>Address</th>
      <th className='border border-black py-3 px-3'> Actions</th>
  
    </tr>
  </thead>
  <tbody> 
  {searchQuery ? filteredHotels.map((hotel) => <HotelItem key={hotel.id} hotel={hotel} />) : hotels.map((hotel) => <HotelItem key={hotel.id} hotel={hotel} />)}
  </tbody>
</table>
 </div>
      }
      
    </div>
  );
};

export default HotelList;
