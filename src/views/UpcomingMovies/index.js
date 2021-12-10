import React from 'react';
import PropTypes from 'prop-types';
import UpcomingMovies from '../../components/UpcomingMovies';

const UpcomingMoviesView = ({ navigation: { navigate } }) => (
  <UpcomingMovies {...{ navigate }} />
);

UpcomingMoviesView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default UpcomingMoviesView;
