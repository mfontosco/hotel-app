const initialState = {
    hotels: [],
    countries: [],
    error: null,
  };
  
  const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COUNTRIES_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_COUNTRIES_SUCCESS':
        return {
          ...state,
          loading: false,
          countries: action.payload,
          error: null,
        };
      case 'GET_COUNTRIES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'GET_COUNTRIES_RESET':
        return {};
      default:
        return state;
    }
  };
  
  export default countriesReducer;
  
 
  