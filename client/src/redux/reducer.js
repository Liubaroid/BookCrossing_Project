import * as action from './actionTypes';

const initState = {
   isLogin: false,
   userName: 'none',
   currentLng: 0,
   currentLat: 0,
    };

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case action.LOGIN:
      return { ...state, isLogin: true, userName: payload };
    case action.SETCOORDINATES:
      return { ...state, currentLng: payload.lng, currentLat: payload.lat };

    default:
      return state;
  }
}
