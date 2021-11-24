import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Login = () => {
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {}, []);

  return <View style={styles.container}></View>;
};

export default Login;
