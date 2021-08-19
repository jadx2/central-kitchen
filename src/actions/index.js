/* eslint-disable object-curly-newline */

import axios from 'axios';
import {
  GET_WORKSHOPS,
  AUTH_USER,
  LOGOUT_USER,
  GET_DETAILS,
  GET_ATTENDANCES,
  GET_ERROR,
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
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseURL}/workshops/${id}`);
    dispatch({
      type: GET_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
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
    const { id, username } = res.data.user;

    dispatch({
      type: AUTH_USER,
      payload: [id, username, res.data.token],
    });

    localStorage.setItem('id', JSON.stringify(id));
    localStorage.setItem('username', username);
    localStorage.setItem('token', res.data.token);
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseURL}/login`, {
      email: user.email,
      password: user.password,
    });
    const { id, username } = res.data.user;
    dispatch({
      type: AUTH_USER,
      payload: [id, username, res.data.token],
    });

    localStorage.setItem('id', id);
    localStorage.setItem('username', username);
    localStorage.setItem('token', res.data.token);
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const logoutUser = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  return {
    type: LOGOUT_USER,
  };
};

const createAttendance = (data) => async (dispatch) => {
  try {
    const { userId, id, date, token } = data;
    const headers = { Authorization: token };
    await axios.post(
      `${baseURL}/attendances`,
      {
        attendee_id: userId,
        attended_workshop_id: id,
        date,
      },
      { headers },
    );
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

const getAttendances = (token) => async (dispatch) => {
  const headers = { Authorization: token };
  try {
    const res = await axios.get(`${baseURL}/attendances`, { headers });
    dispatch({
      type: GET_ATTENDANCES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};

export {
  getWorkshops,
  getDetails,
  signupUser,
  loginUser,
  logoutUser,
  createAttendance,
  getAttendances,
};
