import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h2 className='text-2xl font-bold mb-4'>Categories List</h2>
      <CategoryForm />
      <table class="w-[70%] table-auto mt-10">
  <thead>
    <tr className=''>
      <th className='border border-black py-3'> Name</th>
      <th className='border border-black py-3'>Actions</th>
     
    </tr>
  </thead>
  <tbody> 
  {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
  </tbody>
</table>
     
    </div>
  );
};

export default CategoryList;
