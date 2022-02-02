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

export const fetchCities = () => async (dispatch) => {
  dispatch(citiesFetchStart());
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/states',
    );
    if (response.ok) {
      const cities = await response.json();
      dispatch(citiesFetchDone(cities));
    } else throw ERROR;
  } catch (error) {
    dispatch(citiesFetchError(error.message));
  }
};
