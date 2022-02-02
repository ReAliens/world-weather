import {
  CITIES_REQUEST_DONE,
  CITIES_REQUEST_ERROR,
  CITIES_REQUEST_START,
} from '../constants';

const ERROR = new Error('Something went wrong');

export const citiesFetchStart = () => ({
  type: CITIES_REQUEST_START,
});

export const citiesFetchDone = (payload) => ({
  type: CITIES_REQUEST_DONE,
  payload,
});

export const citiesFetchError = (payload) => ({
  type: CITIES_REQUEST_ERROR,
  payload,
});

export const fetchCities = (code) => async (dispatch) => {
  dispatch(citiesFetchStart());
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`,
    );
    if (response.ok) {
      const cities = await response.json();
      dispatch(citiesFetchDone(cities));
    } else throw ERROR;
  } catch (error) {
    dispatch(citiesFetchError(error.message));
  }
};
