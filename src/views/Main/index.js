import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import getToken from '../../actions/tokenActions';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Cinemas')}
      >
        <Text style={styles.text}>Sjá kvikmyndahús</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Upcoming Movies')}
      >
        <Text style={styles.text}>Sjá væntanlegar myndir</Text>
      </TouchableHighlight>
    </View>
  );
};

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Main;
