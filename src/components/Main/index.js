import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getMovieList from '../../actions/movieActions';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <View>
      <Text>Yes please</Text>
      {/* <Text>{movies}</Text> */}
    </View>
  );
};

export default Main;
