import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';

export const handleAddCompromise = ()=>{
  Actions.addcompromise()

  return {type: 'addcompromise'}
}

export const handleListCompromise = ()=>{
  Actions.listcompromise()

  return {type: 'listcompromise'}
}
