import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import EpisodeGuide from '../../components/EpisodeGuide';

import styles from './styles';

const Show = ({ route }) => {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [sections, setSections] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setShow(route.params.show);
    setEpisodes(route.params.episodes);
  }, []);

  useEffect(() => {
    let seasonSection = [];

    //{"id":9031,
    //"url":"https://www.tvmaze.com/episodes/9031/house-1x01-pilot",
    //"name":"Pilot",
    //"season":1,
    //"number":1,
    //"type":"regular",
    //"airdate":"2004-11-16",
    //"airtime":"21:00",
    //"airstamp":"2004-11-17T02:00:00+00:00",
    //"runtime":60,"rating":{"average":9},
    //"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_landscape/57/144510.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/57/144510.jpg"},"summary":"<p>Dr, Gregory House and his team take medical cases only after everyone else has failed to diagnose a patient. When a kindergarten teacher passes out in front of her class, House and his team use trial-and-error to figure out why she is slowly dying.</p>","_links":{"self":{"href":"https://api.tvmaze.com/episodes/9031"}}},
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
      <View style={styles.headerPage}>
        <Image
          style={styles.poster}
          resizeMode={'contain'}
          source={{
            uri: show?.image?.original,
          }}
        />
        <View>
          <Text style={styles.nameShow}>{show?.name}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {'Genres: \n' + show?.genres.map((element) => element)}
          </Text>
          <Text style={styles.aired}>{`${moment(show?.premiered).format(
            'YYYY'
          )} - ${moment(show?.ended).format('YYYY')} `}</Text>
        </View>
      </View>
      <Text style={styles.summary}>{show?.summary}</Text>
      <EpisodeGuide sections={sections}/>
    </View>
  );
};

export default Show;
