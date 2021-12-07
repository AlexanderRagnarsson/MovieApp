import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Text, View, TouchableHighlight, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MoviePreview = ({
  id, title, poster, year, genres, navigate,
}) => (
  <View>
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => navigate('Movie', {
        id,
      })}
    >
      <View style={styles.view}>
        <Text style={styles.id}>{id}</Text>
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
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default MoviePreview;
