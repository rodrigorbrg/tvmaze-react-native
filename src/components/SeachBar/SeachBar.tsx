import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar } from 'react-native-elements';
import { SearchBarBaseProps } from 'react-native-elements/dist/searchbar/SearchBar';

import colors from '../../styles/colors';

import styles from './styles';

function SeachBar({
  choice,
  setChoice
}: {
  choice: string;
  setChoice: (text: string) => void;
}) {
  const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;
  return (
    <SafeSearchBar
      platform="default"
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      // lightTheme
      onChangeText={(text: string) => setChoice(text)}
      value={choice}
      searchIcon={<Icon name={'search1'} size={23} color={colors.gray4} />}
      selectionColor={colors.primary}
    />
  );
}

export default SeachBar;
