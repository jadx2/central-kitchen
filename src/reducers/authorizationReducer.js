import { AUTH_USER, LOGOUT_USER } from '../actions/types';

const initialState = { id: null, username: null, token: null };

const authorizationReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case AUTH_USER:
      newState = {
        id: action.payload[0],
        username: action.payload[1],
        token: action.payload[2],
      };
      return newState;
    case LOGOUT_USER:
      newState = { id: null, username: null, token: null };
      return newState;
    default:
      return state;
  }
};

export default authorizationReducer;
