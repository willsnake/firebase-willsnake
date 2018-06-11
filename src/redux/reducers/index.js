import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { home } from './home';

const AppReducers = combineReducers({
  home,
  routing: routerReducer
});

export default AppReducers;
