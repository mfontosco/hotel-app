import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHotel } from '../redux/actions/hotelActions';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const HotelItem = ({ hotel }) => {
  const dispatch = useDispatch();
  const nav = useNavigate()
  console.log(hotel)

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      dispatch(deleteHotel(hotel.id));
    }
  };

  return (
    
     
      <tr className='py-3 w-full border '>
      <td className='  text-center py-3'>
        {hotel.name}
      </td>
      <td className='  text-center py-3'>
        {hotel.country}
      </td>
      <td className='  text-center py-3'>
        {hotel.category}
      </td>
      <td className='  text-center py-3'>
        {hotel.address}
      </td>
      <td className='  text-center py-3 flex justify-center gap-2 items-center'>
      <button className=' px-2 font-semibold py-1' onClick={()=>(nav(`/hotel/edit/${hotel.id}`))}><FaEdit size={24}  className="text-blue-400"/></button>
      <button className=' px-2  font-semibold py-1' onClick={handleDelete}><MdDeleteOutline size={24} className="text-red-400" /></button>
      </td>
      
    </tr>
 
  );
};

export default HotelItem;
