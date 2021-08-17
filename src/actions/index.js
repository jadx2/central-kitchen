import axios from 'axios';
import GET_WORKSHOPS from './types';

const getWorkshops = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3001/workshops');
    dispatch({
      type: GET_WORKSHOPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export default getWorkshops;
