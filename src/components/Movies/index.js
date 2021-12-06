import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MoviesPreview from '../MoviePreview';

const Movies = ({ cinemaId, navigate }) => {
  const movies = useSelector(
    (state) => state.movies,
  ).filter((movie) => movie.showtimes.reduce((prev, cinemaObject) => (
    cinemaObject.cinema.id === cinemaId || prev), false));
  console.log('movies', movies);
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviesPreview {...{ ...item, navigate }} />
        )}
        keyExtractor={(movie) => movie.id}
      />
    </View>
  );
};

Movies.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Movies;
