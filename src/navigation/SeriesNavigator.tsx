import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SeriesScreen} from '../screens/SeriesScreen';
import {SerieDetails} from '../screens/SerieDetails';
import { Serie } from '../interfaces/serieInterfaces';

export type RootStackParamsSerie = {
  SeriesScreen: undefined;
  SerieDetails: Serie;
};

const Stack = createStackNavigator<RootStackParamsSerie>();

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
