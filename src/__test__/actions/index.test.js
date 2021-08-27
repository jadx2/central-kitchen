import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  GET_WORKSHOPS,
  AUTH_USER,
  GET_DETAILS,
  GET_ATTENDANCES,
  GET_ERROR,
} from '../../actions/types';
import {
  getWorkshops,
  getDetails,
  signupUser,
  loginUser,
  logoutUser,
  createAttendance,
  getAttendances,
} from '../../actions/index';

describe('It should modifify the state values', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let initialState = {
    workshops: [],
    authorization: {
      id: null,
      username: null,
      token: null,
    },
    details: {},
    attendances: [],
    error: null,
  };

  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    initialState = {
      workshops: [],
      authorization: {
        id: null,
        username: null,
        token: null,
      },
      details: {},
      attendances: [],
      error: null,
    };
  });

  it('should retrieve the workshops from api', () => {
    store
      .dispatch(getWorkshops())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(GET_WORKSHOPS);
      })
      .catch((err) => err);
  });
  it('should retrieve the workshops detail from api', () => {
    store
      .dispatch(getDetails(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(GET_DETAILS);
      })
      .catch((err) => err);
  });
  it('should signup user', () => {
    const user = {
      username: 'achoo',
      email: 'achoo@email.com',
      password: '123456',
      passwordConfirmation: '123456',
    };
    store
      .dispatch(signupUser(user))
      .then(() => {
        const actions = store.getActions();
        expect(actions[2].type).toEqual(AUTH_USER);
      })
      .catch((err) => err);
  });
  it('should login user', () => {
    const user = {
      email: 'achoo@email.com',
      password: '123456',
    };
    store
      .dispatch(loginUser(user))
      .then(() => {
        const actions = store.getActions();
        expect(actions[3].type).toEqual(AUTH_USER);
      })
      .catch((err) => err);
  });
  it('should create attendances', () => {
    const data = {
      userId: 1,
      id: 1,
      date: 'monday',
      token: '123456',
    };

    store
      .dispatch(createAttendance(data))
      .then(() => {
        const actions = store.getActions();
        expect(actions[5].type).not.toEqual(GET_ERROR);
      })
      .catch((err) => err);
  });
  it('should retrieve all the users attendances', () => {
    const token = '123456';

    store
      .dispatch(getAttendances(token))
      .then(() => {
        const actions = store.getActions();
        expect(actions[6].type).toEqual(GET_ATTENDANCES);
      })
      .catch((err) => err);
  });
});
