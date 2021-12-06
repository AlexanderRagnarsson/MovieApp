import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import getMovieList from '../../actions/movieActions';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  return (
    <View>
      <Text>Yes please</Text>
    </View>
  );
};

export default Main;
