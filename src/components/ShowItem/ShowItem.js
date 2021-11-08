import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../styles/colors';
import { addFavoriteShow, removeFavoriteShow } from '../../store/actions/shows';

import styles from './styles';

function ShowItem({ id, image, name, genres, premiered, ended, summary, onPress, iconAction }) {
  const dispatch = useDispatch();

  const addToFavorities = () => {
    const showObj = {
      id,
      image,
      name,
      genres,
      premiered,
      ended,
      summary
    }
    dispatch(addFavoriteShow(showObj));
  }

  const removeToFavorities = () => {
    dispatch(removeFavoriteShow(id));
  }

  const action = () => {
    switch (iconAction) {
      case 'add':
        addToFavorities();
        break;
      case 'remove':
        console.log('removing')
        removeToFavorities();
        break;
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.poster}
          resizeMode={'contain'}
          source={{
            uri: image?.medium,
          }}
        />
        <View style={styles.description}>
          <Text style={styles.nameShow}>{name}</Text>
          <Text style={styles.genres}>{genres.map(item => item + ' ' )}</Text>
        </View>
        <Icon
          onPress={action}
          style={styles.favorite}
          name={'star'}
          size={22}
          color={colors.neutral}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ShowItem;
