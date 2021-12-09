import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Text, View, TouchableHighlight, FlatList, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UpcomingMoviePreview = ({
  id, title, poster, year, genres, navigate,
}) => (
  <View style={styles.view}>
    <View style={styles.Image}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => navigate('UpcomingMovie', {
          id,
        })}
      >
        <View>
          <Animated.Image style={styles.poster} source={{ uri: poster }} />
        </View>
      </TouchableHighlight>
    </View>
    <View style={styles.notImage}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
      <FlatList
        data={genres}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
    </View>
  </View>
);

UpcomingMoviePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  // Skítamix. Skilgreining:
  genres: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.number])).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default UpcomingMoviePreview;
