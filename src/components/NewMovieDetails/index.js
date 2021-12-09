import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, Animated, Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getMovieList from '../../actions/movieActions';
import styles from './styles';

const CinemaDetails = ({
  title, plot, durationMinutes, year, poster, genres,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const informationCheck = (information) => (
    (information !== undefined || information === '' || information === -1) ? information : 'N/A'
  );

  const getGenres = () => {
    if (genres === undefined) return null;
    const objectGenres = genres.filter((item) => typeof item === 'object');
    if (objectGenres.length === 0) return null;
    return (
      <FlatList
        ListHeaderComponent={<Text>Þemu: </Text>}
        data={objectGenres}
        renderItem={({ item }) => (
          <Text>{item.Name}</Text>
        )}
        keyExtractor={(genre) => genre.ID}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`${informationCheck(title)}`}
      </Text>
      <Text style={styles.plot}>
        {`${informationCheck(plot)}`}
      </Text>
      <Text style={styles.duration}>
        {`Lengd myndar: ${informationCheck(durationMinutes)} mínútur.`}
      </Text>
      <Text style={styles.year}>
        {`Útgáfuár: ${informationCheck(year)}`}
      </Text>
      <Animated.Image style={styles.poster} source={{ uri: poster }} />
      { getGenres() }
    </View>
  );
};

CinemaDetails.propTypes = {
  title: PropTypes.string,
  plot: PropTypes.string,
  durationMinutes: PropTypes.number,
  year: PropTypes.string,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CinemaDetails.defaultProps = {
  title: '',
  plot: '',
  durationMinutes: -1,
  year: '',
};

export default CinemaDetails;
