import * as types from '../actions/actionTypes';

const initialState = {
  user: ''
};

export default function listcompromise(state = initialState, action = {}) {
  switch (action.type) {
    case types.LISTCOMPROMISE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
