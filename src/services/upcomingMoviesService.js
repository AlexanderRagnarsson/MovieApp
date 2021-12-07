import axios from 'axios';
import { token } from '../constants';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';

const upcomingMoviesService = {
  getUpcomingMoviesList: async () => (
    axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/upcoming`,
      headers: {
        'x-access-token': token,
      },
    }).then((response) => {
      console.log('Response data: ', response.data);
      return (
        response.data
      );
    })
  ),
};

export default upcomingMoviesService;
