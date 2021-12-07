import GET_MOVIE_LIST from '../../constants';

export default function (state = 0, action) {
  switch (action.type) {
    case GET_MOVIE_LIST:
      console.log('action', action.payload.movies);
      return action.payload;
    default: return state;
  }
}
