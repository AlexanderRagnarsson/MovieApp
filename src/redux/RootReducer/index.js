import { combineReducers } from 'redux';
// import Reducer from '../Reducer';
import MovieReducer from '../reducers/movieReducer';
import CinemaReducer from '../reducers/cinemaReducer';
import UpcomingMovieReducer from '../reducers/upcomingMovieReducer';
import tokenReducer from '../reducers/tokenReducer';

const RootReducer = combineReducers(
  {
    movies: MovieReducer,
    cinemas: CinemaReducer,
    upcomingMovies: UpcomingMovieReducer,
    token: tokenReducer,
  },
);

export default RootReducer;
