import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MoviesPreview from '../MoviePreview';
import getMovieList from '../../actions/movieActions';

const Movies = ({ cinemaId, navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const movies = useSelector(
    (state) => state.movies,
  ).filter((movie) => movie.showtimes.reduce((prev, cinemaObject) => (
    cinemaObject.cinema.id === cinemaId || prev), false));
  // console.log(movies.id + movies.name);
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviesPreview {...{ ...item, navigate, cinemaId }} />
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
