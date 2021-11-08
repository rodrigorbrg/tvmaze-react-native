import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import TVMaze from '../../services/tvmaze';
import ShowItem from '../../components/ShowItem';

import styles from './styles';

const Favorities = () => {
  const navigation = useNavigation();
  const favorities = useSelector(({ storage }) => storage.favorities);

  const selectShow = async (show) => {
    const service = TVMaze();

    const [err, res] = await service.episodeList(show.id);
    if (res) {
      navigation.navigate('Show', { show, episodes: res });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorities}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => (
          <ShowItem {...item} onPress={() => selectShow(item)} iconAction={'remove'}/>
        )}
      />
    </View>
  );
};

export default Favorities;
