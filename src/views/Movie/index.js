import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, ScrollView, Text, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
// import MovieDetails from '../../components/MovieDetails';
import NewMovieDetails from '../../components/NewMovieDetails';
import styles from './styles';

const MovieView = ({ route }) => {
  const { id, cinemaId } = route.params;

  const movie = useSelector(
    (state) => state.movies,
  ).filter(
    (item) => item.id === id,
  )[0];
  const showtimes = movie.showtimes.filter((item) => item.cinema.id === cinemaId)[0];

  const getShowTimes = (showtimesIn) => {
    const arr = showtimesIn;
    return arr.schedule.map((item) => (
      <View key={item.purchase_url}>
        <Text>{item.time}</Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL(item.purchase_url)}
        >
          {item.purchase_url}
        </Text>
      </View>
    ));
  };

  return (
    <ScrollView>
      <NewMovieDetails
        {...movie}
      />
      <View style={styles.container}>
        { getShowTimes(showtimes) }
      </View>
    </ScrollView>
  );
};

MovieView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieView;
