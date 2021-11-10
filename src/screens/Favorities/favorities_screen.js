import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ShowItem from '../../components/ShowItem';

import styles from './styles';

const Favorities = () => {
  const { navigate } = useNavigation();
  const favorities = useSelector(({ storage }) => storage.favorities);

  const selectShow = async (show) => {
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
