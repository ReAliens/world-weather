import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import countreyReducer from './countriesReducer/countriesReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['countries'],
};

const rootReducer = combineReducers({
  countries: countreyReducer,
});

export default persistReducer(persistConfig, rootReducer);
