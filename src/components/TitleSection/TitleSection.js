import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const TitleSectionView = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default TitleSectionView;
