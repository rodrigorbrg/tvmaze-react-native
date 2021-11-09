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
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/navigation/Navigator';
import { store, persistor } from './src/store/storeConfig';

export const navigationRef = React.createRef();

export default App = () => {
  StatusBar.setBarStyle('light-content', false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
