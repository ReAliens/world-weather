import {
  COUNTRIES_REQUEST_DONE,
  COUNTRIES_REQUEST_ERROR,
  COUNTRIES_REQUEST_START,
} from '../constants';

const ERROR = new Error('Something went wrong');

export const countriesFetchStart = () => ({
  type: COUNTRIES_REQUEST_START,
});

export const countriesFetchDone = (payload) => ({
  type: COUNTRIES_REQUEST_DONE,
  payload,
});

export const countriesFetchError = (payload) => ({
  type: COUNTRIES_REQUEST_ERROR,
  payload,
});

export const fetchCountries = () => async (dispatch) => {
  dispatch(countriesFetchStart());
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (response.ok) {
      const countries = await response.json();
      dispatch(countriesFetchDone(countries));
    } else throw ERROR;
  } catch (error) {
    dispatch(countriesFetchError(error.message));
  }
};
