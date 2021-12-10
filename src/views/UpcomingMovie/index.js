import React from 'react';
import {
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import PropTypes from 'prop-types';
import UpcomingMovieDetail from '../../components/UpcomingMovieDetails';
// import NewMovieDetail from '../../components/NewMovieDetails';

const UpcomingMovieView = ({ route }) => {
  const { id } = route.params;

  const upcomingMovie = useSelector(
    (state) => state.upcomingMovies,
  ).filter(
    (movie) => movie.id === id,
  )[0];

  const getTrailer = () => {
    const trailer = upcomingMovie.trailers[0];
    // console.log(trailer);
    if (trailer === undefined) { return null; }
    if (trailer.results === undefined || trailer.results.length === 0) { return null; }
    let { key } = trailer.results[0];
    const officialTrailers = trailer.results.filter((trailerItem) => trailerItem.name.toLowerCase().includes('official'));
    if (officialTrailers.length !== 0) { key = officialTrailers[0].key; }
    return (
      <YoutubePlayer
        height={300}
        // play
        videoId={key}
      />
    );
  };

  return (
    <ScrollView>
      <UpcomingMovieDetail
        {...upcomingMovie}
      />
      { getTrailer() }
    </ScrollView>
  );
};

UpcomingMovieView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default UpcomingMovieView;
