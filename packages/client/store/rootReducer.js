import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import colorReducer from './colorReducer';

export default combineReducers({
  ...imageReducer,
  ...colorReducer
});
