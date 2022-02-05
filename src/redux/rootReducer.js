import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import countreyReducer from './countriesReducer/countriesReducer';
import citiesReducer from './citiesReducer/citiesReducer';
import weatherReducer from './weatherReducer/weatherReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['countries'],
};

const rootReducer = combineReducers({
  countries: countreyReducer,
  cities: citiesReducer,
  weather: weatherReducer,
});

export default persistReducer(persistConfig, rootReducer);
