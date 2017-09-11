import * as types from '../actions/actionTypes';

const initialState = {
  user: ''
};

export default function addcompromise(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADDCOMPROMISSE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
