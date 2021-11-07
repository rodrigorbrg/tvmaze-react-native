/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StatusBar } from 'react-native';
 import { Provider } from 'react-redux';
 import { NavigationContainer } from '@react-navigation/native';
 
 import Navigator from './src/navigation/Navigator';
 import Store from './src/store/storeConfig'
 
export const navigationRef = React.createRef();

export default App = () => {
  StatusBar.setBarStyle('light-content', false);

  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};
