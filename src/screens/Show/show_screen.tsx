import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationRoute } from 'react-navigation';

import EpisodeGuide from './components/EpisodeGuide';
import { useShows } from '../../hooks/useShows';
import { Show } from '../../types/Shows';

import styles from './styles';


type Props = {
  route: NavigationRoute,
};

const ShowScreen: React.FC<Props> = ({
  route
}) => {
  const [show, setShow] = useState<Show>();
  const {
    loadEpisodes,
    loadCast,
    sections,
    cast,
    loadingEpisode,
    loadingCast,
  } = useShows();

  useEffect(() => {
    const showParam = route?.params?.show;
    setShow(showParam);
    loadEpisodes(showParam.id);
    loadCast(showParam.id);
  }, []);

  return (
    <View style={styles.container}>
      <EpisodeGuide
        {...show}
        sections={sections}
        cast={cast}
        loadingEpisode={loadingEpisode}
        loadingCast={loadingCast}
      />
    </View>
  );
};

export default ShowScreen;
