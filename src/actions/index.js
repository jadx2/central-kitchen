import axios from 'axios';
import {
  GET_WORKSHOPS,
  AUTH_USER,
  LOGOUT_USER,
} from './types';

const baseURL = 'http://localhost:3001';

const getWorkshops = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseURL}/workshops`);
    dispatch({
      type: GET_WORKSHOPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const signupUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseURL}/signup`, {
      username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    });
    dispatch({
      type: AUTH_USER,
      payload: [res.data.username, res.data.token],
    });

    localStorage.setItem(
      'username',
      JSON.stringify(res.data.username),
    );

    localStorage.setItem(
      'token',
      JSON.stringify(res.data.token),
    );
  } catch (err) {
    console.log(err);
  }
};

const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseURL}/login`, {
      email: user.email,
      password: user.password,
    });
    dispatch({
      type: AUTH_USER,
      payload: [res.data.username, res.data.token],
    });

    localStorage.setItem(
      'username',
      JSON.stringify(res.data.username),
    );

    localStorage.setItem(
      'token',
      JSON.stringify(res.data.token),
    );
  } catch (err) {
    console.log(err);
  }
};

const logoutUser = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  return {
    type: LOGOUT_USER,
  };
};

export { getWorkshops, signupUser, loginUser, logoutUser }; // eslint-disable-line
