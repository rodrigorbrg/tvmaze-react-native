import React, { useState, useEffect } from 'react';
import { RefreshControl, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TVMaze from '../../services/tvmaze';
import SearchBar from '../../components/SeachBar';
import ShowItem from '../../components/ShowItem';
import colors from '../../styles/colors';

import styles from './styles';

const Search = () => {
  const [search, setSearch] = useState();
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (search) {
      const service = TVMaze();
      const queryShows = async () => {
        setLoading(true);
        const [err, res] = await service.searchShow(search);
        setLoading(false);
        if (res) {
          setShows(res);
        }
      };
      queryShows();
    }
  }, [search]);

  const selectShow = async (show) => {
    const service = TVMaze();

    const [err, res] = await service.episodeList(show.id);
    if (res) {
      navigation.navigate('Show', { show, episodes: res });
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar choice={search} setChoice={setSearch} />
      <FlatList
        data={shows}
        keyExtractor={(item) => item.show.id}
        renderItem={({ item }) => (
          <ShowItem
            {...item.show}
            onPress={() => selectShow(item.show)}
            iconAction={'add'}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            colors={[colors.primary]}
            progressBackgroundColor={colors.transparent}
            tintColor={colors.primary}
          />
        }
      />
    </View>
  );
};

export default Search;
