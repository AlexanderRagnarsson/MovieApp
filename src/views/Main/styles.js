import { StyleSheet } from 'react-native';
import * as colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#73160d',
  },
  button: {
    paddingBottom: 10,
    // paddingLeft: 10,
    borderWidth: 4,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#d9d4d4',
    // backgroundColor: '#7d1409',
    // borderColor: colors.mericanPurple,
    alignItems: 'center',
  },
  text: {
    // color: colors.chili,
    paddingTop: 10,
    fontSize: 32,
  },
});
