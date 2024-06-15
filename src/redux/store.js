import { legacy_createStore as createStore, combineReducers } from 'redux';
import groupReducer from './reducer';

const rootReducer = combineReducers({
  group: groupReducer,
});

const store = createStore(rootReducer);

export default store;
