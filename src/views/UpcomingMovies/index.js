import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import UpcomingMovies from '../../components/UpcomingMovies';
import styles from './styles';

const UpcomingMoviesView = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <UpcomingMovies {...{ navigate }} />
  </View>
);

UpcomingMoviesView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default UpcomingMoviesView;
