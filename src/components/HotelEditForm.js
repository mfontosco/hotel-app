import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editHotel } from '../redux/actions/hotelActions';
import { getCountriesAction } from '../redux/actions/countriesActions';
import { useNavigate, useParams } from 'react-router-dom';

const HotelEditForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const nav =useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    category: '',
    address: '',
  });
  const { countries } = useSelector((state) => state.countries);
  const hotels = useSelector((state) => state.hotels);
  useEffect(()=>{
    dispatch(getCountriesAction());
  },[dispatch]) 
  useEffect(() => {
    
    const hotelData = hotels.find((hotel) => hotel.id === parseInt(id));
    if (hotelData) {
        console.log("hotelData",hotelData)
      setFormData({
        ...formData,
        name: hotelData.name,
        country: hotelData.country, // Assuming hotelData.country contains the country ID
        category: hotelData.category,
        address: hotelData.address
      });
    }
  }, [id, hotels, dispatch]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to edit hotel data
    dispatch(editHotel({ id: parseInt(id), ...formData }));
    // Reset form
    setFormData({ name: '', country: '', category: '', address: '' });
    nav("/");
  };
  

  return (
   <div>
   <div className="flex justify-end px-4 mt-4">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 md:mt-10" onClick={() => nav(-1)}>Back</button>
      </div>
     <div className='w-full flex justify-center'>
     
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
            >
              <option value=''>Select Category</option>
                <option  value="Star1">Star1</option>
                <option  value="Star2">Star2</option>
                <option  value="Star3">Star3</option>
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
              type='text'
              placeholder='address'
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Update Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default HotelEditForm;
