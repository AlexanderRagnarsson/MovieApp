import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CinemasPreview from '../CinemaPreview';
import getCinemaList from '../../actions/cinemaActions';
import styles from './styles';

const Cinemas = ({ navigate }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getCinemaList(token));
  }, []);

  const cinemas = useSelector((state) => state.cinemas.sort(
    (a, b) => (
      a.name.localeCompare(b.name)
    ),
  ));
  return (
    <ScrollView style={styles.container}>
      { cinemas.map((item) => (
        <View key={item.id}>
          <CinemasPreview {...{ ...item, navigate }} />
        </View>
      )) }
      {/* <FlatList
        data={cinemas}
        renderItem={({ item }) => (
          <CinemasPreview {...{ ...item, navigate }} />
        )}
        keyExtractor={(board) => board.id}
      /> */}
    </ScrollView>
  );
};

Cinemas.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default Cinemas;
