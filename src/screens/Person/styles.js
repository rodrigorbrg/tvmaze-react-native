import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 4,
    paddingHorizontal: 20,
  },
  headerPage: {
    flex: 2,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  photo: {
    flex: 1,
    width: '40%',
  },
  image: {
    alignContent: 'flex-start',
    height: '100%',
  },
  namePerson: {
    color: colors.white,
    fontSize: fonts.size.title,
    textAlign: 'left',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  birthdate: {
    color: colors.white,
    fontSize: fonts.size.descrition,
    textAlign: 'left',
    paddingHorizontal: 8,
  },
  castLabel: {
    color: colors.white,
    fontSize: fonts.size.descrition,
    fontWeight: '600',
    textAlign: 'left',
  },
  shows: {
    flex: 1,
    width: '100%',
  },
  view: {
    flex: 1
  },
});