import { createStore, applyMiddleware, compose } from 'redux';
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
  attendances: [],
  error: null,
};

/* eslint-disable */
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;
