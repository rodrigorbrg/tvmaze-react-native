import React, { useCallback, useState, useEffect } from 'react';
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
  const { navigate } = useNavigation();

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
    navigate('Show', { show });
  };

  const _keyExtractor = useCallback((item) => item.show.id, []);

  const _renderItem = useCallback(
    ({ item }) => (
      <ShowItem
        {...item.show}
        onPress={() => selectShow(item.show)}
        iconAction={'add'}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <SearchBar choice={search} setChoice={setSearch} />
      <FlatList
        data={shows}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
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
