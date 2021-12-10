import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, Text, Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getMovieList from '../../actions/movieActions';
import styles from './styles';

const NewMovieDetails = ({
  title, plot, year, poster, genres,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  useEffect(() => {
    dispatch(getMovieList(token));
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
  year: PropTypes.string,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.any).isRequired,
};

NewMovieDetails.defaultProps = {
  title: '',
  plot: '',
  year: '',
};

export default NewMovieDetails;
