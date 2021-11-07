import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import TVMaze from '../../services/tvmaze';
import SearchBar from '../../components/SeachBar';
import ShowItem from '../../components/ShowItem';

import styles from './styles';

const Home = () => {
  const [search, setSearch] = useState();
  const navigation = useNavigation();
  const [shows, setShows] = useState();

  useEffect(() => {
    if (search) {
      const qfs = async () => {
        const service = TVMaze();
        const [err, res] = await service.searchShow(search);
        setShows(res);
      };
      qfs();
    }
  }, [search]);

  const selectShow = async (show) => {
    const service = TVMaze();

    const [err, res] = await service.episodeList(show.id);
    navigation.navigate('Show', { show, episodes: res});
  };

  return (
    <View style={styles.container}>
      <SearchBar choice={search} setChoice={setSearch} />
      <FlatList
        data={shows}
        keyExtractor={(item) => item.show.id}
        renderItem={({ item }) => (
          <ShowItem show={item.show} onPress={() => selectShow(item.show)} />
        )}
      />
    </View>
  );
};

export default Home;
