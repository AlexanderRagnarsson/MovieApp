import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';
import getToken from '../../actions/tokenActions';

const Main = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);

  return (
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
};

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Main;
