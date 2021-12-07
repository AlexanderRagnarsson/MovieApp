import axios from 'axios';

const BASE_ENDPOINT = 'https://api.kvikmyndir.is';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFkZjg5NGExMTQ0MDFmNDU2NWRmYTAiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkRhbmllbCDDlnJuIFNpZ3Vyw7Bzc29uIiwiZW1haWwiOiJkYW5pZWxvcm4wMEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImNyYXp5YXAzIiwicGFzc3dvcmQiOiIkMmEkMDgkeS85WkdNZWdrQWw2R3RUOVBEb1daT21TNUltS0o5V0ZqWGZ1OGRzcXMxWDJtZGQ3d2ZPUU8iLCJkb21haW4iOiJodHRwczovL2dpdGh1Yi5jb20vRGFuaWVscy0xOSIsIm1lc3NhZ2UiOiJXZSBpbnRlbmQgdG8gdXNlIGl0IGZvciB0aGUgdGhyZWUgd2VlayBjb3Vyc2UgaW4gSFIgY2FsbGVkIFwiU23DoWZvcnJpdHVuXCIiLCJpYXQiOjE2Mzg4NzkyNzQsImV4cCI6MTYzODk2NTY3NH0.VPtXgPxLmWMxKH5aSAu-VoiCypdGU0qq9lETX3gEOIo';

const movieService = {
  getMovieList: async () => (
    axios({
      method: 'get',
      url: `${BASE_ENDPOINT}/theaters`,
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

export default movieService;
