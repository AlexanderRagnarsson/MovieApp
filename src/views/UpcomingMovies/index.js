import React from 'react';
import { View, Text } from 'react-native';
import UpcomingMovies from '../../components/UpcomingMovies';
// import PropTypes from 'prop-types';
// import SearchBar from '../../components/SearchBar';
// import AddButton from '../../components/AddButton';
// import ContactPreview from '../../components/ContactPreview';
// import AddContactModal from '../../components/AddContactModal';
// import ImportContacts from '../../components/ImportContacts';

const UpcomingMoviesView = ({ navigation: { navigate } }) => {
  const thing = '';
  console.log(thing);
  return (
    <UpcomingMovies { ...{ navigate } }/>
  );
};

// Contacts.propTypes = {
//   navigation: PropTypes.objectOf(PropTypes.func).isRequired,
// };

export default UpcomingMoviesView;
