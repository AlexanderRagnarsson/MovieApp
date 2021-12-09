import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, Text, FlatList, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
// import MovieDetails from '../../components/MovieDetails';
import NewMovieDetails from '../../components/NewMovieDetails';

const MovieView = ({ route }) => {
  const { id, cinemaId } = route.params;

  const movie = useSelector(
    (state) => state.movies,
  ).filter(
    (item) => item.id === id,
  )[0];
  const showtimes = movie.showtimes.filter((item) => item.cinema.id === cinemaId)[0];

  return (
    <View>
      <NewMovieDetails
        {...movie}
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

MovieView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieView;
