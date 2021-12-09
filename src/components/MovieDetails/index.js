import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, Animated, Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getMovieList from '../../actions/movieActions';
import styles from './styles';

const CinemaDetails = ({ cinemaId, movieId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const movies = useSelector((state) => state.movies).filter((movie) => movie.id === movieId);
  const showtimes = movies[0].showtimes.filter((item) => item.cinema.id === cinemaId);
  // console.log('New movie', movies);

  // console.log('showtimes: ', showtimes[0].schedule);
  return (
    <View>
      <Text>
        {`${movies[0].title}\n ${movies[0].poster}\n ${movies[0].plot}\n ${movies[0].durationMinutes}\n ${movies[0].year}\n`}
      </Text>
      <Animated.Image style={styles.poster} source={{ uri: movies[0].poster }} />
      <Text>Genres: </Text>
      <FlatList
        data={movies[0].genres}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
      <Text>Showtimes: </Text>
      <FlatList
        data={showtimes[0].schedule}
        renderItem={({ item }) => (
          <View>
            <Text>{item.time}</Text>
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL(movies[0].poster)}
            >
              {movies[0].poster}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

CinemaDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
  cinemaId: PropTypes.number.isRequired,
};

export default CinemaDetails;
