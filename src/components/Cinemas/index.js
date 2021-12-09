import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CinemasPreview from '../CinemaPreview';
import getCinemaList from '../../actions/cinemaActions';
import styles from './styles';

const Cinemas = ({ navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  const cinemas = useSelector((state) => state.cinemas.sort(
    (a, b) => (
      a.name.localeCompare(b.name)
    ),
  ));
  return (
    <View style={styles.container}>
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
