/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { useColorScheme } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { Colors } from 'react-native/Libraries/NewAppScreen';
 
 import Navigator from './src/navigation/Navigator';
 
export const navigationRef = React.createRef();

export default App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
};
