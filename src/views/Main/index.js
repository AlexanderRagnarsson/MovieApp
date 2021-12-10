import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

const Main = ({ navigation: { navigate } }) => (
  <View>
    <Button
      onPress={() => navigate('Cinemas')}
      title="See cinemas"
    />
    <Button
      onPress={() => navigate('Upcoming Movies')}
      title="See upcoming movies"
    />
  </View>
  // <UpcomingMovies {...{ navigate }} />
);

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Main;
