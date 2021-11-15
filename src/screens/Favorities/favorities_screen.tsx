import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import ShowItem from '../../components/ShowItem';
import { Show } from '../../types/Shows';

import styles from './styles';

const Favorities: React.FC = () => {
  const { navigate } = useNavigation<NavigationScreenProp<any,any>>();
  const favorities = useSelector(({ storage }: { storage: { favorities: Show[] }}) => storage.favorities);

  const selectShow = async (show: Show) => {
    navigate('Show', { show });
  };

  const _keyExtractor = useCallback((item) => item.id, []);

  const _renderItem = useCallback(
    ({ item }) => (
      <ShowItem
        {...item}
        onPress={() => selectShow(item)}
        iconAction={'remove'}
      />
    ),
    []
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
