import { GET_MOVIE_LIST } from '../constants';
import movieService from '../services/movieservice';

const getMovieListSuccess = (movieList) => ({
  type: GET_MOVIE_LIST,
  payload: movieList,
});

const getMovieListError = () => ({
  type: GET_MOVIE_LIST,
  payload: [],
});

const getMovieList = (token) => async (dispatch) => {
  try {
    const movieList = await movieService.getMovieList(token);
    // console.log('GET_MOVIE_LIST: ', GET_MOVIE_LIST);
    dispatch(getMovieListSuccess(movieList));
  } catch (err) {
    console.error('Error!: ', err);
    dispatch(getMovieListError());
  }
};

export default getMovieList;
