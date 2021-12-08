import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../Movies';
import getCinemaList from '../../actions/cinemaActions';

const CinemaDetails = ({ cinemaId, navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);

  const cinemas = useSelector((state) => state.cinemas).filter((cinema) => cinema.id === cinemaId);
  const {
    name, description, phone, website, address, city,
  } = cinemas.filter((Cinema) => Cinema.id === cinemaId)[0];
  return (
    <View>
      <Text>
        {`${name}\n ${description}\n`}
      </Text>
      <Movies {...{ cinemaId, navigate }} />
      <Text>
        {`Phonenumber: ${phone}.\n Website: ${website}.\n Address: ${address}, ${city}`}
      </Text>
    </View>
  );
};

CinemaDetails.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CinemaDetails;
