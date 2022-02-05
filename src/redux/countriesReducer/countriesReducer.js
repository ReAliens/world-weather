import {
  COUNTRIES_REQUEST_DONE,
  COUNTRIES_REQUEST_ERROR,
  COUNTRIES_REQUEST_START,
} from '../constants';

const initState = {
  loading: false,
  error: undefined,
  countries: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTRIES_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case COUNTRIES_REQUEST_DONE:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case COUNTRIES_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
