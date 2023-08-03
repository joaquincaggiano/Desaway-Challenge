import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MoviesNavigator} from './MoviesNavigator';
import {SeriesNavigator} from './SeriesNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 10 : 0,
          // marginTop: Platform.OS === 'ios' ? 10 : 0,
          fontSize: 16
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 90 : 80,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="videocam-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={SeriesNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="tv-outline" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
