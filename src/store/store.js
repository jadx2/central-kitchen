import { createStore, applyMiddleware, compose } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
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

// const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, initialState, compose(
  // eslint-disable-next-line max-len
  applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

/* eslint-enable */

export default store;
