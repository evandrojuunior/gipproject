import { combineReducers } from 'redux';

import routes from './routes';
import login from './login';
import signin from './signIn';
import choosequiz from './choosequiz';
import addcompromise from './addcompromise';
import listcompromise from './listcompromise';



export default combineReducers({
  routes,
  login,
  signin,
  choosequiz,
  addcompromise,
  listcompromise
});
