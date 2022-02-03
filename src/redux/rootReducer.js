import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import countreyReducer from './countriesReducer/countriesReducer';
import citiesReducer from './citiesReducer/citiesReducer';
import weatherCurrLocationReducer from './weatherReducer/weatherCurrLocReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['countries'],
};

const rootReducer = combineReducers({
  countries: countreyReducer,
  cities: citiesReducer,
  weatherLoc: weatherCurrLocationReducer,
});

export default persistReducer(persistConfig, rootReducer);
