import { GET_DETAILS } from '../actions/types';

const initialState = {
  id: null,
  title: '',
  description: '',
  menu: [],
  dates: [],
  image: '',
};

const getDetailsReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case GET_DETAILS:
      newState = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        menu: action.payload.menu,
        dates: action.payload.dates,
        image: action.payload.image,
      };
      return newState;
    default:
      return state;
  }
};

export default getDetailsReducer;
