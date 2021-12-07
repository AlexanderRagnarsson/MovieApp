import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CinemasPreview from '../CinemaPreview';
import getMovieList from '../../actions/movieActions';

const Cinemas = ({ navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const { movies } = useSelector((state) => state);
  // const cinemas = useSelector((state) => state.cinemas);
  console.log('Cinemas:! ', movies);
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <CinemasPreview {...{ ...item, navigate }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
};

Cinemas.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default Cinemas;
