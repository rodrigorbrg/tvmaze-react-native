import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, ScrollView, Image } from 'react-native';
import { NavigationRoute } from 'react-navigation';

import { formatDate } from '../../utils/date';
import { Episode } from '../../types/Shows';

import styles from './styles';

type Props = {
  route: NavigationRoute;
};

const EpisodeScreen: React.FC<Props> = ({ route }) => {
  const [episode, setEpisode] = useState<Episode>({} as Episode);
  const [imageWidth, setImageWidth] = useState<number>();
  const [imageHeight, setImageHeight] = useState<number>();

  useEffect(() => {
    const ep: Episode = route?.params?.episode;
    setEpisode(ep);
    if (ep?.image?.original) {
      Image.getSize(ep?.image?.original, (width, height) => {
        const screenWidth = Dimensions.get('window').width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;
        setImageWidth(screenWidth);
        setImageHeight(imageHeight);
      });
    }
  }, [route?.params?.episode]);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      scrollEnabled
    >
      <View>
        <Image
          resizeMode={'contain'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: episode?.image?.original,
            width: imageWidth,
            height: imageHeight
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.nameShow}>{episode?.name}</Text>
        <Text style={styles.season}>{`Season ${episode?.season}`}</Text>
        <Text style={styles.number}>{`Episode ${episode?.number}`}</Text>
        <Text style={styles.aired}>{`Aired ${formatDate(
          episode.airdate
        )}`}</Text>
        <Text style={styles.summary}>{`Summary\n\n${episode?.summary}`}</Text>
      </View>
    </ScrollView>
  );
};

export default EpisodeScreen;
