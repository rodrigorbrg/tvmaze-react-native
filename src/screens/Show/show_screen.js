import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

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
      { sections ? 
        <EpisodeGuide {...show} sections={sections} /> : null
      }
    </View>
  );
};

export default Show;
