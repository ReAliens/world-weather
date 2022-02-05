import countreyReducer from '../redux/countriesReducer/countriesReducer';
import {
  COUNTRIES_REQUEST_DONE,
  COUNTRIES_REQUEST_START,
} from '../redux/constants';
import data from '../utils/data';

describe('Unit test for countries reducer', () => {
  it('test that when API calls', () => {
    expect(
      countreyReducer(
        { countries: [], loading: false, error: undefined },
        { type: COUNTRIES_REQUEST_START },
      ),
    ).toEqual({
      loading: true,
      error: undefined,
      countries: [],
    });
  });

  it('test that data is fetched from the API', () => {
    expect(
      countreyReducer(
        { countries: [], loading: true, error: '' },
        { type: COUNTRIES_REQUEST_DONE, payload: data },
      ),
    ).toEqual({
      countries: data,
      loading: false,
      error: '',
    });
  });
});
