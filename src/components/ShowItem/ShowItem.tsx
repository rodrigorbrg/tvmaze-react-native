import React, { memo } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  ToastAndroid,
  TouchableWithoutFeedback
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../styles/colors';
import { addFavoriteShow, removeFavoriteShow } from '../../store/actions/shows';

import styles from './styles';

function ShowItem({
  id,
  image,
  name,
  genres,
  premiered,
  ended,
  summary,
  onPress,
  iconAction
}: {
  id: number;
  image: {
    original: string;
    medium: string;
  };
  name: string;
  genres: string[];
  premiered: string;
  ended: string;
  summary: string;
  onPress: () => void;
  iconAction: string;
}) {
  const dispatch = useDispatch();

  const toastMsg = (msg: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        msg,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  const addToFavorities = () => {
    const showObj = {
      id,
      image,
      name,
      genres,
      premiered,
      ended,
      summary
    };
    dispatch(addFavoriteShow(showObj));
    toastMsg(`${name} added to favorites`);
  };

  const removeToFavorities = () => {
    dispatch(removeFavoriteShow(id));
    toastMsg(`${name} deleted from favorites`);
  };

  const action = () => {
    switch (iconAction) {
      case 'add':
        addToFavorities();
        break;
      case 'remove':
        removeToFavorities();
        break;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          resizeMode={'contain'}
          source={{
            uri: image?.medium,
            height: 80,
            width: 60
          }}
        />
        <View style={styles.description}>
          <Text style={styles.nameShow}>{name}</Text>
          <Text style={styles.genres}>{genres?.map((item) => item + ' ')}</Text>
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

export default memo(ShowItem);
