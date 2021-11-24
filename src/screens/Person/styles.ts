import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 4,
    paddingHorizontal: 20
  },
  headerPage: {
    // backgroundColor: colors.positive,
    flex: 2,
    flexDirection: 'row',
    width: '100%'
  },
  photo: {
    marginTop: 8
  },
  description: {
    flex: 1
  },
  namePerson: {
    color: colors.white,
    fontSize: fonts.size.title,
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'left'
  },
  birthdate: {
    color: colors.white,
    fontSize: fonts.size.descrition,
    textAlign: 'left',
    paddingHorizontal: 8
  },
  castLabel: {
    color: colors.white,
    fontSize: fonts.size.descrition,
    fontWeight: '600',
    textAlign: 'left'
  },
  shows: {
    flex: 1,
    width: '100%'
  },
  view: {
    flex: 1
  }
});
