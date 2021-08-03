import { ActionTypes } from '../ActionTypes';

const initState = {
  resturant: null,
  items: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.RESET_CART:
      return {
        resturant: null,
        items: [],
      };
    case ActionTypes.UPDATE_CART:
      return {
        resturant: action.payload.resturant,
        items: action.payload.items,
      };

    default:
      return state;
  }
};

export default cartReducer;
