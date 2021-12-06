import GET_MOVIE_LIST from '../constants';
import movieService from '../services/movieservice';

const getMovieListSuccess = (movieList) => ({
  type: GET_MOVIE_LIST,
  payload: movieList,
});

const getMovieListError = () => ({
  type: GET_MOVIE_LIST,
  payload: 0,
});

const getMovieList = () => async (dispatch) => {
  try {
    const movieList = await movieService.getMovieList();
    console.info(movieList);
    dispatch(getMovieListSuccess(movieList));
  } catch {
    dispatch(getMovieListError());
  }
};

export default getMovieList;
