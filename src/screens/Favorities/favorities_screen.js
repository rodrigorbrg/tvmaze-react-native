import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import styles from './styles';

const Favorities = () => {
  // const navigation = useNavigation();
  const favorities = useSelector(({ storage }) => storage.favorities);

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={favorities}
        keyExtractor={(item) => {
          return item.show.id;
        }}
        renderItem={({ item }) => (
          <ShowItem {...item} />
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => onRefresh()} />
        }
      /> */}
    </View>
  );
};

export default Favorities;
