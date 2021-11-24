import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { RefreshControl, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import TVMaze from '../../services/tvmaze';
import SearchBar from '../../components/SeachBar';
import ShowItem from '../../components/ShowItem';
import colors from '../../styles/colors';

import styles from './styles';
import { Show } from '../../types/Shows';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [shows, setShows] = useState<{ show: Show }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<NavigationScreenProp<any, any>>();

  useEffect(() => {
    if (search) {
      const service = TVMaze();
      const queryShows = async () => {
        setLoading(true);
        const [, res] = await service.searchShow(search);
        setLoading(false);
        if (res) {
          setShows(res);
        }
      };
      void queryShows();
    }
  }, [search]);

  const selectShow = useCallback(
    (show: Show) => {
      navigation.navigate('Show', { show });
    },
    [navigation]
  );

  const _keyExtractor = useMemo(
    () => (item: { show: Show }) => item.show.id.toString(),
    []
  );

  const _renderItem = useCallback(
    ({ item }: { item: { show: Show } }) => (
      <ShowItem
        {...item.show}
        onPress={() => selectShow(item.show)}
        iconAction={'add'}
      />
    ),
    [selectShow]
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
