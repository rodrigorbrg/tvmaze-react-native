import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  headerPage: {
    height: '50%',
    flexDirection: 'row',
    width: '100%',
  },
  poster: {
    height: '100%',
    width: '50%',
  },
  nameShow: {
    color: colors.secondary,
    fontSize: fonts.size.title,
    textAlign: 'left',
    marginStart: 10,
    paddingVertical: 24,
  },
  summary: {
    color: colors.secondary,
    fontSize: fonts.size.font14,
    textAlign: 'left',
    width: '100%',
  },
  description: {
    color: colors.secondary,
    fontSize: fonts.size.font14,
    textAlign: 'left',
    marginStart: 10,
  },
  aired: {
    color: colors.secondary,
    fontSize: fonts.size.font12,
    marginStart: 10,
  },
  episodeGuide: {
    backgroundColor: colors.secondary,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    marginTop: 8,
  },
  guide: {
    color: colors.primary,
    fontSize: fonts.size.font16,
    padding: 16,
  }
});
