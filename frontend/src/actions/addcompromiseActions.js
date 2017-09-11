import * as types from './actionTypes';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

const URL = 'http://localhost:3003/compromises'

export const handlePostCompromise = (state)=>{
  axios.post(`${URL}`, {
      name: state.name_compromise,
      date: state.date_compromise
    })
    .then(function (response) {
      alert("Compromisso cadastrado com sucesso !");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
