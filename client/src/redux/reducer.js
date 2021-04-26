import * as action from './actionTypes';
import { types } from './actionTypes';

const initState = {
  isLogin: false,
  userName: 'none',
  currentBook: {
    currentLng: 0,
    currentLat: 0,
  },

  currentLng: 0,
  currentLat: 0,
};

// payload ={
//   currentLng: 232332,
//   currentLat: 232332,
// }
export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case action.LOGIN:
      return { ...state, isLogin: true, userName: payload };
    case action.SETCOORDINATES:
      return { ...state, currentLng: payload.lng, currentLat: payload.lat };
    case action.SETCOORDINATES_2:
      return { ...state, currentBook: payload };
    default:
      return state;
  }
}
