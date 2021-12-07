import { combineReducers } from 'redux';
// import Reducer from '../Reducer';
import MovieReducer from '../reducers/movieReducer';

const RootReducer = combineReducers({ movies: MovieReducer });

export default RootReducer;
