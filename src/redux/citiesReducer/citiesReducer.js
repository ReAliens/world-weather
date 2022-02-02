import {
  CITIES_REQUEST_DONE,
  CITIES_REQUEST_ERROR,
  CITIES_REQUEST_START,
} from '../constants';

const initState = {
  loading: false,
  error: undefined,
  cities: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CITIES_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case CITIES_REQUEST_DONE:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };
    case CITIES_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
