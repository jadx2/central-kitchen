import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import workshopsReducer from './workshopsReducer';
import getDetailsReducer from './getDetailsReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
  authorization: authorizationReducer,
  details: getDetailsReducer,
});

export default rootReducer;
