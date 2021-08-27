import { RESET_ERROR, SET_ERROR } from '../actions/types';

const errorReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case SET_ERROR:
      newState = newState.concat(action.payload);
      return newState;
    case RESET_ERROR:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default errorReducer;
