import { GET_ATTENDANCES, RESET_ATTENDANCES } from '../actions/types';

const attendancesReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_ATTENDANCES:
      newState = action.payload;
      return newState;
    case RESET_ATTENDANCES:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default attendancesReducer;
