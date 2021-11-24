import React, { useCallback, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import ShowItem from '../../components/ShowItem';
import { Show } from '../../types/Shows';

import styles from './styles';

const Favorities: React.FC = () => {
  const navigation = useNavigation<NavigationScreenProp<any, any>>();
  const favorities = useSelector(
    ({ storage }: { storage: { favorities: Show[] } }) => storage.favorities
  );

  const selectShow = useCallback(
    (show: Show): void => {
      navigation.navigate('Show', { show });
    },
    [navigation]
  );

  const _keyExtractor = useMemo(() => (item: Show) => item.id.toString(), []);

  const _renderItem = useCallback(
    ({ item }: { item: Show }) => (
      <ShowItem
        {...item}
        onPress={(): void => selectShow(item)}
        iconAction={'remove'}
      />
    ),
    [selectShow]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorities}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default Favorities;
