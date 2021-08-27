import { GET_DETAILS } from '../actions/types';

const getDatesReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_DETAILS:
      newState = action.payload.dates;
      return newState;
    default:
      return state;
  }
};

export default getDatesReducer;
