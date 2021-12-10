import { GET_TOKEN } from '../../constants';

export default function (state, action) {
  if (state === undefined) return '';
  switch (action.type) {
    case GET_TOKEN:
      // console.log('action', action.payload);
      return action.payload;
    default: return state;
  }
}
