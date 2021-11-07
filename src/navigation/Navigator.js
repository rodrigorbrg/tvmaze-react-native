import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
import Show from '../screens/Show';
import Episode from '../screens/Episode';

import Favorities from '../screens/Favorities';
import colors from '../styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTitleStyle: { color: colors.white },
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Show' component={Show} />
      <Stack.Screen name='Episode' component={Episode} />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Favorities'
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTitleStyle: { color: colors.white },
      }}
    >
      <Stack.Screen
        name='Favorities'
        component={Favorities}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={{
        headerStyle: { backgroundColor: colors.card, height: 80 },
        headerTitle: 'TV Maze',
        headerShown: false,
        headerTitleStyle: { color: colors.white },
        tabBarStyle: { backgroundColor: colors.card },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Search',
            tabBarIcon: ({ focused }) => {
              <Icon
                name={'search1'}
                size={14}
                color={focused ? colors.primary : colors.white}
              />;
            },
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
            tabBarIcon: ({ focused }) => {
              <Icon
                name={'pushpin'}
                size={14}
                color={focused ? colors.primary : colors.white}
              />;
            },
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
