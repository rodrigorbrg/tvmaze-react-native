import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar } from "react-native-elements";

import colors from '../../styles/colors';

import styles from './styles';

function SeachBar({ choice, setChoice }) {
  return (
    <SearchBar
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      lightTheme
      onChangeText={word => setChoice(word)}
      value={choice}
      searchIcon={<Icon name={'search1'} size={23} color={colors.gray4} />}
      selectionColor={colors.primary}
    />
  )
}

export default SeachBar;