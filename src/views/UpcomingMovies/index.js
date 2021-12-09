import React from 'react';
import PropTypes from 'prop-types';
import UpcomingMovies from '../../components/UpcomingMovies';
// import SearchBar from '../../components/SearchBar';
// import AddButton from '../../components/AddButton';
// import ContactPreview from '../../components/ContactPreview';
// import AddContactModal from '../../components/AddContactModal';
// import ImportContacts from '../../components/ImportContacts';

const UpcomingMoviesView = ({ navigation: { navigate } }) => (
  <UpcomingMovies {...{ navigate }} />
);

UpcomingMoviesView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default UpcomingMoviesView;
