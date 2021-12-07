import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Text, View, TouchableHighlight, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MoviePreview = ({
  id, title, poster, year, genres, navigate, cinemaId,
}) => (
  <View>
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => navigate('Movie', {
        id, cinemaId,
      })}
    >
      <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.poster}>{poster}</Text>
        <Text style={styles.year}>{year}</Text>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <Text>{item.Name}</Text>
          )}
          keyExtractor={(genre) => genre.ID}
        />
      </View>
    </TouchableHighlight>
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
