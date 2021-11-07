import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Show from '../screens/Show';

import Favorities from '../screens/Favorities';
import colors from '../styles/colors';

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
      <Stack.Screen
        name='Show'
        component={Show}
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
    <Tab.Navigator
      initialRouteName='HomeStack'
      tabBarOptions={{
        activeTintColor: colors.secondary,
        allowFontScaling: false,
        style: { height: 80, backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Search',
          };
          return navigationOptions;
        }}
        name='HomeStack'
        component={HomeStack}
      />
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Favorities',
          };
          return navigationOptions;
        }}
        name='FavoriteStack'
        component={FavoriteStack}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
