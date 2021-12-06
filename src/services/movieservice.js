import axios from 'axios';

const BASE_ENDPOINT = 'http://api.kvikmyndir.is';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMDc3MGExMTQ0MDFmNDU2NWRmYTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkJlbnQgR3VubmFyc3NvbiIsImVtYWlsIjoiYmVudGlib3lAZ21haWwuY29tIiwidXNlcm5hbWUiOiJiZW50aSIsInBhc3N3b3JkIjoiJDJhJDA4JEVtbTRHSHVLQlEyazY2cnN3NDU1M2VXZ0t0Wnl2VVVzMlI1TE9VWWNPQVlETGNqRXNrR1lTIiwiZG9tYWluIjoibG9jYWxob3N0IiwibWVzc2FnZSI6IkVkdWNhdGlvbmFsIHB1cnBvc2VzLCB0aHJlZSB3ZWVrIGNvdXJzZSBhdCBSVSIsImlhdCI6MTYzODgwNzg1NSwiZXhwIjoxNjM4ODk0MjU1fQ.ECJXT0DQsxUg_U5maq7tpiy7ymi164ysMjCzZqQETRQ';

const movieService = {
  getMovieList: async () => {
    await axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/movies`,
      headers: {
        'x-access-token': token,
      },
    }).then((response) => {
      console.log(response.data);
    });
  },
};

export default movieService;
