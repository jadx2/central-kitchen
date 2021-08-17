import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import workshopsReducer from './workshopsReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
  authorization: authorizationReducer,
});

export default rootReducer;
