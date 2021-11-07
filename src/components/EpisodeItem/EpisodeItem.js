import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import colors from '../../styles/colors';

import styles from './styles';

function EpisodeItem({ episode, onPress }) {
  //loadingIndicatorSource defaultSource
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.episodeName}>{episode.name}</Text>
          <Text style={styles.airdate}>
            {moment(episode.airdate).format('MM/DD/YYYY')}
          </Text>
        </View>
        <Text style={styles.rating}>
          {'Rate ' + episode?.rating?.average}
          <Icon
            name={'star'}
            size={12}
            color={colors.positive}
          />
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default EpisodeItem;
