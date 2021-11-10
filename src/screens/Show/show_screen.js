import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import TVMaze from '../../services/tvmaze';
import EpisodeGuide from './components/EpisodeGuide';

import styles from './styles';

const Show = ({ route }) => {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const showParam = route.params.show;
    setShow(showParam);
    const getAllEpisodes = async () => {
      const service = TVMaze();
      const [err, res] = await service.episodeList(showParam.id);
      if (res) {
        setEpisodes(res);
      }
    };
    getAllEpisodes();
  }, []);

  useEffect(() => {
    let seasonSection = [];
    if (episodes && show) {
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
  }, [episodes, show]);

  return (
    <View style={styles.container}>
      <EpisodeGuide {...show} sections={sections} />
    </View>
  );
};

export default Show;
