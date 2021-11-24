import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.background,
    flexGrow: 1
  },
  container: {
    backgroundColor: colors.background
  },
  information: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    marginTop: 16
  },
  aired: {
    color: colors.white,
    fontSize: fonts.size.font12,
    marginTop: 16
  },
  nameShow: {
    color: colors.white,
    fontSize: fonts.size.title,
    fontWeight: '600',
    textAlign: 'left'
  },
  number: {
    color: colors.primary,
    fontSize: fonts.size.descrition,
    textAlign: 'left'
  },
  season: {
    color: colors.primary,
    fontSize: fonts.size.descrition,
    textAlign: 'left'
  },
  summary: {
    color: colors.white,
    fontSize: fonts.size.font16,
    textAlign: 'left',
    marginTop: 16
  }
});
