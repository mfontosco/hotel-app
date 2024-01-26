import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/actions/categoryActions';

const CategoryForm = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    dispatch(addCategory({ id: Date.now(), name: categoryName }));
    // Reset form
    setCategoryName('');
  };

  return (
  <div className='flex justify-center  items-center'>
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
  <div className="flex items-center border-b border-teal-500 py-2">

    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
    type="text" placeholder="Category Name" aria-label="Category Name"  value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}/>
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
      Add Category
    </button>
   
  </div>
</form>
  </div>

  );
};

export default CategoryForm;
