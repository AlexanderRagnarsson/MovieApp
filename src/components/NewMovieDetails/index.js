import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, FlatList, Animated, Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getMovieList from '../../actions/movieActions';
import styles from './styles';

const NewMovieDetails = ({
  title, plot, durationMinutes, year, poster, genres,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const informationCheck = (information) => (
    (information !== undefined || information !== '' || information !== -1) ? information : 'N/A'
  );

  const getGenres = () => {
    if (genres === undefined) return null;
    const objectGenres = genres.filter((item) => typeof item === 'object');
    if (objectGenres.length === 0) return null;
    return (
      objectGenres.map((item) => <Text key={item.ID}>{item.Name}</Text>)
      // <FlatList
      //   ListHeaderComponent={<Text>Þemu: </Text>}
      //   data={objectGenres}
      //   renderItem={({ item }) => (
      //     <Text>{item.Name}</Text>
      //   )}
      //   keyExtractor={(genre) => genre.ID}
      // />
    );
  };

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

NewMovieDetails.propTypes = {
  title: PropTypes.string,
  plot: PropTypes.string,
  durationMinutes: PropTypes.number,
  year: PropTypes.string,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.any).isRequired,
};

NewMovieDetails.defaultProps = {
  title: '',
  plot: '',
  durationMinutes: -1,
  year: '',
};

export default NewMovieDetails;
