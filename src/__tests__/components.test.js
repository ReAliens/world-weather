import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Components/Header/Header';
import SearchBar from '../Components/HomeSearch/HomeSearchBar';
import StateCard from '../Components/stateCard/StateCard';
import CountryCard from '../Components/countryCard/CountryCard';
import CountryDetails from '../Components/countryDetails/CountryDetails';
import WeatherModal from '../Components/WeatherModal/WeatherModal';
import { store } from '../redux/store';

describe('Tests snapshots of components', () => {
  it('Renders Header Correctly', () => {
    const tree = render(<Header />, { wrapper: MemoryRouter });
    expect(tree).toMatchSnapshot();
  });

  it('render search correctly', () => {
    const tree = render(<SearchBar />);
    expect(tree).toMatchSnapshot();
  });

  it('Render state card correctly', () => {
    const tree = render(<StateCard />);
    expect(tree).toMatchSnapshot();
  });

  it('Render Country card correctly', () => {
    const tree = render(<CountryCard />, { wrapper: MemoryRouter });
    expect(tree).toMatchSnapshot();
  });

  it('Render Country Details correctly', () => {
    const tree = render(<CountryDetails />);
    expect(tree).toMatchSnapshot();
  });

  it('Render weather Modal correctly', () => {
    const tree = render(
      <Provider store={store}>
        <WeatherModal />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
