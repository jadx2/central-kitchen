import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {
  workshops: [],
  authorization: {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token'),
  },
  details: {},
  menu: [],
  dates: [],
  attendances: [],
  error: [],
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
