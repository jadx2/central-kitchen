import { GET_DETAILS } from '../actions/types';

const getMenuReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_DETAILS:
      newState = action.payload.menu;
      return newState;
    default:
      return state;
  }
};

export default getMenuReducer;
