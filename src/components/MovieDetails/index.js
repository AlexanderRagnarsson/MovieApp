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

  const token = useSelector((state) => state.token);
  useEffect(() => {
    dispatch(getMovieList(token));
  }, []);

  const informationCheck = (information) => (information !== undefined ? information : 'N/A');

  const movies = useSelector((state) => state.movies).filter((movie) => movie.id === movieId);
  const showtimes = movies[0].showtimes.filter((item) => item.cinema.id === cinemaId)[0];
  // console.log(showtimes);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`${informationCheck(movies[0].title)}`}
      </Text>
      <Text style={styles.plot}>
        {`${informationCheck(movies[0].plot)}`}
      </Text>
      <Text style={styles.duration}>
        {`Lengd myndar: ${informationCheck(movies[0].durationMinutes)} mínútur.`}
      </Text>
      <Text style={styles.year}>
        {`Útgáfuár: ${informationCheck(movies[0].year)}`}
      </Text>
      <Animated.Image style={styles.poster} source={{ uri: movies[0].poster }} />
      <FlatList
        ListHeaderComponent={<Text>Þemu: </Text>}
        data={movies[0].genres}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
      <FlatList
        ListHeaderComponent={<Text>Sýningartímar: </Text>}
        data={showtimes.schedule}
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
        keyExtractor={(item) => item.purchase_url}
      />
    </View>
  );
};

CinemaDetails.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default CinemaDetails;
