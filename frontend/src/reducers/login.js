import * as types from '../actions/actionTypes';

const initialState = {
  userdata: 'Poia'
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {...state, userdata: "Oi"}
    case types.CHANGE:
      return {...state, userdata: "" }
    default:
      return state;
  }
}
