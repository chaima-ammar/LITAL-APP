import { combineReducers } from 'redux';
import prodactReducer from './prodactReducer';
import userReducer from './userReducer';
import historiqueReducer from './historiqueReducer';
const allReducers = combineReducers({
  prod : prodactReducer,
  users : userReducer,
  historique : historiqueReducer,
});

export default allReducers;
