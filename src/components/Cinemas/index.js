import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CinemasPreview from '../CinemaPreview';
import getCinemaList from '../../actions/cinemaActions';

const Cinemas = ({ navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  const cinemas = useSelector((state) => state.cinemas);
  // const cinemas = useSelector((state) => state.cinemas);
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
