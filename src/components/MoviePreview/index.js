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
  <View style={styles.container}>
    <View style={styles.Image}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => navigate('Movie', {
          id, cinemaId,
        })}
      >
        <View>
          <Animated.Image style={styles.poster} source={{ uri: poster }} />
        </View>
      </TouchableHighlight>
    </View>
    <View style={styles.movieDetails}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
      <View style={styles.genres}>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <Text style={styles.genre}>{item.Name}</Text>
          )}
          keyExtractor={(genre) => genre.ID + title}
        />
      </View>
    </View>
  </View>
);

MoviePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigate: PropTypes.func.isRequired,
  cinemaId: PropTypes.number.isRequired,
};

export default MoviePreview;
