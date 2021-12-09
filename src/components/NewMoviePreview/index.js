import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Text, View, TouchableHighlight, FlatList, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MoviePreview = ({
  title, poster, year, genres, navigate,
}) => {
  const getGenres = () => {
    if (genres === undefined) return null;
    const objectGenres = genres.filter((item) => typeof item === 'object');
    if (objectGenres.length === 0) return null;
    return (
      <FlatList
        data={objectGenres}
        renderItem={({ item }) => (
          <Text style={styles.genre}>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => navigate()}
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
          { getGenres() }
        </View>
      </View>
    </View>
  );
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default MoviePreview;
