import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import workshopsReducer from './workshopsReducer';
import getDetailsReducer from './getDetailsReducer';
import getAttendancesReducer from './getAttendancesReducer';
import getErrorReducer from './getErrorReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
  authorization: authorizationReducer,
  details: getDetailsReducer,
  attendances: getAttendancesReducer,
  error: getErrorReducer,
});

export default rootReducer;
