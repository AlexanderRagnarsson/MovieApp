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
      // return response.data;
      // console.log('Response data: ', response.data);
      const sanitizedData = [];
      response.data.forEach((item) => {
        const obj = {};
        // Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        function escapeRegExp(string) {
          return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        }
        function replaceAll(str, match, replacement) {
          return str.replace(new RegExp(escapeRegExp(match), 'g'), () => replacement);
        }
        // eslint-disable-next-line no-restricted-syntax
        // eslint-disable-next-line guard-for-in
        for (const key in item) {
          if (typeof item[key] === 'string') {
            obj[key.trim()] = replaceAll(replaceAll(replaceAll(item[key], '<br>', ''), '\n', ' '), '<b>', '');
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
