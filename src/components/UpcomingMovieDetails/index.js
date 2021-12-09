import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, Animated,
} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
// import getMovieList from '../../actions/movieActions';
import styles from './styles';

const UpcomingMoviePreview = ({ movieId }) => {
  const informationCheck = (information) => (information !== undefined ? information : '');

  const upcomingMovie = useSelector(
    (state) => state.upcomingMovies,
  ).filter(
    (movie) => movie.id === movieId,
  )[0];

  const {
    title, plot, durationMinutes, year, genres, trailers,
  } = upcomingMovie;

  // console.log(upcomingMovie);
  const trailer = trailers[0];

  return (
    <View>
      <Text>
        {informationCheck(title)}
      </Text>
      <Text>
        {informationCheck(plot)}
      </Text>
      <Text>
        {informationCheck(durationMinutes)}
      </Text>
      <Text>
        {informationCheck(year)}
      </Text>
      <Animated.Image style={styles.poster} source={{ uri: upcomingMovie.poster }} />
      { trailer !== undefined && trailer.results[0] !== undefined
        ? (
          <YoutubePlayer
            height={300}
            play
            videoId={trailer.results[0].key}
          />
        )
        : null }
      <Text>{(genres !== [] && genres !== undefined) ? 'Genres:' : ''}</Text>
      <FlatList
        data={upcomingMovie.genres}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
    </View>
  );
};

UpcomingMoviePreview.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default UpcomingMoviePreview;
