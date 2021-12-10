import React from 'react';
import PropTypes from 'prop-types';
import CinemaDetails from '../../components/CinemaDetails';

const CinemasDetailsView = ({ route, navigation: { navigate } }) => {
  const { id } = route.params;

  return (
    <CinemaDetails
      {...{ cinemaId: id, navigate }}
    />
  );
};

CinemasDetailsView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CinemasDetailsView;
