import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 8
  },
  group: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  episodeName: {
    color: colors.white,
    fontSize: fonts.size.descrition,
    fontWeight: '600',
    textAlign: 'left',
    width: '100%'
  },
  airdate: {
    color: colors.white,
    fontSize: fonts.size.font12,
    fontWeight: '300',
    textAlign: 'left',
    width: '100%'
  },
  rating: {
    color: colors.white,
    fontSize: fonts.size.font12
  }
});
