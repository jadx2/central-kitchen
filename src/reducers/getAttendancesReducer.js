import { GET_ATTENDANCES } from '../actions/types';

const getAttendancesReducer = (state = [], action) => {
  let newState = [...state];

  switch (action.type) {
    case GET_ATTENDANCES:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default getAttendancesReducer;
