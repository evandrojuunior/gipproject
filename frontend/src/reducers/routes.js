import { ActionConst } from 'react-native-router-flux'
const DEFAULT_STATE = {scene: {}}

export default (state = DEFAULT_STATE, {type, scene})=> {
  switch(type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene,
      }
    default:
      return state
  }
}
