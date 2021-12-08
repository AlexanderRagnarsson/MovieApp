import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Text, View, TouchableHighlight, FlatList, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MoviePreview = ({
  id, title, poster, year, genres, navigate, cinemaId,
}) => (
  <View style={styles.view}>
    <View style={styles.Image}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => navigate('Movie', {
          id, cinemaId,
        })}
      >
        <View>
          <Animated.Image style={styles.poster} source={poster}/>
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

MoviePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigate: PropTypes.func.isRequired,
  cinemaId: PropTypes.number.isRequired,
};

export default MoviePreview;
