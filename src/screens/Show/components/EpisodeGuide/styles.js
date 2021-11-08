import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
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
    marginBottom: 8,
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
    paddingVertical: 16,
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
    flexWrap: 'wrap',
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
