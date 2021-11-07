import React from 'react';
import { Text, View, SectionList } from 'react-native';

import TVMaze from '../../services/tvmaze';
import EpisodeItem from '../../components/EpisodeItem';
import TitleSection from '../../components/TitleSection';

import styles from './styles';

function EpisodeGuide({ sections }) {

  const selectEpisode = async (episode) => {
    const service = TVMaze();
    const [err, res] = await service.episodeDetails(episode.id, episode.season, episode.number);
  };

  return (
    <View>
      <View style={styles.episodeGuide}>
        <Text style={styles.guide}>{'Episode Guide'}</Text>
      </View>
      <SectionList
        renderItem={({ item, index, section }) => {
          return (
            <EpisodeItem episode={item} onPress={selectEpisode}></EpisodeItem>
          );
        }}
        renderSectionHeader={({ section: { title } }) => {
          return <TitleSection title={title}></TitleSection>;
        }}
        sections={sections}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
}

export default EpisodeGuide;
