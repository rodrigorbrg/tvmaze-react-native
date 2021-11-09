import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const TitleSectionView = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TitleSectionView;
