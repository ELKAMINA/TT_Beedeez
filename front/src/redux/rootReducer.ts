import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import stationsReducer from './stations/stationsSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
};

const rootReducer = combineReducers({
  auth: authReducer,
  stations: stationsReducer,
});

export {rootPersistConfig, rootReducer};
