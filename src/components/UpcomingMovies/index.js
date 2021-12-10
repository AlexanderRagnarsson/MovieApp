import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import NewMoviePreview from '../NewMoviePreview';
import getUpcomingMoviesList from '../../actions/upcomingMoviesActions';
// import getToken from '../../actions/tokenActions';

const UpcomingMovies = ({ navigate }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getUpcomingMoviesList(token));
  }, []);

  const upcomingMovies = useSelector(
    (state) => state.upcomingMovies,
  ).sort(
    (a, b) => {
      const dateA = new Date(a['release-dateIS']);
      const dateB = new Date(b['release-dateIS']);
      if (dateA > dateB) {
        return 1;
      }
      if (dateA < dateB) {
        return -1;
      }
      return a.name > b.name;
    },
  ).map(
    (a) => ({ ...a, year: a['release-dateIS'].substring(0, 4) }),
  );
  return (
    <View>
      <FlatList
        data={upcomingMovies}
        renderItem={({ item }) => (
          <NewMoviePreview {...{ ...item, navigate: () => navigate('Upcoming Movie', { id: item.id }) }} />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
};

UpcomingMovies.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default UpcomingMovies;
