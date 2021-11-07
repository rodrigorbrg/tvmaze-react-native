import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

import { formatDate } from '../../utils/date';

import styles from './styles';

const Episode = ({ route }) => {
  const [episode, setEpisode] = useState({});

  useEffect(() => {
    setEpisode(route.params.episode);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{
            uri: episode?.image?.original,
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.nameShow}>{episode.name}</Text>
        <Text style={styles.season}>{`Season ${episode?.season}`}</Text>
        <Text style={styles.number}>{`Episode ${episode?.number}`}</Text>
        <Text style={styles.aired}>{`Aired ${formatDate(episode.airdate)}`}</Text>
        <Text style={styles.summary}>{`Summary\n\n${episode?.summary}`}</Text>
      </View>
    </View>
  );
};

export default Episode;
