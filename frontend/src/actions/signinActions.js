import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

const URL = 'http://localhost:3003/users'

export const handlePostUser = (state)=>{
  axios.post(`${URL}`, {
      email: state.emailuser,
      password: state.passworduser
    })
    .then(function (response) {
      alert("Cadastrado com sucesso!");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
