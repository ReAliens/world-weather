import {
  WEATHER_REQUEST_DONE,
  WEATHER_REQUEST_ERROR,
  WEATHER_REQUEST_START,
} from '../constants';

const initState = {
  loading: false,
  error: undefined,
  weather: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case WEATHER_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_REQUEST_DONE:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
    case WEATHER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
