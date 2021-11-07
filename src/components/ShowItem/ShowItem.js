import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../styles/colors';

import styles from './styles';

function ShowItem({ image, name, genres, onPress }) {
  //loadingIndicatorSource defaultSource
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.poster}
          resizeMode={'contain'}
          source={{
            uri: image?.medium,
          }}
        />
        <View style={styles.description}>
          <Text style={styles.nameShow}>{name}</Text>
          <Text style={styles.genres}>{genres.map(item => item + ' ' )}</Text>
        </View>
        <Icon
          style={styles.favorite}
          name={'star'}
          size={22}
          color={colors.neutral}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ShowItem;
