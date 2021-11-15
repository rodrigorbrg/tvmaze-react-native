import React, { useCallback, useEffect } from 'react';
import { RefreshControl, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import ShowItem from '../../components/ShowItem';
import colors from '../../styles/colors';
import { Show } from '../../types/Shows';
import { useShows } from '../../hooks/useShows';

import styles from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation<NavigationScreenProp<any,any>>();
  const { loadMoreShows, loadingShow, shows } = useShows();

  useEffect(() => {
    loadMoreShows();
  }, []);

  const selectShow = async (show: Show) => {
    navigate('Show', { show });
  };

  const _renderItem = useCallback(
    ({ item }) => (
      <ShowItem {...item} onPress={() => selectShow(item)} iconAction={'add'} />
    ),
    []
  );

  const _keyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={shows}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        onEndReached={loadMoreShows}
        onEndReachedThreshold={5}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={11}
        refreshControl={
          <RefreshControl
            refreshing={loadingShow}
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
