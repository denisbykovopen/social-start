import { combineReducers } from 'redux';
import posts from './postReducer';
import catalog from './catalogReducer';

export default combineReducers({
  posts,
  catalog,
});
