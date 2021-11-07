import React from 'react';
import { Text, View, SectionList, Image } from 'react-native';
import moment from 'moment';

import EpisodeItem from '../../../../components/EpisodeItem';
import TitleSection from '../../../../components/TitleSection';

import styles from './styles';

function EpisodeGuide({ show, sections }) {

  const _renderTopPage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.headerPage}>
          <View style={styles.poster}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{
                uri: show?.image?.original,
              }}
            />
          </View>
          <View>
            <Text numberOfLines={2} style={styles.description}>
              {'Genres: \n' + show?.genres.map((element) => element)}
            </Text>
            <Text style={styles.aired}>{`${moment(show?.premiered).format(
              'YYYY'
            )} - ${moment(show?.ended).format('YYYY')} `}</Text>
          </View>
        </View>
        <Text style={styles.summary}>{show?.summary}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.episodeGuide}>
        <Text style={styles.nameShow}>{'House'}</Text>
      </View>
      <SectionList
        renderItem={({ item }) => {
          return <EpisodeItem episode={item}></EpisodeItem>;
        }}
        renderSectionHeader={({ section: { title } }) => {
          return <TitleSection title={title}></TitleSection>;
        }}
        ListHeaderComponent={_renderTopPage}
        sections={sections}
        keyExtractor={({ id }) => id.toString()}
        styles={styles.section}
      />
    </View>
  );
}

export default EpisodeGuide;
