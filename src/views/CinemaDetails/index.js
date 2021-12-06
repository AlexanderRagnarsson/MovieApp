import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Movies from '../../components/Movies';

const CinemasView = ({ route, navigation: { navigate } }) => {
  const { id } = route.params;
  const {
    cinemas,
  } = useSelector((state) => state);

  const {
    name, description, phone, website, address, city,
  } = cinemas.filter((Cinema) => Cinema.id === id)[0];
  return (
    <Text>
      <Text>
        {`${id}\n ${name}\n ${description}\n ${phone}\n ${website}\n ${address}\n ${city}`}
      </Text>
      <Movies
        {...{ cinemaId: id, navigate }}
      />
    </Text>
  );
};

CinemasView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CinemasView;
