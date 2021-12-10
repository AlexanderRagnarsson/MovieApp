import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import MoviesPreview from '../MoviePreview';
import NewMoviePreview from '../NewMoviePreview';
import getMovieList from '../../actions/movieActions';

const Movies = ({ cinemaId, navigate, header }) => {
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
    <ScrollView>
      {movies.map((item) => (
        <View key={item.id}>
          <NewMoviePreview {...{ ...item, navigate: () => navigate('Movie', { id: item.id, cinemaId }) }} />
        </View>
      ))}
      {/* <FlatList
        ListHeaderComponent={header}
        data={movies}
        renderItem={({ item }) => (
          <NewMoviePreview {...{ ...item, navigate: () => navigate('Movie', { id: item.id, cinemaId }) }} />
        )}
        keyExtractor={(movie) => movie.id}
      /> */}
    </ScrollView>
  );
};

Movies.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
  header: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Movies;
