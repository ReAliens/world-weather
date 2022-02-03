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

export const fetchCities = (variables) => async (dispatch) => {
  dispatch(citiesFetchStart());
  try {
    const response = await fetch('https://api.geographql.renzooo.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'reload',
      body: JSON.stringify({
        query: `query($id: Int) {
          country(id: $id) {
            name
            iso2
            capital
            emoji
            longitude
            latitude
            native
            currency
            region
            subregion
            currency_symbol
            states (page:{first:100}){
              edges {
                node {
                  name
                  latitude
                  longitude
                }
              }
            }
          }
        }`,
        variables: { id: variables },
      }),
    });
    if (response.ok) {
      const cities = await response.json();
      dispatch(citiesFetchDone(cities));
    } else throw ERROR;
  } catch (error) {
    dispatch(citiesFetchError(error.message));
  }
};
