import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getMovieList from '../../actions/movieActions';

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
        {`${movies[0].title}\n ${movies[0].poster}\n ${movies[0].plot}\n ${movies[0].durationMinutes}\n ${movies[0].year}\n`}
      </Text>
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
            <Text>{item.purchase_url}</Text>
          </View>
        )}
      />
    </View>
  );
};

CinemaDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default CinemaDetails;
