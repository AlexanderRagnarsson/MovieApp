import { GET_MOVIE_LIST } from '../../constants';

export default function (state, action) {
  if (state === undefined) return [];
  switch (action.type) {
    case GET_MOVIE_LIST:
      // console.log('action', action.payload);
      return action.payload;
    default: return state;
  }
}
