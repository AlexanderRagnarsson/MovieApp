import React from 'react';
import PropTypes from 'prop-types';
import UpcomingMovieDetail from '../../components/UpcomingMovieDetails';

const UpcomingMovieView = ({ route }) => {
  const { id } = route.params;
  return (
    <UpcomingMovieDetail
      {...{ movieId: id }}
    />
  );
};

UpcomingMovieView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default UpcomingMovieView;
