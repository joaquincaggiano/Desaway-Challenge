import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MoviesScreen} from '../screens/MoviesScreen';
import {MovieDetails} from '../screens/MovieDetails';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams = {
  MoviesScreen: undefined;
  MovieDetails: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const MoviesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};
