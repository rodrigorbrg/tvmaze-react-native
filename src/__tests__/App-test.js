/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../../App';

describe('First test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    // renderer.create(<App />);
    const { toJSON } = render(
      <App/>
    );
  });

});

