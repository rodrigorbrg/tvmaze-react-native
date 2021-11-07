import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import TVMaze from '../../services/tvmaze';
import colors from '../../styles/colors';

import styles from './styles';

function EpisodeItem({ episode }) {

  const selectEpisode = async (episode) => {
    const service = TVMaze();
    const [err, res] = await service.episodeDetails(episode.id, episode.season, episode.number);
  };

  return (
    <TouchableOpacity onPress={selectEpisode}>
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
    </TouchableOpacity>
  );
}

export default EpisodeItem;
