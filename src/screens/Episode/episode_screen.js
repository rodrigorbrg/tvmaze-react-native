import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Text, View, Image } from 'react-native';

import { formatDate } from '../../utils/date';

import styles from './styles';

const Episode = ({ route }) => {
  const [episode, setEpisode] = useState({});
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  useEffect(() => {
    const ep = route.params.episode;
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
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      scrollEnabled
    >
      <View>
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          resizeMode={'contain'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: episode?.image?.original,
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

export default Episode;
