import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {
  workshops: [],
  authorization: {
    username: JSON.parse(localStorage.getItem('username')),
    token: JSON.parse(localStorage.getItem('token')),
  },
  attendances: [],
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
