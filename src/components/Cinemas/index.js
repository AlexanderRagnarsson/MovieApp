import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CinemasPreview from '../CinemaPreview';

const Cinemas = ({ navigate }) => {
  const cinemas = useSelector((state) => state.cinemas);
  console.log('Cinemas:! ', cinemas);
  return (
    <View>
      <FlatList
        data={cinemas}
        renderItem={({ item }) => (
          <CinemasPreview {...{ ...item, navigate }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
};

Cinemas.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default Cinemas;
