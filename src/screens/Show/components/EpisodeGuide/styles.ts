import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    marginBottom: 8
  },
  cast: {
    flex: 1
  },
  section: {
    flex: 1
  },
  sectionContainer: {
    paddingBottom: 20
  },
  headerPage: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    marginBottom: 8
  },
  // poster: {
  //   height: 200,
  //   width: '40%',
  // },
  // image: {
  //   flex: 1,
  //   height: '100%',
  // },
  nameShow: {
    color: colors.white,
    fontSize: fonts.size.title,
    textAlign: 'left',
    paddingVertical: 16
  },
  summary: {
    color: colors.white,
    fontSize: fonts.size.font14,
    textAlign: 'left',
    marginBottom: 8,
    width: '100%'
  },
  genres: {
    color: colors.white,
    fontSize: fonts.size.font14,
    textAlign: 'left',
    marginStart: 8,
    marginTop: 8
  },
  description: {
    flex: 1
  },
  aired: {
    color: colors.white,
    fontSize: fonts.size.font12,
    marginStart: 8,
    marginTop: 16
  }
});
