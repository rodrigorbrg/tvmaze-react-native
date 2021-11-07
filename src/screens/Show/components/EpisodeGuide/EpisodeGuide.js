import React, { useState, useEffect } from 'react';
import { Text, View, SectionList, Image } from 'react-native';

import EpisodeItem from '../../../../components/EpisodeItem';
import TitleSection from '../../../../components/TitleSection';
import { formatPeriodDate } from '../../../../utils/date'; 

import styles from './styles';

function EpisodeGuide({ show, sections }) {
  const [name, setName] = useState('');
  const [uriPoster, setUriPoster] = useState('');
  const [aired, setAired] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setName(show?.name);
    setUriPoster(show?.image?.original);
    setAired(formatPeriodDate(show?.premiered, show?.ended));
    setGenres(show?.genres?.map((element) => element));
  }, [show]);
  
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
                uri: uriPoster,
              }}
            />
          </View>
          <View>
            <Text numberOfLines={2} style={styles.description}>
              {'Genres: \n' + genres}
            </Text>
            <Text style={styles.aired}>{aired}</Text>
          </View>
        </View>
        <Text style={styles.summary}>{show?.summary}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameShow}>{name}</Text>
      <SectionList
        renderItem={({ item }) => {
          return <EpisodeItem showID={show.id} episode={item}></EpisodeItem>;
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
