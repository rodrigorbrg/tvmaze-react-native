import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.gray3,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 8,
    marginHorizontal: 16,
    paddingTop: 8,
    width: '100%',
  },
  poster: {
    height: 80,
    width: 60,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  nameShow: {
    color: colors.secondary,
    fontSize: fonts.size.title,
    textAlign: 'left',
    marginStart: 10,
  },
  description: {
    color: colors.secondary,
    fontSize: fonts.size.descrition,
    textAlign: 'left',
    marginStart: 10,
  },
  favorite: {
    // alignContent: 'flex-end',
    // alignSelf: 'stretch',
  }
});
