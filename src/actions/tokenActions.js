import { GET_TOKEN } from '../constants';
import tokenservice from '../services/tokenservice';

const getTokenSuccess = (token) => ({
  type: GET_TOKEN,
  payload: token,
});

const getTokenError = () => ({
  type: GET_TOKEN,
  payload: '',
});

const getToken = () => async (dispatch) => {
  try {
    const token = await tokenservice.getToken();
    dispatch(getTokenSuccess(token));
  } catch (err) {
    console.error('Error!: ', err);
    dispatch(getTokenError());
  }
};

export default getToken;
