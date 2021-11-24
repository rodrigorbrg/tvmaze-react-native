import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    margin: 2,
    paddingTop: 8,
    width: 70
  },
  image: {
    height: 90,
    width: '100%'
  },
  name: {
    color: colors.white,
    fontSize: fonts.size.font12,
    textAlign: 'center',
    paddingVertical: 8
  }
});
