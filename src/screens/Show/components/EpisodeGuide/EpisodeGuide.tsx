import React, { useCallback, useState, useEffect } from 'react';
import {
  Text,
  View,
  SectionList,
  FlatList,
  Image,
  RefreshControl
} from 'react-native';

import Cast from '../../../../components/Cast';
import EpisodeItem from '../../../../components/EpisodeItem';
import TitleSection from '../../../../components/TitleSection';
import { formatPeriodDate } from '../../../../utils/date';
import { CastType } from '../../../../types/Shows';
import colors from '../../../../styles/colors';

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
  loadingEpisode,
  loadingCast
}: {
  id?: number;
  name?: string;
  image?: {
    original: string;
    medium: string;
  };
  premiered?: string;
  ended?: string;
  genres?: string[];
  summary?: string;
  sections: any;
  cast: CastType[];
  loadingEpisode: boolean;
  loadingCast: boolean;
}) {
  const [aired, setAired] = useState('');

  useEffect(() => {
    setAired(formatPeriodDate(premiered, ended));
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
              width: 140
            }}
          />
          <View style={styles.description}>
            <Text
              ellipsizeMode={'tail'}
              numberOfLines={3}
              style={styles.genres}
            >
              {`Genres: \n ${genres?.toString() || ''}`}
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
          refreshControl={
            <RefreshControl
              refreshing={loadingCast}
              colors={[colors.primary]}
              progressBackgroundColor={colors.transparent}
              tintColor={colors.primary}
            />
          }
          keyExtractor={({ person, character }: CastType) =>
            `${character.id.toString()} ${person.id.toString()}`
          }
          renderItem={({ item }: { item: CastType }) => (
            <Cast {...item.person} />
          )}
        />
      </View>
    );
  }, [cast, genres, image?.original, loadingCast, summary, aired]);

  const _renderItem = useCallback(
    ({ item }) => {
      return <EpisodeItem showID={id} {...item}></EpisodeItem>;
    },
    [id]
  );

  const _keyExtractor = useCallback(
    ({ id }: { id: number }) => id.toString(),
    []
  );

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
        refreshControl={
          <RefreshControl
            refreshing={loadingEpisode}
            colors={[colors.primary]}
            progressBackgroundColor={colors.transparent}
            tintColor={colors.primary}
          />
        }
        ListHeaderComponent={_renderTopPage}
      />
    </View>
  );
}

export default EpisodeGuide;
