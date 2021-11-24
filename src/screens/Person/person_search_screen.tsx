import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { NavigationRoute } from 'react-navigation';

import TVMaze from '../../services/tvmaze';
import ShowIcon from '../../components/ShowIcon';
import { formatDate } from '../../utils/date';
import { Person, ShowReference } from '../../types/Shows';

import styles from './styles';

type Props = {
  route: NavigationRoute;
};

const PersonScreen: React.FC<Props> = ({ route }) => {
  const [person, setPerson] = useState<Person>();
  const [shows, setShows] = useState<ShowReference[]>([]);

  const getShows = async (id: number) => {
    const service = TVMaze();
    const [, res] = await service.castCredits(id);
    if (res) {
      setShows(res);
    }
  };

  useEffect(() => {
    const personParam: Person = route?.params?.person;
    setPerson(personParam);
    void getShows(personParam.id);
  }, [route?.params?.person]);

  return (
    <View style={styles.container}>
      <View style={styles.headerPage}>
        <Image
          style={styles.photo}
          resizeMode={'cover'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: person?.image?.original,
            height: 200,
            width: 140
          }}
        />
        <View style={styles.description}>
          <Text numberOfLines={3} style={styles.namePerson}>
            {person?.name}
          </Text>
          <Text style={styles.birthdate}>
            {`Birthday: ${formatDate(person?.birthday)}`}
          </Text>
        </View>
      </View>
      <Text style={styles.castLabel}> {'Filmography'}</Text>
      <FlatList
        style={styles.shows}
        data={shows}
        removeClippedSubviews={true}
        horizontal={true}
        keyExtractor={({ _links }) =>
          `${_links.show.href.toString()} ${_links.character.href.toString()}`
        }
        renderItem={({ item }) => <ShowIcon {...item} />}
      />
      <View style={styles.view}></View>
    </View>
  );
};

export default PersonScreen;
