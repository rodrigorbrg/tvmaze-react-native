import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default styles = StyleSheet.create({
  episodeGuide: {
    backgroundColor: colors.secondary,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    marginTop: 8,
  },
  guide: {
    color: colors.primary,
    fontSize: fonts.size.font16,
    padding: 16,
  }
});
