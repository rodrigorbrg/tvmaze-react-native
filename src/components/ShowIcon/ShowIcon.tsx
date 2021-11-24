import React, { useState, useEffect, memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import TVMaze from '../../services/tvmaze';
import { Show } from '../../types/Shows';

import styles from './styles';

function ShowIcon({ _links }: { _links: { show: { href: string } } }) {
  const [show, setShow] = useState<Show>();

  const getHref = async () => {
    const service = TVMaze();
    const [err, res] = await service.getHref(_links.show.href);
    if (res) {
      setShow(res);
    }
  };

  useEffect(() => {
    if (_links) {
      getHref();
    }
  }, [_links]);

  return (
    <TouchableOpacity key={show?.id}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          defaultSource={require('../../assets/images/default-movie.png')}
          source={{
            uri: show?.image?.medium
          }}
        />
        <Text style={styles.name}>{show?.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(ShowIcon);
