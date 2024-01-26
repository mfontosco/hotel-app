import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../redux/actions/categoryActions';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const nav = useNavigate()
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(deleteCategory(category.id));
    }
  };
console.log("category",category)
  return (
   
 
    <tr className='py-3'>
      <td className='border border-black text-center py-3'>
        {category.name}
      </td>
      <td className='border border-black text-center py-3 flex justify-center items-center gap-2'>
      <button className=' px-2 font-semibold py-1' onClick={()=>(nav(`/categories/edit/${category.id}`))}><FaEdit size={24}  className="text-blue-400"/></button>
      <button className=' px-2  font-semibold py-1' onClick={handleDelete}><MdDeleteOutline size={24} className="text-red-400" /></button>
      </td>
      
    </tr>
  
     
     
  );
};

export default CategoryItem;