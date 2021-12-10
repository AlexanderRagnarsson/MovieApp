import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  poster: {
    height: 300,
    width: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
  },
  movieDetails: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: '#d9d4d4',
    margin: 5,
    padding: 10,
    borderWidth: 4,
    borderRadius: 10,
  },
  Image: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  year: {
    fontSize: 19,
  },
  genre: {
    fontSize: 16,
    paddingVertical: 2,
  },
  genres: {
    paddingTop: 10,
  },
});
