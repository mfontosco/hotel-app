const categoriesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CATEGORY':
        return [...state, action.payload];
      case 'EDIT_CATEGORY':
        return state.map((category) =>
          category.id === action.payload.id ? { ...category, ...action.payload } : category
        );
      case 'DELETE_CATEGORY':
        return state.filter((category) => category.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default categoriesReducer;
  