export const addHotel = (hotel) => ({
    type: 'ADD_HOTEL',
    payload: hotel,
  });
  
  export const editHotel = (hotel) => ({
    type: 'EDIT_HOTEL',
    payload: hotel,
  });
  
  export const deleteHotel = (hotelId) => ({
    type: 'DELETE_HOTEL',
    payload: hotelId,
  });
  
  export const filterHotels = (category) => ({
    type: 'FILTER_HOTELS',
    payload: category,
  });
  