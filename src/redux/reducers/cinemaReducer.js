import { GET_CINEMA_LIST } from '../../constants';

export default function (state, action) {
  if (state === undefined) return [];
  switch (action.type) {
    case GET_CINEMA_LIST:
      console.log('action', action.payload.cinemas);
      return action.payload;
    default: return state;
  }
}
