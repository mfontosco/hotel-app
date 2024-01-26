import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCategory } from '../redux/actions/categoryActions';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CategoryEditForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const categories = useSelector((state) => state.categories);
  const [categoryName, setCategoryName] = useState('');
  const nav =useNavigate()

  // Fetch the category data based on the ID
  useEffect(() => {
    const category = categories.find((category) => category.id === parseInt(id));
    if (category) {
      setCategoryName(category.name);
    }
  }, [id, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    dispatch(editCategory({ id: parseInt(id), name: categoryName }));
    // Reset form
    setCategoryName('');
        nav("/categories")
  };

  return (
    <div className='flex justify-center items-center'>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input 
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" 
            placeholder="Category Name" 
            aria-label="Category Name"  
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button 
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
            type="submit"
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryEditForm;
