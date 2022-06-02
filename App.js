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
import { ThemeProvider } from '@rodrigorbrg/my-ui-components';

import Navigator from './src/navigation/Navigator';
import { store, persistor } from './src/store/storeConfig';

export const navigationRef = React.createRef();

const theme = {
  colors: {
    primary: '#29b6f6',
    primary_variant: '#4FC2F7',
    secondary: '#F66A29',
    secondary_variant: '#F77E49',

    background: '#121212',

    // surface_primary: '#F9F9F9',
    // surface_secondary: '#E8E8E8',
    surface_primary: '#18181B',
    surface_secondary: '#27272A',
    error: '#E53935',

    text_on_brand_color: '#FFFFFF',
    text_primary: '#fff',
    text_secondary: '#A1A1AA',
    text_on_background: '#FFFFFF',
    text_on_surface: '#FFFFFF',
    text_on_error: '#FFFFFF',

    stroke: '#52525B'
  }
};

export default App = () => {
  StatusBar.setBarStyle('light-content', false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef}>
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};
