import React, { useMemo, memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import TVMaze from '../../services/tvmaze';
import colors from '../../styles/colors';

import styles from './styles';

function EpisodeItem({ showID, name, season, number, rating, airdate }) {
  const { navigate } = useNavigation();

  const selectEpisode = useMemo(
    () => async () => {
      const service = TVMaze();
      const [err, res] = await service.episodeDetails(showID, season, number);
      if (res) {
        navigate('Episode', { episode: res });
      }
    },
    [showID, season, number, navigate]
  );

  return (
    <TouchableOpacity onPress={selectEpisode}>
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.episodeName}>{name}</Text>
          <Text style={styles.airdate}>
            {moment(airdate).format('MM/DD/YYYY')}
          </Text>
        </View>
        {rating?.average ? (
          <Text style={styles.rating}>
            {'Rate ' + rating?.average}
            <Icon name={'star'} size={12} color={colors.positive} />
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default memo(EpisodeItem);
