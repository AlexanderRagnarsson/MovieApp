import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NewMoviePreview from '../NewMoviePreview';
import getMovieList from '../../actions/movieActions';

const Movies = ({ cinemaId, navigate }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getMovieList(token));
  }, []);
  const movies = useSelector(
    (state) => state.movies,
  ).filter((movie) => movie.showtimes.reduce((prev, cinemaObject) => (
    cinemaObject.cinema.id === cinemaId || prev), false));

  return (
    <ScrollView>
      {movies.map((item) => (
        <View key={item.id}>
          <NewMoviePreview {...{ ...item, navigate: () => navigate('Movie', { id: item.id, cinemaId }) }} />
        </View>
      ))}
    </ScrollView>
  );
};

Movies.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Movies;
