import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import workshopsReducer from './workshopsReducer';
import getDetailsReducer from './getDetailsReducer';
import attendancesReducer from './attendancesReducer';
import errorReducer from './errorReducer';
import getMenuReducer from './getMenuReducer';
import getDatesReducer from './getDatesReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
  authorization: authorizationReducer,
  details: getDetailsReducer,
  menu: getMenuReducer,
  dates: getDatesReducer,
  attendances: attendancesReducer,
  error: errorReducer,
});

export default rootReducer;
