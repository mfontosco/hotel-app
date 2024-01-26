import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHotel } from '../redux/actions/hotelActions';
import { getCountriesAction } from '../redux/actions/countriesActions';
import { useNavigate } from 'react-router-dom';

const HotelForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    category: '',
    address: '',
  });

  const { countries, error } = useSelector((state) => state.countries);
  console.log("countries------------", countries)
  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    dispatch(addHotel({ id: Date.now(),...formData})); // Sending formData directly
    // Reset form
    setFormData({ name: '', country: '', address: '', category: '' });
    nav("/");
  };

  return (
    <div className=''>
      <div className="flex justify-end px-4 mt-4">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 md:mt-10" onClick={() => nav(-1)}>Back</button>
      </div>
      <div className='w-full flex justify-center '>
        <div className='w-full min-w-xs flex flex-col items-center justify-center mt-10'>
          <h2 className='text-2xl'>Hotel Form</h2>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='countries'
              >
                countries
              </label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
              >
                <option value=''>Select Country</option>
                {[...new Set(countries.map(country => country.country))].map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='category'
              >
                categories
              </label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value=''>Select Category</option>
                <option value="Star1">Star1</option>
                <option value="Star2">Star2</option>
                <option value="Star3">Star3</option>
              </select>
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='address'
              >
                Address
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='address'
                type='address'
                placeholder='address'
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Create Hotel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelForm;
