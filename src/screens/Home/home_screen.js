import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TVMaze from '../../services/tvmaze';
import SearchBar from '../../components/SeachBar';
import ShowItem from '../../components/ShowItem';

import styles from './styles';

const Home = () => {
  const [search, setSearch] = useState();
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const navigation = useNavigation();

  const service = TVMaze();

  const loadMoreShows = async () => {
    const [err, res] = await service.allShows(page);
    if (res) {
      setPage(page + 1);
      setShows(shows.concat(res));
    }
  };

  useEffect(() => {
    loadMoreShows();
  }, []);

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
        data={shows}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShowItem {...item} onPress={() => selectShow(item)} />
        )}
        onEndReached={loadMoreShows}
        onEndReachedThreshold={5}
      />
    </View>
  );
};

export default Home;
