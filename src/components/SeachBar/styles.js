import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.primary,
    borderTopColor: colors.white,
    width: '100%',
  },
  inputContainerStyle: {
    backgroundColor: colors.white,
    borderRadius: 10
  },
  inputStyle: {
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: fonts.size.font14,
  }
})