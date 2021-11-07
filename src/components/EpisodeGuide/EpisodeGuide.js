import React from 'react';
import { Text, View, SectionList } from 'react-native';

import TVMaze from '../../services/tvmaze';
import EpisodeItem from '../../components/EpisodeItem';
import TitleSection from '../../components/TitleSection';

import styles from './styles';

function EpisodeGuide({ sections }) {

  return (
    <View>
      <View style={styles.episodeGuide}>
        <Text style={styles.guide}>{'Episode Guide'}</Text>
      </View>
      <SectionList
        renderItem={({ item }) => {
          return (
            <EpisodeItem episode={item}></EpisodeItem>
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
