import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    paddingTop: 8,
    flex: 1,
    width: '100%',
  },
  content: {
    alignSelf: 'center',
    backgroundColor: colors.card,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    width: '90%',
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.font14,
  },
});

export default styles;
