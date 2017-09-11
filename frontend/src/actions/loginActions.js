import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

const URL = 'http://localhost:3003/login'

export const handleSignIn = ()=>{
  Actions.signIn()

  return {type: 'signIn'}
}

export const handlePostLog = (state)=>{
  axios.post(`${URL}`, {
      email: state.emailuser,
      password: state.passworduser
    })
    .then(function (response) {
      if(response.data.email == null && response.data.password == null){
        alert("Nao cadastrado");
      }else{
        alert("Seja bem vindo:" + response.data.email);
        resp => dispatch({
          type: types.LOGIN
        })
        Actions.choosequiz()
        return {type: 'choosequiz'}
      }

    })
    .catch(function (error) {
      console.log(error);
    });
}
