import { GET_UPCOMING_MOVIES_LIST } from '../constants';
import UpcomingMoviesServices from '../services/upcomingMoviesService';

const getUpcomingMoviesListSuccess = (UpcomingMoviesList) => ({
  type: GET_UPCOMING_MOVIES_LIST,
  payload: UpcomingMoviesList,
});

const getUpcomingMoviesListError = () => ({
  type: GET_UPCOMING_MOVIES_LIST,
  payload: [],
});

const getUpcomingMoviesList = (token) => async (dispatch) => {
  try {
    const UpcomingMoviesList = await UpcomingMoviesServices.getUpcomingMoviesList(token);
    // console.log('GET_UpcomingMovies_LIST: ', GET_UPCOMING_MOVIES_LIST);
    dispatch(getUpcomingMoviesListSuccess(UpcomingMoviesList));
  } catch (err) {
    console.error(err);
    dispatch(getUpcomingMoviesListError());
  }
};

export default getUpcomingMoviesList;
