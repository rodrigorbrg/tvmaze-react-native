import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Movie from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Show from '../screens/Show';
import Episode from '../screens/Episode';

import Person from '../screens/Person';

import Search from '../screens/Search';

import Favorities from '../screens/Favorities';
import colors from '../styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getScreenOptions = () => {
  return {
    headerStyle: { backgroundColor: colors.card },
    headerTitleStyle: { color: colors.white }
  };
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={getScreenOptions()}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Person" component={Person} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={getScreenOptions()}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Person" component={Person} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorities"
      screenOptions={getScreenOptions()}
    >
      <Stack.Screen
        name="Favorities"
        component={Favorities}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Person" component={Person} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // headerStyle: { backgroundColor: colors.card, height: 80 },
        // headerTitle: 'TV Maze',
        // headerTitleStyle: { color: colors.white },
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.card },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white
      }}
    >
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Home',
            tabBarAccessibilityLabel: 'HomeTab',
            tabBarTestID: 'HomeTab',
            tabBarIcon: ({ focused }) => {
              return (
                <Movie
                  name={'movie'}
                  size={16}
                  color={focused ? colors.primary : colors.white}
                />
              );
            }
          };
          return navigationOptions;
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={({ route }) => {
          const navigationOptions = {
            tabBarLabel: 'Search',
            tabBarAccessibilityLabel: 'SearchTab',
            tabBarTestID: 'SearchTab',
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name={'search1'}
                  size={16}
                  color={focused ? colors.primary : colors.white}
                />
              );
            }
          };
          const routeName =
            route.state?.routes?.[route.state.index].name ?? route.name;
          if (routeName === 'Search') {
            navigationOptions.tabBarVisible = false;
          } else {
            navigationOptions.tabBarVisible = true;
          }
          return navigationOptions;
        }}
        name="SearchStack"
        component={SearchStack}
      />
      <Tab.Screen
        options={() => {
          const navigationOptions = {
            tabBarLabel: 'Favorities',
            tabBarAccessibilityLabel: 'FavoritiesTab',
            tabBarTestID: 'FavoritiesTab',
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name={'pushpin'}
                  size={16}
                  color={focused ? colors.primary : colors.white}
                />
              );
            }
          };
          return navigationOptions;
        }}
        name="FavoriteStack"
        component={FavoriteStack}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
