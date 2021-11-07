import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../styles/colors';

import styles from './styles';

function ShowItem({ show, onPress }) {
  //loadingIndicatorSource defaultSource
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.poster}
          resizeMode={'contain'}
          source={{
            uri: show?.image?.medium,
            // width: 120,
            // height: 60,
          }}
          onPress={onPress}
        />
        <View>
          <Text style={styles.nameShow}>{show.name}</Text>
          <Text style={styles.description}>{show.genres}</Text>
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
