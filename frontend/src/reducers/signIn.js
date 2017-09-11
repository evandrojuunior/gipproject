import * as types from '../actions/actionTypes';

const initialState = {
  user: {
    name_inc: []
  }
};

export default function signin(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNIN:
      return {
        ...state,
        user: action.payload
      };
      case types.POSTUSER:
        return {
          ...state,
          user: action.payload
        };
    default:
      return state;
  }
}
