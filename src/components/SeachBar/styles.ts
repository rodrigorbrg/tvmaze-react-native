import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.background,
    borderBottomColor: colors.background,
    borderTopColor: colors.card,
    width: '100%'
  },
  inputContainerStyle: {
    backgroundColor: colors.card,
    borderRadius: 10
  },
  inputStyle: {
    backgroundColor: colors.card,
    color: colors.white,
    fontSize: fonts.size.font14
  }
});
