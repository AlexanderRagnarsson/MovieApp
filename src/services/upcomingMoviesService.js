import axios from 'axios';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';

const upcomingMoviesService = {
  getUpcomingMoviesList: async (token) => (
    axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/upcoming`,
      headers: {
        'x-access-token': token,
      },
    }).then((response) => (
      response.data.map((item) => ({ ...item, year: item['release-dateIS'].substring(0, 4) }))
    ))
  ),
};

export default upcomingMoviesService;
