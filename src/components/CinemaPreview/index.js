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
  <View>
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => navigate('CinemaDetails', {
        id,
      })}
    >
      <View style={styles.view}>
        <Text style={styles.id}>{id}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.website}>{website}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

CinemaPreview.propTypes = {
  website: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CinemaPreview;
