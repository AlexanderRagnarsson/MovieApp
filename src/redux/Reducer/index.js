import data from '../../resources/data.json';

// eslint-disable-next-line default-param-last
function Reducer(state, action) {
  console.log('Data reducer: ', data);
  if (state === undefined) {
    return {
      ...data,
    };
  }
  switch (action.type) {
    default:
      return state;
  }
}

export default Reducer;
