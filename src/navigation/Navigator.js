import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorities from '../screens/Favorities';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName='Favorities'>
      <Stack.Screen
        name='Favorities'
        component={Favorities}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <Tab.Navigator initialRouteName='HomeStack'>
      <Tab.Screen name='HomeStack' component={HomeStack} />
      <Tab.Screen name='FavoriteStack' component={FavoriteStack} />
    </Tab.Navigator>
  );
};

export default Navigator;
