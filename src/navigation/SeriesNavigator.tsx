import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SeriesScreen} from '../screens/SeriesScreen';
import {SerieDetails} from '../screens/SerieDetails';

const Stack = createStackNavigator();

export const SeriesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="SeriesScreen" component={SeriesScreen} />
      <Stack.Screen name="SerieDetails" component={SerieDetails} />
    </Stack.Navigator>
  );
};
