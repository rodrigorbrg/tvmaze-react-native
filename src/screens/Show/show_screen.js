import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import EpisodeGuide from './components/EpisodeGuide';
import { useShows } from '../../hooks/useShows';

import styles from './styles';

const Show = ({ route }) => {
  const [show, setShow] = useState(null);
  const { loadEpisodes, loadCast, sections, cast } = useShows();

  useEffect(() => {
    const showParam = route.params.show;
    setShow(showParam);
    loadEpisodes(showParam.id);
    loadCast(showParam.id);
  }, []);

  return (
    <View style={styles.container}>
      <EpisodeGuide {...show} sections={sections} cast={cast} />
    </View>
  );
};

export default Show;
