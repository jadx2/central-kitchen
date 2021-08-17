import { AUTH_USER, LOGOUT_USER } from '../actions/types';

const initialState = { username: null, token: null };

const authorizationReducer = (
  state = initialState,
  action,
) => {
  let newState = state;
  switch (action.type) {
    case AUTH_USER:
      newState = {
        username: action.payload[0],
        token: action.payload[1],
      };
      return newState;
    case LOGOUT_USER:
      newState = { username: null, token: null };
      return newState;
    default:
      return state;
  }
};

export default authorizationReducer;
