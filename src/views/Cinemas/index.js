import React from 'react';
import PropTypes from 'prop-types';
import Cinemas from '../../components/Cinemas';

const CinemasView = ({ navigation: { navigate } }) => (
  <Cinemas
    {...{ navigate }}
  />
);

CinemasView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default CinemasView;
