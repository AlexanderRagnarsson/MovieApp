/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { token } from '../constants';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';

const cinemaService = {
  getCinemaList: async () => (
    axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/theaters`,
      headers: {
        'x-access-token': token,
      },
    }).then((response) => {
      console.log('Response data: ', response.data);
      const sanitizedData = [];
      response.data.forEach((item) => {
        const obj = {};
        // eslint-disable-next-line no-restricted-syntax
        // eslint-disable-next-line guard-for-in
        for (const key in item) {
          if (typeof item[key] === 'string') {
            obj[key.trim()] = item[key].replaceAll('<br>', '').replaceAll('\n', '').replaceAll('<b>', '');
          } else {
            obj[key.trim()] = item[key];
          }
        }
        sanitizedData.push(obj);
      });
      return (
        sanitizedData
      );
    })
  ),
};

export default cinemaService;
