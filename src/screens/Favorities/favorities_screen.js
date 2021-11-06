/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import styles from './styles';

const Favorities = () => {
  // const navigation = useNavigation();
  // const favorities = useSelector(({ shows }) => shows.favorities);

  return (
    <View style={styles.sectionContainer}>
      {/* <FlatList
        data={favorities}
        keyExtractor={(item) => {
          return favorities.show.id;
        }}
        renderItem={({ item }) => (
          <Showitem {...item} />
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => onRefresh()} />
        }
      /> */}
    </View>
  );
};

export default Favorities;
