/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import App from '../../App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />);
});

// it('checks if Async Storage is used', async () => {
//   await asyncOperationOnAsyncStorage();

//   expect(AsyncStorage.getItem).toBeCalledWith('myKey');
// })
