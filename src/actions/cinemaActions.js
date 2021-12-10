import { GET_CINEMA_LIST } from '../constants';
import cinemaservices from '../services/cinemaservice';

const getCinemaListSuccess = (cinemaList) => ({
  type: GET_CINEMA_LIST,
  payload: cinemaList,
});

const getCinemaListError = () => ({
  type: GET_CINEMA_LIST,
  payload: [],
});

const getCinemaList = (token) => async (dispatch) => {
  try {
    const cinemaList = await cinemaservices.getCinemaList(token);
    // console.log('GET_CINEMA_LIST: ', GET_CINEMA_LIST);
    dispatch(getCinemaListSuccess(cinemaList));
  } catch (err) {
    console.error('Error!: ', err);
    dispatch(getCinemaListError());
  }
};

export default getCinemaList;
