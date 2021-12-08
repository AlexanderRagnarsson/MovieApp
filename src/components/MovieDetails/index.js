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
  console.log('New movie', movies);

  console.log('showtimes: ', showtimes[0].schedule);
  return (
    <View>
      <Text>
        {`Title: ${movies[0].title}\n Plot: ${movies[0].plot}\n Duration of movie: ${movies[0].durationMinutes} minutes.\n Year of release: ${movies[0].year}\n`}
      </Text>
      <Animated.Image style={styles.poster} source={movies[0].poster} />
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
              onPress={() => Linking.openURL(item.purchase_url)}
            >
              {item.purchase_url}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

CinemaDetails.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default CinemaDetails;
