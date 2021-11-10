import React, { useState, useEffect } from 'react';
import {
  RefreshControl,
  View,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TVMaze from '../../services/tvmaze';
import ShowItem from '../../components/ShowItem';
import colors from '../../styles/colors';

import styles from './styles';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loadMoreShows = async () => {
    const service  = TVMaze();
    setLoading(true);
    const [err, res] = await service.allShows(page);
    setLoading(false);
    if (res) {
      setPage(page + 1);
      setShows(shows.concat(res));
    }
  };

  useEffect(() => {
    loadMoreShows();
  }, []);

  const selectShow = async (show) => {
    navigation.navigate('Show', { show });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShowItem
            {...item}
            onPress={() => selectShow(item)}
            iconAction={'add'}
          />
        )}
        onEndReached={loadMoreShows}
        onEndReachedThreshold={5}
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

export default Home;
