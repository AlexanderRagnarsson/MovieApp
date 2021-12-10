import axios from 'axios';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';

const tokenService = {
  getToken: async () => (
    axios({
      method: 'post',
      url: `${BASE_ENDPOINT}/authenticate`,
      data: {
        username: 'benti',
        password: 'þriggjavikna',
      },
    }).then((response) => (
      response.data.token
    ))),
};

export default tokenService;
