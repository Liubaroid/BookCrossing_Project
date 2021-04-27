import * as action from './actionTypes';
import { types } from './actionTypes';

const initState = {
  isLogin: false,
  userName: 'none',
  currentLng: 0,
  currentLat: 0,
  currentCity:  'Moskow',
  currentCityLng: 37.59521484375001,
  currentCityLat: 55.75938403247252,
  currentBookId:'',
  currentAdress:'test',
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case action.LOGIN:
      return { ...state, isLogin: true, userName: payload };
    case action.SETCOORDINATES:
      return { ...state, currentLng: payload.lng, currentLat: payload.lat };
    case action.SETADRESS:
        return { ...state, currentAdress: payload };
    case action.SETCITY:
        return { ...state, currentCityLng: payload.lng, currentCityLat: payload.lat };
    case action.SETBOOKID:
          return { ...state, currentBookId: payload };
    default:
      return state;
  }
}
