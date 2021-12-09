import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    padding: 5,
    width: winWidth,
  },
  name: {
    fontSize: 28,
    paddingVertical: 5,
  },
  description: {
    fontSize: 20,
    fontStyle: 'italic',
    paddingBottom: 10,
  },
  details: {
    fontSize: 18,
  },
  movieList: {
    paddingBottom: 50,
  },
});
