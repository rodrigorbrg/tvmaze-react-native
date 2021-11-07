import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'flex-start'
  },
  banner: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  image: {
    width: '100%',
    flex: 1,
  },
  information: {
    flex: 1,
    paddingHorizontal: 20,
  },
  aired: {
    color: colors.white,
    fontSize: fonts.size.font12,
    marginTop: 16,
  },
  nameShow: {
    color: colors.white,
    fontSize: fonts.size.title,
    fontWeight: '600',
    textAlign: 'left',
  },
  number: {
    color: colors.primary,
    fontSize: fonts.size.descrition,
    textAlign: 'left',
  },
  season: {
    color: colors.primary,
    fontSize: fonts.size.descrition,
    textAlign: 'left',
  },
  summary: {
    color: colors.white,
    fontSize: fonts.size.font14,
    textAlign: 'left',
  },
});
