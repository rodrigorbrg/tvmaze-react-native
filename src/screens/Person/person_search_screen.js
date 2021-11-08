import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TVMaze from '../../services/tvmaze';
import Show from '../../components/Show';

import styles from './styles';

const Person = ({ route }) => {
  const [person, setPerson] = useState([]);
  const [shows, setShows] = useState([]);
  const navigation = useNavigation();

  const getShows = async (id) => {
    const service = TVMaze();
    const [err, res] = await service.castCredits(id);
    if (res) {
      setShows(res);
    }
  };

  useEffect(() => {
    setPerson(route.params.person);
    getShows(route.params.person.id);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerPage}>
        <View style={styles.photo}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            defaultSource={require('../../assets/images/default-movie.png')}
            source={{
              uri: person?.image?.original,
            }}
          />
        </View>
        <View>
          <Text style={styles.namePerson}>{person?.name}</Text>
          <Text style={styles.birthdate}>
            {`Birthday: ${person?.birthday}`}
          </Text>
        </View>
      </View>
      <Text style={styles.castLabel}> {'Filmography'}</Text>
      <FlatList
        style={styles.shows}
        data={shows}
        removeClippedSubviews={true}
        horizontal={true}
        keyExtractor={({ _links }) => _links.show.href.toString()}
        renderItem={({ item }) => <Show {...item} />}
      />
      <View style={styles.view}></View>
    </View>
  );
};

export default Person;
