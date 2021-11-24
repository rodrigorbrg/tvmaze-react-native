import React, { useCallback, memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import TVMaze from '../../services/tvmaze';

import styles from './styles';

function Cast({
  id,
  name,
  image
}: {
  id: number;
  name: string;
  image: {
    original: string;
    medium: string;
  };
}) {
  const navigation = useNavigation<NavigationScreenProp<any, any>>();

  const selectPerson = useCallback(async () => {
    const service = TVMaze();
    const [, res] = await service.personDetails(id);
    if (res) {
      navigation.navigate('Person', { person: res });
    }
  }, [id, navigation]);

  return (
    <TouchableOpacity key={id} onPress={selectPerson}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: image.medium
          }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Cast);
