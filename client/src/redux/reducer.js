import * as action from './actionTypes';

const initState = {
   isLogin: false,
   userName: 'none',
    };

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case action.LOGIN:
      return { ...state, isLogin: true, userName: payload };
  
    default:
      return state;
  }
}
