import React, { useMemo, memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'react-navigation';

import TVMaze from '../../services/tvmaze';

import styles from './styles';

function Cast({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: {
    original: string,
    medium: string,
  };
}) {
  const { navigate } = useNavigation<NavigationScreenProp<any,any>>();

  const selectPerson = useMemo(
    () => async () => {
      const service = TVMaze();
      const [err, res] = await service.personDetails(id);
      if (res) {
        navigate('Person', { person: res });
      }
    },
    [id, navigate]
  );

  return (
    <TouchableOpacity key={id} onPress={selectPerson}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: image.medium,
          }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(Cast);
