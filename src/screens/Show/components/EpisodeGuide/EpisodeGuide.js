import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, SectionList, FlatList, Image } from 'react-native';

import TVMaze from '../../../../services/tvmaze';
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
}) {
  const [aired, setAired] = useState('');
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (premiered && ended) {
      setAired(formatPeriodDate(premiered, ended));
    }
    getCast();
  }, [premiered, ended]);

  const getCast = useMemo(
    () => async () => {
      const service = TVMaze();
      const [err, res] = await service.castShow(id);
      if (res) {
        setCast(res);
      }
    },
    [id, setCast]
  );

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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameShow}>{name}</Text>
      <SectionList
        contentContainerStyle={styles.sectionContainer}
        style={styles.section}
        sections={sections}
        renderItem={({ item }) => {
          return <EpisodeItem showID={id} {...item}></EpisodeItem>;
        }}
        renderSectionHeader={({ section: { title } }) => {
          return <TitleSection title={title}></TitleSection>;
        }}
        ListHeaderComponent={_renderTopPage}
        keyExtractor={({ id, name }) => id.toString() + name.toString()}
      />
    </View>
  );
}

export default EpisodeGuide;
