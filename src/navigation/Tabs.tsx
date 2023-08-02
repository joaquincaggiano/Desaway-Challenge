import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MoviesNavigator} from './MoviesNavigator';
import {SeriesNavigator} from './SeriesNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Movies" component={MoviesNavigator} />
      <Tab.Screen name="Series" component={SeriesNavigator} />
    </Tab.Navigator>
  );
};
