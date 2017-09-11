import * as types from '../actions/actionTypes';

const initialState = {
  token: ''
};

export default function choosequiz(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHOOSEQUIZ:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
