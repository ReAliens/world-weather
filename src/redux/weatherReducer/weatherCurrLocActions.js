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

export const fetchweatherCurrLoc = () => async (dispatch) => {
  dispatch(weatherCurrLocFetchStart());
  try {
    const response = await fetch(
      'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=34.2&lat=-79.8',
      {
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          'x-rapidapi-key':
            'b2b2137022msh46f70286914db8bp19f4a0jsnb66fe8a3c088',
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
