import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Text, View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaPreview = ({
  id, name, website, navigate,
}) => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.view}
      onPress={() => navigate('Cinema Details', {
        id,
      })}
    >
      <View style={styles.view2}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.website}>{website}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

CinemaPreview.propTypes = {
  id: PropTypes.number.isRequired,
  website: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CinemaPreview;
