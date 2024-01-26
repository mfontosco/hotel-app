import { combineReducers } from 'redux';
import hotelsReducer from './hotelReducers';
import categoriesReducer from './categoryReducers';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  categories: categoriesReducer,
  countries: countriesReducer
});

export default rootReducer;
