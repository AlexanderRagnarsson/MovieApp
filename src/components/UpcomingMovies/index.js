import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import UpcomingMoviePreview from '../UpcomingMoviePreview';
import getUpcomingMoviesList from '../../actions/upcomingMoviesActions';

const UpcomingMovies = ({ navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMoviesList());
  }, []);
  const upcomingMovies = useSelector((state) => state.upcomingMovies);
  // const cinemas = useSelector((state) => state.cinemas);
  console.log('Cinemas:! ', upcomingMovies);
  return (
    <View>
      <FlatList
        data={upcomingMovies}
        renderItem={({ item }) => (
          <UpcomingMoviePreview {...{ ...item, navigate }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
};

UpcomingMovies.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default UpcomingMovies;
