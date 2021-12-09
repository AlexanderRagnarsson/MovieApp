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

  const getGenres = () => {
    if (genres === undefined) return null;
    const objectGenres = genres.filter((item) => typeof item === 'object');
    if (objectGenres.length === 0) return null;
    return (
      <FlatList
        data={objectGenres}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
    );
  };

  const getTrailer = () => {
    const trailer = trailers[0];
    if (trailer === undefined) { return null; }
    if (trailer.results.length === 0) { return null; }
    let { key } = trailer.results[0];
    const officialTrailers = trailers[0].results.filter((trailerItem) => trailerItem.name.toLowerCase().includes('official'));
    if (officialTrailers.length !== 0) { key = officialTrailers[0].key; }
    return (
      <YoutubePlayer
        height={300}
        // play
        videoId={key}
      />
    );
  };

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
      <Text>{(genres !== [] && genres !== undefined) ? 'Genres:' : ''}</Text>
      { getGenres() }
      { getTrailer() }
    </View>
  );
};

UpcomingMoviePreview.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default UpcomingMoviePreview;
