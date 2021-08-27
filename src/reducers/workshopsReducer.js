import { GET_WORKSHOPS } from '../actions/types';

const workshopsReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_WORKSHOPS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default workshopsReducer;
