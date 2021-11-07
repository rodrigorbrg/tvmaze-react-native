import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingTop: 4,
  },
  group: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  episodeName: {
    color: colors.secondary,
    fontSize: fonts.size.descrition,
    fontWeight: '600',
    textAlign: 'left',
    width: '100%',
  },
  airdate: {
    color: colors.secondary,
    fontSize: fonts.size.font12,
    fontWeight: '300',
    textAlign: 'left',
    width: '100%',
  },
  rating: {
    color: colors.secondary,
    fontSize: fonts.size.font12,
  },
});
