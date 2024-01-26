import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHotel } from '../redux/actions/hotelActions';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const HotelItem = ({ hotel, index }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      dispatch(deleteHotel(hotel.id));
    }
  };

  // Apply alternating background colors for striped effect
  const rowBackground = index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300';

  return (
    <tr className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
      <td className='text-center py-3'>{hotel.name}</td>
      <td className='text-center py-3'>{hotel.country}</td>
      <td className='text-center py-3'>{hotel.category}</td>
      <td className='text-center py-3'>{hotel.address}</td>
      <td className='text-center py-3 flex justify-center gap-2 items-center'>
        <button className='px-2 font-semibold py-1' onClick={() => nav(`/hotel/edit/${hotel.id}`)}>
          <FaEdit size={24} className="text-blue-400" />
        </button>
        <button className='px-2 font-semibold py-1' onClick={handleDelete}>
          <MdDeleteOutline size={24} className="text-red-400" />
        </button>
      </td>
    </tr>
  );
};

export default HotelItem;
