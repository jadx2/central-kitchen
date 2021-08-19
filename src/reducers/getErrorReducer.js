import { GET_ERROR } from '../actions/types';

const getErrorReducer = (state = null, action) => {
  let newState = state;

  switch (action.type) {
    case GET_ERROR:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default getErrorReducer;
