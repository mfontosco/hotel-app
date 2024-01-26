const hotelsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_HOTEL':
        return [...state, action.payload];
      case 'EDIT_HOTEL':
        return state.map((hotel) =>
          hotel.id === action.payload.id ? { ...hotel, ...action.payload } : hotel
        );
      case 'DELETE_HOTEL':
        return state.filter((hotel) => hotel.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default hotelsReducer;
  