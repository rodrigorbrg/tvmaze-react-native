import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import EpisodeGuide from './components/EpisodeGuide';

import styles from './styles';

const Show = ({ route }) => {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setShow(route.params.show);
    setEpisodes(route.params.episodes);
  }, []);

  useEffect(() => {
    let seasonSection = [];
    console.log('EP', episodes);
    if (episodes) {
      episodes.map((episode) => {
        const season = seasonSection.find((section) => {
          return section.title === `Season ${episode.season}`;
        });
        if (season) {
          season.data.push(episode);
        } else {
          seasonSection.push({
            title: `Season ${episode.season}`,
            data: [episode],
          });
        }
      });
      setSections(seasonSection);
    }
  }, [episodes]);

  return (
    <View style={styles.container}>
      <EpisodeGuide show={show} sections={sections} />
    </View>
  );
};

export default Show;
