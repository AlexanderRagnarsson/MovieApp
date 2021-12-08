import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../../components/MovieDetails';

const MovieView = ({ route }) => {
  const { id, cinemaId } = route.params;
  return (
    <MovieDetails
      {...{ cinemaId, movieId: id }}
    />
  );
};

MovieView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieView;
