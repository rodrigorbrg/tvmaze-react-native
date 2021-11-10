import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, SectionList, FlatList, Image } from 'react-native';

import Cast from '../../../../components/Cast';
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
  cast,
}) {
  const [aired, setAired] = useState('');

  useEffect(() => {
    if (premiered && ended) {
      setAired(formatPeriodDate(premiered, ended));
    }
  }, [premiered, ended]);

  const _renderTopPage = useCallback(() => {
    return (
      <View style={styles.container}>
        <View style={styles.headerPage}>
          <Image
            resizeMode={'contain'}
            defaultSource={require('../../../../assets/images/default-movie.png')}
            source={{
              uri: image?.original,
              height: 200,
              width: 140,
            }}
          />
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
        <FlatList
          style={styles.cast}
          data={cast}
          removeClippedSubviews={true}
          horizontal={true}
          keyExtractor={({ person, character }) =>
            character.id.toString() + person.id.toString()
          }
          renderItem={({ item }) => <Cast {...item.person} />}
        />
      </View>
    );
  }, [cast, aired]);

  const _renderItem = useCallback(
    ({ item }) => {
      return <EpisodeItem showID={id} {...item}></EpisodeItem>;
    },
    [id]
  );

  const _keyExtractor = useCallback(({ id }) => id.toString(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.nameShow}>{name}</Text>
      <SectionList
        contentContainerStyle={styles.sectionContainer}
        style={styles.section}
        sections={sections}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderSectionHeader={({ section: { title } }) => {
          return <TitleSection title={title}></TitleSection>;
        }}
        ListHeaderComponent={_renderTopPage}
      />
    </View>
  );
}

export default EpisodeGuide;
