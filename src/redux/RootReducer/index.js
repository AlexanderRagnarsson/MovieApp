import { combineReducers } from 'redux';
// import Reducer from '../Reducer';
import MovieReducer from '../reducers/movieReducer';
import CinemaReducer from '../reducers/cinemaReducer';
import UpcomingMovieReducer from '../reducers/upcomingMovieReducer';

const RootReducer = combineReducers(
  { movies: MovieReducer, cinemas: CinemaReducer, upcomingMovies: UpcomingMovieReducer },
);

export default RootReducer;
