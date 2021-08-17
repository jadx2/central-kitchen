import { combineReducers } from 'redux';
import workshopsReducer from './workshopsReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
});

export default rootReducer;
