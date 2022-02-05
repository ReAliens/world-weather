import {
  // apiWeatherKey,
  WEATHER_REQUEST_DONE,
  WEATHER_REQUEST_ERROR,
  WEATHER_REQUEST_START,
} from '../constants';

const ERROR = new Error('Something went wrong');

export const weatherCurrLocFetchStart = () => ({
  type: WEATHER_REQUEST_START,
});

export const weatherCurrLocFetchDone = (payload) => ({
  type: WEATHER_REQUEST_DONE,
  payload,
});

export const weatherCurrLocFetchError = (payload) => ({
  type: WEATHER_REQUEST_ERROR,
  payload,
});

export const fetchweatherCurrLoc = ({ lon, lat }) => async (dispatch) => {
  dispatch(weatherCurrLocFetchStart());
  try {
    const response = await fetch(
      `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          'x-rapidapi-key':
              'a02eef9104msh2d026e34c541e6ep1e0813jsn56589a941779',
        },
      },
    );
    if (response.ok) {
      const currStateWeather = await response.json();
      dispatch(weatherCurrLocFetchDone(currStateWeather));
    } else throw ERROR;
  } catch (error) {
    dispatch(weatherCurrLocFetchError(error.message));
  }
};
