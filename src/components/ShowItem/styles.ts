import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    flex: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 8,
    width: '100%'
  },
  description: {
    flex: 4
  },
  nameShow: {
    color: colors.white,
    fontSize: fonts.size.title,
    textAlign: 'left',
    marginStart: 10
  },
  genres: {
    color: colors.white,
    fontSize: fonts.size.descrition,
    textAlign: 'left',
    marginStart: 10
  },
  favorite: {
    flex: 1,
    padding: 8
  }
});
