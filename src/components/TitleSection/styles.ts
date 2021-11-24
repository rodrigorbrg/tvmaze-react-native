import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flex: 1,
    width: '100%'
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.font14
  }
});

export default styles;
