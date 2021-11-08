import React, { useMemo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { pure } from 'recompose';

import TVMaze from '../../services/tvmaze';

import styles from './styles';

function Cast({ id, name, image }) {
  const { navigate } = useNavigation();

  const selectPerson = useMemo(
    () => async () => {
      const service = TVMaze();
      // const [err, res] = await service.episodeDetails(id);
      // if (res) {
      //   navigate('Person', { person: res });
      // }
    },
    [id]
  );

  return (
    <TouchableOpacity key={id} onPress={selectPerson}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: image?.medium,
          }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default pure(Cast);
