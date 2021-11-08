import React, { useState, useEffect } from 'react';
import { Text, View, SectionList, Image } from 'react-native';

import EpisodeItem from '../../../../components/EpisodeItem';
import TitleSection from '../../../../components/TitleSection';
import { formatPeriodDate } from '../../../../utils/date';

import styles from './styles';

function EpisodeGuide({
  id,
  name,
  image,
  premiered,
  ended,
  genres,
  summary,
  sections,
}) {
  const [aired, setAired] = useState('');

  useEffect(() => {
    if (premiered && ended) {
      setAired(formatPeriodDate(premiered, ended));
    }
  }, [premiered, ended]);

  const _renderTopPage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.headerPage}>
          <View style={styles.poster}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              defaultSource={require('../../../../assets/images/default-movie.png')}
              source={{
                uri: image?.original,
              }}
            />
          </View>
          <View>
            <Text
              ellipsizeMode={'tail'}
              numberOfLines={2}
              style={styles.description}
            >
              {'Genres: \n' + genres}
            </Text>
            <Text style={styles.aired}>{aired}</Text>
          </View>
        </View>
        <Text style={styles.summary}>{summary}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameShow}>{name}</Text>
      <SectionList
        renderItem={({ item }) => {
          return <EpisodeItem showID={id} {...item}></EpisodeItem>;
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
