import React from 'react';
import {
  Text, View, TouchableHighlight, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const NewMoviePreview = ({
  title, poster, year, genres, navigate,
}) => {
  const getGenres = () => {
    if (genres === undefined) return null;
    const objectGenres = genres.filter((item) => typeof item === 'object');
    if (objectGenres.length === 0) return null;
    return (
      objectGenres.map((item) => <Text key={item.ID} style={styles.genre}>{item.Name}</Text>)
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

NewMoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default NewMoviePreview;
