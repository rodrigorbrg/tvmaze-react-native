import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  episodeGuide: {
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    marginTop: 16,
  },
  nameShow: {
    color: colors.white,
    fontSize: fonts.size.font28,
    textAlign: 'left',
  },
  section: {
    flexGrow: 1,
  },
  headerPage: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  poster: {
    height: 200,
    width: '40%',
  },
  image: {
    flex: 1,
    height: '100%',
  },
  nameShow: {
    color: colors.white,
    fontSize: fonts.size.title,
    textAlign: 'left',
    marginStart: 10,
    paddingVertical: 24,
  },
  summary: {
    color: colors.white,
    fontSize: fonts.size.font14,
    textAlign: 'left',
    width: '100%',
  },
  description: {
    color: colors.white,
    fontSize: fonts.size.font14,
    textAlign: 'left',
    marginStart: 8,
    marginTop: 8,
  },
  aired: {
    color: colors.white,
    fontSize: fonts.size.font12,
    marginStart: 8,
    marginTop: 16,
  },
});
