import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

const URL = 'http://localhost:3003/compromises'

export const handleGetCompromises = (self)=>{

  return axios.get(`${URL}`)
    .then(function (response){
      console.log( typeof response.data );
      self.setState({ datathread: response.data })
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
