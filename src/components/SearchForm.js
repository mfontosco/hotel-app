import React, { useState } from 'react'
import {  useSelector } from 'react-redux';


const SearchForm = ({handleSearchChange,searchQuery}) => {
   
    
    return (

        <div className='flex justify-center  items-center'>

            <div className="flex items-center border-b border-teal-500 py-2">
                <h2>Filter</h2>

                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="Search By Category" aria-label="Category Name" value={searchQuery}
                    onChange={handleSearchChange} />


            </div>

        </div>

    )
}

export default SearchForm
