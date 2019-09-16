import { reducers as apiReducers } from 'redux-api-call';
import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'; will using in the future
import CategoryState from './CategoryState';
// import AdminState from './AdminState';

export default combineReducers({
  // ...AdminState,
  ...apiReducers,
  ...CategoryState
});
