import axios from 'axios';
import token from '../constants/token';
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMDc3MGExMTQ0MDFmNDU2NWRmYTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkJlbnQgR3VubmFyc3NvbiIsImVtYWlsIjoiYmVudGlib3lAZ21haWwuY29tIiwidXNlcm5hbWUiOiJiZW50aSIsInBhc3N3b3JkIjoiJDJhJDA4JEVtbTRHSHVLQlEyazY2cnN3NDU1M2VXZ0t0Wnl2VVVzMlI1TE9VWWNPQVlETGNqRXNrR1lTIiwiZG9tYWluIjoibG9jYWxob3N0IiwibWVzc2FnZSI6IkVkdWNhdGlvbmFsIHB1cnBvc2VzLCB0aHJlZSB3ZWVrIGNvdXJzZSBhdCBSVSIsImlhdCI6MTYzOTEzOTA4MywiZXhwIjoxNjM5MjI1NDgzfQ.uUsZe6atqDl-jaOiMGHDMY7hJNBPcsJDUA1h7SD3x84';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';

const upcomingMoviesService = {
  getUpcomingMoviesList: async () => (
    axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/upcoming`,
      headers: {
        'x-access-token': token(),
      },
    }).then((response) => {
      console.log('Response data: ', response.data);
      return (
        response.data.map((item) => ({ ...item, year: item['release-dateIS'].substring(0, 4) }))
      );
    })
  ),
};

export default upcomingMoviesService;
