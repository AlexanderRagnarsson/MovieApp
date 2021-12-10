import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../Movies';
import getCinemaList from '../../actions/cinemaActions';
import styles from './styles';

const CinemaDetails = ({ cinemaId, navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);

  const cinemas = useSelector((state) => state.cinemas).filter((cinema) => cinema.id === cinemaId);
  const {
    name, description, phone, website, address, city,
  } = cinemas.filter((Cinema) => Cinema.id === cinemaId)[0];

  const getHeader = () => (
    <View>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.description}>
        {description}
      </Text>
      <Text style={styles.details}>
        {`Sími: ${phone}`}
      </Text>
      <Text style={styles.details}>
        {`Vefslóð: ${website}`}
      </Text>
      <Text style={styles.details}>
        {`Staðsetning: ${address}, ${city}`}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.view}>
      { getHeader() }
      <View style={styles.movieList}>
        <Movies {...{ cinemaId, navigate }} />
      </View>
    </ScrollView>
  );
};

CinemaDetails.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CinemaDetails;
