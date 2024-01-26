import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {HotelList,HotelForm,CategoryList, CategoryEditForm, HotelEditForm} from './index'

const Router = () => {
  return (
    <Routes>
         <Route path="/" exact element={<HotelList/>} />
          <Route path="/hotels/add" element={<HotelForm/>} />
          <Route path="/categories" element={<CategoryList/>} />

          <Route path="/categories/edit/:id" element={<CategoryEditForm/>} />
          <Route path="/hotel/edit/:id" element={<HotelEditForm/>} />
    </Routes>
  )
}

export default Router
