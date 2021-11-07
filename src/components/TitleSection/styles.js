import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    flex: 1,
    width: '100%',
  },
  content: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    width: '90%',
  },
  text: {
    color: colors.primary,
    fontSize: fonts.size.font14,
  },
});

export default styles;
