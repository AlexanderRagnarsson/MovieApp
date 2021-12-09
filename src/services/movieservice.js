import axios from 'axios';
import { token } from '../constants';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';

const movieService = {
  getMovieList: async () => (
    axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/movies`,
      headers: {
        'x-access-token': token,
      },
    }).then((response) => (
      response.data
    ))),
};

export default movieService;
