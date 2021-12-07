import { combineReducers } from 'redux';
// import Reducer from '../Reducer';
import MovieReducer from '../reducers/movieReducer';
import CinemaReducer from '../reducers/cinemaReducer';

const RootReducer = combineReducers({ movies: MovieReducer, cinemas: CinemaReducer });

export default RootReducer;
