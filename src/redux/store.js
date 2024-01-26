import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../utils/util';

const preloadedState = {
  hotels: loadStateFromLocalStorage('hotels') || [],
  categories: loadStateFromLocalStorage('categories') || [],
};

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveStateToLocalStorage('hotels', store.getState().hotels);
  saveStateToLocalStorage('categories', store.getState().categories);
})

export default store;
